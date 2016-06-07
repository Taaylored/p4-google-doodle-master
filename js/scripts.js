
var $colorwheel = $('#colorwheel');

TweenMax.to($colorwheel, 4, {

    rotation: 1440,    
});


TweenLite.from('#text', 3, { 
  delay: 3,
  opacity: 0,
  
  });


var $smallwheel = $('.smallwheel');

TweenMax.to($smallwheel, 6, {

    rotation: 1220,
   repeat: -1,
 ease: Power1.easeInOut
    
    
});


