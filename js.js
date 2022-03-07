if (document.referrer.match(/^https:\/\/www\.youtube\.com/) || true) {
  hide("overlayfull");
} else {
  show("overlayfull");
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
    "https://www.youtube.com/redirect?q=https://darkn3ss.com/abettertheater/";
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
