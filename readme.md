## Auto admit for Google meet

### Chrome Extension:
![](screenshot.png)
- ONLY support chinese traditional and english! Please add issues to let me know if you need any other language supported.
- Make sure that your browser and google meet ui is both set to ZH-TW/EN otherwise the extension will not work.
- <a href="https://github.com/fjwntut/auto-admit-extension/raw/main/AutoAdmit.zip" Download>Download Auto Admit</a>
- Installation： 
    1. Extract the zip
    2. Go to [chrome://extensions/](chrome://extensions/)
    3. open developer mode
    4. load unpack.
- When a meeting is started, the extension generates a button in the bottom bar. You could use the button to toggle auto admit on/off.
- This extension only work when the google meet tab is opened.

### Bookmarklet: 
- English: <a href="javascript:button_added = document.getElementById('auto-admit-div');var toggle;if(button_added == null){    Initialize();}else{    Toggle();}function Initialize(){    var newdiv = document.createElement('div');    newdiv.id = 'auto-admit-div';    newdiv.style.display = 'none';    button_added = document.body.appendChild(newdiv);    Toggle();    setInterval(Update, 500);}function Update() {    if(toggle){        for (let element of document.getElementsByTagName('span')) {            if (element.innerHTML === 'Admit') {                console.log('There is someone waiting to join this meeting, automatically admitting them...');                element.click();            }        }    }}function Toggle(){    button_added.classList.toggle('on');    toggle = button_added.classList.contains('on');    alert('Auto admit turned '+(toggle?'on':'off'))}">Auto Admit</a> 
- Chinese: <a href="javascript:button_added = document.getElementById('auto-admit-div');var toggle;if(button_added == null){    Initialize();}else{    Toggle();}function Initialize(){    var newdiv = document.createElement('div');    newdiv.id = 'auto-admit-div';    newdiv.style.display = 'none';    button_added = document.body.appendChild(newdiv);    Toggle();    setInterval(Update, 500);}function Update() {    if(toggle){        for (let element of document.getElementsByTagName('span')) {            if (element.innerHTML === '接受') {                console.log('There is someone waiting to join this meeting, automatically admitting them...');                element.click();            }        }    }}function Toggle(){    button_added.classList.toggle('on');    toggle = button_added.classList.contains('on');    alert('Auto admit turned '+(toggle?'on':'off'))}">Auto Admit</a> 
- Installation： Drag the link above to your bookmark bar to use.
- To toggle Auto Admit on / off simply click the bookmark.
- The script only work when the google meet tab is opened.
 
### Github Repo
[fjwntut/auto-admit-extension: Auto admit extension for google meet](https://github.com/fjwntut/auto-admit-extension)
