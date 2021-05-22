var toggle;
function autoAdmit() {
    for (let element of document.getElementsByTagName('span')) {
        if (element.innerHTML === 'Admit') {
            console.log('There is someone waiting to join this meeting, automatically admitting them...');
            element.click();
        }
    }
}
function sendState(isActive) {
    chrome.runtime.sendMessage({
        action: 'updateIcon',
        value: isActive
    });
}
sendState(true);
window.onfocus = () => {sendState(true)};
window.onblur = () => {sendState(false)};
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) =>{
    if (msg.action == "toggle") {
        toggle = msg.value;
    }
    console.log("Auto admit toggle: "+toggle);
});
setInterval(autoAdmit, 500);