const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: 'सुनो',
        artist: 'सुनो',
        fixed: true,
        loop: true,
        volume: 0.5,
        autoplay: true,
        url: '/media/listen.mp3',
        cover: '/img/listen.jpeg',
    }]
});