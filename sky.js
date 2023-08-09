$(function(){

    scrollIndicator();

});
//scroll indicator
function scrollIndicator(){
  //storing the elements in variables
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    const navigation = document.querySelector('.navigation')

    //reset function that resets the class "selectet from the elements"
    function reset (){
      for(var i = 0 ; i < navigation.children.length; i++){
        navigation.children[i].classList.remove('selected');
      }
    }
    //when scrolling adding selected on the proper indicator 
    window.addEventListener('scroll',function(){
      const scrollTap = window.scrollY;
      sections.forEach(function(section, i){
        if(section.offsetTop < scrollTap + windowHeight/2 && scrollTap < section.offsetTop + windowHeight/2){
          reset();
          navigation.children[i].classList.add('selected');
  
        }
      });
    });
   
    document.querySelectorAll('.navigation li').forEach(function(item ,j){
      item.addEventListener('click',function(e){
        e.stopImmediatePropagation()
       
        window.scrollTo({
          top: j + windowHeight,
          behavior: 'smooth'
        })
      })
    })
}