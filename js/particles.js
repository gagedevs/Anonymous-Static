/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */


function particlesChange() {
  var p = localStorage.getItem('particlesValue');
  if(p == 'true' || p == null) {
    localStorage.setItem('particlesValue', false);
    var e = document.getElementById('particles-js');
    e.parentNode.removeChild(e);
  }
  else if(p == 'false') {
    localStorage.setItem('particlesValue', true);
    console.log('reloading for particles')
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
  else {
    console.log('sus')
  }
}

window.onload = function() {
  var a = localStorage.getItem('particlesValue');
  if(a == 'true' || a == null) {
    var e = document.getElementById('particles-div');
    e.id = 'particles-js';
    setTimeout(() => {
      particlesJS.load('particles-js', '../particles.json', function() {
        console.log("Particles on and loaded. Go to settings to turn them off.");
      });
    }, 1);
    
  }
  else if(a == false) {
    console.log('particles off');
  }
}