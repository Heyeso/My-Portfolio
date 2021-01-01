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

    // about page scroll anim





    
});