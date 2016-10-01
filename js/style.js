function sizeBanner() {
  $('div.banner').css({
    width: $(window).width(),
    height: $(window).height() * 0.9,
    overflow: 'hidden'
  })
}

function toggleAppDownloadFloaterVisibility() {
  if ($(window).scrollTop() > $('div.banner:first').height() - 300) {
    $('div.download-floater').show();
  } else {
    $('div.download-floater').hide();
  }
}

function toggleAppLogoFloaterVisibility() {
  if ($(window).scrollTop() > $('div.banner:first').height() - 300) {
    $('div.logo-floater').show();
  } else {
    $('div.logo-floater').hide();
  }
}

$(function () {
  // $(window).on('resize', sizeBanner);
  // sizeBanner();

  // $(window).on('scroll', toggleAppDownloadFloaterVisibility);
  // toggleAppDownloadFloaterVisibility();
  //
  // $(window).on('scroll', toggleAppLogoFloaterVisibility);
  // toggleAppLogoFloaterVisibility();
});
