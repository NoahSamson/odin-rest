import './aboutPage.css';

import whiteBeardImg from './../../assets/images/whitebeard.png';

export default function getAbout() {
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about-content');

    // Menu Heading
    const aboutHeading = document.createElement('div');
    aboutHeading.classList.add('about-heading');

    const aboutHeadingImg = document.createElement('img');
    aboutHeadingImg.src = whiteBeardImg;
    aboutHeadingImg.alt = 'About Heading Image';

    const aboutHeadingText = document.createElement('h2');
    aboutHeadingText.innerHTML = 'Contact Us';

    // Adding Menu Heading to page
    aboutHeading.append(aboutHeadingImg, aboutHeadingText);
    aboutContent.append(aboutHeading);

    // create form element
const form = document.createElement('form');
form.id = 'contact-form';
form.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
form.style.padding = '20px';
form.style.borderRadius = '10px';
form.style.width = '400px';
form.style.margin = '0 auto';

// create name input element
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'name';
nameInput.id = 'name';
nameInput.placeholder = ' ';

// create name label element
const nameLabel = document.createElement('label');
nameLabel.htmlFor = 'name';
nameLabel.textContent = 'Name';
nameLabel.style.position = 'absolute';
nameLabel.style.top = '0';
nameLabel.style.left = '0';
nameLabel.style.transition = 'all 0.2s ease-in-out';
nameLabel.style.pointerEvents = 'none';
nameLabel.style.color = '#555';

// append name input and label elements to form
const nameGroup = document.createElement('div');
nameGroup.className = 'form-group';
nameGroup.style.marginBottom = '10px';
nameGroup.style.position = 'relative';
nameGroup.appendChild(nameInput);
nameGroup.appendChild(nameLabel);
form.appendChild(nameGroup);

// create email input element
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.name = 'email';
emailInput.id = 'email';
emailInput.placeholder = ' ';

// create email label element
const emailLabel = document.createElement('label');
emailLabel.htmlFor = 'email';
emailLabel.textContent = 'Email';
emailLabel.style.position = 'absolute';
emailLabel.style.top = '0';
emailLabel.style.left = '0';
emailLabel.style.transition = 'all 0.2s ease-in-out';
emailLabel.style.pointerEvents = 'none';
emailLabel.style.color = '#555';

// append email input and label elements to form
const emailGroup = document.createElement('div');
emailGroup.className = 'form-group';
emailGroup.style.marginBottom = '10px';
emailGroup.style.position = 'relative';
emailGroup.appendChild(emailInput);
emailGroup.appendChild(emailLabel);
form.appendChild(emailGroup);

// create message textarea element
const messageTextarea = document.createElement('textarea');
messageTextarea.name = 'message';
messageTextarea.id = 'message';
messageTextarea.placeholder = ' ';

// create message label element
const messageLabel = document.createElement('label');
messageLabel.htmlFor = 'message';
messageLabel.textContent = 'Message';
messageLabel.style.position = 'absolute';
messageLabel.style.top = '0';
messageLabel.style.left = '0';
messageLabel.style.transition = 'all 0.2s ease-in-out';
messageLabel.style.pointerEvents = 'none';
messageLabel.style.color = '#555';

// append message textarea and label elements to form
const messageGroup = document.createElement('div');
messageGroup.className = 'form-group';
messageGroup.style.marginBottom = '10px';
messageGroup.style.position = 'relative';
messageGroup.appendChild(messageTextarea);
messageGroup.appendChild(messageLabel);
form.appendChild(messageGroup);

// create submit button element
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Send';
submitButton.style.backgroundColor = '#007bff';
submitButton.style.color = '#fff';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '5px';
submitButton.style.padding = '10px 20px';
submitButton.style.cursor = 'pointer';

// append submit button element to form
form.appendChild(submitButton);

// append form to body of document
aboutContent.appendChild(form);
return aboutContent;
}
