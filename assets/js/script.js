const $ = document;

let menuBtn = $.querySelector("#menu-button");
let headerOverlay = $.querySelector("#header-overlay");

menuBtn.addEventListener("click", function (e) {
  headerOverlay.classList.toggle("opacity-0");
  headerOverlay.classList.toggle("invisible");
  menuBtn.classList.toggle("active");
  $.querySelector("body").classList.toggle("overflow-hidden");
});
