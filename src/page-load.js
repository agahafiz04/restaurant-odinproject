let content = document.querySelector("#content");
console.log(content);

initialHeader();
initialMain();
initialFooter();

let main = document.querySelector(".main");
console.log(main);

import galleryOne from "./assets/banner/banner1.jpg";
import galleryTwo from "./assets/banner/banner2.jpg";
import galleryThree from "./assets/banner/banner3.jpg";
import galleryFour from "./assets/banner/banner4.jpg";
import imgMenuOne from "./assets/donuts-list-splitted/image1x1.png";
import imgMenuTwo from "./assets/donuts-list-splitted/image1x2.png";
import imgMenuThree from "./assets/donuts-list-splitted/image1x3.png";
import imgMenuFour from "./assets/donuts-list-splitted/image2x1.png";
import imgMenuFive from "./assets/donuts-list-splitted/image2x2.png";
import imgMenuSix from "./assets/donuts-list-splitted/image2x3.png";

// Export Init
export function initHome() {
  removeContent();
  changeContent("Home");
  changeHeader("Home");
  initialHomeContentOne();
  initialHomeContentTwo();
}

export function initMenu() {
  removeContent();
  changeContent("Menu");
  changeHeader("Menu");
  initialDescriptionContainer();
  initialMenuContainer();
}

export function initContact() {
  removeContent();
  changeContent("Contact");
  changeHeader("Contact");
  initialContactContainer();
  initialForm();
}

// Auto Content
export function initialHeader() {
  const header = document.createElement("div");
  const navBar = document.createElement("div");
  const navBarUl = document.createElement("ul");

  for (let i = 0; i < 3; i++) {
    const navBarLi = document.createElement("li");
    navBarUl.appendChild(navBarLi);
  }

  header.classList.add("header");
  navBar.classList.add("nav-bar");

  navBarUl.childNodes[0].textContent = "Menu";
  navBarUl.childNodes[1].textContent = "Home";
  navBarUl.childNodes[2].textContent = "Contact";

  content.append(header);
  header.append(navBar);
  navBar.append(navBarUl);
}

export function initialMain() {
  const main = document.createElement("div");
  main.classList.add("main");

  content.append(main);
}

export function initialFooter() {
  const footer = document.createElement("div");
  const p = document.createElement("p");

  footer.classList.add("footer");
  p.innerHTML = "Copyright&copy; agahafiz04";

  content.append(footer);
  footer.append(p);
}

