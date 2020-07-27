// //    what we do section
$(document).ready(function() {
$("img").click(function () {
  $(".show").toogle();
  $(".hide").toogle();

});
// giving feedback to the customer
$("button").click(function () {
  alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
});


// portifolio section 
$(".col-mod-3").hover(function () {
  $(this).children(".card-1").fadeToggle(1000, "linear");
});
});

