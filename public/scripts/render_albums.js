$(document).ready(() => {
  $.getJSON("../assets/albume.json", function (data) {
    const titles = data.titles;
    const images = data.images;
    const descriptions = data.descriptions;

    function createCard(col, i) {
      let card = document.createElement("div");
      $(card).addClass("card");

      let title = document.createElement("h3");
      $(title).addClass("albume_title");
      $(title).text(titles[i]);
      $(card).append(title);

      let img_cont = document.createElement("div");
      $(img_cont).addClass("img_cont");

      let image = document.createElement("img");
      $(image).attr("src", images[i]);
      $(image).attr("id", i);
      $(image).addClass("album");

      let hover = document.createElement("div");
      $(hover).addClass("img_hover")
      let zoom_ic = document.createElement("img")
      $(zoom_ic).attr("src", "../assets/zoom_ic.svg");
      $(zoom_ic).addClass("zoom_ic");

      $(hover).append(zoom_ic);
      $(img_cont).append(image);
      $(img_cont).append(hover);

      $(card).append(img_cont);

      let desc_cont = document.createElement("p");

      for (var d in descriptions[i]) {
        let desc = document.createElement("p");
        $(desc).addClass("albume_desc");
        $(desc).text(descriptions[i][d]);
        $(desc_cont).append(desc);
      }
      $(card).append(desc_cont);

      let seemoreBtn = document.createElement("img");
      $(seemoreBtn).attr("src", "./assets/see_more.svg");
      $(seemoreBtn).addClass("seeMore");
      $(card).append(seemoreBtn);

      $(col).append(card);

      $(card).mouseenter(()=>{
        $(hover).animate({opacity: 0.7}, 100);
      }).mouseleave(()=>{
        $(hover).animate({opacity: 0}, 100);
      })

      $(seemoreBtn).click(() => {
        $(desc_cont).children().toggle({ display: "block" });
        $(image).toggle({ display: "inline" });
        $(hover).toggle();
        $(hover).animate({opacity: 0.7}, 1000);
        $(hover).animate({opacity: 0}, 1000);
      });

      $(hover).click(()=>{
        $("nav").toggle();
        $("section#modal").fadeIn();
        $("body").css({ overflow: "hidden" });
        let index = $(image).attr("id");
        // !!!!!!!!!!!!!!!!!!
        setTimeout(()=>{
          $("img#album_pic").attr("src", `../assets/large pics/${index}.jpg`);
        }, 1500);
        
      })
    }

    const col1 = $("div#col1");
    const col2 = $("div#col2");
    const sub1 = $("div#sub1");
    const sub2 = $("div#sub2");

    for (var i = 0; i < 4; i++) {
      createCard(col1, i);
    }
    for (var i = 8; i < 12; i++) {
      createCard(col2, i);
    }
    for (var i = 6; i < 8; i++) {
      createCard(sub1, i);
    }
    for (var i = 4; i < 6; i++) {
      createCard(sub2, i);
    }
  });

  $("img#x").click(() => {
    $("section#modal").fadeOut();
    $("nav").toggle();
    $("body").css({ overflow: "auto" });
    $("img#album_pic").attr("src", ``);
  });
});
