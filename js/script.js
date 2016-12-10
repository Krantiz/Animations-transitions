$(document).ready(function(){
  $("#entries").on('click', function(event) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
  });
});


$(document).ready(function(){
          $('#nav-icon2').click(function(){
            $(this).toggleClass('open');
            $(".menu-tabs-mobile").slideToggle(500);
          });
        });

       $("li").click(function(){
        $(".menu-tabs-mobile").slideUp();
        $('#nav-icon2').toggleClass('open');
      });

$(document).ready(function(){
  $("#sloganRedirect").on('click', function(event) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
  });
});

function showDiv() {
   	document.getElementById('expand-entries').style.display = "block";
   	document.getElementById('click-more').onclick = function (){
	document.getElementById('expand-entries1').style.display = "block";
	document.getElementById('click-more').onclick = function (){
	document.getElementById('expand-entries2').style.display = "block";
	document.getElementById('button1').style.display = "none";
}
}
}


