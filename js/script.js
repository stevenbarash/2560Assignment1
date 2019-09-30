document
  .getElementsByClassName("night-mode-button")[0]
  .addEventListener("click", toggleNightMode());

var nightModeSet = true;
function toggleNightMode() {
  if (nightModeSet) {
    nightModeSet = false;
    document.getElementsByTagName("html")[0].style.cssText =
      "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;background:#fcfcfd";
    document.getElementsByTagName("body")[0].style.cssText =
      "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #0c0f11;padding-left: 10 %;padding-right: 10 %;height:100 %;font-family:'Rubik',sans-serif;";
    document.getElementsByTagName("nav")[0].style.cssText =
      "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;display: flex;justify-content:space-between;align-items:center;flex-direction:row;background-color: #fcfcfd;padding-top:10px;padding-left:10px;padding-right:10px;border-bottom:#0c0f11 2px solid;";

    for (
      var i = 0;
      i < document.getElementsByClassName("nav-item").length;
      i++
    ) {
      document.getElementsByClassName("nav-item")[i].style.cssText =
        "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #0c0f11;text-decoration: none;padding: 10px;";
    }
    document.getElementsByClassName("night-mode-button")[0].src =
      "../assets/sun.svg";
    document.getElementsByClassName("night-mode-button-home")[0].src =
      "./assets/sun.svg";
  } else {
    nightModeSet = true;

    document.getElementsByTagName("html")[0].style.cssText =
      "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;background:#0c0f11";
    document.getElementsByTagName("body")[0].style.cssText =
      "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #fcfcfd;padding-left: 10 %;padding-right: 10 %;height:100 %;font-family:'Rubik',sans-serif;";
    document.getElementsByClassName("night-mode-button")[0].src = "../";

    document.getElementsByTagName("nav")[0].style.cssText =
      "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;display: flex;justify-content:space-between;align-items:center;flex-direction:row;background-color: #0c0f11;padding-top:10px;padding-left:10px;padding-right:10px;border-bottom:#fcfcfd 2px solid;";
    document.getElementsByClassName("night-mode-button")[0].src =
      "../assets/moon.svg";
    document.getElementsByClassName("night-mode-button-home")[0].src =
      "./assets/moon.svg";

    for (
      var i = 0;
      i < document.getElementsByClassName("nav-item").length;
      i++
    ) {
      document.getElementsByClassName("nav-item")[i].style.cssText =
        "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #fcfcfd;text-decoration: none;padding: 10px;";
    }
  }
}

function toggleBorschtTheme() {
  document.getElementsByTagName("html")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;background:#72353d";
  document.getElementsByTagName("body")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #fcfcfd;padding-left: 10 %;padding-right: 10 %;height:100 %;font-family:'Rubik',sans-serif;";
  document.getElementsByTagName("nav")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;display: flex;justify-content:space-between;align-items:center;flex-direction:row;background-color: #fcfcfd;padding-top:10px;padding-left:10px;padding-right:10px;border-bottom:#0c0f11 2px solid;";

  for (var i = 0; i < document.getElementsByClassName("nav-item").length; i++) {
    document.getElementsByClassName("nav-item")[i].style.cssText =
      "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #0c0f11;text-decoration: none;padding: 10px;";
  }
}
function togglePlovTheme() {
  document.getElementsByTagName("html")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;background:#e9a447";
  document.getElementsByTagName("body")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #fcfcfd;padding-left: 10 %;padding-right: 10 %;height:100 %;font-family:'Rubik',sans-serif;";
  document.getElementsByTagName("nav")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;display: flex;justify-content:space-between;align-items:center;flex-direction:row;background-color: #fcfcfd;padding-top:10px;padding-left:10px;padding-right:10px;border-bottom:#0c0f11 2px solid;";

  for (var i = 0; i < document.getElementsByClassName("nav-item").length; i++) {
    document.getElementsByClassName("nav-item")[i].style.cssText =
      "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #0c0f11;text-decoration: none;padding: 10px;";
  }
}
function toggleHummusTheme() {
  document.getElementsByTagName("html")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;background:#F8E8AA";
  document.getElementsByTagName("body")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #0c0f11;padding-left: 10 %;padding-right: 10 %;height:100 %;font-family:'Rubik',sans-serif;";
  document.getElementsByTagName("nav")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;display: flex;justify-content:space-between;align-items:center;flex-direction:row;background-color: #fcfcfd;padding-top:10px;padding-left:10px;padding-right:10px;border-bottom:#0c0f11 2px solid;";

  for (var i = 0; i < document.getElementsByClassName("nav-item").length; i++) {
    document.getElementsByClassName("nav-item")[i].style.cssText =
      "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #0c0f11;text-decoration: none;padding: 10px;";
  }
}
function toggleBulgogiTheme() {
  document.getElementsByTagName("html")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;background:#542d2d";
  document.getElementsByTagName("body")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color:#fcfcfd;padding-left: 10 %;padding-right: 10 %;height:100 %;font-family:'Rubik',sans-serif;";
  document.getElementsByTagName("nav")[0].style.cssText =
    "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;display: flex;justify-content:space-between;align-items:center;flex-direction:row;background-color: #fcfcfd;padding-top:10px;padding-left:10px;padding-right:10px;border-bottom:#0c0f11 2px solid;";

  for (var i = 0; i < document.getElementsByClassName("nav-item").length; i++) {
    document.getElementsByClassName("nav-item")[i].style.cssText =
      "transition: cubic-bezier(0.075, 0.82, 0.165, 1);transition-duration: 1s;color: #0c0f11;text-decoration: none;padding: 10px;";
  }
}
