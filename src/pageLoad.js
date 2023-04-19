// import stylesheets
import "./style.css";

// import Images
import logo from "./assets/images/logo.jpg";
import luffyEatImg from "./assets/images/luffy eat.png";
import zeffImg from "./assets/images/zeff.png";
import contactImg from "./assets/images/contact.png";
import sanjiImg from "./assets/images/Sanji2.png";

// import components
import getHome from "./components/home/homePage";
import getMenu from "./components/menu/menuPage";
import getAbout from "./components/about/aboutPage";

export default function pageLoad() {
  const body = document.querySelector("body");

  const header = getHeader();
  const content = getContent();
  const footer = getFooter();

  body.appendChild(header);
  body.appendChild(content);
  body.appendChild(footer);

  initButtonEvents();
}

function getContent() {
  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content");

  const homeContent = getHome();

  contentWrapper.appendChild(homeContent);
  return contentWrapper;
}

function initButtonEvents() {
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((button) => {
    button.addEventListener("click", switchContent);
  });
}

function switchContent(event) {
  // This is to catch the closest button element to the elemen that triggered this event
  // this is needed because when clicking on the image Icon, it returns img instead of button
  // as the element
  const buttonElement = event.target.closest("button");
  const contentNode = document.querySelector('.content');

  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach((button) => {
    if(button.classList.contains('active')) {
        button.classList.remove('active');
    }
  });

  buttonElement.classList.add('active');
  if(buttonElement.textContent === 'Home') {
    const newContent = getHome();
    contentNode.replaceChildren(newContent);
  } else if (buttonElement.textContent === 'Menu') {
    const newContent = getMenu();
    contentNode.replaceChildren(newContent);
  } else {
    const newContent = getAbout();
    contentNode.replaceChildren(newContent);
  }
}

function getHeader() {
  const headerContent = document.createElement("header");

  // Header Divs
  const headerDivLeft = document.createElement("div");
  headerDivLeft.setAttribute("id", "sub-header-left");

  const headerNavCenter = document.createElement("div");
  headerNavCenter.setAttribute("id", "sub-header-nav");

  const headerLogoRight = document.createElement("div");
  headerLogoRight.setAttribute("id", "sub-header-right");

  // Header Left Content
  const leftDivLogo = document.createElement("img");
  leftDivLogo.classList.add("res-logo");
  leftDivLogo.src = logo;
  leftDivLogo.alt = "Restaurant Logo";
  const leftDivName = document.createElement("div");
  leftDivName.classList.add("left-logo-name");
  const leftName = document.createElement("h2");
  leftName.innerHTML = "Baratie";
  const leftSubName = document.createElement("h6");
  leftSubName.innerHTML = "Restaurant";

  leftDivName.append(leftName, leftSubName);
  headerDivLeft.append(leftDivLogo, leftDivName);

  // Header Nav Center Content
  const homeNavButton = document.createElement("button");
  homeNavButton.classList.add("nav-button");
  homeNavButton.classList.add("active");
  const homeIcon = document.createElement("img");
  homeIcon.src = zeffImg;
  homeIcon.alt = "Home Image";
  homeIcon.classList.add("menu-img");
  homeNavButton.appendChild(homeIcon);
  homeNavButton.appendChild(document.createTextNode("Home"));

  const menuNavButton = document.createElement("button");
  menuNavButton.classList.add("nav-button");
  const menuIcon = document.createElement("img");
  menuIcon.src = luffyEatImg;
  menuIcon.alt = "Menu Image";
  menuIcon.classList.add("menu-img");
  menuNavButton.append(menuIcon, document.createTextNode("Menu"));

  const contactNavButton = document.createElement("button");
  contactNavButton.classList.add("nav-button");
  const contactIcon = document.createElement("img");
  contactIcon.src = contactImg;
  contactIcon.alt = "Contact Image";
  contactIcon.classList.add("menu-img");
  contactNavButton.append(contactIcon, document.createTextNode("Contact"));

  headerNavCenter.append(homeNavButton, menuNavButton, contactNavButton);

  // Header Right Content
  const rightDivLogo = document.createElement("div");
  rightDivLogo.setAttribute("id", "sub-header-right");
  const rightIcon = document.createElement("img");
  rightIcon.src = sanjiImg;
  rightIcon.alt = "Sanji Image";
  rightIcon.classList.add("res-logo");
  rightDivLogo.append(rightIcon);

  // Add contents to header content
  headerContent.append(headerDivLeft, headerNavCenter, rightDivLogo);

  return headerContent;
}

function getFooter() {
  const footerContent = document.createElement("footer");
  const footerText = document.createElement("p");

  footerText.innerHTML = "Sam";

  footerContent.append(footerText);
  return footerContent;
}
