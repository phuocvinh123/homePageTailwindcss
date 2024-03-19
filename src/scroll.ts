export function scrollWindow() {
  window.addEventListener('scroll', () => {
    const navMenu = document.querySelector('.nav-menu');
    if (window.scrollY > 123) {
      navMenu?.classList.add('fixed')
      navMenu?.classList.add('top-0')
      navMenu?.classList.add('left-0')
      navMenu?.classList.add('right-0')
      navMenu?.classList.add('shadow-lg')
      navMenu?.classList.add('opacity-85')
    } else {
      navMenu?.classList.remove('fixed')
      navMenu?.classList.remove('top-0')
      navMenu?.classList.remove('left-0')
      navMenu?.classList.remove('right-0')
      navMenu?.classList.remove('shadow-lg')
      navMenu?.classList.remove('opacity-85')
    }
  })
}
export function breakPointProgress() {
  window.addEventListener('scroll', () => {
    const progressPoint = document.querySelector('.progress-point');
    const hiddenContent = 'hidden';
    console.log('window.scrollY', ` ${7128 - window.scrollY}`);
    const progress = document.querySelector('.progress-check');
    if (window.scrollY > 123) {
      progressPoint?.classList.remove(hiddenContent)
      if (progress instanceof HTMLElement) {
        progress.style.strokeDasharray = '307.919, 307.919';
        progress.style.strokeDashoffset = ` ${7128 - window.scrollY}`;
        progress.style.strokeWidth = `5px`;
      }

    }
    else {
      progressPoint?.classList.add(hiddenContent)
    }
  });
}
