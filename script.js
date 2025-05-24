// script.js
const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/16tGNj1-DfnUDcH4WQr4_bqyKp4Rbwr08cFqUNdN-5ik/pubhtml';

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nisn = document.getElementById('nisn').value;
  Tabletop.init({
    key: 16tGNj1-DfnUDcH4WQr4_bqyKp4Rbwr08cFqUNdN-5ik,
    callback: (data) => {
      const siswa = data.sheets.Sheet1.elements.find((row) => row.B === nisn);
      if (siswa) {
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.hasil').style.display = 'block';
        document.getElementById('nama').textContent = siswa.A;
        document.getElementById('nisn-hasil').textContent = siswa.B;
        document.getElementById('ttl').textContent = siswa.C;
        document.getElementById('status').textContent = siswa.D;
        if (siswa.D === 'Lulus') {
          document.getElementById('download-skl').style.display = 'block';
          document.getElementById('download-skl').addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = siswa.F;
            link.download = 'SKL.pdf';
            link.click();
          });
        }
      } else {
        alert('NISN tidak ditemukan');
      }
    },
    simpleSheet: true,
  });
});
