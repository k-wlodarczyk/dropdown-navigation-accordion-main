"use strict";

const dropdownElements = document.querySelectorAll(
  ".nav-menu-item[dropdown-element]"
);

dropdownElements.forEach((item) => {
  const arrow = item.querySelector(".menu-item-arrow");
  const dropdownMenu = item.querySelector(".dropdown");

  item.addEventListener("mouseenter", function () {
    arrow.classList.add("menu-item-arrow-opened");
    dropdownMenu.classList.add("dropdown-opened");
  });

  item.addEventListener("mouseleave", function () {
    arrow.classList.remove("menu-item-arrow-opened");
    dropdownMenu.classList.remove("dropdown-opened");
  });
});