function removeContent() {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

function changeHeader(pages) {
  const navBarUl = document.querySelector("ul");

  navBarUl.childNodes.forEach((el) => {
    el.classList.remove("border-bottom");
  });

  switch (pages) {
    case "Menu":
      navBarUl.childNodes[0].classList.add("border-bottom");
      break;
    case "Home":
      navBarUl.childNodes[1].classList.add("border-bottom");
      break;
    case "Contact":
      navBarUl.childNodes[2].classList.add("border-bottom");
      break;

    default:
      break;
  }
}

function changeContent(pages) {
  switch (pages) {
    case "Home":
      content.setAttribute("class", "index");
      break;
    case "Menu":
      content.setAttribute("class", "menu");
      break;
    case "Contact":
      content.setAttribute("class", "contact");
      break;
    default:
      break;
  }
}

// Homepage Content
function initialHomeContentOne() {
  const contentOne = document.createElement("div");
  const textContainer = document.createElement("div");
  const h2One = document.createElement("h2");
  const h2Two = document.createElement("h2");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const button = document.createElement("button");

  contentOne.classList.add("content-1");
  textContainer.classList.add("text-container");

  h2One.textContent = "Do you want to taste a delicious donut ?";
  h2Two.textContent = "The best donut shop that you ever find";
  h1.textContent = "Say no more!";
  p.textContent =
    "A meal designed to be explored and experienced in the moment.";
  button.textContent = "Learn More";

  main.append(contentOne);
  contentOne.append(textContainer);
  textContainer.append(h2One, h1, h2Two, p, button);
}

function initialHomeContentTwo() {
  const contentTwo = document.createElement("div");
  const textContainer = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const button = document.createElement("button");

  const gallery = document.createElement("div");

  for (let i = 0; i < 4; i++) {
    const img = document.createElement("img");
    gallery.append(img);
  }

  contentTwo.classList.add("content-2");
  textContainer.classList.add("text-container");
  gallery.classList.add("gallery");

  h1.textContent = "Indonesia";
  h2.innerHTML = "10890 kyt park. <br />anything street <br />P:14023";
  pOne.innerHTML = "Monday - Saturday <br />08.00 To 20.00";
  pTwo.innerHTML = "Sunday <br /> 07.00 To 18.00";
  button.textContent = "Contact Now";

  gallery.childNodes[0].src = galleryOne;
  gallery.childNodes[1].src = galleryTwo;
  gallery.childNodes[2].src = galleryThree;
  gallery.childNodes[3].src = galleryFour;

  main.append(contentTwo);
  contentTwo.append(textContainer, gallery);
  textContainer.append(h1, h2, pOne, pTwo, button);
}

// Menupage Content
function initialDescriptionContainer() {
  const descriptionContainer = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const a = document.createElement("a");

  descriptionContainer.classList.add("description-container");
  h1.innerHTML = " <span>Delicious</span> Donut For Your Day";
  p.textContent =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, reprehenderit. Voluptatibus praesentium et inventore minima.";
  a.setAttribute("href", "#tes");
  a.textContent = "Order Donuts";

  main.append(descriptionContainer);
  descriptionContainer.append(h1, p, a);
}

function initialMenuContainer() {
  const menuContainer = document.createElement("div");
  const h1 = document.createElement("h1");

  menuContainer.classList.add("menu-container");
  menuContainer.setAttribute("id", "tes");
  h1.textContent = "Donuts Menu List";

  main.append(menuContainer);
  menuContainer.append(h1);

  for (let i = 0; i < 6; i++) {
    const menus = document.createElement("div");

    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const ul = document.createElement("ul");
    const button = document.createElement("button");

    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      ul.appendChild(li);
    }

    button.textContent = "Order Now";
    menus.classList.add(`menus`);
    menus.append(img, h1, p, ul, button);
    menuContainer.append(menus);
  }

  const allMenu = document.querySelectorAll(".menus");

  // menuOne
  const menuOne = allMenu[0].children;
  menuOne[0].src = imgMenuOne;
  menuOne[1].textContent = "Sprinkle Donut";
  menuOne[2].textContent = "Chocolate From Spain, Fresh From The Oven";
  menuOne[3].childNodes[0].innerHTML = "Small <br /><span>5.00$</span>";
  menuOne[3].childNodes[1].innerHTML = "Medium <br /><span>10.00$</span>";
  menuOne[3].childNodes[2].innerHTML = "Large <br /><span>15.00$</span>";

  // menuTwo
  const menuTwo = allMenu[1].children;
  menuTwo[0].src = imgMenuTwo;
  menuTwo[1].textContent = "Coco Donut";
  menuTwo[2].textContent = "No Other Donut That Can Compare To This";
  menuTwo[3].childNodes[0].innerHTML = "Small <br /><span>7.00$</span>";
  menuTwo[3].childNodes[1].innerHTML = "Medium <br /><span>11.00$</span>";
  menuTwo[3].childNodes[2].innerHTML = "Large <br /><span>14.00$</span>";

  // menuThree
  const menuThree = allMenu[2].children;
  menuThree[0].src = imgMenuThree;
  menuThree[1].textContent = "Whitey Donut";
  menuThree[2].textContent = "Its White and Delicious";
  menuThree[3].childNodes[0].innerHTML = "Small <br /><span>5.65$</span>";
  menuThree[3].childNodes[1].innerHTML = "Medium <br /><span>11.22$</span>";
  menuThree[3].childNodes[2].innerHTML = "Large <br /><span>16.10$</span>";

  // menuFour
  const menuFour = allMenu[3].children;
  menuFour[0].src = imgMenuFour;
  menuFour[1].textContent = "Fizz Donut";
  menuFour[2].textContent = "Make You Fizz All Day";
  menuFour[3].childNodes[0].innerHTML = "Small <br /><span>7.12$</span>";
  menuFour[3].childNodes[1].innerHTML = "Medium <br /><span>12.17$</span>";
  menuFour[3].childNodes[2].innerHTML = "Large <br /><span>17.14$</span>";

  // menuFive
  const menuFive = allMenu[4].children;
  menuFive[0].src = imgMenuFive;
  menuFive[1].textContent = "Romeo Donut";
  menuFive[2].textContent = "Maybe Im Not As Handsome";
  menuFive[3].childNodes[0].innerHTML = "Small <br /><span>4.35$</span>";
  menuFive[3].childNodes[1].innerHTML = "Medium <br /><span>10.91$</span>";
  menuFive[3].childNodes[2].innerHTML = "Large <br /><span>19.66$</span>";

  // menuSix
  const menuSix = allMenu[5].children;
  menuSix[0].src = imgMenuSix;
  menuSix[1].textContent = "Latte Donut";
  menuSix[2].textContent = "With Crispy Coco And Creamy Coco";
  menuSix[3].childNodes[0].innerHTML = "Small <br /><span>4.22$</span>";
  menuSix[3].childNodes[1].innerHTML = "Medium <br /><span>12.28$</span>";
  menuSix[3].childNodes[2].innerHTML = "Large <br /><span>16.28$</span>";
}

