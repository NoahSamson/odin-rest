import "./aboutPage.css";

import whiteBeardImg from "./../../assets/images/whitebeard.png";

export default function getAbout() {
  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");

  // Menu Heading
  const aboutHeading = document.createElement("div");
  aboutHeading.classList.add("about-heading");

  const aboutHeadingImg = document.createElement("img");
  aboutHeadingImg.src = whiteBeardImg;
  aboutHeadingImg.alt = "About Heading Image";

  const aboutHeadingText = document.createElement("h2");
  aboutHeadingText.innerHTML = "Contact Us";

  // Adding Menu Heading to page
  aboutHeading.append(aboutHeadingImg, aboutHeadingText);
  aboutContent.append(aboutHeading);

  // create form element
  const formArea = document.createElement("div");
  formArea.classList.add("form-area");

  const formWrapper = document.createElement("div");
  formWrapper.classList.add("wrapper");

  const fNameLabel = document.createElement("p");
  fNameLabel.textContent = "Name";

  const fNameInput = document.createElement("input");
  fNameInput.type = "text";
  fNameInput.name = "name";
  fNameInput.placeholder = "Enter your Name...";

  const emailLabel = document.createElement("p");
  emailLabel.textContent = "Email";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Enter your Email...";

  const messageAreaLabel = document.createElement("p");
  messageAreaLabel.textContent = "Your Message";

  const messageInput = document.createElement("textarea");
  messageInput.cols = "30";
  messageInput.rows = "10";
  messageInput.placeholder = "Enter your Message...";

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("submit-btn");
  submitBtn.textContent = "Submit";
  formWrapper.append(
    fNameLabel,
    fNameInput,
    emailLabel,
    emailInput,
    messageAreaLabel,
    messageInput,
    submitBtn
  );
  formArea.appendChild(formWrapper);

  aboutContent.append(formArea);
  return aboutContent;
}
