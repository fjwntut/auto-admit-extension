var toggle="off";
var active = "_inactive";
function updateExtState(isActive,isOn){
    // update icon
    chrome.browserAction.setIcon({
        path : {
            "19": "./res/icons_"+isOn+isActive+"/icon-16.png",
            "38": "./res/icons_"+isOn+isActive+"/icon-32.png",
        }
    });

    // send state to content_script
    if(active == ""){
        chrome.tabs.query({
            active: true, currentWindow: true
        }, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "toggle",
                value: toggle
            }, function(response) {});  
        });
    }
}
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "updateIcon") {
        active = msg.value?"":"_inactive";
        updateExtState(active, toggle);
        //sendResponse({result: toggle});
    }
});
chrome.browserAction.onClicked.addListener((tab) => {
    chrome.browserAction.setBadgeText({text: ""});
    
    switch (toggle) {
        case "off":
            toggle = "on";
            //chrome.browserAction.setBadgeBackgroundColor({color: "#00ac47"});
            break;
        case "on":
            toggle = "off";
            //chrome.browserAction.setBadgeBackgroundColor({color: "#2684fc"});
            break;
        case "once":
            toggle = "off";
            //chrome.browserAction.setBadgeBackgroundColor({color: "#959595"});
            break;
        
        default:
            break;
    }
    updateExtState(active, toggle);
    //chrome.browserAction.setBadgeText({text: toggle});

});