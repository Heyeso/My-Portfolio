// as page loads

$(document).ready(function () {

    // screen click effect
    $(document).click((event)=> {
        let mouseX = event.pageX - $(".click").width()/2;
        let mouseY = event.pageY - $(".click").height()/2;

        $(".click").css({
            "top": mouseY,
            "left": mouseX,

        })
        $(".click").addClass("animate")
        setTimeout(function () { 
            $(".click").removeClass("animate");
        }, 600);
        
    })

    // text animation




    //  animation on scroll
    $(window).scroll( function(){
        if(($(".pg-menu").offset().top + 100) > $(window).height()) {
            $(".pg-menu").css({
                "background-color": "black",
                transition: "all 0.3s ease-in"
            })
        }
        else {
            $(".pg-menu").css({
                "background-color": "rgba(0,0,0,0)",
                transition: "all 0.3s ease-in"
            })
        }

        $('.opt').each( function(i){
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            $(".opt").slideDown();
            if( bottom_of_window > (bottom_of_object)){
                $(this).addClass("come-in");
                $(this).css({
                    'opacity':'1',
                    transition: "all 0.3s ease-out"
                }, { queue: false });
            }
            
        }); 
    
    });
    
});