// Contactpage Content
function initialContactContainer() {
  // First Phase
  const contactContainer = document.createElement("div");
  const title = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2One = document.createElement("h2");
  const h2Two = document.createElement("h2");

  contactContainer.classList.add("contact-container");
  title.classList.add("title");

  h1.textContent = "Contact Us Now";
  h2One.textContent = "Got Any Complain For Our Service?";
  h2Two.textContent = "Please Be Aware That You Are Sending Us Legit Complain";

  main.append(contactContainer);
  contactContainer.append(title);
  title.append(h2One, h1, h2Two);

  // Second Phase
  const form = document.createElement("form");
  const ul = document.createElement("ul");
  const button = document.createElement("button");

  for (let i = 0; i < 5; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
  }

  button.textContent = "Submit";
  form.append(ul, button);
  contactContainer.append(form);
}

function initialForm() {
  const formList = document.querySelector(".contact-container form ul");

  function setAttribute(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
      element.setAttribute(attr, attributes[attr]);
    });
  }

  function formOne() {
    const label = document.createElement("label");
    const input = document.createElement("input");

    const li = formList.childNodes[0];

    label.setAttribute("for", "name");
    label.textContent = "Your Name";
    li.append(label, input);

    const attributes = {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Jhonny Cage",
    };

    setAttribute(li.childNodes[1], attributes);
  }

  function formTwo() {
    const label = document.createElement("label");
    const input = document.createElement("input");

    const li = formList.childNodes[1];

    label.setAttribute("for", "phone");
    label.textContent = "Your Phone Number";
    li.append(label, input);

    const attributes = {
      type: "number",
      name: "phone",
      id: "phone",
      placeholder: "+12 00 99 882 12",
    };

    setAttribute(li.childNodes[1], attributes);
  }

  function formThree() {
    const label = document.createElement("label");
    const input = document.createElement("input");

    const li = formList.childNodes[2];

    label.setAttribute("for", "e-mail");
    label.textContent = "Your Email";
    li.append(label, input);

    const attributes = {
      type: "email",
      name: "e-mail",
      id: "e-mail",
      placeholder: "anything@gmail.com",
    };

    setAttribute(li.childNodes[1], attributes);
  }

  function formFour() {
    const label = document.createElement("label");
    const input = document.createElement("input");

    const li = formList.childNodes[3];

    label.setAttribute("for", "date");
    label.textContent = "Date";
    li.append(label, input);

    const attributes = {
      type: "date",
      name: "date",
      id: "date",
    };

    setAttribute(li.childNodes[1], attributes);
  }

  function formFive() {
    const li = formList.childNodes[4];
    const label = document.createElement("label");
    const textArea = document.createElement("textarea");

    label.setAttribute("for", "complain");
    label.textContent = "Complain";
    li.append(label, textArea);

    const attributes = {
      name: "complain",
      id: "complain",
      cols: "30",
      rows: "7",
      placeholder: "I Like To Complain About....",
    };

    setAttribute(li.childNodes[1], attributes);
  }

  formOne();
  formTwo();
  formThree();
  formFour();
  formFive();
}
