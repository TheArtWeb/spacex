/* animation of header */
$(function () {
	$(window).scroll(function() {
	    $('.offer').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
    });
    
	$(window).scroll(function() {
	    $('.desktop').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
})


/* animation of 2nd section */
    $(function () {
    $(window).scroll(function() {
	    $('.advantages').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
    });

    $(window).scroll(function() {
	    $('.section2-tittle').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
})


/* animation of form */
    $(function () {
	$(window).scroll(function() {
	    $('.form-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
    });
    
	$(window).scroll(function() {
	    $('.form-dream').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
})


/* smooth scroll */
$(function(){

    $('.btn').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 400);
    });

});


/* click button */
var btn2 = document.querySelector('.btn2');

btn2.onclick = function () {
    alert('Заполните форму!');
}
