import './homePage.css';

export default function getHome() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');

    const homeHeadingDiv = document.createElement('div');
    homeHeadingDiv.classList.add('home-heading');

    const homeHeading = document.createElement('h2');
    homeHeading.innerHTML = 'Welcome to Baratie Restaurant';

    const homeTextDiv = document.createElement('div');
    homeTextDiv.classList.add('home-text');

    const homeText = document.createElement('p');
    homeText.innerHTML = 
        'Ahoy there! Welcome to Baratie Restaurant, where we serve up the freshest seafood and spices from around the world. Come join us for a dining experience that will leave you wanting more!';
    
    homeHeadingDiv.append(homeHeading);
    homeTextDiv.append(homeText);

    homeContent.append(homeHeadingDiv, homeTextDiv);

    return homeContent;
}