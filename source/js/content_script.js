var toggle;
var button_added;
var btn_text;
var btn_icon;
function autoAdmit() {
    if(toggle){
        for (let element of document.getElementsByTagName('span')) {
            if (element.innerHTML === 'Admit') {
                console.log('There is someone waiting to join this meeting, automatically admitting them...');
                element.click();
            }
        }
    }
    if(!button_added){
        addButton();
    }
}
function addButton(){
    var newImg = document.createElement('img');
    newImg.src = chrome.runtime.getURL("./res/button-"+toggle+".png");
    newImg.width = 24;
    newImg.height = 24;
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "Auto Admit "+(toggle?"on":"off");
    var newBtn = document.createElement('button');
    newBtn.id = "auto-admit-button";
    var newCSS = document.createElement("link");
    newCSS.type = "text/css";
    newCSS.rel = "stylesheet";
    newCSS.href = chrome.runtime.getURL("./res/btn.css");
    for(let element of document.getElementsByTagName('div')){
        if (element.getAttribute("aria-label") == "Raise hand"){
            if(!button_added){
                let parent = element.parentElement.parentElement;
                button_added = parent.parentElement.insertBefore(newBtn, parent);
                btn_icon = button_added.appendChild(newImg);
                btn_text = button_added.appendChild(newDiv);
                console.log(newCSS.href)
                document.head.appendChild(newCSS);
                button_added.addEventListener("click",()=>{button_onclick()});
            }
        }
    }
    
}
function button_onclick(){
    toggle = (toggle=="off")?"on":"off";
    btn_icon.src = chrome.runtime.getURL("./res/button-"+toggle+".png");
    btn_text.innerHTML = "Auto Admit "+toggle;
    console.log("Auto admit "+toggle);
}
function sendState(isActive) {
    chrome.runtime.sendMessage({
        action: 'updateIcon',
        value: isActive
    });
}
sendState(true);
window.onfocus = () => {sendState(true);};
window.onblur = () => {sendState(false)};
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) =>{
    if (msg.action == "toggle") {
        toggle = msg.value;
    }
    console.log("Auto admit toggle: "+toggle);
});
setInterval(autoAdmit, 500);