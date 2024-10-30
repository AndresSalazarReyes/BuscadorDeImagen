

document.getElementById('search-btn').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value;
    if (query) {
        const images = await fetchImages(query);
        renderImages(images);
    }
});

const API_KEY = '46798413-889d220fdeeaea5f75e2d3fb0';
const BASE_URL = 'https://pixabay.com/api/';

async function fetchImages(query) {
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error al obtener imágenes:', error);
        return [];
    }
}

function renderImages(images) {
    const container = document.getElementById('image-results');
    container.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;
        container.appendChild(imgElement);
    });
}



