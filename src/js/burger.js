// $(document).ready(function () {
//   $(".burger").click(function (event) {
//     $(".burger,.header__menu-list, .hero__content, .header__menu-item").toggleClass("active");
//     $("body").toggleClass("lock");
//   });
// });


if ($(window).width() < 768) { menuHandler(); }

$(window).on('resize', function() {
    if ($(window).width() < 768) {
        menuHandler();
    }
});

var menuHandler = function() {
  $(document).ready(function () {
      $(".burger, .header__menu-item").click(function (event) {
        $(".burger,.header__menu-list, .hero__content, .header__menu-item").toggleClass("active");
        $("body").toggleClass("lock");
      });
    });
}