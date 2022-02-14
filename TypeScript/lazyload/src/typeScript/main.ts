const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const loadMap = document.querySelector('._load-map');
const loadMoreBlock = document.querySelector('._loadMore');
const contentScroll = document.querySelector('.content-main');
const contentHight = contentScroll.clientHeight;
let counter = 0
const lazyScroll = (): void => {
    if (document.querySelectorAll('img[data-src], source[data-src]').length >= 0) {
        lazyScrolCheck();
    }
    if (!loadMap.classList.contains('isLoadMap')) {

        getMap()

    }
    if (!loadMoreBlock.classList.contains('_loadingContent')) {
        if (counter < 3) {
            loadMore()

        }
    }
}
contentScroll.addEventListener('scroll', lazyScroll);

const lazyScrolCheck = (): void => {
    const imgIndex = lazyImagesPosition.findIndex((item, index): number => {
        if (contentScroll.scrollTop > item - contentScroll.scrollTop) {
            return index
        }

    });

    if (imgIndex >= 0) {
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


const getMap = (): void => {

    const loadMapPos = loadMap.getBoundingClientRect().top + contentHight

    if (contentScroll.scrollTop > loadMapPos - contentScroll.scrollTop) {
        const loadMapUrl = loadMap.dataset.map
        if (loadMapUrl) {
            loadMap.insertAdjacentHTML(
                'beforeend',
                `<iframe src='${loadMapUrl}'> </iframe>`
            )
            loadMap.classList.add('isLoadMap')
        }
    }
}

const loadMore = () => {
    const posLoadMoreBlock = loadMoreBlock.getBoundingClientRect().top + contentScroll.scrollTop
    const highLoadMoreBlock = loadMoreBlock.clientHeight

    if (contentScroll.scrollTop > (posLoadMoreBlock + highLoadMoreBlock) - contentHight) {
        getLoadMoreContent()
    }
}

const getLoadMoreContent = async () => {
    if (!document.querySelector('._loading-icon')) {
        loadMoreBlock.insertAdjacentHTML(
            'beforeend',
            `<div class='_loading-icon'>LOADING.......</div>`
        )
    }
    loadMoreBlock.classList.add('_loadingContent')

    let responsServer = await fetch('moreText.html', {
        method: 'GET',
    }).then(cards => {
        return cards.text()
    }).catch(eroror => console.warn(eroror))

    loadMoreBlock.insertAdjacentHTML(
        'beforeend',
        `${responsServer}`
    )

    if (document.querySelector('._loading-icon')) {
        document.querySelector('._loading-icon').remove()
    }
    loadMoreBlock.classList.remove('_loadingContent')
    counter++
}

