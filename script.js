// script.js
document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nama = document.getElementById("nama").value;
    const lokasi = document.getElementById("lokasi").value;
    const deskripsi = document.getElementById("deskripsi").value;
    
    if (nama && lokasi && deskripsi) {
        const reportList = document.getElementById("reportList");
        const report = document.createElement("div");
        report.classList.add("report");
        report.innerHTML = `
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Lokasi:</strong> ${lokasi}</p>
            <p><strong>Deskripsi:</strong> ${deskripsi}</p>
        `;
        reportList.appendChild(report);
        
        document.getElementById("reportForm").reset();
    }
});
