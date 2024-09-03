import db from "../koneksi.js"

export const getBuku = (req, res) => {

  // select semua data dari table mahasiswa
  // res.send("ayyayy lucuuu");
  const sql = "SELECT * FROM buku";
  // mengirim query ke db mysql
  db.query(sql, (error, result) => {
    //mengirim data ke client browser
    res.send(result);
  });
};

// Ekspor fungsi getMahasiswa

export const getBukuById = (req, res) => {
// menangkap data query url
  const id_buku = req.query.id_buku;
  // menangkap semua data dari table mahasisea berdasarkan nim
  const sql = `SELECT * FROM buku WHERE id_buku = ${id_buku}`
  db.query(sql, (error, result) => {
    res.json(result);
  });
};

export const createBuku = (req, res) => {
  const { nama_buku, nama_penulis, tahun_terbit, bahasa_buku } = req.body;
  // insert ke mahasiswa dengan nilai nim, nama, kelas, alamat dari body
  const sql =
    "INSERT INTO buku (nama_buku, nama_penulis, tahun_terbit, bahasa_buku) VALUES (?,?,?,?)";
  db.query(sql, [nama_buku, nama_penulis, tahun_terbit, bahasa_buku], (error, result) => {
    if (error) {
      // jika ada error
      res.status(400);
      res.send(error);
    }
    // jika tidak ada error
    res.status(201);
    res.json(result);
  });
}

export const updateBuku = (req, res) => {
  const id_buku = req.query.id_buku;

  // menangkap req body
  const { nama_buku, nama_penulis, tahun_terbit, bahasa_buku } = req.body;
  // mengecek nim, nama
  if ( nama_buku|| nama_penulis || tahun_terbit || bahasa_buku) {
    // query Update table mahasiswa
    const query = `Update buku SET nama_buku = "${nama_buku}", nama_penulis = "${nama_penulis}", tahun_terbit = "${tahun_terbit}", bahasa_buku = "${bahasa_buku}" WHERE id_buku = ${id_buku}`;
    //mengirim query ke database
    db.query(query, (error, result) => {
      if (error) res.status(400).send(error.message);

      res.json(result);
    });
  } else {
    res.send("isi body nya");
  }
}

export const  deleteBuku = (req, res) => {
  const id_buku = req.query.id_buku;
  const sql = "DELETE FROM buku WHERE id_buku = ?";
  db.query(sql, [id_buku], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(200);
    res.json("data berhasil dihapus");
  });
}