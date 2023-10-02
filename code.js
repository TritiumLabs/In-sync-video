var el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", openInNewTab, false);
else if (el.attachEvent)
    el.attachEvent('onclick', openInNewTab);

function openInNewTab() {
  window.open('https://www.youtube.com/watch?v=D3GOh7FLDbA', '_blank').focus();
}
