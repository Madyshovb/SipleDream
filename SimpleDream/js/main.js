

$('.faq_item_title_inner').on('click',function(){
        $(this).parents('.faq_item').find('.faq_item_body').slideToggle(300);
        $(this).toggleClass('open');
        if ($(this).hasClass('show_all')){
                if ($(this).hasClass('open')) {
                    $(this).html('Свернуть все');
                $('.faq_item_title_inner:not(.open)').trigger('click');
            } else {
                $(this).html('Смотреть все');
                $('.faq_item_title_inner.open').trigger('click');
            }
        }
    });



  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  $(function(){

    $('#link22').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#section2').offset().top }, 1000);
      e.preventDefault();
    });
    
    });
    $(function(){

    $('#link33').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#free').offset().top }, 1000);
       e.preventDefault();
     });
      
      });

      $(function(){

        $('#link44').on('click', function(e){
          $('html,body').stop().animate({ scrollTop: $('#section4').offset().top }, 1000);
           e.preventDefault();
         });
          
          });
      
          $(function(){

            $('#link55').on('click', function(e){
              $('html,body').stop().animate({ scrollTop: $('#section3').offset().top }, 1000);
               e.preventDefault();
             });
              
              });
              $(function(){

                $('#link66').on('click', function(e){
                  $('html,body').stop().animate({ scrollTop: $('#insta').offset().top }, 1000);
                   e.preventDefault();
                 });
                  
                  });
                  $(function(){

                    $('#link77').on('click', function(e){
                      $('html,body').stop().animate({ scrollTop: $('#ends').offset().top }, 1000);
                       e.preventDefault();
                     });
                      
                      });
                      $(function(){

                        $('#link88').on('click', function(e){
                          $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 1000);
                           e.preventDefault();
                         });
                          
                          });

    $(function(){

      $('#link2').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#section2').offset().top }, 1000);
        e.preventDefault();
      });
      
      });
      $(function(){

      $('#link3').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#free').offset().top }, 1000);
         e.preventDefault();
       });
        
        });

        $(function(){

          $('#link4').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#section4').offset().top }, 1000);
             e.preventDefault();
           });
            
            });
        
            $(function(){

              $('#link5').on('click', function(e){
                $('html,body').stop().animate({ scrollTop: $('#section3').offset().top }, 1000);
                 e.preventDefault();
               });
                
                });
                $(function(){

                  $('#link6').on('click', function(e){
                    $('html,body').stop().animate({ scrollTop: $('#insta').offset().top }, 1000);
                     e.preventDefault();
                   });
                    
                    });
                    $(function(){

                      $('#link7').on('click', function(e){
                        $('html,body').stop().animate({ scrollTop: $('#ends').offset().top }, 1000);
                         e.preventDefault();
                       });
                        
                        });
                        $(function(){

                          $('#link8').on('click', function(e){
                            $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 1000);
                             e.preventDefault();
                           });
                            
                            });

                            $(function(){

                          $('#local').on('click', function(e){
                            $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 1000);
                             e.preventDefault();
                           });
                            
                            });






                      

                            $(window).ready(function(){
                              $("#section2").fadeIn('slow');
                           });



                           $('.menu-burger').click(function(){
                            $('.m2').toggleClass('close');
                            $('#bur').toggleClass('open');
                         },);

                         $('.menu-link2').click(function(){
                          $('.m2').addClass('close');
                       },);


                         $(document).ready(function(){
                          $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
                            $(this).toggleClass('open');
                          });
                        });

                        



    