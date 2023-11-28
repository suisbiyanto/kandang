// Dark theme localstorage
const lightIcon = document.querySelector(".swap-on");
const darkIcon = document.querySelector(".swap-off");
const toggle = document.getElementById("toggleTheme");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.checked = true;
    return;
  }
  toggle.checked = false;
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    return;
  }
  document.documentElement.classList.add("dark");
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
};

lightIcon.addEventListener("click", () => {
  themeSwitch();
});

darkIcon.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();
//

// const value = document.getElementById("value");
// const valueMq7 = document.getElementById("value-mq7");
// const valueMq8 = document.getElementById("value-mq8");
// const toogle = document.getElementById("toggle");
// const speed = document.getElementById("speed");
// const fanLogo = document.getElementById("fan-logo");
var notification = document.getElementById("notification");
notification.style.display = "none";

// const url = "https://kandangapp-bed0f-default-rtdb.asia-southeast1.firebasedatabase.app/kandangapp-bed0f.json";

// var api = {};

// setInterval(() => {
//   fetch(url)
//     .then((hasil) => hasil.json())
//     .then((res) => {
//       api = res;
//       // console.log(api);
//       //valueMq8.innerHTML = api.sensor1.mq8.toFixed(2).toString() + "V";
//       valueMq7.innerHTML = api.Node_2.toFixed(2).toString() + "";
//       if (api.Node_2 > 1) {
//         notification.style.display = "block";
//       } else {
//         notification.style.display = "none";
//       }
//       if (api.Node_1 == 1) {
//         value.innerHTML = "ON";
//         toogle.checked = true;
//       } else {
//         value.innerHTML = "OFF";
//         toogle.checked = false;
//       }
//     });
// }, 1000);
