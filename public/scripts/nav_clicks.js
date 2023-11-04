$(window).on("load", function () {
  function navScroll(nav, pos) {
    $(nav).click(() => {
      $("html, body").animate({ scrollTop: pos }, 100);
    });
  }

  navScroll($("div#navTop"), 0);

  navScroll(
    $("h3#scrollbtn, li#about"),
    $("section#social_proove").position().top - 46
  );

  navScroll($("li#robe"), $("section#robe").position().top - 50);

  navScroll($("li#esarfe"), $("section#esarfe").position().top - 50);

  navScroll($("li#albume"), $("article#albume").position().top - 50);

  navScroll($("li#contact, button#hero_contact"), 999999999999999);
});
