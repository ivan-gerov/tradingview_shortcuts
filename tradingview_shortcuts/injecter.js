var s = document.createElement('script');
s.src = chrome.runtime.getURL('shortcuts_script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s)