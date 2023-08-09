$(function(){
 // function after clicking the button redirect to page with the sky header and scrolling indicator
    $('.btn').on('click', function(){
        $(location).attr("href" ,"/sky.html");
    })
    
    //calling the toggleDiv function
    toggleDivs();

   


});
//function that toggle the divs 
function toggleDivs(){
    
    $('.toggle-trigger').on('click',function(e){
     e.stopImmediatePropagation()
     //var that stores the toggled element
     var content = $(this).next(".toggle-area");
     // if the element is not toggled slides up
     $('.toggle-area').not(content).slideUp();
     //finding the closest element to clicked and slide it down
     $(this).closest('.toggle-wrap').find('.toggle-area').slideToggle();
     
   
     
   
     // e.preventDefault();
      
   })
   };