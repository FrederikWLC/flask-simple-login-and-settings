 $(window).on("load", function () {
		if (! $.cookie("hasEntered")){
      window.loading_delay = 0;
			unload(window.loading_delay);
   $.cookie("hasEntered", true);
}
else {
  window.loading_delay = 0;
	unload(window.loading_delay);
}});

function unload(_delay) {
	$("#loader").delay(_delay).fadeOut("slow");
	$("#page").css('display', 'block');
}

 function swap_url(url){
     window.history.pushState("", "", url);
 }

function flash(c,bgc,txt){
 $("#flash").stop(stopAll=true);
 $("#flash").css('color', c);
 $("#flash").css('background-color', bgc);
 $("#flash").animate({ opacity: 1, queue: false });
 $("#flash").children().text(txt);
 $("#flash").delay(1500).animate({ opacity: 0, queue: false });
}
