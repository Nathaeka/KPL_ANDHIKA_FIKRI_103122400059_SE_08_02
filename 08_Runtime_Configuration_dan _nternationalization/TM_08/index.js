require('@dotenvx/dotenvx').config({ quiet: true });

async function tampilkanKurs() {
  try {
    const apiUrl = process.env.BASE_API;
    
    const response = await fetch(apiUrl);
    const data = await response.json();

    const tanggalAPI = data.date;
    const kursCNH = data.idr.cnh;
    const kursEUR = data.idr.eur;

    const nilaiUji = [25000, 50000, 100000];

    const formatTanggal = new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(tanggalAPI));

    for (const jumlah of nilaiUji) {
      const totalCNH = jumlah * kursCNH;
      const totalEUR = jumlah * kursEUR;

      const formatIDR = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
      }).format(jumlah).replace(/\s/g, '');

      const formatCNH = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'CNH',
        currencyDisplay: 'code'
      }).format(totalCNH);

      const nilaiEUR = new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(totalEUR);
      const formatEUR = `${nilaiEUR} €`;

      console.log(`Kurs ${formatIDR} pada ${formatTanggal} adalah ${formatCNH} dan ${formatEUR}`);
    }

  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data:", error);
  }
}

tampilkanKurs();