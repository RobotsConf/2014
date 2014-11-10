
function f(e) {
	e.stopPropagation();
	e.preventDefault();
}


function scrollTo(_target) {
    var target = $(_target);
    if (target.length)
    {
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        setTimeout(function () { window.location.hash=(_target); }, 1000);
        return false;
    }
}

function activateMenu(key) {

	$(".nav .active").removeClass("active");
	$("#"+key).addClass("active");
}

function equalHeight() {
  $('.equalHeight').each(function() {
    if($(window).width() > 992) {
      var eHeight = $(this).innerHeight();
      $(this).find('div').outerHeight(eHeight);
    } else {
      $(this).find('div').outerHeight('auto');
    }
  });
}

$(function () {
  equalHeight();
  $(window).resize(equalHeight);
});
