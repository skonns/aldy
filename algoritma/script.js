function mintaNomorTelepon() {
    return prompt("Masukkan nomor telepon:");
}

function tampilkanPesan(pesan) {
    alert(pesan);
}

function main() {
    console.log("Mulai");

    let nomorTelepon = mintaNomorTelepon();

    let konfirmasi = confirm(`Apakah Anda yakin ingin menelepon nomor ${nomorTelepon}?`);

    if (konfirmasi) {
        tampilkanPesan(`Memulai panggilan ke nomor ${nomorTelepon}`);
        // Di sini Anda dapat menambahkan kode untuk memicu panggilan telepon (jika memungkinkan)
    }

    console.log("Selesai");
}

main();
