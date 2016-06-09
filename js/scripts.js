
var $colorwheel = $('#colorwheel');

TweenMax.to($colorwheel, 4, {

    rotation: 1440,    
});


TweenLite.from('#text', 2.5, { 
  delay: 1,
  ease: Circ.easeIn, y: 0,
  opacity: 0,
  
  });



