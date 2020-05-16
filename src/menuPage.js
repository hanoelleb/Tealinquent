//Earl Grey - English black tea infused with bergamot.
//Chamomile - an herbal infusion made from chamomile
//Mint Medley - a blend of spearmint, peppermint and white tea leaves
//Apple Bloom - a blend of dried apple and black tea leaves
//Jasmine - a blend of jasmine flowers and green tea leaves
//Oolong - oxidized black tea leaves
//Sencha - Japanese green tea, made with whole green tea leaves
//Genmaicha - Japanese green tea infused with toasted rice
//Chai - Indian black tea with cardamon, cinnamon, ginger, and pepper
//Rooibos - an herbal infusion made from the leaves of 
//the South African Rooibos (Red Bush) plant 
//Ginseng - an herbal infusion made from Korean ginseng.
//Yerba Mate - an infusion made with the South American Yerba Mate plant.

//13 items
//Menu	     (desc)				price-cup  price-pot

//alt color #438589

export {addMenu};

function addMenu() {
    const menuTable = document.createElement('table');
    menuTable.style.cssText = 'margin-left: auto; margin-right: auto; border: solid white 5px; ' + 
		'background-color: #73b6ba; color: white; font-family: Arial; border-collapse: collapse;';

    var first = menuTable.insertRow(0);
    var menuLabel = first.insertCell(0);
    var empty = first.insertCell(1);
    var priceCup = first.insertCell(2);
    var pricePot = first.insertCell(3);

    menuLabel.innerHTML = '<b>Menu</b>';
    priceCup.innerHTML = '<b>Per Cup</b>';
    pricePot.innerHTML = '<b>Per Pot</b>';

    const itemNames = ['Earl Grey', 'Chamomile', 'Mint Medley', 'Apple Bloom', 'Jasmine', 'Oolong', 'Sencha', 
	    'Genmaicha', 'Chai', 'Rooibos', 'Ginseng', 'Yerba Mate'];
    const itemDescs = [
	'English black tea infused with bergamot.',
        'An herbal infusion made from chamomile',
        'A blend of spearmint, peppermint and white tea leaves',
        'A blend of dried apple and black tea leaves',
        'A blend of jasmine flowers and green tea leaves',
        'Chinese tea made with oxidized black tea leaves',
        'Japanese green tea, made with whole green tea leaves',
        'Japanese green tea infused with toasted rice',
        'Indian black tea with cardamon, cinnamon, ginger, and pepper',
        'An herbal infusion made from the South African Red Bush',
        'An herbal infusion made from Korean ginseng root.',
        'An infusion made with the South American Yerba Mate plant.'
    ];

    const cupPrices = [
        '$2',
	'$1.5',
	'$3',
	'$3',
	'$2.5',
	'$4',
	'$5',
	'$2.5',
	'$4',
	'$5',
	'$3.5',
	'$2.5'
    ];

    const potPrices = [
        '$5.5',
	'$5',
	'$8.5',
	'$8.5',
	'$7',
	'$11.5',
	'$14.5',
	'$7',
	'$11.5',
	'$14.5',
	'$10',
	'$7'
    ];

    for (var i = 1; i < itemNames.length; i++) {
        var row = menuTable.insertRow(i);
	var name = row.insertCell(0);
	var desc = row.insertCell(1);
	var cupPrice = row.insertCell(2);
	var potPrice = row.insertCell(3);

        name.innerHTML = itemNames[i-1];
	desc.innerHTML = itemDescs[i-1];
	cupPrice.innerHTML = cupPrices[i-1];
	potPrice.innerHTML = potPrices[i-1];

	if (i % 2 != 0) {
	    name.style.backgroundColor = '#438589';
	    desc.style.backgroundColor = '#438589';
	    cupPrice.style.backgroundColor = '#438589';
	    potPrice.style.backgroundColor = '#438589';
	}
    }

    var cells = menuTable.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.padding = '10px';
    }

    return menuTable;
}
