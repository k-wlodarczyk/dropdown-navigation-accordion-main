"use strict";

const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navMenuEl = document.querySelector(".nav-menu-list");
const navMenuItemEl = document.querySelector(".nav-menu-item");
const overlayEl = document.querySelector(".overlay");
const dropdownMenus = document.querySelectorAll(".dropdown");

const dropdownInitiators = document.querySelectorAll(
  ".nav-menu-item[dropdown-element]"
);

dropdownInitiators.forEach((item) => {
  const arrow = item.querySelector(".menu-item-arrow");
  const dropdownMenu = item.querySelector(".dropdown");

  item.addEventListener("click", function () {
    arrow.classList.toggle("menu-item-arrow-opened");
    dropdownMenu.classList.toggle("dropdown-opened");

    dropdownInitiators.forEach((otherDropdownInitiator) => {
      if (otherDropdownInitiator !== item) {
        const dropdownMenu = otherDropdownInitiator.querySelector(".dropdown");
        dropdownMenu.classList.remove("dropdown-opened");
      }
    });
  });
});

hamburgerBtn.addEventListener("click", function () {
  navMenuEl.classList.toggle("open");
  overlayEl.classList.toggle("active");
  if (navMenuEl.classList.contains("open")) {
    hamburgerIcon.src = "images/icon-close-menu.svg";
  } else {
    hamburgerIcon.src = "images/icon-menu.svg";
  }
});

overlayEl.addEventListener("click", function () {
  navMenuEl.classList.remove("open");
  overlayEl.classList.remove("active");
  hamburgerIcon.src = "images/icon-menu.svg";
});

document.addEventListener("click", function (e) {
  dropdownInitiators.forEach((dropdownInitiator) => {
    const dropdownChild = dropdownInitiator.querySelector(".dropdown");
    if (!dropdownInitiator.contains(e.target)) {
      dropdownChild.classList.remove("dropdown-opened");
    }
  });
});
