$(function () {

   
    $('.carousel').carousel({
        interval: 2000
      })

      function toggling (btn,target){
        btn.click(function(e){
            target.toggle('2000')
          })
      }

      toggling($('#workExp'),$('.workExpGp'))
      toggling($('#edu'),$('.eduGp'))
      toggling($('#extra'),$('.extraGp'))
    $('#bigStar').hover(function(e){
        $(this).fadeToggle('slow')
    })

    $("#bigStar").click(function () {
        $(".ball").animate({ "height": "100%", "width": "100%","opacity":"1"})
        $("#pxMan").animate({ "height": "70%", "width": "12%","opacity":"1"})
        $(this).animate({"fontSize":"18px"}).fadeTo(1000,0)
        setInterval(function(){
            $(".imgGp i").fadeToggle(500)
        },2000);
            if ($(window).width() <= 768) { 
        $(".content2").animate({"line-height":"2em"})
        $(".imgGp i").remove()
            } else if ($(window).width() > 768) { 
                $(".content2").animate({"line-height":"4em"})
                $(".imgGp i").animate({"opacity":"1"})
            }})

    });     