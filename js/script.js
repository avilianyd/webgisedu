// =================================================================
// INISIALISASI PETA DAN BASE LAYERS
// =================================================================

// Koordinat awal dan zoom level untuk tombol "Home"
const initialView = {
    coords: [-6.2383, 106.9756], // Koordinat Kota Bekasi
    zoom: 12
};

// Inisialisasi Peta
var map = L.map('map').setView(initialView.coords, initialView.zoom);

// Definisi Base Layers (Peta Dasar)
const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const osmHot = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OSM Team</a>'
});

const googleMaps = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '© <a href="https://www.google.com/maps">Google</a>'
});

// Tambahkan satu base layer ke peta secara default
openStreetMap.addTo(map);

// =================================================================
// DATA GEOJSON SEKOLAH
// =================================================================
var sekolahGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        // ... (data GeoJSON sekolah Anda yang panjang ada di sini) ...
        { "type": "Feature", "properties": { "nama": "SMA Negeri 1 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9876, -6.2383] } },
        { "type": "Feature", "properties": { "nama": "SMA Negeri 2 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9815, -6.2456] } },
        { "type": "Feature", "properties": { "nama": "SMP Negeri 5 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9608, -6.2523] } },
        { "type": "Feature", "properties": { "nama": "SD Negeri 10 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9704, -6.2302] } },
        { "type": "Feature", "properties": { "nama": "SMK Negeri 4 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9901, -6.2489] } },
        { "type": "Feature", "properties": { "nama": "SMA Islam Al Azhar Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9802, -6.2421] } },
        { "type": "Feature", "properties": { "nama": "SMP Harapan Jaya" }, "geometry": { "type": "Point", "coordinates": [106.9654, -6.2207] } },
        { "type": "Feature", "properties": { "nama": "SD Budi Mulia Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9553, -6.2574] } },
        { "type": "Feature", "properties": { "nama": "SMK Tunas Bangsa Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9907, -6.2388] } },
        { "type": "Feature", "properties": { "nama": "SMP Negeri 15 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9725, -6.2506] } },
        { "type": "Feature", "properties": { "nama": "SMP Islam PB. Soedirman" }, "geometry": { "type": "Point", "coordinates": [106.9756, -6.2383] } },
        { "type": "Feature", "properties": { "nama": "SMK Negeri 8 Kota Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9815, -6.2456] } },
        { "type": "Feature", "properties": { "nama": "MTs Swasta Jamiatul Huda" }, "geometry": { "type": "Point", "coordinates": [106.9608, -6.2523] } },
        { "type": "Feature", "properties": { "nama": "SD Islam As Sunnah" }, "geometry": { "type": "Point", "coordinates": [106.9704, -6.2302] } },
        { "type": "Feature", "properties": { "nama": "SMP Negeri 13 Kota Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9901, -6.2489] } },
        { "type": "Feature", "properties": { "nama": "SMA Tahfizh Nurjamilah" }, "geometry": { "type": "Point", "coordinates": [106.9802, -6.2421] } },
        { "type": "Feature", "properties": { "nama": "SMKS Bina Siswa Utama 1 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9654, -6.2207] } },
        { "type": "Feature", "properties": { "nama": "SMKS Gelora Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9553, -6.2574] } },
        { "type": "Feature", "properties": { "nama": "SMKS Mandalahayu Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9907, -6.2388] } },
        { "type": "Feature", "properties": { "nama": "SMP Negeri 7 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9725, -6.2506] } },
        { "type": "Feature", "properties": { "nama": "SDN Jatiasih 1" }, "geometry": { "type": "Point", "coordinates": [106.9400, -6.3000] } },
        { "type": "Feature", "properties": { "nama": "SMPN 35 Bekasi" }, "geometry": { "type": "Point", "coordinates": [107.0100, -6.2000] } },
        { "type": "Feature", "properties": { "nama": "SMAN 5 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9750, -6.2150] } },
        { "type": "Feature", "properties": { "nama": "SDN Rawalumbu 7" }, "geometry": { "type": "Point", "coordinates": [107.0200, -6.2700] } },
        { "type": "Feature", "properties": { "nama": "SMKN 1 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9880, -6.2300] } },
        { "type": "Feature", "properties": { "nama": "SMP Al Falah" }, "geometry": { "type": "Point", "coordinates": [106.9600, -6.2800] } },
        { "type": "Feature", "properties": { "nama": "SMA Karya Guna" }, "geometry": { "type": "Point", "coordinates": [107.0000, -6.2500] } },
        { "type": "Feature", "properties": { "nama": "SDN Teluk Pucung 4" }, "geometry": { "type": "Point", "coordinates": [107.0050, -6.2250] } },
        { "type": "Feature", "properties": { "nama": "MTs Al Hidayah" }, "geometry": { "type": "Point", "coordinates": [106.9500, -6.2600] } },
        { "type": "Feature", "properties": { "nama": "SMP Global Mandiri" }, "geometry": { "type": "Point", "coordinates": [106.9950, -6.2100] } },
        { "type": "Feature", "properties": { "nama": "SMPN 1 Pondok Gede" }, "geometry": { "type": "Point", "coordinates": [106.9000, -6.3000] } },
        { "type": "Feature", "properties": { "nama": "SMA Labschool Cibubur" }, "geometry": { "type": "Point", "coordinates": [106.9150, -6.3300] } },
        { "type": "Feature", "properties": { "nama": "SDN Jatiwaringin 8" }, "geometry": { "type": "Point", "coordinates": [106.9200, -6.2800] } },
        { "type": "Feature", "properties": { "nama": "SMPN 2 Tambun Selatan" }, "geometry": { "type": "Point", "coordinates": [107.0500, -6.2600] } },
        { "type": "Feature", "properties": { "nama": "SMAN 1 Cikarang Barat" }, "geometry": { "type": "Point", "coordinates": [107.0800, -6.3000] } },
        { "type": "Feature", "properties": { "nama": "SDN Cikarang Kota" }, "geometry": { "type": "Point", "coordinates": [107.0700, -6.2800] } },
        { "type": "Feature", "properties": { "nama": "SMPN 1 Bantargebang" }, "geometry": { "type": "Point", "coordinates": [107.0000, -6.3500] } },
        { "type": "Feature", "properties": { "nama": "SMK Cipta Karya" }, "geometry": { "type": "Point", "coordinates": [107.0150, -6.3300] } },
        { "type": "Feature", "properties": { "nama": "SDN Bekasi Utara 1" }, "geometry": { "type": "Point", "coordinates": [106.9800, -6.2000] } },
        { "type": "Feature", "properties": { "nama": "SMPN 10 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9700, -6.2100] } },
        { "type": "Feature", "properties": { "nama": "SMAN 7 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9900, -6.2600] } },
        { "type": "Feature", "properties": { "nama": "SDN Pekayon Jaya 3" }, "geometry": { "type": "Point", "coordinates": [106.9750, -6.2750] } },
        { "type": "Feature", "properties": { "nama": "SMKN 2 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9650, -6.2400] } },
        { "type": "Feature", "properties": { "nama": "SMP Darul Ulum" }, "geometry": { "type": "Point", "coordinates": [106.9450, -6.2300] } },
        { "type": "Feature", "properties": { "nama": "SMA Ananda Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9850, -6.2050] } },
        { "type": "Feature", "properties": { "nama": "SDN Aren Jaya 5" }, "geometry": { "type": "Point", "coordinates": [107.0100, -6.2450] } },
        { "type": "Feature", "properties": { "nama": "MTs Negeri 1 Bekasi" }, "geometry": { "type": "Point", "coordinates": [106.9700, -6.2900] } },
        { "type": "Feature", "properties": { "nama": "SMP Strada Bhakti Mulia" }, "geometry": { "type": "Point", "coordinates": [106.9900, -6.3100] } },
        { "type": "Feature", "properties": { "nama": "SDN Kaliabang Tengah 2" }, "geometry": { "type": "Point", "coordinates": [106.9550, -6.2000] } },
        { "type": "Feature", "properties": { "nama": "SMAN 1 Babelan" }, "geometry": { "type": "Point", "coordinates": [107.0300, -6.1500] } },
        { "type": "Feature", "properties": { "nama": "SDN Muaragembong" }, "geometry": { "type": "Point", "coordinates": [107.0500, -6.0500] } },
        { "type": "Feature", "properties": { "nama": "SMPN 3 Cikarang Utara" }, "geometry": { "type": "Point", "coordinates": [107.1000, -6.2000] } },
        { "type": "Feature", "properties": { "nama": "SMA Negeri 1 Setu" }, "geometry": { "type": "Point", "coordinates": [107.0800, -6.3500] } },
        { "type": "Feature", "properties": { "nama": "SDN Setu 3" }, "geometry": { "type": "Point", "coordinates": [107.0600, -6.3700] } }
    ]
};

// =================================================================
// FUNGSI BANTUAN (HELPERS)
// =================================================================

function pointToLayer(feature, latlng) {
    return L.marker(latlng);
}

function onEachFeature(feature, layer) {
    if (feature.properties) {
        let popupContent = `<h3>Informasi Detail</h3>`;
        for (const key in feature.properties) {
            if (Object.hasOwnProperty.call(feature.properties, key)) {
                popupContent += `<p><b>${key.replace(/_/g, ' ')}:</b> ${feature.properties[key]}</p>`;
            }
        }
        layer.bindPopup(popupContent);
    }
}

// =================================================================
// PEMUATAN DATA DAN LOGIKA UTAMA
// =================================================================

// --- 1. Inisialisasi Layer yang sudah pasti ada ---
const schoolLayer = L.geoJSON(sekolahGeoJSON, {
    pointToLayer: pointToLayer,
    onEachFeature: onEachFeature
});

// --- 2. Siapkan base maps dan overlays awal ---
const baseLayers = {
    "OpenStreetMap": openStreetMap,
    "OSM HOT": osmHot,
    "Google Maps": googleMaps
};

const overlays = {
    "Data Sekolah": schoolLayer
};

// --- 3. Buat Kontrol Layer SEKALI SAJA dan tambahkan ke peta ---
const layersControl = L.control.layers(baseLayers, overlays, { collapsed: false }).addTo(map);

// --- 4. Tambahkan semua plugin lain yang tidak bergantung pada data fetch ---
// Tombol Fullscreen
map.addControl(new L.Control.Fullscreen({
    title: { 'false': 'Lihat Layar Penuh', 'true': 'Keluar dari Layar Penuh' }
}));
// Tombol Lokasi Saya (GPS)
L.control.locate({
    position: "topleft",
    strings: { title: "Tampilkan lokasiku" },
    locateOptions: { maxZoom: 16 }
}).addTo(map);
// Tombol Home (Kembali ke Awal)
L.easyButton('fa-home', function(btn, map){
    map.setView(initialView.coords, initialView.zoom);
}, 'Kembali ke tampilan awal').addTo(map);


// --- 5. Lakukan Fetch untuk data dinamis ---
let guruLayer;
fetch('spasial/guru.geojson')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        guruLayer = L.geoJSON(data, {
            pointToLayer: pointToLayer,
            onEachFeature: onEachFeature
        }).addTo(map); // Tambahkan layer guru ke peta

        // Tambahkan layer guru ke KONTROL YANG SUDAH ADA
        layersControl.addOverlay(guruLayer, "Data Guru");

        // Zoom ke gabungan semua layer
        const allLayers = L.featureGroup([schoolLayer, guruLayer]);
        map.fitBounds(allLayers.getBounds().pad(0.1));
    })
    .catch(error => {
        console.error('Error loading guru.geojson:', error);
        alert('Gagal memuat data guru.geojson. Hanya data sekolah yang akan ditampilkan.');
        // Jika gagal, tidak perlu melakukan apa-apa lagi pada kontrol layer.
        // Cukup tampilkan layer sekolah saja.
        schoolLayer.addTo(map);
        map.fitBounds(schoolLayer.getBounds().pad(0.1));
    });