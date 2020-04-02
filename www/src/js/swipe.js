var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

const gesuredZone = document.getElementById('modal');

gesuredZone.addEventListener('touchstart', (event) => {
  this.touchstartY = event.touches[0].screenY;
});

gesuredZone.addEventListener('touchend', (event) => {
  this.touchendY = event.changedTouches[0].screenY;
  handleGesure();
});

const handleGesure = () => {
  if (this.touchstartY < this.touchendY) {
    closeOnswipeDown()
  }
}

function closeOnswipeDown() {
  modal.style.backgroundColor = 'transparent'
  modal.style['backdrop-filter'] = 'blur(0px)'

  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 400) {
      clearInterval(id);
      modal.style.display = 'none'
    } else {
      pos++;
      modal.style.top = pos + 'px';
    }
  }
}