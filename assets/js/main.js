/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	// Google Maps
	if (window.innerWidth > 1400) {
		$('.hookah_like').css('left',20);

	}

	if (window.innerWidth > 1800) {
		$('.sultan').css('width',350);
		$('.sultan').css('left',45);

		$('.hookah_like').css('width',320);
		$('.hookah_like').css('left',75);
		$('.hookah_like').css('top',980);

		$('.pro_hookah').css('width',330);
		$('.pro_hookah').css('top',750);
		$('.pro_hookah').css('left',window.innerWidth - $('.pro_hookah').width() - 50);

		$('.canal_du_arguile').css('width',330);
		$('.canal_du_arguile').css('top',350);
		$('.canal_du_arguile').css('left',window.innerWidth - $('.canal_du_arguile').width() - 50);

		$('.predator').css('width',330);
		$('.predator').css('top',1000);
		$('.predator').css('left',window.innerWidth - $('.predator').width() - 50);
	}

	if (window.innerWidth >= 1366) {
		$('.maps_grande').removeClass('hide');

		$('.canal_du_arguile').css('left',window.innerWidth - $('.canal_du_arguile').width() - 15);

		$('.predator').css('left',window.innerWidth - $('.predator').width() - 15);

		$('.pro_hookah').css('left',window.innerWidth - $('.pro_hookah').width());

	} else if (window.innerWidth >= 1024) {
		$('.sultan').css('width',150);
		$('.sultan').css('left',10);

		$('.canal_du_arguile').css('width',180);
		$('.canal_du_arguile').css('left',window.innerWidth - $('.canal_du_arguile').width() + 15);

		$('.predator').css('width',180);
		$('.predator').css('top',830);
		$('.predator').css('left',window.innerWidth - $('.predator').width() + 15);

		$('.hookah_like').css('width',150);
		$('.hookah_like').css('left',0);
		$('.hookah_like').css('top',760);

		$('.pro_hookah').css('width',180);
		$('.pro_hookah').css('top',600);
		$('.pro_hookah').css('left',window.innerWidth - $('.pro_hookah').width() + 15);

	}else if (window.innerWidth >= 768) {
		$('.maps_medio').removeClass('hide');

	} else if (window.innerWidth >= 425) {
		$('.maps_pequeno').css('width', '320px');
		$('.maps_pequeno').removeClass('hide');

	}else if (window.innerWidth >= 375) {
		$('.maps_pequeno').css('width', '300px');
		$('.maps_pequeno').removeClass('hide');

	}else if (window.innerWidth >= 320) {
		$('.maps_pequeno').css('width', '250px');
		$('.maps_pequeno').removeClass('hide');
	}

	// Display none para imagens parceiros em telas menores que 768
	if (window.innerWidth <= 768) {
		$('.sultan').css('display','none');

		$('.canal_du_arguile').css('display','none');

		$('.predator').css('display','none');

		$('.hookah_like').css('display','none');

		$('.pro_hookah').css('display','none');
	}

	skel.breakpoints({
		wide: '(max-width: 1920px)',
		normal: '(max-width: 1680px)',
		narrow: '(max-width: 1280px)',
		narrower: '(max-width: 1000px)',
		mobile: '(max-width: 736px)',
		mobilenarrow: '(max-width: 480px)',
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$all = $body.add($header);

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 0);
			});

		// Touch mode.
			skel.on('change', function() {

				if (skel.vars.mobile || skel.breakpoint('mobile').active)
					$body.addClass('is-touch');
				else
					$body.removeClass('is-touch');

			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Gallery.
			$window.on('load', function() {
				$('.gallery').poptrox({
					baseZIndex: 10001,
					useBodyOverflow: false,
					usePopupEasyClose: false,
					overlayColor: '#1f2328',
					overlayOpacity: 0.65,
					usePopupDefaultStyling: false,
					usePopupCaption: true,
					popupLoaderText: '',
					windowMargin: (skel.breakpoint('mobile').active ? 5 : 50),
					usePopupNav: true
				});
			});

		// Section transitions.
			if (!skel.vars.mobile
			&&	skel.canUse('transition')) {

				var on = function() {

					// Generic sections.
						$('.main.style1')
							.scrollex({
								mode:		'middle',
								delay:		100,
								initialize:	function() { $(this).addClass('inactive'); },
								terminate:	function() { $(this).removeClass('inactive'); },
								enter:		function() { $(this).removeClass('inactive'); },
								leave:		function() { $(this).addClass('inactive'); }
							});

						$('.main.style2')
							.scrollex({
								mode:		'middle',
								delay:		100,
								initialize:	function() { $(this).addClass('inactive'); },
								terminate:	function() { $(this).removeClass('inactive'); },
								enter:		function() { $(this).removeClass('inactive'); },
								leave:		function() { $(this).addClass('inactive'); }
							});

					// Work.
						$('#work')
							.scrollex({
								top:		'40vh',
								bottom:		'30vh',
								delay:		50,
								initialize:	function() {

												var t = $(this);

												t.find('.row.images')
													.addClass('inactive');

											},
								terminate:	function() {

												var t = $(this);

												t.find('.row.images')
													.removeClass('inactive');

											},
								enter:		function() {

												var t = $(this),
													rows = t.find('.row.images'),
													length = rows.length,
													n = 0;

												rows.each(function() {
													var row = $(this);
													window.setTimeout(function() {
														row.removeClass('inactive');
													}, 100 * (length - n++));
												});

											},
								leave:		function(t) {

												var t = $(this),
													rows = t.find('.row.images'),
													length = rows.length,
													n = 0;

												rows.each(function() {
													var row = $(this);
													window.setTimeout(function() {
														row.addClass('inactive');
													}, 100 * (length - n++));
												});

											}
							});

					// Contact.
						$('#contact')
							.scrollex({
								top:		'50%',
								delay:		50,
								initialize:	function() { $(this).addClass('inactive'); },
								terminate:	function() { $(this).removeClass('inactive'); },
								enter:		function() { $(this).removeClass('inactive'); },
								leave:		function() { $(this).addClass('inactive'); }
							});

				};

				var off = function() {

					// Generic sections.
						$('.main.style1')
							.unscrollex();

						$('.main.style2')
							.unscrollex();

					// Work.
						$('#work')
							.unscrollex();

					// Contact.
						$('#contact')
							.unscrollex();

				};

				skel.on('change', function() {

					if (skel.breakpoint('mobile').active)
						(off)();
					else
						(on)();

				});

			}

		// Events.
			var resizeTimeout, resizeScrollTimeout;

			$window
				.resize(function() {

					// Disable animations/transitions.
						$body.addClass('is-resizing');

					window.clearTimeout(resizeTimeout);

					resizeTimeout = window.setTimeout(function() {

						// Update scrolly links.
							$('a[href^="#"]').scrolly({
								speed: 1500,
								offset: $header.outerHeight() - 1
							});

						// Re-enable animations/transitions.
							window.setTimeout(function() {
								$body.removeClass('is-resizing');
								$window.trigger('scroll');
							}, 0);

					}, 100);

				})
				.load(function() {
					$window.trigger('resize');
				});

	});

})(jQuery);