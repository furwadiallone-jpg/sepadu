

const SAMBAS_LAT = -1.2921;
const SAMBAS_LNG = 109.7674;


const jadwalSholatData = {
    '2026-04': [
        { tanggal: '2026-04-01', subuh: '04:36', dzuhur: '12:15', asar: '15:33', maghrib: '18:29', isya: '19:50' },
        { tanggal: '2026-04-02', subuh: '04:35', dzuhur: '12:15', asar: '15:33', maghrib: '18:30', isya: '19:50' },
        { tanggal: '2026-04-03', subuh: '04:34', dzuhur: '12:15', asar: '15:33', maghrib: '18:31', isya: '19:51' },
        { tanggal: '2026-04-04', subuh: '04:33', dzuhur: '12:15', asar: '15:33', maghrib: '18:31', isya: '19:51' },
        { tanggal: '2026-04-05', subuh: '04:32', dzuhur: '12:15', asar: '15:33', maghrib: '18:32', isya: '19:52' },
        { tanggal: '2026-04-06', subuh: '04:31', dzuhur: '12:15', asar: '15:33', maghrib: '18:32', isya: '19:52' },
        { tanggal: '2026-04-07', subuh: '04:30', dzuhur: '12:15', asar: '15:33', maghrib: '18:33', isya: '19:53' },
        { tanggal: '2026-04-08', subuh: '04:29', dzuhur: '12:15', asar: '15:33', maghrib: '18:34', isya: '19:53' },
        { tanggal: '2026-04-09', subuh: '04:28', dzuhur: '12:15', asar: '15:34', maghrib: '18:34', isya: '19:54' },
        { tanggal: '2026-04-10', subuh: '04:27', dzuhur: '12:14', asar: '15:34', maghrib: '18:35', isya: '19:54' },
        { tanggal: '2026-04-11', subuh: '04:26', dzuhur: '12:14', asar: '15:34', maghrib: '18:36', isya: '19:55' },
        { tanggal: '2026-04-12', subuh: '04:25', dzuhur: '12:14', asar: '15:34', maghrib: '18:36', isya: '19:55' },
        { tanggal: '2026-04-13', subuh: '04:24', dzuhur: '12:14', asar: '15:34', maghrib: '18:37', isya: '19:56' },
        { tanggal: '2026-04-14', subuh: '04:23', dzuhur: '12:14', asar: '15:34', maghrib: '18:38', isya: '19:56' },
        { tanggal: '2026-04-15', subuh: '04:22', dzuhur: '12:14', asar: '15:34', maghrib: '18:39', isya: '19:57' },
        { tanggal: '2026-04-16', subuh: '04:21', dzuhur: '12:14', asar: '15:34', maghrib: '18:39', isya: '19:57' },
        { tanggal: '2026-04-17', subuh: '04:20', dzuhur: '12:14', asar: '15:35', maghrib: '18:40', isya: '19:58' },
        { tanggal: '2026-04-18', subuh: '04:19', dzuhur: '12:14', asar: '15:35', maghrib: '18:40', isya: '19:58' },
        { tanggal: '2026-04-19', subuh: '04:18', dzuhur: '12:14', asar: '15:35', maghrib: '18:41', isya: '19:59' },
        { tanggal: '2026-04-20', subuh: '04:17', dzuhur: '12:14', asar: '15:35', maghrib: '18:42', isya: '19:59' },
        { tanggal: '2026-04-21', subuh: '04:16', dzuhur: '12:14', asar: '15:35', maghrib: '18:42', isya: '20:00' },
        { tanggal: '2026-04-22', subuh: '04:15', dzuhur: '12:14', asar: '15:35', maghrib: '18:43', isya: '20:00' },
        { tanggal: '2026-04-23', subuh: '04:14', dzuhur: '12:14', asar: '15:35', maghrib: '18:44', isya: '20:01' },
        { tanggal: '2026-04-24', subuh: '04:13', dzuhur: '12:14', asar: '15:35', maghrib: '18:44', isya: '20:01' },
        { tanggal: '2026-04-25', subuh: '04:12', dzuhur: '12:14', asar: '15:35', maghrib: '18:45', isya: '20:02' },
        { tanggal: '2026-04-26', subuh: '04:11', dzuhur: '12:14', asar: '15:36', maghrib: '18:46', isya: '20:02' },
        { tanggal: '2026-04-27', subuh: '04:10', dzuhur: '12:14', asar: '15:36', maghrib: '18:46', isya: '20:03' },
        { tanggal: '2026-04-28', subuh: '04:09', dzuhur: '12:14', asar: '15:36', maghrib: '18:47', isya: '20:03' },
        { tanggal: '2026-04-29', subuh: '04:08', dzuhur: '12:14', asar: '15:36', maghrib: '18:48', isya: '20:04' },
        { tanggal: '2026-04-30', subuh: '04:07', dzuhur: '12:14', asar: '15:36', maghrib: '18:48', isya: '20:04' }
    ],
    '2026-05': [
        { tanggal: '2026-05-01', subuh: '04:06', dzuhur: '12:14', asar: '15:36', maghrib: '18:49', isya: '20:05' },
        { tanggal: '2026-05-02', subuh: '04:05', dzuhur: '12:14', asar: '15:36', maghrib: '18:50', isya: '20:05' },
        { tanggal: '2026-05-03', subuh: '04:04', dzuhur: '12:14', asar: '15:37', maghrib: '18:50', isya: '20:06' },
        { tanggal: '2026-05-04', subuh: '04:03', dzuhur: '12:15', asar: '15:37', maghrib: '18:51', isya: '20:06' },
        { tanggal: '2026-05-05', subuh: '04:02', dzuhur: '12:15', asar: '15:37', maghrib: '18:52', isya: '20:07' },
        { tanggal: '2026-05-06', subuh: '04:01', dzuhur: '12:15', asar: '15:37', maghrib: '18:52', isya: '20:07' },
        { tanggal: '2026-05-07', subuh: '04:00', dzuhur: '12:15', asar: '15:37', maghrib: '18:53', isya: '20:08' },
        { tanggal: '2026-05-08', subuh: '04:00', dzuhur: '12:15', asar: '15:38', maghrib: '18:54', isya: '20:08' },
        { tanggal: '2026-05-09', subuh: '03:59', dzuhur: '12:15', asar: '15:38', maghrib: '18:54', isya: '20:09' },
        { tanggal: '2026-05-10', subuh: '03:58', dzuhur: '12:15', asar: '15:38', maghrib: '18:55', isya: '20:09' },
        { tanggal: '2026-05-11', subuh: '03:57', dzuhur: '12:15', asar: '15:38', maghrib: '18:56', isya: '20:10' },
        { tanggal: '2026-05-12', subuh: '03:57', dzuhur: '12:15', asar: '15:38', maghrib: '18:56', isya: '20:10' },
        { tanggal: '2026-05-13', subuh: '03:56', dzuhur: '12:15', asar: '15:39', maghrib: '18:57', isya: '20:11' },
        { tanggal: '2026-05-14', subuh: '03:55', dzuhur: '12:16', asar: '15:39', maghrib: '18:58', isya: '20:11' },
        { tanggal: '2026-05-15', subuh: '03:55', dzuhur: '12:16', asar: '15:39', maghrib: '18:58', isya: '20:12' },
        { tanggal: '2026-05-16', subuh: '03:54', dzuhur: '12:16', asar: '15:39', maghrib: '18:59', isya: '20:12' },
        { tanggal: '2026-05-17', subuh: '03:54', dzuhur: '12:16', asar: '15:39', maghrib: '19:00', isya: '20:13' },
        { tanggal: '2026-05-18', subuh: '03:53', dzuhur: '12:16', asar: '15:40', maghrib: '19:00', isya: '20:13' },
        { tanggal: '2026-05-19', subuh: '03:53', dzuhur: '12:16', asar: '15:40', maghrib: '19:01', isya: '20:14' },
        { tanggal: '2026-05-20', subuh: '03:52', dzuhur: '12:16', asar: '15:40', maghrib: '19:02', isya: '20:14' },
        { tanggal: '2026-05-21', subuh: '03:52', dzuhur: '12:16', asar: '15:40', maghrib: '19:02', isya: '20:15' },
        { tanggal: '2026-05-22', subuh: '03:51', dzuhur: '12:17', asar: '15:40', maghrib: '19:03', isya: '20:15' },
        { tanggal: '2026-05-23', subuh: '03:51', dzuhur: '12:17', asar: '15:41', maghrib: '19:04', isya: '20:16' },
        { tanggal: '2026-05-24', subuh: '03:50', dzuhur: '12:17', asar: '15:41', maghrib: '19:04', isya: '20:16' },
        { tanggal: '2026-05-25', subuh: '03:50', dzuhur: '12:17', asar: '15:41', maghrib: '19:05', isya: '20:17' },
        { tanggal: '2026-05-26', subuh: '03:50', dzuhur: '12:17', asar: '15:41', maghrib: '19:05', isya: '20:17' },
        { tanggal: '2026-05-27', subuh: '03:49', dzuhur: '12:17', asar: '15:42', maghrib: '19:06', isya: '20:18' },
        { tanggal: '2026-05-28', subuh: '03:49', dzuhur: '12:17', asar: '15:42', maghrib: '19:07', isya: '20:18' },
        { tanggal: '2026-05-29', subuh: '03:49', dzuhur: '12:18', asar: '15:42', maghrib: '19:07', isya: '20:19' },
        { tanggal: '2026-05-30', subuh: '03:48', dzuhur: '12:18', asar: '15:42', maghrib: '19:08', isya: '20:19' },
        { tanggal: '2026-05-31', subuh: '03:48', dzuhur: '12:18', asar: '15:42', maghrib: '19:08', isya: '20:20' }
    ],
    '2026-06': [
        { tanggal: '2026-06-01', subuh: '03:48', dzuhur: '12:18', asar: '15:43', maghrib: '19:09', isya: '20:20' },
        { tanggal: '2026-06-02', subuh: '03:48', dzuhur: '12:18', asar: '15:43', maghrib: '19:09', isya: '20:21' },
        { tanggal: '2026-06-03', subuh: '03:47', dzuhur: '12:18', asar: '15:43', maghrib: '19:10', isya: '20:21' },
        { tanggal: '2026-06-04', subuh: '03:47', dzuhur: '12:18', asar: '15:43', maghrib: '19:10', isya: '20:22' },
        { tanggal: '2026-06-05', subuh: '03:47', dzuhur: '12:19', asar: '15:43', maghrib: '19:11', isya: '20:22' },
        { tanggal: '2026-06-06', subuh: '03:47', dzuhur: '12:19', asar: '15:44', maghrib: '19:11', isya: '20:23' },
        { tanggal: '2026-06-07', subuh: '03:47', dzuhur: '12:19', asar: '15:44', maghrib: '19:12', isya: '20:23' },
        { tanggal: '2026-06-08', subuh: '03:47', dzuhur: '12:19', asar: '15:44', maghrib: '19:12', isya: '20:24' },
        { tanggal: '2026-06-09', subuh: '03:47', dzuhur: '12:19', asar: '15:44', maghrib: '19:13', isya: '20:24' },
        { tanggal: '2026-06-10', subuh: '03:47', dzuhur: '12:19', asar: '15:45', maghrib: '19:13', isya: '20:25' },
        { tanggal: '2026-06-11', subuh: '03:47', dzuhur: '12:19', asar: '15:45', maghrib: '19:14', isya: '20:25' },
        { tanggal: '2026-06-12', subuh: '03:47', dzuhur: '12:20', asar: '15:45', maghrib: '19:14', isya: '20:26' },
        { tanggal: '2026-06-13', subuh: '03:47', dzuhur: '12:20', asar: '15:45', maghrib: '19:15', isya: '20:26' },
        { tanggal: '2026-06-14', subuh: '03:47', dzuhur: '12:20', asar: '15:45', maghrib: '19:15', isya: '20:27' },
        { tanggal: '2026-06-15', subuh: '03:47', dzuhur: '12:20', asar: '15:46', maghrib: '19:15', isya: '20:27' },
        { tanggal: '2026-06-16', subuh: '03:48', dzuhur: '12:20', asar: '15:46', maghrib: '19:16', isya: '20:27' },
        { tanggal: '2026-06-17', subuh: '03:48', dzuhur: '12:20', asar: '15:46', maghrib: '19:16', isya: '20:28' },
        { tanggal: '2026-06-18', subuh: '03:48', dzuhur: '12:20', asar: '15:46', maghrib: '19:17', isya: '20:28' },
        { tanggal: '2026-06-19', subuh: '03:48', dzuhur: '12:21', asar: '15:47', maghrib: '19:17', isya: '20:29' },
        { tanggal: '2026-06-20', subuh: '03:48', dzuhur: '12:21', asar: '15:47', maghrib: '19:17', isya: '20:29' },
        { tanggal: '2026-06-21', subuh: '03:48', dzuhur: '12:21', asar: '15:47', maghrib: '19:18', isya: '20:29' },
        { tanggal: '2026-06-22', subuh: '03:49', dzuhur: '12:21', asar: '15:47', maghrib: '19:18', isya: '20:30' },
        { tanggal: '2026-06-23', subuh: '03:49', dzuhur: '12:21', asar: '15:48', maghrib: '19:18', isya: '20:30' },
        { tanggal: '2026-06-24', subuh: '03:49', dzuhur: '12:21', asar: '15:48', maghrib: '19:19', isya: '20:30' },
        { tanggal: '2026-06-25', subuh: '03:49', dzuhur: '12:21', asar: '15:48', maghrib: '19:19', isya: '20:31' },
        { tanggal: '2026-06-26', subuh: '03:50', dzuhur: '12:22', asar: '15:48', maghrib: '19:19', isya: '20:31' },
        { tanggal: '2026-06-27', subuh: '03:50', dzuhur: '12:22', asar: '15:48', maghrib: '19:20', isya: '20:31' },
        { tanggal: '2026-06-28', subuh: '03:50', dzuhur: '12:22', asar: '15:49', maghrib: '19:20', isya: '20:32' },
        { tanggal: '2026-06-29', subuh: '03:50', dzuhur: '12:22', asar: '15:49', maghrib: '19:20', isya: '20:32' },
        { tanggal: '2026-06-30', subuh: '03:51', dzuhur: '12:22', asar: '15:49', maghrib: '19:20', isya: '20:32' }
    ]
};
function formatTanggalIndonesia(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    
    return `${hari[date.getDay()]}, ${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
}
function getJadwalHariIni() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const date = String(today.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${date}`;
    
    const monthKey = `${year}-${month}`;
    
    if (jadwalSholatData[monthKey]) {
        const jadwal = jadwalSholatData[monthKey].find(j => j.tanggal === dateString);
        return jadwal;
    }
    
    return { tanggal: dateString, subuh: '04:30', dzuhur: '12:15', asar: '15:35', maghrib: '18:30', isya: '19:50' };
}

