'use strict';

let changeColor = document.getElementById('changeColor');

let on = false;

changeColor.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, `${on ? 'stop' : 'run'}Highlighter`);
    on = !on;
  });
};
