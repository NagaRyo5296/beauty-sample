$(function () {
  //SPmenu
  $('.js-toggle-sp-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });

  //SP menu close
  $('.js-menu-item').on('click', function () {
    $(this).removeClass('active');
    $('.js-toggle-sp-menu-target').removeClass('active');
    $('.js-toggle-sp-menu').removeClass('active');
  });
});
