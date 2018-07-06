const HL_CLASSNAME = 'hlc--highlighting';
let prevDom;

const highlighter = e => {
  const srcElement = e.srcElement;
  if(prevDom) {
    prevDom.classList.remove(HL_CLASSNAME);
  }
  srcElement.classList.add(HL_CLASSNAME);
  prevDom = srcElement;
}

chrome.runtime.onMessage.addListener(message => {
  if (message === 'runHighlighter') {
    document.addEventListener('mouseover', highlighter, false);
    return;
  }

  if (message === 'stopHighlighter') {
    prevDom.classList.remove(HL_CLASSNAME);
    prevDom = null;
    document.removeEventListener('mouseover', highlighter, false);
    return;
  }
});
