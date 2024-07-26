//your JS code here. If required.

// Function to update size information
function updateSizeInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfo = document.getElementById('sizeInfo');
    sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}

// Initial call to update size information
updateSizeInfo();

// Event listener for window resize
window.addEventListener('resize', updateSizeInfo);