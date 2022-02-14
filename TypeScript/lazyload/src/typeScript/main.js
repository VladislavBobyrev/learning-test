var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
var loadMap = document.querySelector('._load-map');
var loadMoreBlock = document.querySelector('._loadMore');
var contentScroll = document.querySelector('.content-main');
var contentHight = contentScroll.clientHeight;
var counter = 0;
var lazyScroll = function () {
    if (document.querySelectorAll('img[data-src], source[data-src]').length >= 0) {
        lazyScrolCheck();
    }
    if (!loadMap.classList.contains('isLoadMap')) {
        getMap();
    }
    if (!loadMoreBlock.classList.contains('_loadingContent')) {
        if (counter < 3) {
            loadMore();
            console.log(counter);
        }
    }
};
contentScroll.addEventListener('scroll', lazyScroll);
var lazyScrolCheck = function () {
    var imgIndex = lazyImagesPosition.findIndex(function (item, index) {
        if (contentScroll.scrollTop > item - contentScroll.scrollTop) {
            return index;
        }
    });
    if (imgIndex >= 0) {
        console.log(lazyImages[imgIndex]);
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
};
var lazyImagesPosition = [];
if (lazyImages.length > 0) {
    lazyImages.forEach(function (img) {
        if (img.dataset.src || img.dataset.srcset) {
            lazyImagesPosition.push(img.getBoundingClientRect().top + contentHight);
            lazyScrolCheck();
        }
    });
}
var getMap = function () {
    var loadMapPos = loadMap.getBoundingClientRect().top + contentHight;
    if (contentScroll.scrollTop > loadMapPos - contentScroll.scrollTop) {
        var loadMapUrl = loadMap.dataset.map;
        if (loadMapUrl) {
            loadMap.insertAdjacentHTML('beforeend', "<iframe src='".concat(loadMapUrl, "'> </iframe>"));
            loadMap.classList.add('isLoadMap');
        }
    }
};
var loadMore = function () {
    var posLoadMoreBlock = loadMoreBlock.getBoundingClientRect().top + contentScroll.scrollTop;
    var highLoadMoreBlock = loadMoreBlock.clientHeight;
    // getLoadMoreContent()
    console.log('loadMore');
    if (contentScroll.scrollTop > (posLoadMoreBlock + highLoadMoreBlock) - contentHight) {
        getLoadMoreContent();
        console.log('if');
    }
};
var getLoadMoreContent = function () { return __awaiter(_this, void 0, void 0, function () {
    var responsServer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!document.querySelector('._loading-icon')) {
                    loadMoreBlock.insertAdjacentHTML('beforeend', "<div class='_loading-icon'>LOADING.......</div>");
                }
                loadMoreBlock.classList.add('_loadingContent');
                return [4 /*yield*/, fetch('moreText.html', {
                        method: 'GET'
                    }).then(function (cards) {
                        return cards.text();
                    })["catch"](function (eroror) { return console.warn(eroror); })];
            case 1:
                responsServer = _a.sent();
                loadMoreBlock.insertAdjacentHTML('beforeend', "".concat(responsServer));
                if (document.querySelector('._loading-icon')) {
                    document.querySelector('._loading-icon').remove();
                }
                loadMoreBlock.classList.remove('_loadingContent');
                counter++;
                return [2 /*return*/];
        }
    });
}); };
