$(document).ready(function() {

	$(".nav_icon").click(function() {
		$(".navMob").slideToggle("fast")
		$(".dark_screen").toggle()
	})

	$(".navMobItem").click(function() {
		$(".navMob").slideUp("fast")
		$(".dark_screen").css("display", "none")
	})

	$(".dark_screen").mouseup(function() {
	    $(".navMob").slideUp("fast")
	    $(this).hide()
	})

	$(".lights").click(function() {
		$(this).toggleClass("light-off")
		$("body").toggleClass("crazy-class")
		$(".header_lights_tip").stop(false, true)
	})

	$(window).scroll(function() {
		if ($(this).scrollTop() > 750) {
		    $(".lights").addClass("noAnime");
		    $(".deskNav").addClass("noAnime");
		    $(".deskNav ul li a").addClass("noAnime")
		    $(".navIn").addClass("noAnime")
		    $(".header_lights_tip").css({"display": "none"})
		    $(".serviceBox").addClass("serviceBoxAnime")
		    $(".serviceBox").css({"opacity": "1"})
		    $(".service_tittle").addClass("serviceBoxAnime")
		    $(".service_tittle").css({"opacity": "1"})
		}
	})

	$(".header_lights_tip").delay(4000).animate({bottom: "0"}, "slow", function() {
		$(".header_lights_tip").delay(5000).animate({bottom: "-200px"}, function() {
			$(".header_lights_tip").css({"display": "none"})
		})
	})

})

const y = new Date();
document.getElementById("year").innerHTML = y.getFullYear()