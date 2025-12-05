const centralLatLong = [-0.17734780100799025, 51.48332817261978]; // Ponto central do mapa no reino unido

const locais = [
    {
        "id": 1,
        "descricao": "Vivienne Westwood – World’s End (430 King's Road)",
        "endereco": "430 Kings Road, Chelsea, London, SW10 0LJ, Reino Unido",
        "favorito": true,
        "cidade": "Londres",
        "latlong": [-0.17734780100799025,
            51.48332817261978],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 2,
        "descricao": "Vivienne Westwood – Man",
        "endereco": "44 Conduit St, London, W1S 2YL, Reino Unido",
        "favorito": false,
        "cidade": "Londres",
        "latlong": [-0.1421556922484927,
            51.512183697237205],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 3,
        "descricao": "Vivienne Westwood – Paris Saint-Honoré",
        "endereco": "175 Rue Saint-Honoré, 75001 Paris, França",
        "favorito": false,
        "cidade": "Paris",
        "latlong": [2.333579776792911, 48.86407412649334],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 4,
        "descricao": "Vivienne Westwood – Milano Corso Venezia",
        "endereco": "Corso Venezia 25, 20121 Milano, Itália",
        "favorito": false,
        "cidade": "Milão",
        "latlong": [9.199549025628563,
            45.46940475549212],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 5,
        "descricao": "Vivienne Westwood – New York 55th Street",
        "endereco": "14 E 55th St, New York, NY, EUA",
        "favorito": false,
        "cidade": "Nova York",
        "latlong": [-73.97400271510004, 40.76125265838696],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 6,
        "descricao": "Vivienne Westwood – Tokyo Ginza Six",
        "endereco": "Ginza Six 3F, 6-10-1 Ginza, Chuo City, Tokyo, Japão",
        "favorito": false,
        "cidade": "Tóquio",
        "latlong": [139.7660301626745, 35.671232619961486],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 7,
        "descricao": "Vivienne Westwood – Beijing (Xiangjiang North Road)",
        "endereco": "Shop No. 1‑005, 28 Xiangjiang North Road, Beijing, China",
        "favorito": false,
        "cidade": "Beijing",
        "latlong": [116.50336, 40.03915],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 8,
        "descricao": "Vivienne Westwood – Beijing (Jianguo Road)",
        "endereco": "Shop No. L06, No. 89, Jianguo Road, Beijing, China",
        "favorito": false,
        "cidade": "Beijing",
        "latlong": [116.47906397590704, 39.910161476081164],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 9,
        "descricao": "Vivienne Westwood – Bangkok (Ratchadamri Road)",
        "endereco": "1/F, 4 & 5, Ratchadamri Road, Lumphini, Bangkok, Tailândia",
        "favorito": false,
        "cidade": "Bangkok",
        "latlong": [100.54665298270426, 13.744196984196234],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 10,
        "descricao": "Vivienne Westwood – Manchester",
        "endereco": "47 Spring Gardens, Manchester, Reino Unido",
        "favorito": false,
        "cidade": "Manchester",
        "latlong": [-2.241846531570477, 53.48071512687267],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 11,
        "descricao": "Vivienne Westwood – Osaka (Hankyu Umeda)",
        "endereco": "Hankyu Umeda Honten, 3F, Kakuda‑cho, Osaka, Japão",
        "favorito": false,
        "cidade": "Osaka",
        "latlong": [135.4987247809127, 34.70252821548187],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 12,
        "descricao": "Vivienne Westwood – Nagoya",
        "endereco": "3‑15‑1 Nishiki, Nagoya, Japão",
        "favorito": false,
        "cidade": "Nagoya",
        "latlong": [136.90699241161903, 35.171739233927106],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 13,
        "descricao": "Vivienne Westwood – Bicester Village (Outlet)",
        "endereco": "Unit 71, 50 Pringle Drive, Bicester, Reino Unido",
        "favorito": false,
        "cidade": "Bicester",
        "latlong": [-1.1579558028328512, 51.89264602822173],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 14,
        "descricao": "Vivienne Westwood – Busan (Lotte Dept.)",
        "endereco": "MB 1st Floor, Seomyun 503‑15 Bujeun‑Dong, Busan, Coreia do Sul",
        "favorito": false,
        "cidade": "Busan",
        "latlong": [129.055442440454, 35.156747221529564],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 15,
        "descricao": "Vivienne Westwood – Busan (Centum City)",
        "endereco": "2nd Floor, 1495 U‑dong, Centumnam‑daero 35, Busan, Coreia do Sul",
        "favorito": false,
        "cidade": "Busan",
        "latlong": [129.12963109627614, 35.16901824662017],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 16,
        "descricao": "Vivienne Westwood – Daegu (Hyundai Dept.)",
        "endereco": "2nd Floor, Gaesan‑dong 2‑ga, Daegu, Coreia do Sul",
        "favorito": false,
        "cidade": "Daegu",
        "latlong": [126.88141270987556, 37.48573924705066],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 17,
        "descricao": "Vivienne Westwood – Daegu (Lotte Dept.)",
        "endereco": "2nd Floor, 302-155, Chilseong‑dong 2‑ga, Daegu, Coreia do Sul",
        "favorito": false,
        "cidade": "Daegu",
        "latlong": [128.5961789900882, 35.87994522440922],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 18,
        "descricao": "Vivienne Westwood – Cardiff",
        "endereco": "55‑57 The Hayes, Cardiff, Reino Unido",
        "favorito": false,
        "cidade": "Cardiff",
        "latlong": [-3.1746947924680633, 51.478201104114255],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 19,
        "descricao": "Vivienne Westwood – Chengdu (IN99)",
        "endereco": "Store No. L111, 1º andar, IN99, No. 1199 Tianfu Avenue North, Chengdu, China",
        "favorito": false,
        "cidade": "Chengdu",
        "latlong": [104.06727426724824, 30.608196548356045],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    },
    {
        "id": 20,
        "descricao": "Vivienne Westwood – Chongqing",
        "endereco": "Shop No. L142, 1º andar, MixC, No. 51 & 53 Xiejiawanzheng Street, Chongqing, China",
        "favorito": false,
        "cidade": "Chongqing",
        "latlong": [106.51771124444379, 29.516219754461623],
        "url": "https://www.viviennewestwood.com/stores/",
        "cor": "gray"
    }
];
let map;

