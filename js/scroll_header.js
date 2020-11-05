$(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop()>50) {
          $('header').css({
            'top': '-50px',
          })
  
      }
      else {
          $('header').css({
            'top': '0px',
            'background-color': '#141414',
          })
      }
      if ($(this).scrollTop()>650) {
        $('header').css({
          'background-color': '#f5f5f5',
          'color': '#141414',
          'box-shadow': '2px 2px 4px rgba(45,45,45,0.2)'
        })
        $('.logo').html("<img src='images/logo_pc_black.png' alt='logo_black'>");
      }
      else {
        $('header').css({
          'background-color': '#141414',
          'color': '#f5f5f5',
          'box-shadow': '0px 0px 0px rgba(45,45,45,0.2)'
        })
        $('.logo').html("<img src='images/logo_pc_150.png' alt='logo'>");
      }
  })
    })
