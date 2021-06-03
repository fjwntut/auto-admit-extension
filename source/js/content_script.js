var toggle;
var button_added;
var btn_text;
var btn_icon;

// Restore toggle state from background
function getToggle(){
    chrome.runtime.sendMessage({
        action: 'getToggle'
    },(response)=>{
        toggle = response.result
    })
    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) =>{
        if (msg.action == "toggle") {
            toggle = msg.value;
        }
        UpdateButton();
        console.log("Auto admit toggle by icon: "+toggle);
    });
}
getToggle();

setInterval(Update, 500);
function Update() {
    if(toggle == "on"){
        AutoClick();
    }
    if(!button_added){
        AddButton();
    }
}

function AutoClick() {
    for (let element of document.getElementsByTagName('span')) {
        if (element.innerHTML === chrome.i18n.getMessage("admitBtn")) {
            console.log('There is someone waiting to join this meeting, automatically admitting them...');
            element.click();
        }
    }
}

function AddButton(){
    var newBtn = document.createElement('button');
    newBtn.id = "auto-admit-button";

    var newImg = document.createElement('img');
    var newDiv = document.createElement('div');

    var newCSS = document.createElement("link");
    newCSS.type = "text/css";
    newCSS.rel = "stylesheet";
    newCSS.href = chrome.runtime.getURL("./res/btn.css");

    // Append to html
    for(let element of document.getElementsByTagName('button')){
        if (element.getAttribute("aria-label") == chrome.i18n.getMessage("addBeside")){
            if(!button_added){
                document.head.appendChild(newCSS);
                let sibling = element.parentNode.parentNode.parentNode.parentNode.parentNode;
                button_added = sibling.parentElement.insertBefore(newBtn,sibling);
                btn_icon = button_added.appendChild(newImg);
                btn_text = button_added.appendChild(newDiv);
                button_added.addEventListener("click",()=>{button_onclick()});
                UpdateButton();
            }
        }
    }
    
}

function button_onclick(){
    toggle = (toggle=="off")?"on":"off";
    UpdateButton();
}

function UpdateButton(){
    btn_icon.src = chrome.runtime.getURL("./res/button-"+toggle+".png");
    btn_text.innerHTML = chrome.i18n.getMessage("toggle"+toggle);
    button_added.classList.toggle('on', toggle=="on");
    chrome.runtime.sendMessage({
        action: 'setToggle',
        value: toggle
    });
    console.log("Auto admit "+toggle);
}

// Change icon color when tab active
sendState(true);
window.onfocus = () => {sendState(true);};
window.onblur = () => {sendState(false)};
function sendState(isActive) {
    chrome.runtime.sendMessage({
        action: 'updateIcon',
        value: isActive
    });
}
