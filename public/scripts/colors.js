var colors = [
    "#ffffff", //"alb"
    "#2A56A5", //"albastru royal"
    "#E63741", //"rosu"
    "#DD9F5A", //"auriu"
    "#FFF1AE", //"galben pal"
    "#FAEE1F", //"galben"
    "#8C6CAE", //"lila"
    "#FABED8", //"roz bombon"
    "#EB1D8C", //"roz ciclam"
    "#9A223B", //"visiniu"
    "#FABDA1", //"somon"
    "#EB7933", //"portocaliu"
    "#1AAF49", //"verde iarba"
    "#232C65", //"bleumarin"
    "#E1D1B7", //"bej"
    "#54A4D7", //"bleu deschis"
    "#52B788", //"vernil menta"
    "#552F85", //"mov"
    "#1A90D0", //"bleu canard"
  ];
  
  var nume_culori = [
    "cod 1: alb",
    "cod 2: albastru royal",
    "cod 3: rosu",
    "cod 4: auriu",
    "cod 5: galben pai",
    "cod 6: galben",
    "cod 8: lila",
    "cod 10: roz bombon",
    "cod 11: roz ciclam",
    "cod 12: visiniu",
    "cod 14: somon",
    "cod 15: portocaliu",
    "cod 17: verde iarba",
    "cod 20: bleumarin",
    "cod 21: bej",
    "cod 23: bleu deschis",
    "cod 26: vernil menta",
    "cod 29: mov indigo",
    "cod 30: bleu caraibe",
  ];


var spans = $("div#colors_container").children();

for (var i = 0; i < 19; i++) {
  $(spans[i]).css("background-color", colors[i]);
}

$(spans).each(function (index) {
  $(this).click(() => {
    $("p#cod_culoare").text(nume_culori[index].toUpperCase());
  });
});