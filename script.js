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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if(error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            // if(response.ok) {
            //     let result = await response.json();
            //     formPreview.innerHTML = '';
            //     form.reset();
                form.classList.remove('_sending');
                alert('Сообщение отправлено')
        //     } else {
        //         alert("Ошибка");
        //         form.classList.remove('_sending');
        //     }
        // } else {
        //     alert("заполните обязательные поля");
        }
        
    }


    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if(input.value === '') {
                formAddError(input);
                error++;
            }

        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    const formImage = document.getElementById('formImage');
    const formPreview = document.getElementById('formPreview');

    // formImage.addEventListener('change', () => {
    //     uploadFile(formImage.files[0]);
    // });

    // function uploadFile(file) {
    //     if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    //         alert('Разрешены только изображения');
    //         formImage.value = '';
    //         return;
    //     }

    //     if(file.size > 2 * 1024 *1024) {
    //         alert('Файл не должен привышать 2 МБ.');
    //         return;
    //     }

    //     let reader = new FileReader();
    //     reader.onload = function(e) {
    //         formPreview.innerHTML = `<img src="${e.target.result}" alt="фото">`;
    //     };
    //     reader.onerror = function(e) {
    //         alert('Ошибка');
    //     };
    //     reader.readAsDataURL(file);
    // }
    
});
