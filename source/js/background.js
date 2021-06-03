var toggle="on";
var active = "_inactive";
function updateExtState(isActive,isOn){
    // update icon
    chrome.browserAction.setIcon({
        path : {
            "19": "./res/icons_"+isOn+isActive+"/icon-16.png",
            "38": "./res/icons_"+isOn+isActive+"/icon-32.png",
        }
    });
    chrome.browserAction.setBadgeText({text: ""})
    //chrome.browserAction.setBadgeText({text: toggle})

}
chrome.browserAction.onClicked.addListener((tab) => {
   
    if(active == ""){
        switch (toggle) {
            case "off":
                toggle = "on";
                //chrome.browserAction.setBadgeBackgroundColor({color: "#00ac47"});
                break;
            case "on":
                toggle = "off";
                //chrome.browserAction.setBadgeBackgroundColor({color: "#2684fc"});
                break;
            default:
                break;
        }
        // send state to content_script
        chrome.tabs.query({
            active: true, currentWindow: true
        }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "toggle",
                value: toggle
            }, function(response) {});  
        });
    }
});
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "updateIcon") {
        active = msg.value?"":"_inactive";
        updateExtState(active, toggle);
    }
    else if (msg.action === "setToggle") {
        toggle = msg.value;
        updateExtState(active, toggle);
    }
    else if (msg.action === "getToggle") {
        sendResponse({result: toggle});
    }
});