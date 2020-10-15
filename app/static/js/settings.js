function message(status, box_ids, shake=false) {
  $(".feedback").stop(stopAll=true);
  box_ids.forEach( function (box_id, index) {
    if (shake) {
    $("#"+box_id).effect("shake", {direction: "right", times: 2, distance: 8}, 350);
  }
  $("#feedback-"+box_id).animate({ opacity: 1, queue: false })

  $("#feedback-"+box_id).text(status);
  $("#feedback-"+box_id).delay(2000).animate({ opacity: 0, queue: false });
});
}

function apply_changes() {
  var formData = new FormData();
     formData.append("email", $("#email-field").val());
     formData.append("phone", $("#phone-field").val());
$.post({
      type: "POST",
      url: "/settings/",
      data: formData,
      processData: false,
      contentType: false,
      success(response) {
        var response = JSON.parse(response);
        var status = response["status"];
        if (status === "success") { flash("#ffff","#48c774","Successfully applied changes") }
        else if (status === "no changes") {}
        else{message(status, response["box_ids"], true);}

      }});
}

$(document).on("click", "#apply-button", function() {
    apply_changes();
});
