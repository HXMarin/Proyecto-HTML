// 1
let playing;

function reproducir(disco) {
    document.getElementById('fondo').style.backgroundImage = 'url("img/' + disco + '.jpg")';

    var x = document.getElementById(disco);
    if (playing != undefined && x.id!=playing.id) {
        playing.pause();
    }
    if (true == document.getElementById(disco).paused) {
        x.play();
        playing = x;
        document.getElementById('fondo').style.animationPlayState = 'running';

    } else {
        x.pause();
        document.getElementById('fondo').style.animationPlayState = 'paused';
    }
}

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
} 