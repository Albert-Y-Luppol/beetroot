(function(){
    'use strict';

    sliderHero();

    handleSwipes();

    hideShowLogo();

    window.addEventListener('scroll', documentOnScroll);

    sliderNews();

    preloadGalleryImg();


    // functions



    function preloadGalleryImg(){
        let imgs = document.body.querySelectorAll('img.preload');

        imgs.forEach(img=>{
            if(img.complete) return;
            let loader = document.createElement('img');
            loader.src = './img/loader.svg';
            loader.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                min-width: 100%;
                min-height: 100%;
                opacity: 1;
                transition: all 0.5s ease-in-out;
                z-index: 100;
            `
            img.insertAdjacentElement('beforebegin', loader);
            img.onload = img.onerror = (e)=>{
                loader.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    min-width: 100%;
                    min-height: 100%;
                    opacity: 0;
                    transition: all 0.5s ease-in-out;
                    z-index: 100;
                `;
                loader.ontransitionend = ()=>{
                    loader.remove();
                    // alert('done');
                };
            };
        });
    }


    function sliderNews(){

        let sliderNews = new Swiper('.swiper-container.slider-news', {
            loop: true,
            allowTouchMove: false,
            // centeredSlides: true,
            setWrapperSize: 1180,
            // slidesOffsetBefore: 100,
            // slidesOffsetAfter: 100,
            breakpoints: {
                350: {
                    slidesPerView: 1,
                    spaceBetween: 10
                  },
                
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
               
                960: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1600: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  },
            },
            autoplay: {
                delay: 3000,
              },
            navigation: {
              nextEl: '.slider-news__btn--right',
              prevEl: '.slider-news__btn--left',
            },
            pagination: {
              el: '.slider-news__pag',
              clickable: true,
              renderBullet: function (index, className) {
                    return '<span class="slider-news__bullet ' + className + '"><span class="slider__dot"></span></span>';
                }
            },
            mousewheel: false,
            keyboard: true,
        });

        bulletControl(); //doesn't work from css

        // functions

        function bulletControl(){
            let bullets = document.body.querySelectorAll('.slider-news__bullet'),
                slider = document.body.querySelector('.swiper-container.slider-news'),
                bulletsContainer = document.body.querySelector('.slider-news__pag');

            bulletsContainer.style.cssText = `
                display: -webkit-box;
                display: -moz-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                position: relative;
                width: 100%;
                // left: 50%;
                // transform: translate(-50%, 0);
                -webkit-box-pack: center;
                -moz-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                z-index: 10;
            `;
            
            setBullets();

            function setBullets(){
                for (let bullet of bullets){

                    bullet.style.cssText = `
                        width: 50px;
                        height: 50px;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: -webkit-flex;
                        display: flex;
                        border-radius: 0;
                        background: none;
                        opacity: 1;
                        margin: 4rem 5px 12rem 5px;
                        background: rgba(255,255,255,0);
                    `;  //only from JS works
                }
            }
        }
    }


    function documentOnScroll(e){
        hideShowLogo();
    }


    function hideShowLogo(){

        // alert(pageYOffset > document.getElementById('home'));
        if(pageYOffset > document.getElementById('home').offsetHeight) {
            document.body.querySelector('.nav>.nav__logo').style.display = "block";
        } else {
            document.body.querySelector('.nav>.nav__logo').style.display = "none"; 
        }
    }


    function handleSwipes(){
        document.addEventListener('touchstart', handleTouchStart, false);        
        document.addEventListener('touchmove', handleTouchMove, false);

        var xDown = null;                                                        
        var yDown = null;

        function getTouches(evt) {
        return evt.touches ||             // browser API
                evt.originalEvent.touches; // jQuery
        }                                                     

        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];                                      
            xDown = firstTouch.clientX;                                      
            yDown = firstTouch.clientY;                                      
        };                                                

        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }

            var xUp = evt.touches[0].clientX;                                    
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    /* left swipe */
                    document.querySelector('.nav').classList.remove('full-view');
                } else {
                    /* right swipe */
                    document.querySelector('.nav').classList.add('full-view');
                }                       
            } 
            else {
                if ( yDiff > 0 ) {
                    /* up swipe */ 
                    document.querySelector('.nav').classList.remove('full-view');
                } else { 
                    /* down swipe */
                    document.querySelector('.nav').classList.remove('full-view');
                }                                                                 
            }
            /* reset values */
            xDown = null;
            yDown = null;                                             
        };


        let links = document.querySelectorAll('.nav__link');

        links.forEach(function (link){
            link.addEventListener('click', function (){
                document.querySelector('.nav').classList.remove('full-view');
            })
        });
    }


    function sliderHero(){
        let sliderHero = new Swiper('.swiper-container.slider--hero', {
            loop: true,
            direction: 'vertical',
            allowTouchMove: false,
            autoplay: {
                delay: 3000,
              },
              
            pagination: {
              el: '.slider--hero__pag',
              clickable: true,
              renderBullet: function (index, className) {
                    return '<span class="slider--hero__bullet ' + className + '"><span class="slider__dot"></span></span>';
                }
            },
            mousewheel: false,
            keyboard: true,
        });

        bulletControl(); //doesn't work from css

        // functions

        function bulletControl(){
            let bullets = document.body.querySelectorAll('.slider--hero__bullet'),
                slider = document.body.querySelector('.swiper-container.slider--hero'),
                bulletsContainer = document.body.querySelector('.slider--hero__pag');

            bulletsContainer.style.cssText = `
                position: absolute;
                transform: translate(0 , -50%);
                top: 50%;
                right: 2rem;
            `;
            
            setBullets();

            function setBullets(){
                for (let bullet of bullets){

                    bullet.style.cssText = `
                        width: 50px;
                        height: 50px;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: -webkit-flex;
                        display: flex;
                        border-radius: 0;
                        background: none;
                        opacity: 1;
                        margin: 10px 0;
                        background: rgba(255,255,255,0);
                    `;  //only from JS works
                }
            }
        }
    }
})();


