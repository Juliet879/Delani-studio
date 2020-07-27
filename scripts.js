
$(document).ready(function(){
  $(".doing1").click(function(){
    $("#hide1").toggle();
    $("#show1").toggle();
  })
})
$(document).ready(function(){
  $(".doing2").click(function(){
    $("#hide2").toggle();
    $("#show2").toggle();
  })
})
$(document).ready(function(){
  $(".doing3").click(function(){
    $("#hide3").toggle();
    $("#show3").toggle();
  })
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
//  porfolio
$(document).ready(function(){
  $(".naming").hover(function(){
    $(this).find("div").toggleClass("text ");
  })

})