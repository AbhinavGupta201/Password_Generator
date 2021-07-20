//
$(document).ready(function () {
  
    $("#myform").submit(function (e) {
      var len = $("#length").val();
      var numeric = $("#numeric_yes").is(":checked");
      var special = $("#special_yes").is(":checked");
      if (len.length == 0) len = "8";
      let req = {};
      req.length = len;
      if (numeric == true) req.numeric = "on";
      else req.numeric = "off";
      if (special == true) req.special = "on";
      else req.special = "off";
      e.preventDefault();
      $.post('/form',req,function(res){
          $("#Password_List").empty();
          $("#Password_List").append(res);
  
      })
    });
  });
  