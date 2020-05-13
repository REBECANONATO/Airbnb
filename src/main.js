const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

let currentPage = 1;

const ITEMS_PER_PAGE = 8;

const fetchAPI = async (url) => {
    let response = await fetch(url);
    const textResponse = await response.text();
    return JSON.parse(textResponse);
}

const renderPage = async () => {
    const apiData = await fetchAPI(API_URL);

    
}