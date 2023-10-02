var el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", openInNewTab, false);
else if (el.attachEvent)
    el.attachEvent('onclick', openInNewTab);

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}
