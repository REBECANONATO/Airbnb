const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

const cards = document.querySelector('.card');

const getData = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => data.map(item => {
        const { photo, property_type, name, price } = item;
  
        buildCard(photo, property_type, name, price);
      }));
  };



const buildCard = (imgsrc, tag, title, price) => {
    const html = `

        <img src="${imgsrc}" class="card-img-top br0" alt="...">
        <strong>${tag}</strong>
        <p>${title}</p>
        <strong>R$${price},00/night</strong>

    `;

    const div = document.createElement('li');
    div.innerHTML = html;

    cards.appendChild(div);
}

getData()