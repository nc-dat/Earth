function changeImage() {
    const qualitySelect = document.getElementById('qualitySelect');
    const qualityImage = document.getElementById('qualityImage');
    const clickSound = document.getElementById('clickSound');
    const qualityVideo = document.getElementById('qualityVideo');
    const videoSource = document.getElementById('videoSource');
    const selectedQuality = qualitySelect.value;

    // Mapping between quality and image file name
    const qualityImageMap = {
        '144p': 'images/144p.png',
        '240p': 'images/240p.png',
        '480p': 'images/480p.png',
        '720p': 'images/720p.png',
    };

    // Change image source based on selected quality
    qualityImage.src = qualityImageMap[selectedQuality];

    //play click sound
    clickSound.play();

    if (selectedQuality === '1080p') {
        // Hide image and show video
        qualityImage.style.display = 'none';
        videoSource.src = 'videos/1080v.mp4'; // Đảm bảo bạn có video này trong thư mục videos
        qualityVideo.style.display = 'block';
        qualityVideo.load(); // Tải lại video với nguồn mới
        qualityVideo.play(); // Phát video
    } else {
        // Show image and hide video
        qualityImage.src = qualityImageMap[selectedQuality];
        qualityImage.style.display = 'block';
        qualityVideo.style.display = 'none';
        qualityVideo.pause(); // Tạm dừng video nếu không phải 1080p
    }
}

document.getElementById('qualityVideo').addEventListener('click', function() {
    const qualityVideo = document.getElementById('qualityVideo');
    if (qualityVideo.paused) {
        qualityVideo.play();
    } else {
        qualityVideo.pause();
    }
});
