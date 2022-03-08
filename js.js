var country = "Loading";
if (
  document.referrer.match(/^https:\/\/www\.youtube\.com/) ||
  window.innerWidth === 1111
) {
  hide("overlayfull");
} else {
  show("overlayfull");
}

if (!navigator.userAgent.includes("Tesla")) {
  show("teslaBrowser");
}
getIPDetails();

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

function loading(url, geo) {
  if (geo && country !== "NZ") {
    show("geoModal");
  } else {
    show("shadow");
    location.href = url;
  }
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

function getIPDetails() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      country = JSON.parse(xhttp.responseText).country_code;
      console.log(country);
    }
  };
  xhttp.open("GET", "https://ip-api.io/json/", true);
  xhttp.send();
}

function hide(e) {
  document.getElementById(e).style.display = "none";
}
function show(e) {
  document.getElementById(e).style.display = "block";
}
