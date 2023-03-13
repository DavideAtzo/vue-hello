'use strict';

const { createApp } = Vue
//option api
createApp({
    data() {
        return {
            message: 'Come si chiama un cane husky non particolarmente bello? Un husky-fezza',
            imageSrc: ['img/husky.jpg'],
        }
    },
}
).mount('#app');