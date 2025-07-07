let nextItem = document.getElementById("next");
let prevItem = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .carousel-container");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextItem.onclick = function () {
  showSlider('next');
}

prevItem.onclick = function () {
  showSlider('prev');
}

let runTimeOut;

function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .carousel-container .carousel-items");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .carousel-items");

    if( type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }
    else {
      let positionLastItem = itemSlider.length - 1;
      listItemDom.prepend(itemSlider[positionLastItem]);
      thumbnailDom.prepend(itemThumbnail[positionLastItem])
      carouselDom.classList.add('prev');
    }

    clearTimeout()

    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove('next')
      carouselDom.classList.remove('prev')
    },1000);
}
