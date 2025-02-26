document.addEventListener('DOMContentLoaded', function() {
    const playlistItems = document.querySelectorAll('#playlist a');
    
    playlistItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const trackPath = this.getAttribute('data-track');
            if (trackPath) {
                playTrack(trackPath);
            } else {
                console.error('播放路径未找到');
            }
        });
    });
});

function playTrack(trackPath) {
    const audioPlayer = document.getElementById('myAudio');
    if (audioPlayer) {
        audioPlayer.src = trackPath;
        audioPlayer.load(); // 重新加载以确保更改生效
        audioPlayer.play();
    } else {
        console.error('音频播放器未找到');
    }
}