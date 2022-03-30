$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".burger,.header__menu-list, .hero__content").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
