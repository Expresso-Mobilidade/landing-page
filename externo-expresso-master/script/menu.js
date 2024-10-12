$(document).ready(function () {
  /* == Inspired from jQuery Magic Line Using Transforms
A PEN BY Todd Miller == */
  /* Add/Remove class active on li on click
  ======================= */
  $("#navbar-nav li").on("click", function () {
    $("#navbar-nav li.item-link").removeClass("item-link");
    $(this).addClass("item-link");
  });

  /* Function for vertical sliding menu
  ======================= */
  function slidingLine() {
    var $el, topPos, newHeight,
      $mainNav = $("#navbar-nav");

    // Create a new li and append it to ul
    $mainNav.append("<li id='slidingLine'></li>");
    var $slidingLine = $("#slidingLine");

    $slidingLine // Defining initial height and position
      .height($(".item-link").outerHeight())
      .css("top", $(".item-link").position().top)
      .data("origTop", $slidingLine.position().top)
      .data("origHeight", $slidingLine.height());

    $("#navbar-nav li").hover(function () { // Set new height and position
      $el = $(this);
      topPos = $el.position().top;
      newHeight = $el.outerHeight();
      $slidingLine.stop().animate({
        top: topPos,
        height: newHeight
      });
    }, function () { // Animate
      $slidingLine.stop().animate({
        top: $(".item-link").position().top,
        height: $(".item-link").outerHeight()
      });
    });
  }

  slidingLine();
});

function accordion(id) {
  let idElemento = document.querySelector("#" + id);
  let label = document.querySelector("." + id);

  if (idElemento.checked) {
    label.style.backgroundColor = "#2631FF";
    label.style.borderColor = "#2631FF";
  } else {
    label.style.backgroundColor = "#000000";
    label.style.borderColor = "#000000";
  }
}