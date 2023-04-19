import './menuPage.css';

// Import Images
import menuImg from "./../../assets/images/shanksDrink.png";
import beliImg from "./../../assets/images/beli.png";

import menuOdenImg from "./../../assets/images/Oden.png";
import menuRiceImg from "./../../assets/images/SanjiFriedRice.jpg";
import menuStewImg from "./../../assets/images/ScorchedStoneStew.png";
import menuOshiImg from "./../../assets/images/Oshiruko.png";

export default function getMenu() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    // Menu Heading
    const menuHeading = document.createElement('div');
    menuHeading.classList.add('menu-heading');

    const menuHeadingImg = document.createElement('img');
    menuHeadingImg.src = menuImg;
    menuHeadingImg.alt = 'Menu Heading Image';

    const menuHeadingText = document.createElement('h2');
    menuHeadingText.innerHTML = 'Baratie Menu';

    // Adding Menu Heading to page
    menuHeading.append(menuHeadingImg, menuHeadingText);
    menuContent.append(menuHeading);

    // Menu Items
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-section');

    // Menu Item Wano's Oden
    const menuItemOden = document.createElement('div');
    menuItemOden.classList.add('menu-item');

    const contentOden = document.createElement('div');
    contentOden.classList.add('menu-item-content');

    const imgOden = document.createElement('img');
    imgOden.classList.add('menu-item-img');
    imgOden.src = menuOdenImg;
    imgOden.alt = "Menu Item Wano's Oden";

    const textOden = document.createElement('h3');
    textOden.innerHTML = "Wano's Oden";

    const descOden = document.createElement('p');
    descOden.innerHTML = 'A traditional Japanese nabemono with a flavorful twist! Our Oden is a savory blend of boiled eggs, daikon, konjac, and processed fishcakes stewed in a light, soy-flavored dashi broth.'

    const odenPriceSpan = document.createElement('span');
    odenPriceSpan.classList.add('price');

    const odenBeliImg = document.createElement('img');
    odenBeliImg.classList.add('beliSign');
    odenBeliImg.src = beliImg;
    odenBeliImg.alt = "beli sign"

    odenPriceSpan.append(odenBeliImg, document.createTextNode(' 500'));

    contentOden.append(imgOden, textOden, descOden, odenPriceSpan);
    menuItemOden.append(contentOden);
    menuSection.append(menuItemOden);


    // Menu Item Sanji's Fried Rice
    const menuItemRice = document.createElement('div');
    menuItemRice.classList.add('menu-item');

    const contentRice = document.createElement('div');
    contentRice.classList.add('menu-item-content');

    const imgRice = document.createElement('img');
    imgRice.classList.add('menu-item-img');
    imgRice.src = menuRiceImg;
    imgRice.alt = "Menu Item Baratie's Fried Rice";

    const textRice = document.createElement('h3');
    textRice.innerHTML = "Baratie's Fried Rice";

    const descRice = document.createElement('p');
    descRice.innerHTML = "A savory blend of octopus, squid, and shrimp stir-fried with rice and fresh vegetables. Inspired by Zeff and Sanji's version served to the Galley Pirates and Straw Hat crew."

    const ricePriceSpan = document.createElement('span');
    ricePriceSpan.classList.add('price');

    const riceBeliImg = document.createElement('img');
    riceBeliImg.classList.add('beliSign');
    riceBeliImg.src = beliImg;
    riceBeliImg.alt = "beli sign"

    ricePriceSpan.append(riceBeliImg, document.createTextNode(' 800'));

    contentRice.append(imgRice, textRice, descRice, ricePriceSpan);
    menuItemRice.append(contentRice);
    menuSection.append(menuItemRice);

    // Menu Item Scorched Stone Stew
    const menuItemStew = document.createElement('div');
    menuItemStew.classList.add('menu-item');

    const contentStew = document.createElement('div');
    contentStew.classList.add('menu-item-content');

    const imgStew = document.createElement('img');
    imgStew.classList.add('menu-item-img');
    imgStew.src = menuStewImg;
    imgStew.alt = 'Menu Item Scorched Stone Stew';

    const textStew = document.createElement('h3');
    textStew.innerHTML = 'Scorched Stone Stew';

    const descStew = document.createElement('p');
    descStew.innerHTML = "A delicious stew cooked by mixing a well-heated stone with a variety of ingredients, resulting in a flavorful and nutrient-rich dish. Inspired by Sanji's version served to the Straw Hat Pirates on Upper Yard."

    const stewPriceSpan = document.createElement('span');
    stewPriceSpan.classList.add('price');

    const stewBeliImg = document.createElement('img');
    stewBeliImg.classList.add('beliSign');
    stewBeliImg.src = beliImg;
    stewBeliImg.alt = "beli sign"

    stewPriceSpan.append(stewBeliImg, document.createTextNode(' 1200'));

    contentStew.append(imgStew, textStew, descStew, stewPriceSpan);
    menuItemStew.append(contentStew);
    menuSection.append(menuItemStew);

    // Menu Item Oshiruko
    const menuItemOshi = document.createElement('div');
    menuItemOshi.classList.add('menu-item');

    const contentOshi = document.createElement('div');
    contentOshi.classList.add('menu-item-content');

    const imgOshi = document.createElement('img');
    imgOshi.classList.add('menu-item-img');
    imgOshi.src = menuOshiImg;
    imgOshi.alt = 'Menu Item Oshiruko';

    const textOshi = document.createElement('h3');
    textOshi.innerHTML = 'Oshiruko';

    const descOshi = document.createElement('p');
    descOshi.innerHTML = "A traditional Japanese dessert made of sweet azuki beans served in a bowl with mochi. our Oshiruko is the perfect way to end your meal."

    const oshiPriceSpan = document.createElement('span');
    oshiPriceSpan.classList.add('price');

    const oshiBeliImg = document.createElement('img');
    oshiBeliImg.classList.add('beliSign');
    oshiBeliImg.src = beliImg;
    oshiBeliImg.alt = "beli sign"

    oshiPriceSpan.append(oshiBeliImg, document.createTextNode(' 400'));

    contentOshi.append(imgOshi, textOshi, descOshi, oshiPriceSpan);
    menuItemOshi.append(contentOshi);
    menuSection.append(menuItemOshi);

    menuContent.append(menuSection);

    return menuContent;
}