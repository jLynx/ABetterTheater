if (document.referrer.match(/^https:\/\/www\.youtube\.com/)) {
  hide("overlayfull");
} else {
  show("overlayfull");
}
if (!navigator.userAgent.includes("Tesla")) {
  show("teslaBrowser");
}

const node = document.getElementById("path");
node.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    hide("overlay");
    show("shadow");
    location.href = node.value;
  }
});

function goFullScreen() {
  location.href =
    "https://www.youtube.com/redirect?q=https://abettertheater.nz/";
}

function showOverlay() {
  show("overlay");
  node.focus();
  node.setSelectionRange(200, 200);
}

function loading() {
  show("shadow");
}

function hide(e) {
  document.getElementById(e).style.display = "none";
}
function show(e) {
  document.getElementById(e).style.display = "block";
}
