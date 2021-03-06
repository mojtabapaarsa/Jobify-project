//------------------------ SideBar Menu ----------------
$(document).ready(function(){
    $('.sidebar-icon').click(function(e){
        let sideMenu = $('.side-menu');
        e.preventDefault()
        sideMenu.show();
        sideMenu.animate({
            right: '0'

        },500)

      
            $('body').append('<div class="back-side-menu"></div>');
        $('.back-side-menu').click(function(){
            let sideMenu = $('.side-menu');
            sideMenu.animate({
                right: '-250px'
            },500 , function(){
                sideMenu.hide()
            });
            $(this).remove()
        })

    })
})


////////////////// Counter 
const counters=document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText='0';

    const updateCounter = () => {
        const target= +counter.getAttribute('data-target');
        const c= +counter.innerText;

        const increment=target / 200;

        if(c<target){
            counter.innerText=`${Math.ceil(c+increment)}`
            setTimeout(updateCounter,2)
        }else{
            counter.innerText=target
        }
    }
    updateCounter()
})

// OWL Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    rtl:true,
    nav:true,
    autoplay:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

// Scroll To Top

$(window).scroll(function () {
    if($(this).scrollTop() >= 200){
        $('#top').css({
            
            'bottom':'20px'
        })
    }
    else{
        $('#top').css({
         'bottom':'-60px'
        })
    }
 })
 $('#top').click(function(e){
     e.preventDefault();
     $('body,html').animate({
         scrollTop:0
     },1000)
 })

 