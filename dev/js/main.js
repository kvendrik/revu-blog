var dropdowns = require('./modules/dropdowns'),
	navigationHelper = require('./modules/navigation-helper'),
	lightbox = require('./modules/lightbox'),
	tooltips = require('./modules/tooltips'),
	share = require('./modules/data-share'),
	smoothScroll = require('./modules/data-smooth-scroll'),
	toggle = require('./modules/data-toggle');

navigationHelper.init();
dropdowns.init();
lightbox.init();
tooltips.init();
share.init();
smoothScroll.init();
toggle.init();