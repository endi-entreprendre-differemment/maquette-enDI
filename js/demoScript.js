// javascript de graphiste ne pas utiliser
function removeClass(el, cls) {
	var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
	el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
}
function addClass(el, cls) {
	el.className = el.className + " " + cls;
}
function hasClass(el, cls) {
	return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

/*from http://onlinetools.org/articles/unobtrusivejavascript/chapter4.html*/
function addEvent(obj, evType, fn){ 
	if (obj.addEventListener){
		obj.addEventListener(evType, fn, false);return true;
	}
	else if (obj.attachEvent){
		var r = obj.attachEvent("on"+evType, fn);return r;
	}
	else {
		return false;
	}
}

addEvent( window, 'load', initDemoENDI );

function initDemoENDI() {
	if ( hasClass( document.body, 'login' ) ) {
		var login_photos = new Array(
			"<strong>Mathilde Hamon</strong><br>Le Fil de la Côte - Sellerie nautique<br>CAE29",
			"<strong>Ronan Loup</strong><br>Réalisateur vidéo<br>CAE29",
			"<strong>Mathieu Thomas</strong><br>La Tête en l’air ! Girouettes de Ouessant<br>CAE29",
			"<strong>Mathieu Thomas</strong><br>La Tête en l’air ! Girouettes de Ouessant<br>CAE29"
		);
		var login_photos_total = login_photos.length;
		var current_photo = 0;

		current_photo = Math.floor( Math.random() * login_photos_total );
		current_photo_padded = current_photo;
		if ( current_photo_padded < 10 ) {
			current_photo_padded = "00" + current_photo_padded;
		}
		else if ( current_photo_padded < 100 ) {
			current_photo_padded = "0" + current_photo_padded;
		}
		var current_photo_path = "background-image:url('../resources/photos/" + current_photo_padded + ".jpg')";
		
		var login_photo_div = document.getElementById( 'demo_atwork_photo' );

		if ( login_photo_div ) {
			login_photo_div.setAttribute( "style", current_photo_path );
			login_photo_div.innerHTML = "<p>" + login_photos[current_photo] + "</p>";
			
		}
	}
}

var header = document.getElementById("demo_main_header");
var functions = new Array ( 'positive', 'negative', 'caution');

function colourScheme(whichScheme) {
	document.body.className = whichScheme;
	resetHeader();
}

function resetHeader() {
	for ( i = 0; i < functions.length; i ++) {
		if ( hasClass( header, functions[i] )) {
			removeClass( header, functions[i]);
		}
	}
}

function functionalHeader(whichFunctionalInfo) {
	resetHeader();
	addClass( header, whichFunctionalInfo );
}

function toggleOpen( whichObject ) {
	var object = document.getElementById( whichObject );
	if ( !object ) {
		object = whichObject;
	}
	if ( hasClass( object, 'open' ) ) {
		removeClass( object, 'open' );
	}
	else {
		addClass( object, 'open' );
	}
}