// //    what we do section
$('.doing').click(function () {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
  });
  // giving feedback to the customer
  $("button").click(function () {
    var client = document.getElementById('nameDetail').value;
    alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    omonge.preventDefault();
  });
  
  //portifolio section 
  $(".col-mod-3").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });