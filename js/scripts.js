// Animate this wheel
var $colorwheel = $('#colorwheel');


// Dom Element, duration, properties to change
TweenMax.to($colorwheel, 4, {

    rotation: 1440,
//   repeat: 2,
// ease: Power1.easeInOut
    
    
});


TweenLite.from('#v', 3, { 
  delay: 1,
  opacity: 0
  });

TweenLite.from('#c', 3, { 
  delay: 2,
  opacity: 0
  });

TweenLite.from('#d', 3, { 
  delay: 3,
  opacity: 0
  });

TweenLite.from('#day', 3, { 
  delay: 4,
  opacity: 0
  });

// Small wheels

// Animate this wheel
var $smallwheel = $('.smallwheel');


// Dom Element, duration, properties to change
TweenMax.to($smallwheel, 4, {

    rotation: 1440,
   repeat: -1,
// ease: Power1.easeInOut
    
    
});