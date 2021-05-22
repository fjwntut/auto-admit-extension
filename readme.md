## Auto admit for Google meet

### Chrome Extension:
![](screenshot.png)
- <a href="https://github.com/fjwntut/auto-admit-extension/raw/3de76482ef4f40ac7c8c38c10f2995debafb374a/AutoAdmit.crx" Download>Download Auto Admit</a>
- Installation： Open [chrome://extensions/](chrome://extensions/) and drag the downloaded file to the window.
- When a meeting is started, the extension generates a button in the bottom bar. You could use the button to toggle auto admit on/off.
- This extension only work when the google meet tab is opened.

### Bookmarklet: 
- <a href="javascript:button_added = document.getElementById('auto-admit-div');var toggle;if(button_added == null){    Initialize();}else{    Toggle();}function Initialize(){    var newdiv = document.createElement('div');    newdiv.id = 'auto-admit-div';    newdiv.style.display = 'none';    button_added = document.body.appendChild(newdiv);    Toggle();    setInterval(Update, 500);}function Update() {    if(toggle){        for (let element of document.getElementsByTagName('span')) {            if (element.innerHTML === 'Admit') {                console.log('There is someone waiting to join this meeting, automatically admitting them...');                element.click();            }        }    }}function Toggle(){    button_added.classList.toggle('on');    toggle = button_added.classList.contains('on');    alert('Auto admit turned '+(toggle?'on':'off'))}">Auto Admit</a> 
- Installation： Drag the link above to your bookmark bar to use.
- To toggle Auto Admit on / off simply click the bookmark.
- The script only work when the google meet tab is opened.
 
### Github Repo
[fjwntut/auto-admit-extension: Auto admit extension for google meet](https://github.com/fjwntut/auto-admit-extension)
