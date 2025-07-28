const btn = document.querySelector(".modeBtn");
let isDark = false;

btn.onclick = () => {
  document.body.style.color = isDark ? "black" : "white";
  isDark = !isDark;
};
