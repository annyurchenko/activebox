// $(document).ready(function () {
//   $(".burger").click(function (event) {
//     $(".burger,.header__menu-list, .hero__content, .header__menu-item").toggleClass("active");
//     $("body").toggleClass("lock");
//   });
// });


var menuHandler = function() {
  $(document).ready(function () {
      $(".burger, .header__menu-item").click(function (event) {
        $(".burger,.header__menu-list, .hero__content, .header__menu-item").toggleClass("active");
        $("body").toggleClass("lock");
      });
    });
}
$(window).on('resize', function() {
    if ($(window).width() < 768) {
        menuHandler();
    }
});
    
    if ($(window).width() < 768) { menuHandler(); }
    