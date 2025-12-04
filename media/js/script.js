$(function(){

    $(".register-text").click(function(){
      $(".login-text").hide(400);
      $(".login-box").hide(400);
      $(".register-box").show(400);
    })
  
    $(".link-area-log").click(function(){
      $(".login-text").show(400);
      $(".register-box").hide(400);
      $(".login-box").show(400);
    })
  
  })
  
  $(function(){
  $( "div.conference-box-1" ).hover(function() {
    $(".name1").toggle();
  });
  $( "div.conference-box-2" ).hover(function() {
    $(".name2").toggle();
  });
  })
  
  function showChat()
  {
      var subject = $(this).attr('data-subject');
      var el = $('div.chat-popup textarea[name="msg"]');
      if (subject) {
          el.attr("data-subject", subject);
      } else {
          el.removeAttr("data-subject");
      }
      $(".chat-popup").show(300)
  }
  
  function disableChat()
  {
  }
  
  function enableChat()
  {
  }
  
  function messageSended()
  {
    $(".sended").show(500);
  }
  
  function hideMessageSended()
  {
    setTimeout(function() {
      $('.sended').fadeOut("slow");
    }, 3000);
  }
  
  function hideChat()
  {
      $(".chat-popup").hide(300);
  }
  
  function chatMessageFailed()
  {
      $(".error-send").show(500);
  }
  
  function hideChatMessageFailed()
  {
    setTimeout(function() {
      $('.error-send').fadeOut("slow");
    }, 3000);
  }
  
  function loading()
  {
     $(".load").show(300).sleep(10).hide(1000);
  }
  
  function sendChatMessage()
  {
      var el = $('div.chat-popup textarea[name="msg"]');
      var message = el.val();
      var subject = el.attr("data-subject");
      console.log(message,subject,el);
      var messageData = {
          "message": message,
      };
      if (subject) {
          messageData.subject = subject;
      }
  
      $.post({
          "url": "/api/post-message",
          "data": messageData,
          "dataType": "json",
      }).done(function(data){
          enableChat();
          $('div.chat-popup textarea[name="msg"]').val('');
          hideChat();
          messageSended();
          hideMessageSended();
      }).fail(function(){
          enableChat();
          hideChat();
          chatMessageFailed();
          hideChatMessageFailed();
      });
  }
  
  
  $(function(){
    $(".open-button").click(showChat);
    $(".btn.cancel").click(hideChat);
    $(".btn.send").click(sendChatMessage);
  })
  
  $(function(){
    $("#prog").click(function(){
      $(".spon-box").hide();
      $(".program-box").toggle(800)
    })
  })
  
  $(function(){
    $("#prg").click(function(){
      $(".sr-sponsors").hide(800)
      $(".program-bx").fadeIn(800)
    })
  })
  
  $(function(){
    $("#spons").click(function(){
      $(".program-bx").hide(1000)
      $(".sr-sponsors").fadeIn(800)
    })
  })
  
  $(function(){
    $("#spons").click(function(){
      $(".program-box").hide(1000);
      $(".spon-box").toggle(800)
    })
  })
  
  $(function(){
    $(".rating-button").click(function(){
      $(".rating-box").show(300)
    })
    $("#rating-cancel").click(function(){
      $(".rating-box").hide(300)
    })
      $(".btn-send").click(function(){
      $(".rating-box").hide(500)
      $(".rating-button").fadeOut(1000) 
    })
  })
  
  
  $(function(){
      $(".fas.fa-meh").click(function(){
       $(".fas.fa-meh").css("color", "#fffe03");
       $(".fas.fa-frown").css("color", "white");
       $(".fas.fa-smile-beam").css("color", "white");
  })
  })
  
  $(function(){
      $(".fas.fa-frown").click(function(){
       $(".fas.fa-frown").css("color", "#f94115");
       $(".fas.fa-meh").css("color", "white");
       $(".fas.fa-smile-beam").css("color", "white");
  })
  })
  
  $(function(){
      $(".fas.fa-smile-beam").click(function(){
       $(".fas.fa-frown").css("color", "white");
       $(".fas.fa-meh").css("color", "white");
       $(".fas.fa-smile-beam").css("color", "#65ee65");
  })
  })
  
  $(document).ready(function(){
    $('.menu-tab').click(function(){
      $('.menu-hide').toggleClass('show');
      $('.menu-tab').toggleClass('active');
    });
    $('a').click(function(){
      $('.menu-hide').removeClass('show');
      $('.menu-tab').removeClass('active');
    });
  });
  
  $(function(){
    $(".conference-text").slideToggle(1000);
    $(".technical-help").click(function(){
      $(".modal").slideToggle(500);
    })
    $(".close").click(function(){
      $(".modal").slideUp(500);
    })
  })
  
  /*SIGNIFY*/
  
  $(function(){
    $("#prez").click(function(){
      $(".sig-present").fadeIn(500)
      $(".sig-download").hide()
    })
  })
  
  $(function(){
    $("#kestazeni").click(function(){
      $(".sig-download").fadeIn(500)
      $(".sig-present").hide()
    })
  })
  
  $(function(){
    $(".mara").click(function(){
      $("#istvan").fadeIn(500)
      $(".moderator-text").fadeIn(500)
      $("#bodnar").hide()
      $("#monika").hide()
      $("#karoly").hide()
      $("#gabor").hide()
      $("#tomasz").hide()
    })
  })
  
  $(function(){
    $(".wask").click(function(){
      $("#bodnar").fadeIn(500)
      $("#istvan").hide()
      $("#karoly").hide()
      $("#monika").hide()
      $("#gabor").hide()
      $(".moderator-text").hide()
      $("#tomasz").hide()
    })
  })
  
  $(function(){
    $(".tomasz").click(function(){
      $("#tomasz").fadeIn(500)
      $("#istvan").hide()
      $("#karoly").hide()
      $("#monika").hide()
      $("#gabor").hide()
      $("#bodnar").hide()
      $(".moderator-text").hide()
    })
  })
  
  $(function(){
    $(".svrcek").click(function(){
      $("#gabor").fadeIn(500)
      $("#monika").hide()
      $("#karoly").hide()
      $("#istvan").hide()
      $("#bodnar").hide()
      $("#bauer").hide()
      $("#tomasz").hide()
    })
  })
  
  $(function(){
    $(".dublan").click(function(){
      $("#monika").fadeIn(500)
      $("#karoly").hide()
      $("#bodnar").hide()
      $("#istvan").hide()
      $("#gabor").hide()
      $(".moderator-text").hide(500)
      $("#tomasz").hide()
    })
  })
  
  $(function(){
    $(".vodrazka").click(function(){
      $("#karoly").fadeIn(500)
      $("#monika").hide()
      $("#istvan").hide()
      $("#gabor").hide()
      $("#bodnar").hide()
      $(".moderator-text").hide(500)
      $("#tomasz").hide()
    })
  })
  
  /*BASIC*/
  
  $(function(){
    $("#prg-circle").click(function(){
      $(".program-section").fadeIn(500)
      $(".partners-section").hide(500)
      $(".contact-section").hide(500)
      $(".expo-section").hide(500)
    })
  
    $("#partners-circle").click(function(){
      $(".partners-section").fadeIn(500)
      $(".program-section").hide(500)
      $(".contact-section").hide(500)
      $(".expo-section").hide(500)
    })
  
    $("#contact-circle").click(function(){
      $(".contact-section").fadeIn(500)
      $(".program-section").hide(500)
      $(".partners-section").hide(500)
      $(".expo-section").hide(500)
    })
  
      $("#expo-circle").click(function(){
      $(".expo-section").fadeIn(500)
      $(".contact-section").hide(500)
      $(".program-section").hide(500)
      $(".partners-section").hide(500)
    })
  })
  
  /*BETON*/
  $(function(){
    $("#prg-circle").click(function(){
      $(".program-section").fadeIn(500)
      $(".poradatele").hide(500)
      $(".contact-section").hide(500)
    })
  
    $("#partners-circle").click(function(){
      $(".poradatele").fadeIn(500)
      $(".program-section").hide(500)
      $(".contact-section").hide(500)
    })
  
    $("#contact-circle").click(function(){
      $(".contact-section").fadeIn(500)
      $(".program-section").hide(500)
      $(".poradatele").hide(500)
    })
  })
  
  
  
  $(function(){
    $(".kontakt-link").click(function(){
      $(".contact-section").fadeIn(500)    
      $(".program-section").hide(500)
      $(".poradatele").hide(500)
    })
  })
  
  $(function(){
    $("#part1").click(function(){
      $("#ex1").fadeIn(500)    
      $(".expo-choose").hide(500)
      $("#ex2").hide(500) 
      $("#ex3").hide(500) 
      $("#ex4").hide(500) 
      $("#ex5").hide(500) 
      $("#ex6").hide(500) 
      $("#ex7").hide(500) 
      $("#ex8").hide(500) 
    })
  
      $("#part2").click(function(){
      $("#ex2").fadeIn(500)    
      $(".expo-choose").hide(500)
      $("#ex1").hide(500) 
      $("#ex3").hide(500) 
      $("#ex4").hide(500) 
      $("#ex5").hide(500) 
      $("#ex6").hide(500) 
      $("#ex7").hide(500) 
      $("#ex8").hide(500) 
    })
  
      $("#part3").click(function(){
      $("#ex3").fadeIn(500)    
      $(".expo-choose").hide(500)
      $("#ex1").hide(500) 
      $("#ex2").hide(500) 
      $("#ex4").hide(500) 
      $("#ex5").hide(500) 
      $("#ex6").hide(500) 
      $("#ex7").hide(500) 
      $("#ex8").hide(500) 
    })
  
    $("#part4").click(function(){
      $("#ex4").fadeIn(500)    
      $(".expo-choose").hide(500)
      $("#ex2").hide(500) 
      $("#ex3").hide(500) 
      $("#ex1").hide(500) 
      $("#ex5").hide(500) 
      $("#ex6").hide(500) 
      $("#ex7").hide(500) 
      $("#ex8").hide(500) 
    })
  
      $("#part5").click(function(){
      $("#ex5").fadeIn(500)    
      $(".expo-choose").hide(500)
      $("#ex1").hide(500) 
      $("#ex3").hide(500) 
      $("#ex4").hide(500) 
      $("#ex2").hide(500) 
      $("#ex6").hide(500) 
      $("#ex7").hide(500) 
      $("#ex8").hide(500) 
    })
  
      $("#part6").click(function(){
      $("#ex6").fadeIn(500)    
      $(".expo-choose").hide(500)
      $("#ex1").hide(500) 
      $("#ex2").hide(500) 
      $("#ex4").hide(500) 
      $("#ex5").hide(500) 
      $("#ex3").hide(500) 
      $("#ex7").hide(500)
      $("#ex8").hide(500)  
    })    
  
      $("#part7").click(function(){
      $("#ex7").fadeIn(500)    
      $(".expo-choose").hide(500)
      $("#ex1").hide(500) 
      $("#ex2").hide(500) 
      $("#ex4").hide(500) 
      $("#ex5").hide(500) 
      $("#ex3").hide(500) 
      $("#ex6").hide(500) 
      $("#ex8").hide(500) 
    }) 
  
      $("#part8").click(function(){
      $("#ex8").fadeIn(500)    
      $(".expo-choose").hide(500)
      $("#ex1").hide(500) 
      $("#ex2").hide(500) 
      $("#ex4").hide(500) 
      $("#ex5").hide(500) 
      $("#ex3").hide(500) 
      $("#ex6").hide(500) 
      $("#ex7").hide(500) 
    })
  
        $("#part9").click(function(){
      $("#ex9").fadeIn(500)    
      $(".expo-choose").hide(500)
      $("#ex1").hide(500) 
      $("#ex2").hide(500) 
      $("#ex4").hide(500) 
      $("#ex5").hide(500) 
      $("#ex3").hide(500) 
      $("#ex6").hide(500) 
      $("#ex7").hide(500) 
      $("#ex8").hide(500)
    })   
  
    $(".back-exp").click(function(){
      $("#ex1").hide(500)  
      $("#ex2").hide(500) 
      $("#ex3").hide(500) 
      $("#ex4").hide(500)   
      $("#ex5").hide(500) 
      $("#ex6").hide(500) 
      $("#ex7").hide(500) 
      $("#ex8").hide(500) 
      $("#ex9").hide(500)
      $(".expo-choose").fadeIn(500)
    })
  
    $("#stream-circle").click(function(){
      $(".stream3-section").hide(500)
      $(".stream2-section").show(500)
    })
  
    $("#partners-circle").click(function(){
      $(".stream2-section").hide(500)
      $(".stream3-section").show(500)
    })
  
    $("#fstream").click(function(){
      $("#first-streams").css("display", "flex").fadeIn(500);
      $("#second-streams").hide(500);
    })
  
    $("#sstream").click(function(){
      $("#second-streams").css("display", "flex").fadeIn(500);
      $("#first-streams").hide(500);
    }) 
  
    $("#master-logo").click(function(){
      $("#masters").css("display", "grid").fadeIn(500);
    }) 
  
    $(".souhlas").click(function(){
      $(".agree-boxes").show()
    })
  
    $(".tech-box").click(function(){
      $(".tech-box-info").show(500);
    })
  
    $("#prograner").click(function(){
      $(".programec-box").show(500);
    })
  
    $("#prog").click(function(){
      $(".programec-box").show(500);
      $(".vids").hide()
    })
  
    $("#prog").click(function(){
      $(".program-box").show(500)
      $("#postr").hide(500)
      $(".vids").hide()
    })  
  
    $("#spons-box").click(function(){
      $(".spons").fadeIn(500)
      $("#postr").hide()
      $(".programec-box").hide(500)
    })
  
    $("#prez").click(function(){
      $(".programec-box").fadeIn(500)
    })
  
  })
  
  
  $(function(){
    $("#prez").click(function(){
      console.log("clicked")
      $(".programec-box").show(500)
    })
  
    $("#posters").click(function(){
      console.log("clicked")
      $("#postr").show(500)
      $(".spons").hide()
      $(".programec-box").hide(500)
      $(".vids").hide()
    })
  
    $("#vidres").click(function(){
      console.log("clicked")
      $(".vids").show(500)
      $(".spons").hide()
      $(".programec-box").hide()
      $("#postr").hide()
    })
  
      $("#flyer").click(function(){
      console.log("clicked");
      $(".flyer-box").show()
      $(".spon-box").hide()
  
    })
  
      $("#spnsrs").click(function(){
        $(".flyer-box").hide()
        $(".spon-box").show()
        $(".prev-years").hide(500)
      })
  
  
      $("#progr").click(function(){
        $(".icc-program").show(500)
        $(".spon-box").hide(500)
        $(".prev-years").hide(500)
  
      })
  
      $("#previous").click(function(){
        $(".prev-years").show(500)
        $(".spon-box").hide(500)
      })
  
      $(".prev-2018").click(function(){
        $(".old-years").show()
        $(".year-2018").show()
        $(".year-2019").hide()
        $(".year-2021").hide()
        $(".year-2022").hide()
        $(".year-2023").hide()
        $(".year-2024").hide()
      })
  
      $(".prev-2019").click(function(){
        $(".old-years").show()
        $(".year-2019").show()
        $(".year-2018").hide()
        $(".year-2021").hide()
        $(".year-2022").hide()
        $(".year-2023").hide()
        $(".year-2024").hide()
      })
  
      $(".prev-2021").click(function(){
        $(".old-years").show()
        $(".year-2021").show()
        $(".year-2019").hide()
        $(".year-2018").hide()
        $(".year-2022").hide()
        $(".year-2023").hide()
        $(".year-2024").hide()
      })
  
      $(".prev-2022").click(function(){
        $(".old-years").show()
        $(".year-2022").show()
        $(".year-2021").hide()
        $(".year-2019").hide()
        $(".year-2018").hide()
        $(".year-2023").hide()
        $(".year-2024").hide()
      })
      $(".prev-2023").click(function(){
        $(".old-years").show()
        $(".year-2023").show()
        $(".year-2021").hide()
        $(".year-2019").hide()
        $(".year-2018").hide()
        $(".year-2022").hide()
        $(".year-2024").hide()
      })
      $(".prev-2024").click(function(){
        $(".old-years").show()
        $(".year-2023").hide()
        $(".year-2021").hide()
        $(".year-2019").hide()
        $(".year-2018").hide()
        $(".year-2022").hide()
        $(".year-2024").show()
        console.log('cklc')
      })
  
  
      $(".icc-gallery").hide()
      $(".close-gallery").hide()
  
      $("#gallery").click(function(){
        $(".open-gallery").toggle()
        $(".close-gallery").toggle()
        $(".icc-gallery").toggle(500)
        console.log("dsdsadsa")
      })
  })
  
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("gal-fotka");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
  $(function(){
    $('.dum').click(function(){
      $('.modaler').show()
      $('.modaler').css("display", "grid");
      console.log('show')
    })
    $('.close').click(function(){
      $('.modaler').hide()
      console.log('hide')
    })
  })
