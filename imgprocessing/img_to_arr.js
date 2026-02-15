function basicImgToArr(imgID, exportMethod) {
    const img = document.getElementById(imgID);
    const pixels = []; 
    img.onload = () => {const pixelData = getImageData(img); pixels.push(pixelData);};
    return pixels;
}