let map, marker, geocoder;

document.addEventListener('click', clickDOMListener);

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.680090, lng: -73.901845},
        zoom: 14,
        styles: mapStyle,
        disableDefaultUI: true,
    });

    marker = new google.maps.Marker({
        position: {lat: 40.680090, lng: -73.901845},
        map: map,
        icon: {
            url: './img/marker.png',
            scaledSize: new google.maps.Size(100,100)
        },
    });

    geocoder = new google.maps.Geocoder();
    setMapWith("Brooklyn, NY 11207 USA");
}

function setMapWith(address){
    geocoder.geocode( { 'address': address}, function(results, status) {
        // console.log(JSON.stringify(results) + " : " + status);
        // console.log(results);
        if (status == 'OK') {
            let latLng = results[0].geometry.location;

            map.setCenter(latLng);
            marker.setPosition(latLng);
            map.panBy(0, document.documentElement.clientHeight / 4);

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}


function clickDOMListener(e){

    if(!e.target) return;

    if (e.target.closest('a[data-address]')){

        setMapWith(e.target.closest('a[data-address]').dataset.address);
        return;
    }

    if(e.target == document.getElementById('contact-form-submit')){
        e.preventDefault();
        if(document.forms[0].name.matches('*:valid') && document.forms[0].email.matches('*:valid')){

            //send form to server

            document.forms[0].name.value = "";
            document.forms[0].email.value = '';

            let modal = document.createElement('div');

            modal.style.cssText = `
                width: 320px;
                height: 150px;
                position: fixed;
                top: 50%;
                left: 50%;
                border-radius: 20px;
                background: #fff;
                line-height: 50px;
                text-align: center;
                z-index: 9999;
                transition: all .4s ease-in-out;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 5px 0 rgba(0,0,0,.5);
                overflow: hidden;
                font-size: 16px;
                padding: 25px 10px;
                opacity: 0;
            `;

            modal.innerHTML = "Thank You! <br> We will contact you as soon as possible!";

            document.body.append(modal);

            setTimeout(()=>{
                modal.style.opacity = 1;
            },0);

            setTimeout(()=>{
                modal.addEventListener('transitionend', (e)=>{
                e.target.remove();
                }, {once:true})
                modal.style.opacity = 0;
            }, 2000);

        } else {
            if(document.forms[0].name.matches('*:valid')){
                document.forms[0].email.focus();
            } else {
                document.forms[0].name.focus();
            }
        }
        return;
    }

    if(e.target.closest('#contact') && e.target.tabIndex < 0){
        if(!document.forms[0].name.value)
        {
            document.forms[0].name.focus();
        } else if(document.forms[0].querySelector('input:invalid')){
            document.forms[0].querySelector('input:invalid').focus();
        } else {
            document.getElementById('contact-form-submit').focus();
        }
        return;
    }

    if(e.target.closest('#contact-link-time') && !e.target.closest('#contact-link-time').querySelector('span')) {
        showTimeTo();
        setInterval(showTimeTo, 10000);
        return;
    }
}

let message = document.createElement('span');
message.style.cssText = `
        position: absolute;
        transform: translate(0, 100%);
        left: 0;
        bottom: 0;
        color: green;
        z-index: 100;
    `;

function showTimeTo(){

    let time = getTimeTo(),
        box = document.getElementById('contact-link-time');
    
    message.innerHTML = `${time.openState ? 'Open. We will wait for you within ' : 'Close. We will be ready to serve you in '}${time.h} hours and ${time.min} minutes!`;

    if(!time.openState) message.style.color = "red";

    box.append(message);

    // functions


    function getTimeTo(){

        let text = document.getElementById('contact-link-time').innerText,
            openAt = {
                min: +text.split('AM')[0].slice(-2),
                h: +text.split('AM')[0].slice(-5,-3)
            },
            closeAt = {
                min: +text.split('PM')[0].slice(-2),
                h: +text.split('PM')[0].slice(-5,-3)
            },
            timeNow = new Date().toLocaleString("en-US", {timeZone: "America/New_York"}),
            openState;
    
        if(timeNow.includes('AM')){
    
            timeNow = extractTime(timeNow);
    
            let diff = openAt.h * 60 + openAt.min - timeNow.h * 60 - timeNow.min;

            if(diff > 0){
    
                openState = false;

                return {
                    min: diff % 60,
                    h: (diff - (diff % 60)) / 60,
                    openState: openState
                };
    
            } else {

                openState = true;

                diff = 12 * 60 - timeNow.h*60 - timeNow.min + closeAt.h * 60 + closeAt.min;

                return {
                    min: diff % 60,
                    h: (diff - (diff % 60)) / 60,
                    openState: openState
                };
            }
            
        } else {
    
            timeNow = extractTime(timeNow);
    
            let diff = closeAt.h*60 + closeAt.min - timeNow.h*60 - timeNow.min;
            
            if(diff > 0){
    
                openState = true;

                return {
                    min: diff % 60,
                    h: (diff - (diff % 60)) / 60,
                    openState: openState
                };
    
            } else {

                openState = false;

                diff = 12 * 60 - timeNow.h*60 - timeNow.min + openAt.h * 60 + openAt.min;

                return {
                    min: diff % 60,
                    h: (diff - (diff % 60)) / 60,
                    openState: openState
                };
            }
        }

    }


    function extractTime(timeNow){

        timeNow = timeNow.slice(-11, -6);
        timeNow = timeNow.split(':');
        timeNow = {
            min : +timeNow[1],
            h: +timeNow[0]
        }

        return timeNow;
    }
}