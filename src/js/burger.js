$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".burger,.header__menu-list, .hero__content, .header__menu-item").toggleClass("active");
    $("body").toggleClass("lock");
  });
});



// $(function () {
// if ($(window).width() < 768) {  $(document).ready(function () {
//       $(".burger").click(function (event) {
//         $(".burger,.header__menu-list, .hero__content, .header__menu-item").toggleClass("active");
//         $("body").toggleClass("lock");
//       });
//     }); }

// $(window).on('resize', function() {
//     if ($(window).width() < 768) {
//      $(document).ready(function () {
//       $(".burger").click(function (event) {
//         $(".burger,.header__menu-list, .hero__content, .header__menu-item").toggleClass("active");
//         $("body").toggleClass("lock");
//       });
//     });    
//     }
// });
// });


// if ($(window).width() < 768) { menuHandler(); }

// $(window).on('resize', function() {
//     if ($(window).width() < 768) {
//         menuHandler();
//     }
// });

// var menuHandler = function() {
//   $(document).ready(function () {
//       $(".burger, .header__menu-item").click(function (event) {
//         $(".burger,.header__menu-list, .hero__content, .header__menu-item").toggleClass("active");
//         $("body").toggleClass("lock");
//       });
//     });
// }


// var head = $('head');
// includeScripts(head);
// $(window).resize(function(){
// 	includeScripts(head);
// });

// function includeScripts(head){

// 	if ($('.max_width_768').is(':visible')) {
// 		$(document).ready(function () {
//         $(".burger").click(function (event) {
//           $(".burger,.header__menu-list, .hero__content, .header__menu-item").toggleClass("active");
//           $("body").toggleClass("lock");
//         });
//       });;
// 	}

// 	if ($('.max_width_479').is(':visible')) {
// 		head.append('<script type="text/javascript" src="mobile-479.js" id=”script-mobile-479”></script>');
// 		$('#script-mobile-800').remove();
// 	}

// }