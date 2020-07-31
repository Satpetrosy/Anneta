
$(document).ready(function () {

    $(".navbar-btn").click(function () {
        $(".nav-menu").toggleClass("open");
    });

});



const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
imgs.forEach(img => img.addEventListener('click', imgClick));

const opacity = 0.5;

//set First image opacity


function imgClick(e) {
    //Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //change image src clicked
    current.src = e.target.src;

    //add Animation to current image
    current.classList.add('fade-in');

    //remove Animation
    setTimeout(() => {
        current.classList.remove('fade-in');
    }, 500);

    //change opacity of image clicked
    e.target.style.opacity = opacity;

}

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');

    if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
        // clear and hide result container when we press close
        container.find('.result-container').fadeOut(100, function(){$(this).empty();});
    }
}

function submitFn(obj, evt){
    value = $(obj).find('.search-input').val().trim();

    _html = "Searching for: ";
    if(!value.length){
        _html = "Ehem, I can't search nothing";
    }
    else{
        _html += "<b>" + value + "</b>";
    }

    $(obj).find('.result-container').html('<span>' + _html + '</span>');
    $(obj).find('.result-container').fadeIn(100);

    evt.preventDefault();
}