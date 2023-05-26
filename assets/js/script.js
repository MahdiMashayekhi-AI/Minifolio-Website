const $ = document;

let menuBtn = $.querySelector("#menu-button");
let headerOverlay = $.querySelector("#header-overlay");

menuBtn.addEventListener("click", function (e) {
  headerOverlay.classList.toggle("opacity-0");
  headerOverlay.classList.toggle("invisible");
  menuBtn.classList.toggle("active");
  $.querySelector("body").classList.toggle("overflow-hidden");
});

let Accordion = $.querySelectorAll(".accordion");
let AccordionIcons = $.querySelectorAll(".accordion-icon");

for (let i = 0; i < Accordion.length; i++) {
  Accordion[i].addEventListener("click", function () {
    let AccBox = Accordion[i].nextElementSibling;
    AccBox.classList.toggle("hidden");
    AccordionIcons[i].classList.toggle("rotate-[135deg]")
  });
}
