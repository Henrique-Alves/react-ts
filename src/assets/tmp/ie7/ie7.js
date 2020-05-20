/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lab\'">' + entity + '</span>' + html;
	}
	var icons = {
		'lab-iconabstract-music-note': '&#xe900;',
		'lab-iconarrows-in-circle': '&#xe901;',
		'lab-iconarrow-up-mark': '&#xe902;',
		'lab-iconartist-palette': '&#xe903;',
		'lab-iconbaby-walki-talkie': '&#xe904;',
		'lab-iconbackpack': '&#xe905;',
		'lab-iconbasketball': '&#xe906;',
		'lab-iconbig-handbag': '&#xe907;',
		'lab-iconbirthday-gift': '&#xe908;',
		'lab-iconblank-cloud': '&#xe909;',
		'lab-iconblank-rounded-speech-balloon': '&#xe90a;',
		'lab-iconbook-with-bookmark': '&#xe90b;',
		'lab-iconbullseye': '&#xe90c;',
		'lab-iconbunk-bed': '&#xe90d;',
		'lab-iconcalendar-day': '&#xe90e;',
		'lab-iconcamera-flash': '&#xe90f;',
		'lab-iconcelsius-thermometer': '&#xe910;',
		'lab-iconclipboard': '&#xe911;',
		'lab-iconclipboard-1': '&#xe912;',
		'lab-iconclothes-hanger': '&#xe913;',
		'lab-iconcompass-orientation-tool': '&#xe914;',
		'lab-iconcomputer-mouse': '&#xe915;',
		'lab-iconcredit-card-of-rounded': '&#xe916;',
		'lab-iconcycle-loading': '&#xe917;',
		'lab-icondice-with-a-six': '&#xe918;',
		'lab-icondocument-report': '&#xe919;',
		'lab-icondollar-sign-button': '&#xe91a;',
		'lab-icondouble-circle': '&#xe91b;',
		'lab-icondownload-to-inbox': '&#xe91c;',
		'lab-iconempty-folder': '&#xe91d;',
		'lab-iconfaq-button': '&#xe91e;',
		'lab-iconfly-airplane': '&#xe91f;',
		'lab-iconfolded-text-page': '&#xe920;',
		'lab-iconfull-charge': '&#xe921;',
		'lab-icongamepad-cross': '&#xe922;',
		'lab-icongear-settings': '&#xe923;',
		'lab-icongraph-line': '&#xe924;',
		'lab-iconhand-bag': '&#xe925;',
		'lab-iconhot-cup': '&#xe926;',
		'lab-iconidea-bulb': '&#xe927;',
		'lab-iconimage': '&#xe928;',
		'lab-iconinformation-signal': '&#xe929;',
		'lab-iconlabel-with-rope': '&#xe92a;',
		'lab-iconlamp-of-stone-temple': '&#xe92b;',
		'lab-iconlaptop-computer': '&#xe92c;',
		'lab-iconlocked': '&#xe92d;',
		'lab-iconlow-rounded-battery': '&#xe92e;',
		'lab-iconluggage-with-handle': '&#xe92f;',
		'lab-iconmagnifying-glass': '&#xe930;',
		'lab-iconmap-pointer': '&#xe931;',
		'lab-iconmaths-graphic': '&#xe932;',
		'lab-iconmusical-volume': '&#xe933;',
		'lab-iconnotebook': '&#xe934;',
		'lab-iconold-monitor': '&#xe935;',
		'lab-icononline-shop-cart': '&#xe936;',
		'lab-iconorigami-airplane': '&#xe937;',
		'lab-iconpadlock-open': '&#xe938;',
		'lab-iconpalm-tree': '&#xe939;',
		'lab-iconpaperclip': '&#xe93a;',
		'lab-iconpicket-garden-fence': '&#xe93b;',
		'lab-iconpicnic-basket': '&#xe93c;',
		'lab-iconpole-flag': '&#xe93d;',
		'lab-iconpower-sign': '&#xe93e;',
		'lab-iconpull-down-chart-with-graph': '&#xe93f;',
		'lab-iconradio-mic': '&#xe940;',
		'lab-iconrecycle-logo': '&#xe941;',
		'lab-iconright-tick': '&#xe942;',
		'lab-iconround-clock': '&#xe943;',
		'lab-iconrounded-cross-sign': '&#xe944;',
		'lab-iconrounded-envelope': '&#xe945;',
		'lab-iconrounded-pie-chart': '&#xe946;',
		'lab-iconrounded-printer': '&#xe947;',
		'lab-iconrounded-star': '&#xe948;',
		'lab-iconsailboat-with-two-sails': '&#xe949;',
		'lab-iconschool-portfolio': '&#xe94a;',
		'lab-iconsecurity-pass': '&#xe94b;',
		'lab-iconshelving-wood': '&#xe94c;',
		'lab-iconsmall-gamepad': '&#xe94d;',
		'lab-iconspeech-bbubble-with-text': '&#xe94e;',
		'lab-iconstar-shape': '&#xe94f;',
		'lab-iconsupermarket-shopping-basket': '&#xe950;',
		'lab-iconsuppository-capsule': '&#xe951;',
		'lab-icontablet-informatic': '&#xe952;',
		'lab-icontactile-tablet': '&#xe953;',
		'lab-icontelephone-receiver': '&#xe954;',
		'lab-icontemple-structure': '&#xe955;',
		'lab-iconthree-books': '&#xe956;',
		'lab-icontiny-calculator': '&#xe957;',
		'lab-icontool-button': '&#xe958;',
		'lab-icontrash-metal-pail': '&#xe959;',
		'lab-icontriangular-pointer': '&#xe95a;',
		'lab-iconupload-arrow': '&#xe95b;',
		'lab-iconuser-avatar': '&#xe95c;',
		'lab-iconvalentine-heart': '&#xe95d;',
		'lab-iconvolume-round-bars': '&#xe95e;',
		'lab-iconweek-calendar': '&#xe95f;',
		'lab-iconwhite-flag': '&#xe960;',
		'lab-iconwhite-t-shirt': '&#xe961;',
		'lab-iconwifi-wave': '&#xe962;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/lab-icon[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
