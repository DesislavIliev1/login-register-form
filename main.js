// import Swup from 'https://unpkg.com/swup@4?module'
// const swup = new Swup();

$(function(){

    //creating a style object for the ripple effect
    function RippleStyle(width, height, posX, posY){
      this.width = ( width <= height ) ? height : width;
      this.height = ( width <= height ) ? height : width;
      this.top = posY - (this.height * 0.5);
      this.left = posX - (this.width * 0.5);
    }
  
    $('.btn').on('mousedown', function(e){
      //appending an element with a class name "btn-ripple"
      var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);
  
      //getting the button's offset position
      var pos = $(this).offset();
  
      //get the button's width and height
      var width = $(this).outerWidth();
      var height = $(this).outerHeight();
  
      //get the cursor's x and y position within the button
      var posX = e.pageX - pos.left;
      var posY = e.pageY - pos.top;
  
      //adding a css style to the ripple effect
      var rippleStyle = new RippleStyle(width, height, posX, posY);
      rippleEl.css(rippleStyle);
    });
  
    //this event listener will be triggered once the ripple animation is done
    $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
      $(this).remove();
    });


    $('.btn-register').on('click', function(){
      let username = $('.reg-username').val();
      let email = $('.reg-email').val();
      let phone = $('.reg-phone').val();
      let password = $('.reg-password').val();
      let regex = /\D/;

      if(username.length < 6){
        $('.reg-username').css({"border-color":"red", "animation":"shake 0.4s" });
       }
       else if((!email.includes("@")) || (email.length < 5)){
        $('.reg-email').css({"border-color":"red", "animation":"shake 0.4s" });

      }
      else if(regex.test(phone)){
        $('.reg-phone').css({"border-color":"red", "animation":"shake 0.4s" });
      }
      else if(password.length < 6){
        $('.reg-password').css({"border-color":"red", "animation":"shake 0.4s" })
      }
      else{
        Swal.fire({
          icon: 'success',
          title:"Successfully registered"});}
      
    })


    $('.btn-login').on('click', function(){
      let logUsername = $('.log-username').val();
      let logPassword = $('.log-password').val();
      if(logUsername.length < 6){
        $('.log-username').css({"border-color":"red", "animation":"shake 0.4s" });
       }
       else if(logPassword.length < 6){
        $('.log-password').css({"border-color":"red", "animation":"shake 0.4s" });
      }
      else{
        $(location).attr("href" ,"/page.html");
       

       }

     });

     toggleDivs();
       
     
  });

  function toggleDivs(){
    
 $('.toggle-trigger').on('click',function(e){
  e.stopImmediatePropagation()
  var content = $(this).next(".toggle-area");
  $('.toggle-area').not(content).slideUp();
  $(this).closest('.toggle-wrap').find('.toggle-area').slideToggle();
  

  

  // e.preventDefault();
   
  // $(this).closest('.toggle-wrap').find('.toggle-area').slideToggle();
  

 
 })
}