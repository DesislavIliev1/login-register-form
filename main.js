// import Swup from 'https://unpkg.com/swup@4?module'
// const swup = new Swup();

$(function(){

//calling ripple function
  rippleEffect();

  //calling login function
  loginValidation();

//calling register function
  registerValidation();

    
       
     
  });
  // function that checks if the logun input is valid
  function loginValidation(){
    $('.btn-login').on('click', function(){
      //storing the inputs in variables
      let logUsername = $('.log-username').val();
      let logPassword = $('.log-password').val();
      // check if the username is at least 6 digits - if its not the hover turn red and shake
      if(logUsername.length < 6){
        $('.log-username').css({"border-color":"red", "animation":"shake 0.4s" });
       }
       // check if the password is at least 6 digits - if its not the hover turn red and shake
       else if(logPassword.length < 6){
        $('.log-password').css({"border-color":"red", "animation":"shake 0.4s" });
      }
      //if the username and the password cover the requirements log to the page
      else{
        $(location).attr("href" ,"/page.html");
       

       }

     });

  }

 // function that checks if the register input is valid
  function registerValidation(){

    $('.btn-register').on('click', function(){
      //storing the register input in variables
      let username = $('.reg-username').val();
      let email = $('.reg-email').val();
      let phone = $('.reg-phone').val();
      let password = $('.reg-password').val();
      //regex that check for numbers
      let regex = /\D/;
 // check if the username is at least 6 digits - if its not the hover turn red and shake
      if(username.length < 6){
        $('.reg-username').css({"border-color":"red", "animation":"shake 0.4s" });
       }
  // check if the email is valid (check if includes '@') - if its not the hover turn red and shake
       else if((!email.includes("@")) || (email.length < 5)){
        $('.reg-email').css({"border-color":"red", "animation":"shake 0.4s" });
      }
  // check if the phone is valid (contains only numbers) - if its not the hover turn red and shake
      else if(regex.test(phone)){
        $('.reg-phone').css({"border-color":"red", "animation":"shake 0.4s" });
      }
    // check if the password valid is at least 6 digits - if its not the hover turn red and shake
      else if(password.length < 6){
        $('.reg-password').css({"border-color":"red", "animation":"shake 0.4s" })
      }
    //if all the inputs cover the requirements pop-up appears
      else{
        Swal.fire({
          icon: 'success',
          title:"Successfully registered"});}
      
    })

  }

  function rippleEffect(){
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

  }

