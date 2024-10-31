const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];
images.forEach(src => {
    const img = new Image();
    img.src = src;
});
