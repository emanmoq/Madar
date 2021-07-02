jQuery(function ($) {


    $('.articlesCarousel').owlCarousel({
        autoplay: true,
        loop: false,
        margin: 10,
        nav: true,
        rtl:true,
        dots:false,
        navText : ['<i class="fas fa-arrow-right"></i>','<i class="fas fa-arrow-left"></i>'],
    
        responsive: {
          0: {
            items: 1,
    
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
    
          }
          
    
        }
      });
      $('.middleEastSlider').owlCarousel({
        autoplay: false,
        loop: false,
        margin: 15,
        nav: false,
        rtl:true,
        dots:false,
    
        responsive: {
          0: {
            items: 1,
    
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
    
          }
          
    
        }
      });
      $(".close").click(function(){
          $(".collapse").removeClass('show')
      });
      $(".searchboxclose").click(function(){
        $(".mobilesearchBox").css("display","none");
    });
      $(".mobilesearch").click(function(){
        $(".mobilesearchBox").css("display","block");
      });
      $(".Urgent .close").click(function(){
        $(".Urgent").css("display","none");
    });
    $("body ").click(function(){
      $(".Urgent").css({opacity:"1",top:"0"});
  });
    
      

});


setInterval(() => {
  $(".UrgentDetails").removeClass('UrgentDetailsTop');
  if((next=$(".UrgentDetails.active").next('.UrgentDetails')).length){
    // $(".UrgentDetails.active").slideUp(300,function(){
    //   next.slideDown( 300);
    // });
    $(".UrgentDetails.active").addClass('UrgentDetailsTop').removeClass('active');
    next.addClass('active');
  }else{
    // $(".UrgentDetails.active").slideUp(300,function(){
    //   $(".UrgentDetails").first().slideDown( 300);

    // });

    $(".UrgentDetails.active").addClass('UrgentDetailsTop').removeClass('active');
    $(".UrgentDetails").first().addClass('active');

  }
}, 3000);