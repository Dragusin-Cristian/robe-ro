$(document).ready(() => {

  $("img#burger").click(() => {
    $("img#burger").toggleClass("rotated");

    $("ul#navLinks").toggle({display: "block"});
  });
});
