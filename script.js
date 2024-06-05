function changeImage() {
    const qualitySelect = document.getElementById('qualitySelect');
    const qualityImage = document.getElementById('qualityImage');
    const selectedQuality = qualitySelect.value;

    // Mapping between quality and image file name
    const qualityImageMap = {
        '144p': 'images/144p.png',
        '240p': 'images/240p.png',
        '480p': 'images/480p.png',
        '720p': 'images/720p.png',
        '1080p': 'images/1080p.png'
    };

    // Change image source based on selected quality
    qualityImage.src = qualityImageMap[selectedQuality];
}
