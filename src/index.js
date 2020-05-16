import {addHeader, addPhotos} from './homePage';
import {addMenu} from './menuPage';
import {addContactForm} from './contactPage';

function initContent() {
    document.body.style.cssText = 'background-color: #f29587';

    var content = document.createElement('div');
    content.id = 'content';
    content.style.cssText = 'top: 200px; width: 800px; height: 600px; margin-left: auto; margin-right: auto; margin-top: 75px;';

    document.body.appendChild(content);

    const navBar = document.createElement('div');
    navBar.style = 'position: absolute; top: 0; left: 0; margin: 0; padding: 0; width: 100%; overflow: hidden; background-color:  #73b6ba';
    document.body.appendChild(navBar);

    const buttonStyle = 'margin-left: auto; margin-right: auto; padding: 15px; width: 140px; display: inline;' +
		'border: none; color: white; background-color:  #73b6ba; font-size: 16px;';

    var homeTab = document.createElement('button');
    homeTab.innerHTML = 'Home';
    homeTab.style.cssText = buttonStyle;
    homeTab.onclick = getHomepage;
    setUpButton(homeTab);
    navBar.appendChild(homeTab);

    var menuTab = document.createElement('button');
    menuTab.innerHTML = 'Menu';
    menuTab.style.cssText = buttonStyle;
    menuTab.onclick = getMenu;
    setUpButton(menuTab);
    navBar.appendChild(menuTab);

    var contactTab = document.createElement('button');
    contactTab.innerHTML = 'Contact Us';
    contactTab.style.cssText = buttonStyle;
    contactTab.onclick = getContactForm;
    setUpButton(contactTab);
    navBar.appendChild(contactTab);

    var onlineTab = document.createElement('button');
    onlineTab.innerHTML = 'Order Online';
    onlineTab.style.cssText = buttonStyle + 'float: right;';
    setUpButton(onlineTab);
    navBar.appendChild(onlineTab);

}

function setUpButton (button) {
    button.onmouseover = function() {button.style.backgroundColor = '#438589'};
    button.onmouseout = function() {button.style.backgroundColor = '#73b6ba'};
}

function getHomepage() {
    var content = document.getElementById('content');

    content.innerHTML = "";

    content.appendChild(addHeader());

    const images = addPhotos();

    console.log(content);
    for (var i = 0; i < images.length; i++)
        content.appendChild(images[i]);
}

function getMenu() {
    var content = document.getElementById('content');
  
    content.innerHTML = "";

    content.appendChild(addMenu());
}

function getContactForm() {
    var content = document.getElementById('content');

    content.innerHTML = "";

    content.appendChild(addContactForm());
}

initContent();
getHomepage();
//getMenu();
//getContactForm();
