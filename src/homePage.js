//Tealinquent
//Tea time for punks.
//Tealinquent serves popular teas and infusions from all around the world with our own house-made blends.
//Whether by the cup or by the pot, hot or iced, please come enjoy our teas.
//
//And feel free to order our blends online to enjoy at home.
//No coffee served at all.
//
//

export {addHeader, addPhotos};

function addHeader () {
    const header = document.createElement('span');
    header.style = 'left: 300px;  top: 200px; width: 400px; height: 250px; background-color: #73b6ba; position: absolute; z-index: 5;' +
		'border: solid white 5px;';
    
    const name = document.createElement('h2');
    name.innerHTML = 'Tealinquent';
    name.style.cssText = 'text-align: center; color: white; font-family: Arial';
    header.appendChild(name);

    const desc = document.createElement('p');
    desc.innerHTML = 'Tealinquent serves popular teas and infusions from all around the world with our own house-made blends.\n' +
		'Whether by the cup or by the pot, hot or iced, please come enjoy our drinks.\n' + 
		'And feel free to order our blends online to enjoy at home!';
    desc.style.cssText = 'padding: 5px; color: white; font-family: Arial';
    header.appendChild(desc);

    return header;
}

function addPhotos () {
     
    const photoStyle = 'margin-left: auto; margin-right: auto; margin-top: 0; margin-bottom: 0; float: none; padding: 0; width: 400px; height: 300px; display: inline; float: left';

    const imgOolong = document.createElement('img');
    imgOolong.src = 'resources/oolong.jpg';
    imgOolong.style.cssText = photoStyle;

    const imgEarl = document.createElement('img');
    imgEarl.src = 'resources/earl_grey.jpg';
    imgEarl.style.cssText = photoStyle;

    const imgRooibos = document.createElement('img');
    imgRooibos.src = 'resources/rooibos.jpg';
    imgRooibos.style.cssText = photoStyle;

    const imgMate = document.createElement('img');
    imgMate.src = 'resources/yerba_mate.jpg';
    imgMate.style.cssText = photoStyle;

    return [ imgOolong, imgEarl, imgRooibos, imgMate ];
}
