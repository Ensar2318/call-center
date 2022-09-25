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
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-world': '&#xe900;',
		'icon-menu-line': '&#xe90e;',
		'icon-menu-bold': '&#xe9bd;',
		'icon-facebook': '&#xea90;',
		'icon-instagram': '&#xea92;',
		'icon-twitter': '&#xea96;',
		'icon-youtube': '&#xea9d;',
		'icon-linkedin': '&#xeaca;',
		'icon-clock': '&#xe901;',
		'icon-search': '&#xe902;',
		'icon-phone': '&#xe907;',
		'icon-left-arrow': '&#xe909;',
		'icon-right-arrow': '&#xe90f;',
		'icon-chevron-right': '&#xe90b;',
		'icon-chevron-left': '&#xe90c;',
		'icon-chevron-down': '&#xe903;',
		'icon-chevron-up': '&#xe904;',
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
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
