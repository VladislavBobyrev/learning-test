const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const loadMap = document.querySelector('._load_map');
const contentScroll = document.querySelector('.content-main');
const contentHight = contentScroll.clientHeight;
const lazyScroll = ():void => {
  if (document.querySelectorAll('img[data-src], source[data-src]').length >= 0) {
      lazyScrolCheck();
  }
}
contentScroll.addEventListener('scroll', lazyScroll);

const lazyScrolCheck = ():void =>
{
  const imgIndex = lazyImagesPosition.findIndex((item, index):number =>
  {
      if (contentScroll.scrollTop > item - contentScroll.scrollTop)
      {
          return index    
      }
      
  });

  if (imgIndex >= 0)
  {
    console.log(lazyImages[imgIndex])
      console.log("lazyLoad ready img index ", imgIndex)
      if (lazyImages[imgIndex].dataset.src) {
          lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
          lazyImages[imgIndex].removeAttribute('data-src');
      }
      else if (lazyImages[imgIndex].dataset.srcset) {
          lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
          lazyImages[imgIndex].removeAttribute('data-srcset');
      }
      delete lazyImagesPosition[imgIndex];
  }
}

const lazyImagesPosition: Array = [];

if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
        if (img.dataset.src || img.dataset.srcset) {
            lazyImagesPosition.push(img.getBoundingClientRect().top + contentHight);
            lazyScrolCheck();
        }
    });
}


