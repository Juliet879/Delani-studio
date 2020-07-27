// //    what we do section
$(document).ready(function() {
  $(("#hide")).click(function () {
    $("#hide").slideDown().hide;
    $("#show").show();
});
  $(("#show")).click(function () {
    $("#show").slideUp();
    $("#hide").slideDown();
});
})
// giving feedback to the customer

$(document).ready(function(){
  $("form#formValidity").submit(function(event){
    // event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#textarea").val();
    if (name && email){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });
});
