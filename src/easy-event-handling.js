Object.prototype.on = function(event, customFunction) {
  if( this.length > 0 ) {
    for(i=0;i<this.length;i++) {
      if ( this[i].addEventListener ) {
        this[i].addEventListener(event, customFunction, false);
      } else if ( this[i].attachEvent ) {
        this[i].attachEvent('on' + event, customFunction);
      }
    }
  } else {
    if ( this.addEventListener ) {
      this.addEventListener(event, customFunction, false);
    } else if ( this.attachEvent ) {
      this.attachEvent('on' + event, customFunction);
    }
  }
}


///////////////////////////////////////////////////
// USAGE
///////////////////////////////////////////////////

elements.on('click', function() {
  log.innerHTML = this + ' clicked!';
});