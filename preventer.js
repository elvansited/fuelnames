const _preventerENABLED = false;
if(_preventerENABLED){ 
document.addEventListener('keydown', function(e) {
    if (event.keyCode == 123) {
        e.preventDefault();
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        e.preventDefault();
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
        e.preventDefault();
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function(e) {
        e.preventDefault();
      window.event.returnValue = false;
    });
  }
}