// Função que carrega os dados de unidades
window.onload = () => {
    montarMapa(locais);
}

function montarMapa(dadosLocais) {
    // Defina o Access Token do Mapbox
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tbWVsY2FybmVpcm8tcHVjIiwiYSI6ImNsb3ZuMTBoejBsd2gyamwzeDZzcWl5b3oifQ.VPWc3qoyon8Z_-URfKpvKg';
    map = new mapboxgl.Map({
        container: 'map', // O container do mapa
        style: 'mapbox://styles/mapbox/dark-v11',
        center: centralLatLong,
        zoom: 5
    });

    // Adiciona marcadores para cada local
    dadosLocais.forEach((uni) => {
        let popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3><a href="${uni.url}" target="_blank">${uni.descricao}</a></h3><br>${uni.endereco} <br> ${uni.cidade}`);
        const marker = new mapboxgl.Marker({ color: uni.cor })
            .setLngLat(uni.latlong)
            .setPopup(popup)
            .addTo(map);
    });

    navigator.geolocation.getCurrentPosition(processarGetCurrentPosition, () => { alert('Erro ao obter localização.') });
}

// Função para processar a localização do usuário
function processarGetCurrentPosition(local) {
    let popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3> Você está aqui! </h3>`);
    const marker = new mapboxgl.Marker({ color: 'white' })
        .setLngLat([local.coords.longitude, local.coords.latitude])
        .setPopup(popup)
        .addTo(map);
}