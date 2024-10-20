document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('message').innerHTML = "Mình cũng yêu bạn ♥!";
});

document.getElementById('no-btn').addEventListener('mouseover', function() {
    let btn = document.getElementById('no-btn');
    let randomX = Math.floor(Math.random() * (window.innerWidth - btn.clientWidth));
    let randomY = Math.floor(Math.random() * (window.innerHeight - btn.clientHeight));

    btn.style.position = 'absolute';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
});