function initJadwalSholat() {
    const jadwal = getJadwalHariIni();
    
    const currentDateEl = document.getElementById('current-date');
    if (currentDateEl) {
        currentDateEl.textContent = formatTanggalIndonesia(jadwal.tanggal);
    }
    
    const waktuElements = {
        'subuh': 'subuh-time',
        'terbit': 'terbit-time',
        'dzuhur': 'dzuhur-time',
        'asar': 'asar-time',
        'maghrib': 'maghrib-time',
        'isya': 'isya-time'
    };
    
    document.getElementById('subuh-time').textContent = jadwal.subuh;
    document.getElementById('dzuhur-time').textContent = jadwal.dzuhur;
    document.getElementById('asar-time').textContent = jadwal.asar;
    document.getElementById('maghrib-time').textContent = jadwal.maghrib;
    document.getElementById('isya-time').textContent = jadwal.isya;
    
    const monthKey = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;
    const tbody = document.getElementById('sholat-table-body');
    
    if (tbody && jadwalSholatData[monthKey]) {
        tbody.innerHTML = '';
        jadwalSholatData[monthKey].forEach(row => {
            const tr = document.createElement('tr');
            const date = new Date(row.tanggal + 'T00:00:00');
            tr.innerHTML = `
                <td>${date.getDate()}</td>
                <td>${row.subuh}</td>
                <td>${row.dzuhur}</td>
                <td>${row.asar}</td>
                <td>${row.maghrib}</td>
                <td>${row.isya}</td>
            `;
            tbody.appendChild(tr);
        });
    }
}

function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    const sambasLocation = { lat: SAMBAS_LAT, lng: SAMBAS_LNG };
    
    const map = new google.maps.Map(mapElement, {
        zoom: 12,
        center: sambasLocation,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
    });
    
    const marker = new google.maps.Marker({
        position: sambasLocation,
        map: map,
        title: 'Kantor Desa Sepadu',
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#1b9034',
            fillOpacity: 1,
            strokeColor: '#fff',
            strokeWeight: 2
        }
    });
    
    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="color: #333; font-size: 12px;">
                <h4 style="margin: 5px 0; color: #1b9034;">Kantor Desa Sepadu</h4>
                <p style="margin: 5px 0;">Jalan Semparuk NO 1031</p>
                <p style="margin: 5px 0;">Kec. Semparuk, Kab. Sambas</p>
                <p style="margin: 5px 0;">Kalimantan Barat</p>
            </div>
        `
    });
    
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initJadwalSholat();
    initMap();
});
setInterval(() => {
    initJadwalSholat();
}, 3600000); 

console.log('Jadwal Sholat script loaded successfully');
