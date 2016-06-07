// Animate this wheel
var $colorwheel = $('#colorwheel');


// Dom Element, duration, properties to change
TweenMax.to($colorwheel, 4, {

    rotation: 1440,
//   repeat: 2,
// ease: Power1.easeInOut
    
    
});


TweenLite.from('text', 3, { 
  delay: 3,
  opacity: 0,
  
  });



// Small wheels

// Animate this wheel
var $smallwheel = $('.smallwheel');


// Dom Element, duration, properties to change
TweenMax.to($smallwheel, 6, {

    rotation: 1220,
   repeat: -1,
 ease: Power1.easeInOut
    
    
});


