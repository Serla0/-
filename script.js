const swiper = new Swiper('.big_swiper', {
    
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: {
            el: '.mini_swiper',
            slidesPerView: 5,
            loop: true,
        }
    }
  });

const sliderHeader = new Swiper('.slider_header', {
    loop: true,
    slideToClickedSlide: true,
      
    effect: 'flip',
    flipEffect: {
        limitRotation: true,
    },

    navigation: {
        nextEl:'.slider_header',
    },
});













"use strict"

// document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = 0;

        let formData = new FormData(form);

        if(error === 0) {
            // form.classList.add('_sending');
            await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
        //     if(response.ok) {
        //         let result = await response.json();
        //         alert(result.message)
        //         formPreview.innerHTML = '';
        //         form.reset();
        //         form.classList.remove('_sending');
        //     } else {
        //         alert("Ошибка");
        //         form.classList.remove('_sending');
        //     }
        // } else {
        //     alert("заполните обязательные поля");
        // }
        
    }}


//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if(input.value === '') {
//                 formAddError(input);
//                 error++;
//             }

//         }
//         return error;
//     }
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     return error;

    
// });
