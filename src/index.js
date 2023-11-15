import { initHome, initMenu, initContact } from "./page-load";
import "./style.css";

initHome();

const navBarEl = document.querySelector(".nav-bar ul");

navBarEl.childNodes[0].addEventListener("click", () => {
  initMenu();
});
navBarEl.childNodes[1].addEventListener("click", () => {
  initHome();
});
navBarEl.childNodes[2].addEventListener("click", () => {
  initContact();
});
