let total = 0;

document.getElementById("btnTambah").addEventListener("click", tambahBarang);

function tambahBarang() {
    let nama = document.getElementById("nama").value;
    let harga = parseInt(document.getElementById("harga").value);

    if (!nama || !harga) {
        alert("Nama dan harga harus diisi!");
        return;
    }

    let tableBody = document.querySelector("#tabel tbody");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${nama}</td>
        <td>Rp ${harga}</td>
        <td><button class="hapus-btn" onclick="hapusBarang(this, ${harga})">Hapus</button></td>
    `;

    tableBody.appendChild(row);

    total += harga;
    document.getElementById("total").innerText = total;

    document.getElementById("nama").value = "";
    document.getElementById("harga").value = "";
}

function hapusBarang(button, harga) {
    let row = button.parentElement.parentElement;
    row.remove();

    total -= harga;
    document.getElementById("total").innerText = total;
}
