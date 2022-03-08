//If screen larger than x then in full screen
if (
  document.referrer.match(/^https:\/\/www\.youtube\.com/) ||
  window.innerWidth > 1000
) {
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

function openEditModal() {
  if (!localStorage.getItem("hidden")) {
    localStorage.setItem("hidden", "[]");
  }
  var hiddenItems = JSON.parse(localStorage.getItem("hidden"));
  console.log(hiddenItems);

  for (const obj of baseServices.reverse()) {
    var isChecked = hiddenItems.includes(obj["image"]);

    document
      .getElementById("serviceItems")
      .insertAdjacentHTML(
        "afterbegin",
        `<input type="checkbox" id="${obj["image"]}" name="${
          obj["image"]
        }" value="${obj["image"]}" onclick="hideService(this);" ${
          isChecked && "checked"
        } /><label for="${obj["image"]}"> ${obj["name"]}</label><br />`
      );
  }

  show("editModal");
}

function hideService(service) {
  var hiddenItems = JSON.parse(localStorage.getItem("hidden"));
  if (service.checked) {
    hiddenItems.push(service.value);
  } else {
    hiddenItems = hiddenItems.filter((x) => x !== service.value);
  }
  localStorage.setItem("hidden", JSON.stringify(hiddenItems));

  console.log(hiddenItems);
}

function hide(e) {
  document.getElementById(e).style.display = "none";
}
function show(e) {
  document.getElementById(e).style.display = "block";
}

function hideTest() {
  var hiddenItems = ["plex", "skygo"];
  localStorage.setItem("hidden", JSON.stringify(hiddenItems));

  console.log(hiddenItems);
}
