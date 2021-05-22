# Auto admit for Google meet chrome extension
![](screenshot.png)
### Feature
- Generate a button to toggle auto admit
- This extension only work when the google meet tab is opened.
- <a href="https://github.com/fjwntut/auto-admit-extension/blob/3de76482ef4f40ac7c8c38c10f2995debafb374a/AutoAdmit.crx" Download>Download Chrome Extension</a>
- Bookmarklet: <a href="javascript:button_added = document.getElementById('auto-admit-div');var toggle;if(button_added == null){    Initialize();}else{    Toggle();}function Initialize(){    var newdiv = document.createElement('div');    newdiv.id = 'auto-admit-div';    newdiv.style.display = 'none';    button_added = document.body.appendChild(newdiv);    Toggle();    setInterval(Update, 500);}function Update() {    if(toggle){        for (let element of document.getElementsByTagName('span')) {            if (element.innerHTML === 'Admit') {                console.log('There is someone waiting to join this meeting, automatically admitting them...');                element.click();            }        }    }}function Toggle(){    button_added.classList.toggle('on');    toggle = button_added.classList.contains('on');    alert('Auto admit turned '+(toggle?'on':'off'))}">Auto Admit</a> Drag the link to your bookmark bar
