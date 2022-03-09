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
    closeDialog("overlay");
    showDialog("shadow");
    location.href = node.value;
  }
});

function goFullScreen() {
  location.href = `https://www.youtube.com/redirect?q=https://${document.location.host}`;
}

function showOverlay() {
  showDialog("overlay");
  node.focus();
  node.setSelectionRange(200, 200);
}

function loading(url, geo) {
  if (geo && country !== "NZ") {
    showDialog("geoModal");
  } else {
    showDialog("shadow");
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

  showDialog("editModal");
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
      country = JSON.parse(xhttp.responseText).country;
    }
  };
  xhttp.open("GET", "https://country.abettertheater.nz/", true);
  xhttp.send();
}

const showDialog = (element) => {
  show(element);
  document.getElementById(element).classList.add("show");
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
};

const closeDialog = (element) => {
  hide(element);
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  document.getElementById(element).classList.remove("show");
};
window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});

function hide(e) {
  document.getElementById(e).style.display = "none";
}
function show(e) {
  document.getElementById(e).style.display = "block";
}
