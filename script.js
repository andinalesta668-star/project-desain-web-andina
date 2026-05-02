/* ============================================================
   CHIRP & PLUME — script.js
   Kode ini sudah disederhanakan agar mudah dipahami.
   ============================================================ */


/* ==================== PETA GAMBAR ====================
   Semua nama file gambar dikumpulkan di sini supaya mudah diubah.
   Daripada nulis nama file panjang berulang-ulang, cukup pakai IMG.p1, IMG.s2, dst.
*/
const IMG = {
  // Gambar produk
  p1:  'Lovebirds.jpeg',
  p2:  'sangkar.jpeg',
  p3:  'Classic Seed Blend 3_75kg - 25% extra free.jpeg',
  p4:  'Merak Hijau.jpeg',
  p5:  'Cepuk Keramik Sabit.jpeg',
  p6:  'ebid vit.png',
  p7:  'kenari yorkshire.jpeg',
  p8:  'sangkar mini.jpeg',
  p9:  'pakan premium.jpeg',
  p10: 'tempat makan.jpeg',
  p11: 'Murai kalimantan.jpeg',
  p12: 'metaboleis.png',
  // Gambar spesies
  s1:  '4lovebird.jpeg',
  s2:  'kenari.jpg',
  s3:  'batuuuuu.jpeg',
  s4:  'Peacock katup.jpeg',
  s5:  'kakatua white.jpeg',
  s6:  'beonias.jpeg',
  s7:  'Zebra finch.jpeg',
  s8:  'kacerr.png',
  s9:  'suren.jpeg',
  s10: 'plecii.jpeg',
  s11: 'Budgerigar.jpeg',
  s12: 'rrangkong.jpeg',
};


/* ==================== DATA PRODUK ====================
   Array (daftar) semua produk yang dijual di toko.
   Setiap produk adalah sebuah object {} dengan properti:
   - id         : nomor unik produk
   - name       : nama produk
   - category   : kategori (burung/sangkar/pakan/vitamin/aksesoris)
   - species    : jenis burung (hanya untuk kategori burung)
   - price      : harga sekarang
   - originalPrice : harga asli sebelum diskon (null = tidak ada diskon)
   - img        : nama file gambar
   - badge      : label kecil di sudut gambar (null = tidak ada)
   - badgeColor : warna badge
   - rating     : nilai rating (misal 4.9)
   - reviews    : jumlah ulasan
   - sold       : jumlah terjual
   - stock      : stok tersisa
   - showOnHome : tampil di halaman utama? (false = hanya di halaman koleksi)
   - description: deskripsi panjang produk
   - specs      : spesifikasi produk (object key:value)
*/
const products = [
  {
    id: 1, name: "Lovebird Holland Blorok", category: "burung", species: "lovebird",
    categoryLabel: "Burung Kicau", price: 250000, originalPrice: 350000,
    img: IMG.p1, badge: "Terlaris", badgeColor: "#c4845a",
    rating: 4.9, reviews: 234, sold: 1250, stock: 15,
    description: "Lovebird Holland Blorok adalah jenis lovebird paling populer di Indonesia dengan kombinasi warna bulu hijau, kuning, dan blorok yang khas. Sangat jinak dan mudah dilatih, cocok untuk pemula maupun kolektor berpengalaman. Setiap burung telah melalui pemeriksaan kesehatan dan dilengkapi sertifikat.",
    specs: { Usia: "3-4 Bulan", "Jenis Kelamin": "Jantan/Betina", Warna: "Blorok Hijau-Kuning", Kondisi: "Sehat, Sudah Vaksin", Garansi: "7 Hari" }
  },
  {
    id: 2, name: "Sangkar Stainless Victorian XL", category: "sangkar",
    categoryLabel: "Kandang Premium", price: 1250000, originalPrice: null,
    img: IMG.p2, badge: "Baru", badgeColor: "#5c7250",
    rating: 4.8, reviews: 89, sold: 456, stock: 8,
    description: "Sangkar premium dengan desain Victorian klasik yang elegan. Dibuat dari material stainless steel anti-karat berkualitas tinggi, tahan lama dan mudah dibersihkan. Dilengkapi dengan tempat makan, minum, dan ayunan yang cantik.",
    specs: { Material: "Stainless Steel 304", Ukuran: "60 x 40 x 80 cm", Berat: "8.5 kg", Warna: "Broken white", Aksesoris: "Lengkap" }
  },
  {
    id: 3, name: "Tom Chambers Classic Seed Blend-3,75kg", category: "pakan", showOnHome: false,
    categoryLabel: "Pakan Premium", price: 90000, originalPrice: 110000,
    img: IMG.p3, badge: null, badgeColor: null,
    rating: 4.7, reviews: 567, sold: 3420, stock: 50,
    description: "Campuran biji-bijian premium berkualitas tinggi untuk burung kicau dan burung peliharaan. Mengandung berbagai biji pilihan seperti millet, canary seed, niger seed, dan biji bunga matahari yang kaya nutrisi untuk mendukung kesehatan dan energi burung setiap hari.",
    specs: { Berat: "5 kg", Komposisi: "Mix Seeds Premium", Sertifikasi: "Organik", Kadaluarsa: "12 Bulan", Penyimpanan: "Tempat Kering" }
  },
  {
    id: 4, name: "Merak Hijau Jawa Muda", category: "burung", species: "merak",
    categoryLabel: "Burung Eksotis", price: 8500000, originalPrice: null,
    img: IMG.p4, badge: "Langka", badgeColor: "#c9a84c",
    rating: 5.0, reviews: 23, sold: 45, stock: 3,
    description: "Merak Hijau Jawa (Pavo muticus) adalah salah satu burung paling indah dan langka di Indonesia. Memiliki bulu ekor spektakuler dengan corak mata yang memukau. Dilengkapi surat legal dan sertifikat penangkaran resmi BKSDA.",
    specs: { Usia: "8-10 Bulan", "Jenis Kelamin": "Jantan", Asal: "Penangkaran Resmi", Sertifikat: "BKSDA", Garansi: "30 Hari" }
  },
  {
    id: 5, name: "Tempat Minum Keramik Antik", category: "aksesoris",
    categoryLabel: "Aksesoris", price: 95000, originalPrice: null,
    img: IMG.p5, badge: null, badgeColor: null,
    rating: 4.6, reviews: 178, sold: 890, stock: 25,
    description: "Tempat minum keramik dengan desain antik yang elegan. Dibuat dari keramik berkualitas tinggi yang aman untuk burung. Mudah dibersihkan dan tahan lama.",
    specs: { Material: "Keramik Premium", Kapasitas: "150 ml", Ukuran: "10 x 8 cm", Warna: "Krem Antik", Perawatan: "Cuci dengan Tangan" }
  },
  {
    id: 6, name: "Ebod Vit vitamin Burung", category: "vitamin",
    categoryLabel: "Vitamin", price: 25000, originalPrice: 50000,
    img: IMG.p6, badge: "Herbal", badgeColor: "#5c7250",
    rating: 4.8, reviews: 345, sold: 2100, stock: 40,
    description: "Vitamin herbal alami untuk meningkatkan stamina dan kualitas kicauan burung Anda. Mengandung ekstrak jahe, temulawak, dan madu murni.",
    specs: { Volume: "30 ml", Kandungan: "Herbal Alami", Dosis: "2-3 tetes/hari", Kadaluarsa: "24 Bulan", BPOM: "Terdaftar" }
  },
  {
    id: 7, name: "Kenari Yorkshire Premium", category: "burung", species: "kenari", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 250000, originalPrice: 300000,
    img: IMG.p7, badge: "Premium", badgeColor: "#c9a84c",
    rating: 4.9, reviews: 156, sold: 320, stock: 6,
    description: "Kenari Yorkshire adalah kenari postur terbesar dengan tinggi mencapai 17cm. Memiliki bulu tebal dan lembut dengan postur tegap yang gagah. Suara kicauan merdu dan stabil, cocok untuk lomba maupun hobi.",
    specs: { Usia: "6-8 Bulan", Tinggi: "15-17 cm", Warna: "Kuning Gold", Kondisi: "Gacor, Sehat", Garansi: "14 Hari" }
  },
  {
    id: 8, name: "Sangkar Minimalis Modern M", category: "sangkar", showOnHome: false,
    categoryLabel: "Kandang Premium", price: 450000, originalPrice: 550000,
    img: IMG.p8, badge: "Promo", badgeColor: "#c4845a",
    rating: 4.5, reviews: 234, sold: 780, stock: 20,
    description: "Sangkar dengan desain minimalis modern yang cocok untuk interior rumah kontemporer. Rangka besi powder coating anti karat dengan cat ramah lingkungan.",
    specs: { Material: "Besi Powder Coating", Ukuran: "35 x 25 x 45 cm", Berat: "3.2 kg", Warna: "pink", Fitur: "Dapat Dilipat" }
  },
  {
    id: 9, name: "Premium Prestige Canaries 800gr", category: "pakan",
    categoryLabel: "Pakan Premium", price: 85000, originalPrice: null,
    img: IMG.p9, badge: null, badgeColor: null,
    rating: 4.7, reviews: 423, sold: 2890, stock: 60,
    description: "Kemasan 800 gram Made In Belgium Premium Prestige Canaries merupakan campuran biji-bijian dengan komposisi yang bervariasi dan seimbang. Disesuaikan dengan kebutuhan nutrisi yang diperlukan kenari.",
    specs: { Berat: "800 g", Protein: "Min. 18%", Jenis: "Halus/Kasar", Target: "Burung Insektivora", Kadaluarsa: "8 Bulan" }
  },
  {
    id: 10, name: "Tempat Pakan Stainless Premium", category: "aksesoris", showOnHome: false,
    categoryLabel: "Aksesoris", price: 30000, originalPrice: 40000,
    img: IMG.p10, badge: "Baru", badgeColor: "#5c7250",
    rating: 4.6, reviews: 112, sold: 560, stock: 35,
    description: "Tempat pakan dari stainless steel food grade yang aman dan tahan lama. Desain anti tumpah dengan pengunci yang kuat.",
    specs: { Material: "Stainless Steel 18/8", Kapasitas: "200 ml", Ukuran: "12 x 10 cm", Fitur: "Anti Tumpah", Warna: "Silver" }
  },
  {
    id: 11, name: "Murai Batu Kalimantan", category: "burung", species: "murai", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 3500000, originalPrice: 4000000,
    img: IMG.p11, badge: "Terlaris", badgeColor: "#c4845a",
    rating: 4.9, reviews: 198, sold: 890, stock: 5,
    description: "Murai Batu Kalimantan dikenal dengan kicauan panjang dan variatif. Ekor panjang yang indah menjadi ciri khasnya. Burung ini sangat diminati untuk keperluan lomba karena stamina dan mentalnya yang kuat.",
    specs: { Usia: "1-1.5 Tahun", "Jenis Kelamin": "Jantan", "Panjang Ekor": "25-30 cm", Kondisi: "Sudah Jinak", Garansi: "14 Hari" }
  },
  {
    id: 12, name: "Metabolisme Dr.Edhi", category: "vitamin", showOnHome: false,
    categoryLabel: "Vitamin", price: 32000, originalPrice: 45000,
    img: IMG.p12, badge: "Hot", badgeColor: "#e74c3c",
    rating: 4.7, reviews: 287, sold: 1650, stock: 45,
    description: "Suplemen khusus untuk burung kicau yang diformulasikan untuk membantu meningkatkan metabolisme tubuh dan menjaga kondisi burung tetap prima. Mengandung nutrisi penting yang berperan dalam meningkatkan stamina, nafsu makan, serta daya tahan tubuh agar burung lebih aktif dan gacor.",
    specs: { Volume: "2,5 ml", Kandungan: "Beta-Karoten, Biotin", Dosis: "3 tetes/hari", Target: "Semua Jenis Burung", Kadaluarsa: "18 Bulan" }
  },
  {
    id: 13, name: "Lovebird Pastel Blue", category: "burung", species: "lovebird",
    categoryLabel: "Burung Kicau", price: 350000, originalPrice: 400000,
    img: "lovebird biru.jpeg", badge: "Baru", badgeColor: "#5c7250",
    rating: 4.8, reviews: 120, sold: 300, stock: 10, showOnHome: false,
    description: "Lovebird dengan perpaduan warna biru, putih, dan abu-abu yang lembut. Aktif, sehat, dan memiliki suara kicauan yang merdu. Cocok untuk pemula maupun kolektor.",
    specs: { Usia: "3-5 Bulan", "Jenis Kelamin": "Jantan/Betina", Warna: "Biru Pastel", Kondisi: "Sehat, Aktif", Garansi: "7 Hari" }
  },
  {
    id: 14, name: "Lovebird Lutino", category: "burung", species: "lovebird",
    categoryLabel: "Burung Kicau", price: 400000, originalPrice: 480000,
    img: "kuning.jpeg", badge: "Terlaris", badgeColor: "#c4845a",
    rating: 4.9, reviews: 98, sold: 250, stock: 8, showOnHome: false,
    description: "Lovebird Lutino dengan warna kuning cerah yang mencolok dan menarik. Sangat cocok untuk lomba maupun sebagai burung hias karena tampilannya yang elegan.",
    specs: { Usia: "4-6 Bulan", "Jenis Kelamin": "Jantan/Betina", Warna: "Kuning Cerah", Kondisi: "Sehat & Gacor", Garansi: "7 Hari" }
  },
  {
    id: 15, name: "Lavender Lovebird", category: "burung", species: "lovebird",
    categoryLabel: "Burung Kicau", price: 550000, originalPrice: 650000,
    img: "lilac.jpeg", badge: "Premium", badgeColor: "#c9a84c",
    rating: 4.7, reviews: 80, sold: 200, stock: 6, showOnHome: false,
    description: "Lovebird dengan warna lavender unik perpaduan lilac, putih, dan sentuhan pink di pipi. Sangat cantik dan cocok sebagai burung hias maupun kicau.",
    specs: { Usia: "5-7 Bulan", "Jenis Kelamin": "Jantan/Betina", Warna: "Lavender / Lilac", Kondisi: "Sehat & Aktif", Garansi: "7 Hari" }
  },
  {
    id: 16, name: "Kakatua Putih Jinak", category: "burung", species: "kakatua",
    categoryLabel: "Burung Eksotis", price: 6500000, img: "kakatua.jpeg",
    rating: 4.9, reviews: 87, sold: 120, stock: 3,
    description: "Kakatua putih dengan bulu bersih dan jambul indah. Sangat cerdas, bisa dilatih bicara dan interaktif dengan pemilik.",
    specs: { Usia: "1 Tahun", Asal: "Penangkaran", Kondisi: "Sehat & Aktif" }
  },
  {
    id: 17, name: "Beo Nias Pintar Bicara", category: "burung", species: "beo",
    categoryLabel: "Burung Kicau", price: 4500000, img: "beo.jpeg",
    rating: 4.8, reviews: 65, sold: 90, stock: 4,
    description: "Beo Nias terkenal karena kemampuannya meniru suara manusia dengan sangat jelas.",
    specs: { Usia: "8 Bulan", Kemampuan: "Bisa Bicara", Kondisi: "Jinak" }
  },
  {
    id: 18, name: "Finch Zebra Aktif", category: "burung", species: "finch", showOnHome: false,
    categoryLabel: "Burung Hias", price: 250000, img: "burung zebra.jpeg",
    rating: 4.7, reviews: 40, sold: 150, stock: 10,
    description: "Burung kecil yang lincah dan mudah dipelihara, cocok untuk pemula.",
    specs: { Ukuran: "Kecil", Warna: "Abu-Oranye", Perawatan: "Mudah" }
  },
  {
    id: 19, name: "Kacer Poci Gacor", category: "burung", species: "kacer", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 900000, img: "burung Kacer poci.jpeg",
    rating: 4.8, reviews: 72, sold: 130, stock: 6,
    description: "Kacer dengan suara lantang dan variasi kicauan yang bagus untuk lomba.",
    specs: { Usia: "1 Tahun", Kondisi: "Gacor", Jenis: "Jantan" }
  },
  {
    id: 20, name: "Jalak Suren Rajin Bunyi", category: "burung", species: "jalak", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 1200000, img: "Jalak.jpeg",
    rating: 4.9, reviews: 55, sold: 110, stock: 5,
    description: "Jalak suren terkenal dengan suara keras dan mudah dilatih.",
    specs: { Usia: "10 Bulan", Kondisi: "Aktif", Keunggulan: "Cepat Jinak" }
  },
  {
    id: 21, name: "Pleci Aurifrons Lincah", category: "burung", species: "pleci", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 200000, img: "pleci ijo.jpeg",
    rating: 4.7, reviews: 38, sold: 180, stock: 12,
    description: "Pleci kecil dengan suara khas yang nyaring dan aktif.",
    specs: { Ukuran: "Mini", Warna: "Hijau", Perawatan: "Mudah" }
  },
  {
    id: 22, name: "Parkit Australia Warna Cerah", category: "burung", species: "parkit", showOnHome: false,
    categoryLabel: "Burung Hias", price: 220000, img: "parkit.jpeg",
    rating: 4.8, reviews: 60, sold: 200, stock: 15,
    description: "Parkit dengan warna cerah dan sifat ramah, cocok untuk peliharaan keluarga.",
    specs: { Warna: "Biru/Kuning", Sifat: "Ramah", Perawatan: "Mudah" }
  },
  {
    id: 23, name: "Rangkong Eksotis Langka", category: "burung", species: "rangkong",
    categoryLabel: "Burung Eksotis", price: 18000000, img: "rangkong.jpeg",
    rating: 5.0, reviews: 12, sold: 20, stock: 2,
    description: "Burung rangkong dengan paruh besar khas, sangat eksotis dan langka.",
    specs: { Asal: "Sumatera", Status: "Langka", Kondisi: "Sehat" }
  },
  {
    id: 24, name: "Beo Albino Langka", category: "burung", species: "beo",
    categoryLabel: "Burung Kicau", price: 6500000, img: "beo albino.jpeg",
    rating: 4.9, reviews: 42, sold: 55, stock: 3, showOnHome: false,
    description: "Beo Albino memiliki warna putih eksotis dengan mata merah yang langka. Dikenal cerdas dan mampu menirukan suara manusia dengan jelas serta mudah dilatih.",
    specs: { Usia: "6 Bulan", Kemampuan: "Bisa Bicara", Kondisi: "Jinak & Sehat" }
  },
  {
    id: 25, name: "Beo Papua Super Cerdas", category: "burung", species: "beo",
    categoryLabel: "Burung Kicau", price: 5500000, img: "beo papua.png",
    rating: 4.7, reviews: 38, sold: 47, stock: 5, showOnHome: false,
    description: "Beo Papua dikenal dengan suara khasnya yang keras dan kemampuannya menirukan berbagai suara. Burung ini aktif, cerdas, dan cocok untuk dipelihara sebagai burung kicau berkualitas.",
    specs: { Usia: "7 Bulan", Kemampuan: "Bisa Bicara", Kondisi: "Aktif & Jinak" }
  },
  {
    id: 26, name: "Kenari F1 Gacor", category: "burung", species: "kenari",
    categoryLabel: "Burung Kicau", price: 250000, img: "burung kenari afs f1.jpeg",
    rating: 4.8, reviews: 54, sold: 72, stock: 6, showOnHome: false,
    description: "Kenari F1 merupakan hasil persilangan unggulan dengan suara gacor, panjang, dan merdu. Cocok untuk pemula maupun pecinta burung kicau profesional.",
    specs: { Usia: "5 Bulan", Kemampuan: "Gacor", Kondisi: "Sehat & Aktif" }
  },
  {
    id: 27, name: "Kenari Lizard Eksotis", category: "burung", species: "kenari",
    categoryLabel: "Burung Kicau", price: 300000, img: "kenari lizart.jpeg",
    rating: 4.9, reviews: 41, sold: 39, stock: 4, showOnHome: false,
    description: "Kenari Lizard memiliki corak bulu unik menyerupai sisik dengan warna eksotis. Selain cantik, burung ini juga memiliki suara yang merdu dan khas.",
    specs: { Usia: "6 Bulan", Kemampuan: "Gacor", Kondisi: "Jinak & Sehat" }
  },
  {
    id: 28, name: "Kenari Gloster Imut", category: "burung", species: "kenari",
    categoryLabel: "Burung Kicau", price: 650000, img: "kenari gloster.jpeg",
    rating: 4.7, reviews: 36, sold: 44, stock: 5, showOnHome: false,
    description: "Kenari Gloster dikenal dengan bentuk tubuh kecil dan jambul khas yang menggemaskan. Suaranya lembut dan cocok sebagai burung hias sekaligus kicau.",
    specs: { Usia: "5 Bulan", Kemampuan: "Gacor Ringan", Kondisi: "Sehat & Jinak" }
  },
  {
    id: 29, name: "Murai Batu Blorok Gacor", category: "burung", species: "murai",
    categoryLabel: "Burung Kicau", price: 3500000, img: "murai blorok.jpeg",
    rating: 4.9, reviews: 48, sold: 52, stock: 3, showOnHome: false,
    description: "Murai Batu Blorok memiliki corak warna unik yang langka dengan kombinasi hitam dan putih. Dikenal dengan suara gacor, bervariasi, dan cocok untuk lomba maupun koleksi.",
    specs: { Usia: "8 Bulan", Kemampuan: "Gacor", Kondisi: "Sehat & Siap Lomba" }
  },
  {
    id: 30, name: "Murai Batu Blorok Anakan", category: "burung", species: "murai",
    categoryLabel: "Burung Kicau", price: 2200000, img: "anakan blorok.jpeg",
    rating: 4.7, reviews: 29, sold: 34, stock: 5, showOnHome: false,
    description: "Murai Batu Blorok anakan cocok untuk dipelihara sejak kecil agar lebih jinak dan mudah dilatih. Memiliki potensi suara gacor saat dewasa dengan corak warna yang unik.",
    specs: { Usia: "3 Bulan", Kemampuan: "Latihan Bunyi", Kondisi: "Sehat & Aktif" }
  },
  {
    id: 31, name: "Sangkar Kayu Ukir Jepara", category: "sangkar",
    categoryLabel: "Kandang Premium", price: 950000, originalPrice: 1100000,
    img: "sangkar ukir.png", badge: "Limited", badgeColor: "#c9a84c",
    rating: 4.7, reviews: 142, sold: 310, stock: 10, showOnHome: false,
    description: "Sangkar kayu dengan ukiran khas Jepara yang artistik dan elegan. Memberikan kesan mewah untuk burung kesayangan Anda.",
    specs: { Material: "Kayu Jati", Ukuran: "45 x 35 x 65 cm", Berat: "4.8 kg", Warna: "Coklat", Fitur: "Ukiran Handmade", Kegunaan: "Indoor & Hias" }
  },
  {
    id: 32, name: "Sangkar Lipat Portable L", category: "sangkar",
    categoryLabel: "Kandang Premium", price: 300000, originalPrice: 380000,
    img: "sangkar s.png", badge: "Praktis", badgeColor: "#c9a84c",
    rating: 4.4, reviews: 98, sold: 450, stock: 25, showOnHome: false,
    description: "Sangkar lipat yang ringan dan mudah dibawa bepergian. Sangat praktis untuk aktivitas outdoor atau perjalanan.",
    specs: { Material: "Besi Ringan", Ukuran: "30 x 25 x 40 cm", Berat: "2.5 kg", Warna: "Baby Blue", Fitur: "Lipat & Portable", Kegunaan: "Travel & Outdoor" }
  },
  {
    id: 33, name: "Sangkar Bulat Klasik Premium", category: "sangkar",
    categoryLabel: "Kandang Premium", price: 750000, originalPrice: 850000,
    img: "sangkar murai.jpeg", badge: "Elegan", badgeColor: "#c9a84c",
    rating: 4.6, reviews: 167, sold: 390, stock: 18, showOnHome: false,
    description: "Sangkar berbentuk bulat dengan desain klasik elegan, sangat cocok untuk burung kicau seperti murai dan kacer.",
    specs: { Material: "Besi + Kayu", Ukuran: "Diameter 40 cm, Tinggi 60 cm", Berat: "3.9 kg", Warna: "Coklat Tua", Fitur: "Desain Klasik", Kegunaan: "Indoor & Lomba" }
  },
  {
    id: 34, name: "Sangkar Aviary Besar Outdoor", category: "sangkar",
    categoryLabel: "Kandang Premium", price: 4500000, originalPrice: 4800000,
    img: "sangkar outdoor.jpeg", badge: "Super Besar", badgeColor: "#c9a84c",
    rating: 4.9, reviews: 76, sold: 120, stock: 5, showOnHome: false,
    description: "Sangkar aviary ukuran besar yang cocok untuk penggunaan outdoor. Memberikan ruang luas agar burung lebih bebas bergerak dan sehat.",
    specs: { Material: "Besi Galvanis", Ukuran: "100 x 80 x 180 cm", Berat: "12 kg", Warna: "Silver", Fitur: "Extra Luas & Tahan Cuaca", Kegunaan: "Outdoor" }
  },
  {
    id: 35, name: "Tropican Lifetime Formula Granules 820gr", category: "pakan",
    categoryLabel: "Pakan Premium", price: 135000, originalPrice: 150000,
    img: "tropican pellets.jpeg", badge: "Import", badgeColor: "#5c7250",
    rating: 4.8, reviews: 260, sold: 600, stock: 35, showOnHome: false,
    description: "Pakan burung paruh bengkok berbentuk granula dari Tropican, diformulasikan untuk memenuhi kebutuhan nutrisi harian secara lengkap dan seimbang.",
    specs: { Berat: "820 g", Protein: "Min. 18%", Jenis: "Granules", Target: "Parrot / Lovebird / Beo", Kadaluarsa: "12 Bulan" }
  },
  {
    id: 36, name: "Ebod Vit Voer Lovebird 500gr", category: "pakan",
    categoryLabel: "Pakan Premium", price: 40000, originalPrice: 45000,
    img: "EBOD LOVEBIRD.jpeg", badge: "Favorit", badgeColor: "#5c7250",
    rating: 4.7, reviews: 430, sold: 1200, stock: 70, showOnHome: false,
    description: "Voer berkualitas dari Ebod Vit untuk lovebird, membantu menjaga stamina, warna bulu, dan kesehatan harian.",
    specs: { Berat: "500 g", Protein: "Min. 16%", Jenis: "Voer Halus", Target: "Lovebird", Kadaluarsa: "10 Bulan" }
  },
  {
    id: 37, name: "Voer Joyo Jalak 300gr", category: "pakan",
    categoryLabel: "Pakan Premium", price: 50000, originalPrice: 60000,
    img: "pakan jalak.png", badge: "Favorit", badgeColor: "#5c7250",
    rating: 4.7, reviews: 180, sold: 650, stock: 40, showOnHome: false,
    description: "Voer khusus burung jalak dengan kandungan protein tinggi untuk menjaga stamina, kesehatan, dan kualitas suara kicauan.",
    specs: { Berat: "300 g", Protein: "Min. 30%", Jenis: "Voer Halus", Target: "Jalak / Jalak Suren", Kadaluarsa: "8 Bulan" }
  },
  {
    id: 38, name: "Ronggolawe Voer Kacer 400gr", category: "pakan",
    categoryLabel: "Pakan Premium", price: 40000, originalPrice: 50000,
    img: "pakan.png", badge: "Populer", badgeColor: "#5c7250",
    rating: 4.6, reviews: 210, sold: 700, stock: 60, showOnHome: false,
    description: "Voer khusus kacer dari Ronggolawe, membantu meningkatkan suara kicau dan stamina burung.",
    specs: { Berat: "800 g", Protein: "Min. 19%", Jenis: "Voer", Target: "Kacer", Kadaluarsa: "9 Bulan" }
  },
  {
    id: 39, name: "Gold Coin Parrot Mix 1kg", category: "pakan",
    categoryLabel: "Pakan Premium", price: 80000, originalPrice: 95000,
    img: "goldcoin.png", badge: "Premium", badgeColor: "#5c7250",
    rating: 4.7, reviews: 180, sold: 450, stock: 30, showOnHome: false,
    description: "Pakan burung paruh bengkok dengan campuran biji-bijian dan nutrisi lengkap untuk menjaga kesehatan dan energi burung.",
    specs: { Berat: "1 kg", Protein: "Min. 17%", Jenis: "Mix Seed", Target: "Parrot / Beo", Kadaluarsa: "12 Bulan" }
  },
  {
    id: 40, name: "goldcoin ijau.png", category: "pakan",
    categoryLabel: "Pakan Premium", price: 15000, originalPrice: 18000,
    img: "goldcoin ijau.png", badge: "Populer", badgeColor: "#5c7250",
    rating: 4.6, reviews: 200, sold: 1200, stock: 100, showOnHome: false,
    description: "Voer Gold Coin varian hijau (seaweed) dengan kandungan nutrisi lengkap untuk menjaga stamina, kesehatan, dan performa burung kicau.",
    specs: { Berat: "450 g", Protein: "±16%", Jenis: "Voer", Target: "Murai / Kacer / Cucak / Jalak", Kadaluarsa: "8-12 Bulan" }
  },
  {
    id: 41, name: "Ebod Canary Pakan Kenari 200gr", category: "pakan",
    categoryLabel: "Pakan Premium", price: 14000, originalPrice: 17000,
    img: "EBOD C.jpeg", badge: "Favorit", badgeColor: "#5c7250",
    rating: 4.7, reviews: 300, sold: 1500, stock: 120, showOnHome: false,
    description: "Pakan kenari dari Ebod yang sudah dikenal luas, membantu menjaga kesehatan, stamina, dan kualitas kicauan burung.",
    specs: { Berat: "200 g", Protein: "Min. 16%", Jenis: "Voer Halus", Target: "Kenari", Kadaluarsa: "8-10 Bulan" }
  },
  {
    id: 42, name: "Ebod Joss Bird Booster 10ml", category: "vitamin", showOnHome: false,
    categoryLabel: "Vitamin", price: 35000, originalPrice: 42000,
    img: "Ebod Joss 10ML.jpeg", badge: "Best Seller", badgeColor: "#e74c3c",
    rating: 4.8, reviews: 310, sold: 1200, stock: 55,
    description: "Suplemen booster dari Ebod untuk meningkatkan stamina, tenaga, dan performa burung kicau agar lebih aktif dan gacor.",
    specs: { Volume: "10 ml", Kandungan: "Multivitamin & Energy Booster", Dosis: "2-3 tetes/hari", Target: "Burung Kicau", Kadaluarsa: "18 Bulan" }
  },
  {
    id: 43, name: "Orbird Vitamin Burung 10ml", category: "vitamin", showOnHome: false,
    categoryLabel: "Vitamin", price: 20000, originalPrice: 25000,
    img: "Orbird 10ML.jpeg", badge: "Favorit", badgeColor: "#e74c3c",
    rating: 4.7, reviews: 340, sold: 1500, stock: 70,
    description: "Vitamin burung dengan kandungan lengkap untuk menjaga kesehatan, meningkatkan stamina, dan daya tahan tubuh.",
    specs: { Volume: "10 ml", Kandungan: "Vitamin A, B, C, D", Dosis: "2 tetes/hari", Target: "Semua Burung", Kadaluarsa: "18 Bulan" }
  },
  {
    id: 44, name: "BirdVit Multivitamin Burung 15ml", category: "vitamin", showOnHome: false,
    categoryLabel: "Vitamin", price: 28000, originalPrice: 35000,
    img: "birdvit.png", badge: "Hot", badgeColor: "#e74c3c",
    rating: 4.7, reviews: 260, sold: 1200, stock: 50,
    description: "Multivitamin untuk burung kicau yang membantu menjaga kondisi tubuh tetap prima dan meningkatkan kualitas suara.",
    specs: { Volume: "15 ml", Kandungan: "Vitamin & Mineral", Dosis: "2-3 tetes/hari", Target: "Burung Kicau", Kadaluarsa: "18 Bulan" }
  },
  {
    id: 45, name: "Ebod Strong Bird Booster 15ml", category: "vitamin", showOnHome: false,
    categoryLabel: "Vitamin", price: 30000, originalPrice: 38000,
    img: "ebod strong.png", badge: "Premium", badgeColor: "#e74c3c",
    rating: 4.8, reviews: 210, sold: 900, stock: 40,
    description: "Suplemen booster dari Ebod untuk meningkatkan tenaga, stamina, dan performa burung sebelum lomba.",
    specs: { Volume: "15 ml", Kandungan: "Energy Booster", Dosis: "3 tetes sebelum lomba", Target: "Burung Lomba", Kadaluarsa: "18 Bulan" }
  },
  {
    id: 46, name: "Super Nektar Bird Vitamin 30ml", category: "vitamin", showOnHome: false,
    categoryLabel: "Vitamin", price: 22000, originalPrice: 28000,
    img: "nekstar.png", badge: "Populer", badgeColor: "#e74c3c",
    rating: 4.6, reviews: 240, sold: 900, stock: 60,
    description: "Vitamin cair untuk burung kicau yang membantu meningkatkan stamina, menjaga kesehatan, dan membuat burung lebih aktif serta rajin berkicau.",
    specs: { Volume: "30 ml", Kandungan: "Multivitamin", Dosis: "2-3 tetes/hari", Target: "Semua Burung", Kadaluarsa: "18 Bulan" }
  },
  {
    id: 47, name: "Biojanna 6 Tetes Burung 10ml", category: "vitamin", showOnHome: false,
    categoryLabel: "Vitamin", price: 15000, originalPrice: 20000,
    img: "biojanna.png", badge: "Populer", badgeColor: "#e74c3c",
    rating: 4.6, reviews: 220, sold: 950, stock: 70,
    description: "Suplemen tetes untuk meningkatkan kesehatan, stamina, dan daya tahan tubuh burung.",
    specs: { Volume: "10 ml", Kandungan: "Multivitamin", Dosis: "2-3 tetes/hari", Target: "Semua Burung", Kadaluarsa: "18 Bulan" }
  },
  {
    id: 48, name: "Radja Vit Burung 10ml", category: "vitamin", showOnHome: false,
    categoryLabel: "Vitamin", price: 20000, originalPrice: 25000,
    img: "radjavit.png", badge: "Favorit", badgeColor: "#e74c3c",
    rating: 4.7, reviews: 270, sold: 1000, stock: 65,
    description: "Vitamin burung dari Radja yang membantu meningkatkan stamina, daya tahan tubuh, dan menjaga kondisi burung tetap fit serta aktif berkicau.",
    specs: { Volume: "10 ml", Kandungan: "Multivitamin", Dosis: "2-3 tetes/hari", Target: "Semua Burung", Kadaluarsa: "18 Bulan" }
  },
  {
    id: 49, name: "Sangkar Ebod Jaya Kotak ", category: "sangkar",
    categoryLabel: "Kandang Premium", price: 450000, originalPrice: 550000,
    img: "ebod kotak.jpeg", badge: "Original", badgeColor: "#c9a84c",
    rating: 4.8, reviews: 210, sold: 600, stock: 12, showOnHome: false,
    description: "Sangkar Ebod Jaya original dengan desain kotak modern dan rangka kokoh. Banyak digunakan untuk burung kicau seperti murai, kacer, dan cucak ijo.",
    specs: { Brand: "Ebod Jaya", Material: "kayu jati + PVC", Ukuran: "40 x 40 x 60 cm", Warna: "Hitam / Custom Decal", Fitur: "Laci Pembersih & Kokoh", Kegunaan: "Harian & Lomba" }
  },
  {
    id: 50, name: "Sangkar Dragon Lovebird", category: "sangkar",
    categoryLabel: "Kandang Premium", price: 150000, originalPrice: 200000,
    img: "dragon.png", badge: "Terlaris", badgeColor: "#c9a84c",
    rating: 4.5, reviews: 130, sold: 900, stock: 30, showOnHome: false,
    description: "Sangkar Dragon berbentuk bulat yang ringan dan praktis. Cocok untuk lovebird, pleci, dan burung kecil lainnya.",
    specs: { Brand: "Dragon", Material: "Besi + Plastik", Ukuran: "Diameter 30 cm", Berat: "1.5 kg", Warna: "berbagai macam", Fitur: "Ringan & Portable", Kegunaan: "Harian" }
  },
  {
    id: 51, name: "Sangkar Murai BNR PVC Premium", category: "sangkar",
    categoryLabel: "Kandang Premium", price: 1900000, originalPrice: 2200000,
    img: "bnr decal.png", badge: "Lomba", badgeColor: "#c9a84c",
    rating: 4.9, reviews: 95, sold: 150, stock: 6, showOnHome: false,
    description: "Sangkar BNR premium berbahan PVC berkualitas tinggi, dirancang khusus untuk lomba burung murai batu dengan tampilan elegan dan kokoh.",
    specs: { Brand: "BNR", Material: "PVC + kayu jati", Ukuran: "Diameter 45 cm, Tinggi 70 cm", Berat: "6 kg", Warna: "Hitam Glossy + decal", Fitur: "Finishing Premium & Anti Karat", Kegunaan: "Lomba" }
  },
  {
    id: 52, name: "Tempat Voer Kaca Premium Elegan", category: "aksesoris",
    categoryLabel: "Aksesoris Premium", price: 90000, originalPrice: 120000,
    img: "tempat kaca.jpeg", badge: "Elegan", badgeColor: "#c9a84c",
    rating: 4.8, reviews: 70, sold: 150, stock: 14, showOnHome: false,
    description: "Tempat voer berbahan kaca tebal dengan tampilan bening elegan, memberikan kesan mewah dan higienis pada sangkar.",
    specs: { Material: "Kaca Tebal", Kapasitas: "150 ml", Fitur: "Higienis & Mudah Dibersihkan", Warna: "Clear", Kegunaan: "Pakan" }
  },
  {
    id: 53, name: "Tangkringan Batu Mineral Premium", category: "aksesoris",
    categoryLabel: "Aksesoris Premium", price: 75000, originalPrice: 95000,
    img: "tangkring.png", badge: "Sehat", badgeColor: "#c9a84c",
    rating: 4.7, reviews: 65, sold: 130, stock: 16, showOnHome: false,
    description: "Tangkringan berbahan batu mineral alami yang membantu mengasah kuku dan menjaga kesehatan kaki burung.",
    specs: { Material: "Mineral Stone", Panjang: "18 cm", Fitur: "Asah Kuku Alami", Warna: "Abu Natural", Kegunaan: "Tangkringan" }
  },
  {
    id: 54, name: "Dispenser Air Burung Anti Tumpah Premium", category: "aksesoris",
    categoryLabel: "Aksesoris Premium", price: 85000, originalPrice: 110000,
    img: "dispenser.jpeg", badge: "Smart", badgeColor: "#c9a84c",
    rating: 4.8, reviews: 90, sold: 200, stock: 18, showOnHome: false,
    description: "Dispenser air dengan sistem anti tumpah dan aliran stabil, menjaga kebersihan dan kenyamanan burung.",
    specs: { Material: "Akrilik + Plastik", Kapasitas: "250 ml", Fitur: "Anti Tumpah & Stabil", Warna: "Transparan", Kegunaan: "Minum" }
  },
  {
    id: 55, name: "Tempat Mandi Burung Akrilik Premium", category: "aksesoris",
    categoryLabel: "Aksesoris Premium", price: 130000, originalPrice: 160000,
    img: "mandi burung.jpeg", badge: "Luxury", badgeColor: "#c9a84c",
    rating: 4.7, reviews: 90, sold: 180, stock: 10, showOnHome: false,
    description: "Tempat mandi burung berbahan akrilik dengan desain modern yang elegan dan mudah dibersihkan.",
    specs: { Material: "Akrilik Tebal", Ukuran: "25 x 20 cm", Fitur: "Mudah Dibersihkan", Warna: "Transparan", Kegunaan: "Mandi" }
  },
  {
    id: 56, name: "Cover Sangkar Velvet Premium Bordir", category: "aksesoris",
    categoryLabel: "Aksesoris Premium", price: 180000, originalPrice: 220000,
    img: "kerodong.png", badge: "Luxury", badgeColor: "#c9a84c",
    rating: 4.9, reviews: 60, sold: 100, stock: 10, showOnHome: false,
    description: "Krodong berbahan velvet premium dengan bordir elegan, memberikan tampilan mewah dan eksklusif untuk sangkar lomba.",
    specs: { Material: "Velvet Premium", Ukuran: "All Size", Fitur: "Bordir Eksklusif", Warna: "Hitam / Maroon", Kegunaan: "Lomba & Display" }
  },
  {
    id: 57, name: "Pengunci Pintu Sangkar Stainless Premium", category: "aksesoris",
    categoryLabel: "Aksesoris Premium", price: 60000, originalPrice: 80000,
    img: "kunci.png", badge: "Safety", badgeColor: "#c9a84c",
    rating: 4.8, reviews: 72, sold: 160, stock: 20, showOnHome: false,
    description: "Pengunci pintu sangkar berbahan stainless dengan sistem klik yang kuat untuk keamanan maksimal.",
    specs: { Material: "Stainless Steel", Fitur: "Klik Lock System", Warna: "Silver", Kegunaan: "Keamanan" }
  },
  {
    id: 58, name: "Sarang Burung Rotan Premium Handmade", category: "aksesoris",
    categoryLabel: "Aksesoris Premium", price: 60000, originalPrice: 80000,
    img: "rumah.jpeg", badge: "Handmade", badgeColor: "#c9a84c",
    rating: 4.7, reviews: 70, sold: 140, stock: 12, showOnHome: false,
    description: "Sarang burung dari rotan pilihan dengan desain handmade yang elegan, nyaman untuk proses bertelur dan mempercantik sangkar.",
    specs: { Material: "Rotan Alami", Diameter: "12 cm", Fitur: "Handmade & Nyaman", Warna: "Coklat Natural", Kegunaan: "Breeding" }
  },
  {
    id: 59, name: "Merak Putih India Dewasa", category: "burung", species: "merak",
    categoryLabel: "Burung Eksotis", price: 12500000, originalPrice: 14000000,
    img: "merak putih.jpeg", badge: "Premium", badgeColor: "#c9a84c",
    rating: 5.0, reviews: 18, sold: 32, stock: 2, showOnHome: false,
    description: "Merak Putih India dengan bulu putih bersih dan ekor megah yang sangat memukau. Memiliki penampilan elegan dan cocok untuk koleksi eksklusif maupun penangkaran resmi.",
    specs: { Usia: "1 Tahun", "Jenis Kelamin": "Jantan", Warna: "Putih Bersih", Asal: "Penangkaran Legal", Garansi: "30 Hari" }
  },
  {
    id: 60, name: "Merak Biru Afrika Remaja", category: "burung", species: "merak",
    categoryLabel: "Burung Eksotis", price: 9800000, originalPrice: null,
    img: "peacock.jpeg", badge: "Langka", badgeColor: "#5c7250",
    rating: 4.9, reviews: 27, sold: 40, stock: 4, showOnHome: false,
    description: "Merak Biru dengan perpaduan warna biru metalik dan hijau mengkilap yang indah. Sehat, aktif, dan cocok dijadikan burung hias premium untuk taman atau koleksi pribadi.",
    specs: { Usia: "9 Bulan", "Jenis Kelamin": "Jantan", Warna: "Biru Metalik", Asal: "Penangkaran Resmi", Garansi: "30 Hari" }
  },
  {
    id: 61, name: "Kakatua Raja Muda", category: "burung", species: "kakatua",
    categoryLabel: "Burung Eksotis", price: 8900000, originalPrice: null,
    img: "kakatua raja muda.jpeg", badge: "Langka", badgeColor: "#5c7250",
    rating: 5.0, reviews: 42, sold: 58, stock: 2, showOnHome: false,
    description: "Kakatua Raja muda dengan ukuran besar, warna elegan, dan suara khas yang menarik. Sangat cocok untuk kolektor burung eksotis.",
    specs: { Usia: "10 Bulan", "Jenis Kelamin": "Jantan", Warna: "Putih Abu", Asal: "Penangkaran Legal", Garansi: "30 Hari" }
  },
  {
    id: 62, name: "Kakatua Goffin Ramah", category: "burung", species: "kakatua",
    categoryLabel: "Burung Eksotis", price: 6100000, originalPrice: 6700000,
    img: "goffin.jpeg", badge: "Baru", badgeColor: "#5c7250",
    rating: 4.8, reviews: 63, sold: 96, stock: 5, showOnHome: false,
    description: "Kakatua Goffin berukuran sedang dengan sifat ramah, aktif, dan mudah beradaptasi. Cocok untuk pemilik baru maupun penghobi burung eksotis.",
    specs: { Usia: "8 Bulan", "Jenis Kelamin": "Jantan/Betina", Warna: "Putih Soft", Asal: "Penangkaran Resmi", Garansi: "14 Hari" }
  },
  {
    id: 63, name: "Finch Gouldian Warna Cerah", category: "burung", species: "finch", showOnHome: false,
    categoryLabel: "Burung Hias", price: 380000, originalPrice: 420000,
    img: "finch cerah.jpeg", badge: "Favorit", badgeColor: "#c9a84c",
    rating: 4.9, reviews: 56, sold: 132, stock: 8,
    description: "Finch Gouldian terkenal dengan warna bulu cerah dan kombinasi unik yang memukau. Aktif, sehat, dan cocok untuk koleksi burung hias.",
    specs: { Ukuran: "Kecil", Warna: "Merah-Hijau-Kuning", Perawatan: "Mudah", Kondisi: "Sehat & Aktif" }
  },
  {
    id: 64, name: "Finch Society Jinak", category: "burung", species: "finch", showOnHome: false,
    categoryLabel: "Burung Hias", price: 290000, originalPrice: null,
    img: "Double-barred Finches.jpeg", badge: "Baru", badgeColor: "#5c7250",
    rating: 4.8, reviews: 47, sold: 118, stock: 12,
    description: "Finch Society memiliki sifat tenang, mudah beradaptasi, dan cocok dipelihara bersama jenis finch lainnya.",
    specs: { Ukuran: "Kecil", Warna: "Putih-Coklat", Perawatan: "Mudah", Kondisi: "Sehat & Lincah" }
  },
  {
    id: 65, name: "Kacer Madagaskar Fighter", category: "burung", species: "kacer", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 1150000, originalPrice: 1250000,
    img: "kacer badagaskar.jpeg", badge: "Favorit", badgeColor: "#c9a84c",
    rating: 4.9, reviews: 88, sold: 145, stock: 5,
    description: "Kacer Madagaskar dengan mental fighter, suara keras, dan variasi lagu panjang. Cocok untuk lomba maupun koleksi penghobi kicau mania.",
    specs: { Usia: "1 Tahun", Kondisi: "Gacor & Aktif", Jenis: "Jantan", Garansi: "7 Hari" }
  },
  {
    id: 66, name: "Kacer Blorok ", category: "burung", species: "kacer", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 980000, originalPrice: null,
    img: "kacer blorok.png", badge: "Baru", badgeColor: "#5c7250",
    rating: 4.8, reviews: 61, sold: 120, stock: 7,
    description: "Kacer Blorok dengan corak bulu unik dan karakter rajin bunyi setiap hari. Cocok untuk pemula maupun penghobi burung kicau.",
    specs: { Usia: "10 Bulan", Kondisi: "Rajin Bunyi", Jenis: "Jantan", Garansi: "7 Hari" }
  },
  {
    id: 67, name: "Jalak Bali Putih Eksklusif", category: "burung", species: "jalak", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 3500000, originalPrice: 3900000,
    img: "jalak putih.jpeg", badge: "Langka", badgeColor: "#c9a84c",
    rating: 5.0, reviews: 43, sold: 78, stock: 3,
    description: "Jalak Bali dengan bulu putih bersih dan jambul elegan. Memiliki suara merdu serta menjadi salah satu burung favorit kolektor.",
    specs: { Usia: "1 Tahun", Kondisi: "Sehat & Aktif", Keunggulan: "Cepat Jinak", Garansi: "14 Hari" }
  },
  {
    id: 68, name: "Jalak Kebo Super Gacor", category: "burung", species: "jalak", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 1450000, originalPrice: null,
    img: "jalak hitam.jpeg", badge: "Favorit", badgeColor: "#5c7250",
    rating: 4.9, reviews: 67, sold: 125, stock: 6,
    description: "Jalak Kebo terkenal dengan suara keras, rajin bunyi, dan mudah beradaptasi. Cocok untuk rumahan maupun penghobi burung kicau.",
    specs: { Usia: "11 Bulan", Kondisi: "Gacor & Lincah", Keunggulan: "Mudah Dirawat", Garansi: "7 Hari" }
  },
  {
    id: 69, name: "Pleci Dada Kuning Ceria", category: "burung", species: "pleci", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 340000, originalPrice: 390000,
    img: "pleci dada kuning.jpeg", badge: "Favorit", badgeColor: "#c9a84c",
    rating: 4.9, reviews: 44, sold: 158, stock: 9,
    description: "Pleci dengan kombinasi warna kuning cerah pada bagian dada, aktif bergerak, dan suara nyaring. Cocok untuk koleksi unik.",
    specs: { Ukuran: "Mini", Warna: "Kuning & Putih", Perawatan: "Mudah", Kondisi: "Sehat & Lincah" }
  },
  {
    id: 70, name: "Pleci Albino Putih Langka", category: "burung", species: "pleci", showOnHome: false,
    categoryLabel: "Burung Kicau", price: 520000, originalPrice: null,
    img: "pleci albino.jpeg", badge: "Langka", badgeColor: "#5c7250",
    rating: 5.0, reviews: 28, sold: 94, stock: 4,
    description: "Pleci albino berwarna putih bersih dengan tampilan eksklusif dan sangat menarik. Cocok untuk kolektor burung unik.",
    specs: { Ukuran: "Mini", Warna: "Putih Bersih", Perawatan: "Sedang", Kondisi: "Aktif & Sehat" }
  },
  {
    id: 71, name: "Parkit Rainbow Cerah", category: "burung", species: "parkit", showOnHome: false,
    categoryLabel: "Burung Hias", price: 320000, originalPrice: 360000,
    img: "Rainbow Parakeet.jpeg", badge: "Favorit", badgeColor: "#c9a84c",
    rating: 4.9, reviews: 74, sold: 225, stock: 8,
    description: "Parkit rainbow dengan kombinasi warna hijau, biru, dan kuning yang mencolok. Aktif dan mudah beradaptasi.",
    specs: { Ukuran: "Kecil", Warna: "Merah-Hijau-Kuning", Perawatan: "Mudah", Kondisi: "Aktif" }
  },
];


/* ==================== DATA SPESIES ====================
   Array semua jenis burung yang ditampilkan di halaman Koleksi.
   Berbeda dari products — ini khusus untuk tampilan kartu spesies.
*/
const speciesData = [
  { id: 1,  name: "Lovebird",  latin: "Agapornis spp.",          img: IMG.s1,  type: "kicau",   price: "Rp 250.000 - 400.000", availability: "available" },
  { id: 2,  name: "Kenari ",   latin: "Serinus canaria",          img: IMG.s2,  type: "kicau",   price: "Rp 280.000 - 550.000", availability: "available" },
  { id: 3,  name: "Murai",     latin: "Copsychus malabaricus",    img: IMG.s3,  type: "kicau",   price: "Rp 2jt - 5jt",         availability: "available" },
  { id: 4,  name: "Merak",     latin: "Pavo muticus",             img: IMG.s4,  type: "eksotis", price: "Rp 7jt - 10jt",        availability: "limited"   },
  { id: 5,  name: "Kakatua",   latin: "Cacatua alba",             img: IMG.s5,  type: "eksotis", price: "Rp 5jt - 8jt",         availability: "limited"   },
  { id: 6,  name: "Beo",       latin: "Gracula religiosa",        img: IMG.s6,  type: "kicau",   price: "Rp 3jt - 6jt",         availability: "available" },
  { id: 7,  name: "Finch ",    latin: "Taeniopygia guttata",      img: IMG.s7,  type: "hias",    price: "Rp 200.000 - 500.000", availability: "available" },
  { id: 8,  name: "Kacer",     latin: "Copsychus saularis",       img: IMG.s8,  type: "kicau",   price: "Rp 700.000 - 1,5jt",   availability: "available" },
  { id: 9,  name: "Jalak",     latin: "Gracupica contra",         img: IMG.s9,  type: "kicau",   price: "Rp 800.000 - 2jt",     availability: "available" },
  { id: 10, name: "Pleci",     latin: "Zosterops aurifrons",      img: IMG.s10, type: "kicau",   price: "Rp 150.000 - 350.000", availability: "available" },
  { id: 11, name: "Parkit ",   latin: "Melopsittacus undulatus",  img: IMG.s11, type: "hias",    price: "Rp 180.000 - 400.000", availability: "available" },
  { id: 12, name: "Rangkong",  latin: "Buceros rhinoceros",       img: IMG.s12, type: "eksotis", price: "Rp 15jt - 20jt",       availability: "limited"   }
];


/* ==================== STATE (DATA YANG BERUBAH) ====================
   Variabel-variabel ini menyimpan "keadaan" aplikasi yang bisa berubah:
   - cart      : isi keranjang belanja user
   - orderData : data pesanan terakhir yang dibuat
*/
let cart = [];
let orderData = null;


/* ==================== UTILITAS (FUNGSI PEMBANTU) ====================
   Fungsi-fungsi kecil yang sering dipakai di banyak tempat.
*/

// Mengubah angka jadi format harga Rupiah. Contoh: 250000 → "Rp 250.000"
const fmtPrice = p => 'Rp ' + p.toLocaleString('id-ID');

// Membuat ID pesanan unik. Contoh: "CPKX9A2B"
const generateOrderId = () => `CP${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

// Mendapatkan tanggal dan waktu sekarang dalam format Indonesia
const getDate = () => new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });


/* ==================== TOAST (NOTIFIKASI KECIL) ====================
   Menampilkan notifikasi kecil di pojok layar selama 3 detik.
   Contoh: "Produk ditambahkan ke keranjang"
*/
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMessage').textContent = msg;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3000);
}


/* ==================== NAVIGASI ====================
   Fungsi untuk berpindah halaman (home, koleksi, perlengkapan, dll).
   Caranya: sembunyikan semua halaman, lalu tampilkan halaman yang dipilih.
*/
function navigateTo(page, filter = null) {
  // Sembunyikan semua halaman
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  // Tampilkan halaman yang dipilih
  document.getElementById('page-' + page).style.display = 'block';

  // Update tampilan link aktif di navbar
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.dataset.page === page) a.classList.add('active');
  });

  // Kalau pindah ke halaman perlengkapan, scroll ke grid dan filter sesuai kategori
  if (page === 'perlengkapan') {
    const targetFilter = filter || 'all';
    setTimeout(() => {
      document.getElementById('equipGrid')?.scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('[data-efilter]').forEach(b => {
        b.classList.remove('active');
        if (b.dataset.efilter === targetFilter) b.classList.add('active');
      });
      renderEquip(targetFilter);
    }, 100);
  }

  // Kalau pindah ke halaman ulasan, render daftar ulasan
  if (page === 'ulasan') {
    setTimeout(() => renderSemuaUlasan(), 100);
  }
}


/* ==================== RENDER PRODUK (HALAMAN UTAMA) ====================
   Menampilkan kartu produk di grid halaman utama.
   Parameter filter: 'all', 'burung', 'sangkar', atau 'pakan'
*/
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productGrid');

  // Filter produk: tampilkan semua atau berdasarkan kategori, khusus yang showOnHome !== false
  const filtered = filter === 'all'
    ? products.filter(p => p.showOnHome !== false)
    : products.filter(p => p.category === filter && p.showOnHome !== false);

  // Buat HTML untuk setiap produk menggunakan template string, lalu gabungkan
  grid.innerHTML = filtered.map((p, i) => `
    <div class="prod-card reveal ${i > 0 ? 'reveal-delay-' + Math.min(i, 3) : ''}" data-product-id="${p.id}">
      <div class="prod-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<div class="prod-badge" style="background:${p.badgeColor}">${p.badge}</div>` : ''}
        <div class="prod-wishlist">🤍</div>
      </div>
      <div class="prod-meta">${p.categoryLabel}</div>
      <div class="prod-rating">★★★★★ <span>${p.rating} (${p.reviews})</span></div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-footer">
        <div class="prod-price">
          ${p.originalPrice ? `<span>${fmtPrice(p.originalPrice)}</span>` : ''}
          ${fmtPrice(p.price)}
        </div>
        <button class="add-btn" data-product-id="${p.id}">+</button>
      </div>
    </div>
  `).join('');

  initReveal();
}


/* ==================== RENDER SPESIES (HALAMAN KOLEKSI) ====================
   Menampilkan kartu per jenis burung di halaman Koleksi.
*/
function renderSpecies(filter) {
  const grid = document.getElementById('speciesGrid');
  if (!grid) return;

  const filtered = filter === 'all' ? speciesData : speciesData.filter(s => s.type === filter);

  grid.innerHTML = filtered.map(s => `
    <div class="species-card" onclick="openProductBySpecies('${s.name}')">
      <div class="species-card-img"><img src="${s.img}" alt="${s.name}" loading="lazy"></div>
      <div class="species-card-body">
        <div class="species-name">${s.name}</div>
        <div class="species-latin">${s.latin}</div>
        <div class="species-price">${s.price}</div>
        <div class="species-availability ${s.availability}">
          ${s.availability === 'available' ? 'Tersedia' : s.availability === 'limited' ? 'Terbatas' : 'Habis'}
        </div>
      </div>
    </div>
  `).join('');
}


/* ==================== BUKA PRODUK BERDASARKAN SPESIES ====================
   Ketika user klik kartu spesies, tampilkan semua produk dari spesies tersebut.
*/
function openProductBySpecies(name) {
  const keyword = name.toLowerCase().trim();
  const filtered = products.filter(p =>
    p.category === 'burung' && p.species && p.species.toLowerCase().trim() === keyword
  );

  if (filtered.length > 0) {
    renderFilteredProducts(filtered);
  } else {
    showToast('Belum ada produk untuk jenis ini');
  }
}

// Menampilkan daftar produk yang sudah difilter ke dalam speciesGrid
function renderFilteredProducts(list) {
  const grid = document.getElementById('speciesGrid');
  grid.innerHTML = list.map(p => `
    <div class="prod-card" data-product-id="${p.id}">
      <div class="prod-img">
        <img src="${p.img}" alt="${p.name}">
      </div>
      <div class="prod-meta">${p.categoryLabel || 'Burung'}</div>
      <div class="prod-rating">★★★★★ <span>${p.rating || 4.8} (${p.reviews || 0})</span></div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-footer">
        <div class="prod-price">
          ${p.originalPrice ? `<span>Rp ${p.originalPrice.toLocaleString()}</span>` : ''}
          Rp ${p.price.toLocaleString()}
        </div>
        <button class="add-btn" data-product-id="${p.id}">+</button>
      </div>
    </div>
  `).join('');
}


/* ==================== RENDER PERLENGKAPAN ====================
   Menampilkan produk non-burung (sangkar, pakan, vitamin, aksesoris)
   di halaman Perlengkapan.
*/
function renderEquip(filter) {
  const grid = document.getElementById('equipGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? products.filter(p => p.category.toLowerCase() !== 'burung')
    : products.filter(p => p.category.toLowerCase() === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="equip-card" onclick="openProductDetail(${p.id})">
      <div class="equip-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<div class="equip-badge" style="background:${p.badgeColor}">${p.badge}</div>` : ''}
      </div>
      <div class="equip-body">
        <div class="equip-cat">${p.categoryLabel}</div>
        <div class="equip-name">${p.name}</div>
        <div class="equip-rating">★★★★★ <span>${p.rating} (${p.reviews} ulasan) • ${p.sold.toLocaleString()} terjual</span></div>
        <div class="equip-desc">${p.description.substring(0, 100)}...</div>
        <div class="equip-footer">
          <div>
            ${p.originalPrice ? `<div class="equip-price-original">${fmtPrice(p.originalPrice)}</div>` : ''}
            <div class="equip-price">${fmtPrice(p.price)}</div>
          </div>
          <button class="btn-cart-small"
            onclick="event.stopPropagation(); addToCart(products.find(x => x.id === ${p.id})); showToast('${p.name} ditambahkan!')">
            + Keranjang
          </button>
        </div>
      </div>
    </div>
  `).join('');
}


/* ==================== RENDER DETAIL PRODUK (MODAL) ====================
   Menampilkan modal popup dengan detail lengkap produk yang diklik.
*/
function renderProductDetail(product) {
  const detail = document.getElementById('productDetail');

  // Hitung persentase diskon (kalau ada harga asli)
  const disc = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  detail.innerHTML = `
    <div class="pd-gallery"><img src="${product.img}" alt="${product.name}"></div>
    <div class="pd-info">
      <div class="pd-category">${product.categoryLabel}</div>
      <h2 class="pd-name">${product.name}</h2>
      <div class="pd-rating">
        <span class="pd-stars">★★★★★</span>
        <span class="pd-review-count">${product.rating} (${product.reviews} ulasan)</span>
        <span class="pd-sold">• ${product.sold.toLocaleString()} terjual</span>
      </div>
      <div class="pd-price">
        ${fmtPrice(product.price)}
        ${product.originalPrice ? `<span class="pd-price-original">${fmtPrice(product.originalPrice)}</span><span class="pd-discount">-${disc}%</span>` : ''}
      </div>
      <div class="pd-description">
        <div class="pd-desc-title">Deskripsi Produk</div>
        <p class="pd-desc-text">${product.description}</p>
      </div>
      <div class="pd-specs">
        ${Object.entries(product.specs).map(([k, v]) => `
          <div class="pd-spec-row">
            <span class="pd-spec-label">${k}</span>
            <span class="pd-spec-value">${v}</span>
          </div>
        `).join('')}
      </div>
      <div class="pd-quantity">
        <span class="pd-qty-label">Jumlah</span>
        <div class="qty-control">
          <button class="qty-btn" id="qtyMinus">−</button>
          <input type="number" class="qty-input" id="qtyInput" value="1" min="1" max="${product.stock}">
          <button class="qty-btn" id="qtyPlus">+</button>
        </div>
        <span class="pd-stock">Stok: ${product.stock}</span>
      </div>
      <div class="pd-actions">
        <button class="btn-add-cart" id="btnAddToCart">+ Keranjang</button>
        <button class="btn-buy-now" id="btnBuyNow">Beli Sekarang</button>
      </div>
    </div>
  `;

  // Tombol kurangi/tambah jumlah
  const qi = document.getElementById('qtyInput');
  document.getElementById('qtyMinus').onclick = () => { if (qi.value > 1) qi.value = parseInt(qi.value) - 1; };
  document.getElementById('qtyPlus').onclick  = () => { if (parseInt(qi.value) < product.stock) qi.value = parseInt(qi.value) + 1; };

  // Tombol tambah ke keranjang
  document.getElementById('btnAddToCart').onclick = () => {
    addToCart(product, parseInt(qi.value));
    closeModal('productModal');
    showToast(`${product.name} ditambahkan ke keranjang`);
  };

  // Tombol beli sekarang (tambah ke keranjang lalu langsung buka checkout)
  document.getElementById('btnBuyNow').onclick = () => {
    addToCart(product, parseInt(qi.value));
    closeModal('productModal');
    openCheckout();
  };
}


/* ==================== RENDER KERANJANG ====================
   Memperbarui tampilan sidebar keranjang belanja.
*/
function renderCart() {
  const ci = document.getElementById('cartItems');

  // Hitung total item dan subtotal (hanya item yang dicentang)
  const selected   = cart.filter(i => i.checked);
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const subtotal   = selected.reduce((s, i) => s + (i.price * i.quantity), 0);

  document.getElementById('cartCount').textContent    = totalItems;
  document.getElementById('cartSubtotal').textContent = fmtPrice(subtotal);
  document.getElementById('cartTotal').textContent    = fmtPrice(subtotal);
  document.getElementById('btnCheckout').disabled     = !cart.some(i => i.checked);

  // Kalau keranjang kosong, tampilkan pesan kosong
  if (cart.length === 0) {
    ci.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Keranjang belanja kosong</p></div>`;
    return;
  }

  // Tampilkan setiap item di keranjang
  ci.innerHTML = cart.map(item => `
    <div class="cart-item">
      <input type="checkbox" class="item-check" data-id="${item.id}" ${item.checked ? 'checked' : ''}>
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-category">${item.categoryLabel}</div>
        <div class="cart-item-price">${fmtPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, -1)">−</button>
          <span>${item.quantity}</span>
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Hapus</button>
        </div>
      </div>
    </div>
  `).join('');

  // Pasang event listener untuk checkbox tiap item
  document.querySelectorAll('.item-check').forEach(cb => {
    cb.addEventListener('change', function () {
      const item = cart.find(i => i.id === parseInt(this.dataset.id));
      if (item) item.checked = this.checked;
      renderCart();
    });
  });
}


/* ==================== RENDER RINGKASAN CHECKOUT ====================
   Menampilkan ringkasan harga (subtotal, ongkir, total) di form checkout.
*/
function renderCheckoutSummary() {
  const selected = cart.filter(i => i.checked);
  const sub  = selected.reduce((s, i) => s + (i.price * i.quantity), 0);
  const ship = sub >= 200000 ? 0 : 25000; // Gratis ongkir kalau belanja >= 200rb

  document.getElementById('checkoutSummary').innerHTML = `
    <div class="summary-row">
      <span>Subtotal (${selected.reduce((s, i) => s + i.quantity, 0)} item)</span>
      <span>${fmtPrice(sub)}</span>
    </div>
    <div class="summary-row">
      <span>Ongkos Kirim</span>
      <span>${ship === 0 ? '<span style="color:var(--success)">GRATIS</span>' : fmtPrice(ship)}</span>
    </div>
    <div class="summary-total">
      <span>Total Pembayaran</span>
      <span class="summary-total-price">${fmtPrice(sub + ship)}</span>
    </div>
  `;
}


/* ==================== RENDER STRUK PESANAN ====================
   Menampilkan struk/receipt setelah pesanan berhasil dibuat.
*/
function renderReceipt(order) {
  const sub   = order.items.reduce((s, i) => s + (i.price * i.quantity), 0);
  const ship  = sub >= 200000 ? 0 : 25000;
  const total = sub + ship;

  document.getElementById('receiptContent').innerHTML = `
    <div class="receipt-header">
      <div class="receipt-logo">Chirp <span>&amp;</span> Plume</div>
      <div class="receipt-tagline">Toko Burung & Perlengkapan Terpercaya • Palembang</div>
      <div class="receipt-success">✓ Pesanan Berhasil Dibuat</div>
    </div>
    <div class="receipt-info">
      <div><div class="receipt-info-label">No. Pesanan</div><div class="receipt-info-value">${order.orderId}</div></div>
      <div><div class="receipt-info-label">Tanggal</div><div class="receipt-info-value">${order.date}</div></div>
      <div><div class="receipt-info-label">Pembayaran</div><div class="receipt-info-value">${order.paymentMethod}</div></div>
      <div><div class="receipt-info-label">Status</div><div class="receipt-info-value" style="color:var(--gold)">Menunggu Pembayaran</div></div>
    </div>
    <div class="receipt-items-title">Detail Pesanan</div>
    ${order.items.map(item => `
      <div class="receipt-item">
        <div>
          <div class="receipt-item-name">${item.name}</div>
          <div class="receipt-item-qty">${item.quantity} × ${fmtPrice(item.price)}</div>
        </div>
        <div class="receipt-item-price">${fmtPrice(item.price * item.quantity)}</div>
      </div>
    `).join('')}
    <div class="receipt-totals">
      <div class="receipt-total-row"><span>Subtotal</span><span>${fmtPrice(sub)}</span></div>
      <div class="receipt-total-row"><span>Ongkos Kirim</span><span>${ship === 0 ? 'GRATIS' : fmtPrice(ship)}</span></div>
      <div class="receipt-grand-total"><span>Total Pembayaran</span><span class="receipt-grand-total-price">${fmtPrice(total)}</span></div>
    </div>
    <div class="receipt-customer">
      <div class="receipt-customer-title">Alamat Pengiriman</div>
      <div class="receipt-customer-name">${order.customer.name} • ${order.customer.phone}</div>
      <div class="receipt-customer-address">${order.customer.address}<br>${order.customer.city}, ${order.customer.province}</div>
    </div>
    <div class="receipt-footer">
      <div class="receipt-footer-text">Terima kasih telah berbelanja di Chirp & Plume! 🦜</div>
      <div class="receipt-contact">📞 +62 887-0827-8441 | ✉️ halo@chirpplume.id | 📍 Palembang</div>
    </div>
  `;
}


/* ==================== OPERASI KERANJANG ====================
   Fungsi-fungsi untuk mengelola isi keranjang belanja.
*/

// Tambah produk ke keranjang. Kalau sudah ada, tambah jumlahnya saja.
function addToCart(product, qty = 1) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      categoryLabel: product.categoryLabel,
      quantity: qty,
      checked: true
    });
  }
  renderCart();
  saveCart();
}

// Ubah jumlah produk di keranjang. delta bisa +1 atau -1.
function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) removeFromCart(id);
    else { renderCart(); saveCart(); }
  }
}

// Hapus produk dari keranjang berdasarkan id
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
  saveCart();
  showToast('Produk dihapus dari keranjang');
}

// Kosongkan semua isi keranjang
function clearCart() {
  cart = [];
  renderCart();
  saveCart();
}

// Simpan keranjang ke localStorage (tetap ada walau browser ditutup)
function saveCart() {
  try { localStorage.setItem('cpCart', JSON.stringify(cart)); } catch (e) {}
}

// Muat keranjang dari localStorage saat halaman dibuka
function loadCart() {
  try {
    const s = localStorage.getItem('cpCart');
    if (s) {
      cart = JSON.parse(s).map(item => ({ ...item, checked: item.checked ?? true }));
      renderCart();
    }
  } catch (e) {}
}


/* ==================== MODAL & SIDEBAR ====================
   Fungsi buka/tutup modal (popup) dan sidebar keranjang.
*/
function openModal(id)  { document.getElementById(id).classList.add('active');    document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('active'); document.body.style.overflow = ''; }
function openCart()     { document.getElementById('cartSidebar').classList.add('active');    document.getElementById('cartOverlay').classList.add('active'); }
function closeCart()    { document.getElementById('cartSidebar').classList.remove('active'); document.getElementById('cartOverlay').classList.remove('active'); }

// Buka modal detail produk berdasarkan id produk
function openProductDetail(id) {
  const p = products.find(pr => pr.id === id);
  if (p) { renderProductDetail(p); openModal('productModal'); }
}

// Buka modal checkout
function openCheckout() {
  if (!cart.length) { showToast('Keranjang belanja kosong'); return; }

  closeCart();
  renderCheckoutSummary();

  // Reset form dan pilihan pembayaran ke default
  document.getElementById('checkoutForm').reset();
  const paymentDetails = document.getElementById('paymentDetails');
  if (paymentDetails) paymentDetails.innerHTML = '';

  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  const first = document.querySelector('.payment-option');
  if (first) {
    first.classList.add('selected');
    first.querySelector('input').checked = true;
  }

  localStorage.removeItem('checkoutData');
  openModal('checkoutModal');
}


/* ==================== BUAT PESANAN ====================
   Dipanggil saat form checkout di-submit.
   Mengambil data dari form, membuat objek order, lalu menampilkan struk.
*/
function placeOrder(e) {
  e.preventDefault(); // Cegah halaman reload

  const province        = document.getElementById('province').value.toLowerCase();
  const selectedPayment = document.querySelector('.payment-option.selected input').value;

  // COD hanya tersedia untuk Sumatera Selatan
  if (selectedPayment === 'cod' && !province.includes('sumatera selatan')) {
    showToast('❌ COD hanya tersedia untuk wilayah Sumatera Selatan');
    document.getElementById('province').focus();
    return;
  }

  // Pastikan ada item yang dicentang
  if (!cart.some(item => item.checked)) {
    showToast('Pilih minimal 1 produk dulu!');
    return;
  }

  // Peta nama metode pembayaran
  const paymentNames = { transfer: 'Transfer Bank', ewallet: 'E-Wallet', cod: 'COD (Bayar di Tempat)' };

  // Buat objek data pesanan
  const sel = document.querySelector('.payment-option.selected input');
  orderData = {
    orderId: generateOrderId(),
    date: getDate(),
    paymentMethod: paymentNames[sel ? sel.value : 'transfer'],
    customer: {
      name:     document.getElementById('customerName').value,
      phone:    document.getElementById('customerPhone').value,
      email:    document.getElementById('customerEmail').value,
      address:  document.getElementById('address').value,
      city:     document.getElementById('city').value,
      province: document.getElementById('province').value
    },
    items: cart.filter(item => item.checked).map(item => ({ ...item }))
  };

  // Tampilkan struk, tutup checkout, hapus item yang sudah dipesan
  renderReceipt(orderData);
  closeModal('checkoutModal');
  openModal('receiptModal');
  cart = cart.filter(item => !item.checked);
  renderCart();
}


/* ==================== SCROLL REVEAL ====================
   Animasi: elemen muncul saat di-scroll ke area yang terlihat.
   Menggunakan IntersectionObserver (API browser bawaan).
*/
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}


/* ==================== DOM READY ====================
   Semua kode di dalam ini baru dijalankan setelah HTML selesai dimuat.
   Ini adalah titik masuk utama aplikasi.
*/
document.addEventListener('DOMContentLoaded', () => {

  // --- INISIALISASI AWAL ---
  setTimeout(() => document.getElementById('preloader').classList.add('hidden'), 1400);
  loadCart();
  renderProducts();
  renderSpecies('all');
  renderEquip('all');
  initReveal();

  // --- AUTO SCROLL KE INPUT SAAT FOKUS DI FORM CHECKOUT ---
  document.querySelectorAll('#checkoutForm input, #checkoutForm textarea').forEach(el => {
    el.addEventListener('focus', () => el.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  });

  // --- NONAKTIFKAN COD JIKA PROVINSI BUKAN SUMATERA SELATAN ---
  const provinceInput = document.getElementById('province');
  const codOption = document.querySelector('.payment-option input[value="cod"]')?.parentElement;
  if (provinceInput && codOption) {
    provinceInput.addEventListener('input', function () {
      const isSumsel = this.value.toLowerCase().includes('sumatera selatan');
      codOption.style.opacity       = isSumsel ? '1' : '0.4';
      codOption.style.pointerEvents = isSumsel ? 'auto' : 'none';
    });
  }

  // --- TAMPILKAN DETAIL METODE PEMBAYARAN SAAT DIPILIH ---
  const paymentDetails = document.getElementById('paymentDetails');
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', function () {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      this.classList.add('selected');
      const method = this.querySelector('input').value;

      if (method === 'transfer') {
        paymentDetails.innerHTML = `
          <div class="pay-box">
            <label>Pilih Bank</label>
            <select>
              <option>BCA - 1234567890</option>
              <option>BRI - 9876543210</option>
              <option>BNI - 555666777</option>
              <option>Mandiri - 1122334455</option>
            </select>
          </div>`;
      } else if (method === 'ewallet') {
        paymentDetails.innerHTML = `
          <div class="pay-box">
            <label>Pilih E-Wallet</label>
            <select>
              <option>DANA - 081234567890</option>
              <option>OVO - 081298765432</option>
              <option>GoPay - 081223344556</option>
              <option>ShopeePay - 081334455667</option>
            </select>
            <input type="text" placeholder="Nomor Pengirim">
          </div>`;
      } else {
        paymentDetails.innerHTML = `<div style="color:green">✔ COD dipilih (khusus Sumatera Selatan)</div>`;
      }
    });
  });

  // --- KLIK KARTU SPESIES (BUKA DETAIL ATAU TAMBAH KE KERANJANG) ---
  document.getElementById('speciesGrid').addEventListener('click', e => {
    const addBtn = e.target.closest('.add-btn');
    if (addBtn) {
      e.stopPropagation();
      const p = products.find(pr => pr.id === parseInt(addBtn.dataset.productId));
      if (p) { addToCart(p); showToast(`${p.name} ditambahkan!`); }
      return;
    }
    const card = e.target.closest('.prod-card');
    if (card) openProductDetail(parseInt(card.dataset.productId));
  });

  // --- NAVBAR: BAYANGAN MUNCUL SAAT SCROLL ---
  window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
  });

  // --- TOMBOL-TOMBOL KERANJANG ---
  document.getElementById('cartBtn').onclick     = openCart;
  document.getElementById('cartClose').onclick   = closeCart;
  document.getElementById('cartOverlay').onclick = closeCart;
  document.getElementById('btnCheckout').onclick = openCheckout;

  // --- KLIK GRID PRODUK (HALAMAN UTAMA) ---
  document.getElementById('productGrid').addEventListener('click', e => {
    const addBtn = e.target.closest('.add-btn');
    if (addBtn) {
      e.stopPropagation();
      const p = products.find(pr => pr.id === parseInt(addBtn.dataset.productId));
      if (p) { addToCart(p); showToast(`${p.name} ditambahkan!`); }
      return;
    }
    const card = e.target.closest('.prod-card');
    if (card) openProductDetail(parseInt(card.dataset.productId));
  });

  // --- FILTER TAB PRODUK HALAMAN UTAMA ---
  document.querySelectorAll('.filter-tabs .tab').forEach(tab => {
    tab.onclick = function () {
      this.closest('.filter-tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      renderProducts(this.dataset.filter);
    };
  });

  // --- FILTER TAB SPESIES (HALAMAN KOLEKSI) ---
  document.getElementById('speciesTabs').addEventListener('click', e => {
    const btn = e.target.closest('[data-sfilter]');
    if (btn) {
      document.querySelectorAll('[data-sfilter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSpecies(btn.dataset.sfilter);
    }
  });

  // --- FILTER TAB PERLENGKAPAN ---
  document.getElementById('equipTabs').addEventListener('click', e => {
    const btn = e.target.closest('[data-efilter]');
    if (btn) {
      document.querySelectorAll('[data-efilter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderEquip(btn.dataset.efilter);
    }
  });

  // --- TUTUP MODAL SAAT KLIK TOMBOL CLOSE ATAU AREA GELAP DI LUAR MODAL ---
  ['productModal', 'checkoutModal', 'receiptModal'].forEach(id => {
    const closeBtn = document.getElementById(id + 'Close');
    if (closeBtn) closeBtn.onclick = () => closeModal(id);
    document.getElementById(id).onclick = e => {
      if (e.target.id === id) closeModal(id);
    };
  });

  // --- SUBMIT FORM CHECKOUT ---
  document.getElementById('checkoutForm').onsubmit = placeOrder;

  // --- PRINT & DOWNLOAD PDF STRUK ---
  const { jsPDF } = window.jspdf;

  // Tangkap elemen struk jadi gambar menggunakan html2canvas
  async function captureReceipt() {
    const el = document.getElementById('receiptContent');
    if (!el || !el.innerHTML.trim()) { alert('Struk belum muncul!'); return null; }
    await new Promise(r => setTimeout(r, 300)); // tunggu render selesai
    const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
    return canvas.toDataURL('image/png');
  }

  // Tombol Cetak: buka tab baru, isi dengan gambar struk, lalu print
  document.getElementById('btnPrint').onclick = async () => {
    const img = await captureReceipt();
    if (!img) return;
    const w = window.open('', '', 'width=900,height=700');
    w.document.write(`
      <html><head><title>Struk</title>
      <style>body{margin:0;text-align:center} img{width:100%;max-width:800px}</style>
      </head><body><img src="${img}"></body></html>
    `);
    w.document.close();
    w.focus();
    setTimeout(() => w.print(), 300);
  };

  // Tombol Download PDF: buat file PDF dari gambar struk
  document.getElementById('btnDownloadPdf').onclick = async () => {
    const img = await captureReceipt();
    if (!img) return;
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(img, 'PNG', 0, 0, 210, 297); // ukuran A4: 210 x 297 mm
    pdf.save('Struk_Pesanan.pdf');
  };

  // --- FAQ: TOGGLE BUKA/TUTUP JAWABAN ---
  document.getElementById('faqList').addEventListener('click', e => {
    const q = e.target.closest('.faq-q');
    if (q) q.parentElement.classList.toggle('open');
  });

});


/* ==================== DATA ULASAN ====================
   Array berisi ulasan-ulasan dari pelanggan.
   Disimpan dan dimuat dari localStorage agar tetap ada saat halaman di-refresh.
*/
let dbUlasan = [
  { nama: "Dewi",       kota: "Jakarta Selatan", isi: "Burung lovebird saya sangat sehat dan aktif setelah membeli dari Chirp & Plume. Pelayanannya ramah dan pengirimannya aman. Sangat direkomendasikan!", rating: 5, waktu: "2 jam lalu",    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" },
  { nama: "ikbal",      kota: "Bandung",          isi: "Kandang Victorian XL yang saya beli kualitasnya luar biasa. Bukan cuma fungsional tapi juga jadi dekorasi ruang tamu yang cantik. Worth every penny!", rating: 5, waktu: "5 jam lalu",    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" },
  { nama: "Putri",      kota: "Surabaya",         isi: "Konsultasi gratis dengan tim mereka sangat membantu. Saya jadi tahu cara merawat burung murai yang benar. Pakan organiknya terbukti bikin bulu makin berkilau!", rating: 5, waktu: "1 hari lalu",  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" },
  { nama: "Aditya",     kota: "Yogyakarta",       isi: "Pengiriman cepat dan aman, burungnya sehat. Cuma kemasannya bisa lebih rapi sedikit. Overall puas dan akan beli lagi!", rating: 4, waktu: "2 hari lalu", avatar: null },
  { nama: "Rina",       kota: "Semarang",         isi: "Murai batu yang saya beli sudah gacor sejak hari pertama. Mantap sekali, bakal jadi langganan tetap!", rating: 5, waktu: "3 hari lalu", avatar: null },
  { nama: "rival",      kota: "Palembang",        isi: "Pakan racikannya bikin burung saya makin rajin bunyi. Respon penjual juga sangat cepat dan informatif.", rating: 4, waktu: "4 hari lalu", avatar: null },
  { nama: "Wulandari",  kota: "Makassar",         isi: "Lovebird yang saya beli sehat, aktif, dan bulunya bagus. Sangkar yang dikirim juga aman, tidak ada yang rusak. Puas banget!", rating: 5, waktu: "5 hari lalu", avatar: null },
  { nama: "popy agustin", kota: "Medan",          isi: "Pertama kali beli burung online, agak ragu tapi ternyata aman. Burungnya sehat, dokumen lengkap. Tim CS juga ramah dan responsif.", rating: 5, waktu: "1 minggu lalu", avatar: null }
];

// Variabel state untuk halaman ulasan
let inputRating  = 0;        // rating bintang yang dipilih user
let avatarDataUrl = null;    // foto profil yang diupload user (base64)

// Variabel untuk animasi scroll feed ulasan (seperti TikTok)
let scrollPaused    = false;
let scrollAnimFrame = null;
let scrollPos       = 0;
let lastTimestamp   = null;
const SCROLL_SPEED  = 35;   // kecepatan scroll dalam px per detik


/* ==================== LOCAL STORAGE ULASAN ====================*/

// Simpan daftar ulasan ke localStorage
function simpanUlasan() {
  localStorage.setItem('dbUlasanChirp', JSON.stringify(dbUlasan));
}

// Muat daftar ulasan dari localStorage
function loadUlasan() {
  const data = localStorage.getItem('dbUlasanChirp');
  if (data) dbUlasan = JSON.parse(data);
}


/* ==================== RENDER BINTANG ====================
   Membuat HTML bintang (★ terisi / ☆ kosong) berdasarkan nilai rating.
   Contoh: rating 4 → ★★★★☆
*/
function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="${i < rating ? '' : 'empty'}">${i < rating ? '★' : '☆'}</span>`
  ).join('');
}


/* ==================== RENDER SATU ITEM ULASAN ====================
   Membuat elemen DOM untuk satu kartu ulasan.
*/
function renderUlasanItem(u, isNew = false) {
  const initial    = u.nama ? u.nama.charAt(0).toUpperCase() : '?';
  const avatarHtml = u.avatar
    ? `<img src="${u.avatar}" alt="${u.nama}" onerror="this.style.display='none'; this.parentElement.textContent='${initial}'">`
    : initial;

  const div = document.createElement('div');
  div.className = 'ulasan-item' + (isNew ? ' new-item' : '');
  div.innerHTML = `
    <div class="ulasan-item-avatar">${avatarHtml}</div>
    <div class="ulasan-item-body">
      <div class="ulasan-item-top">
        <div class="ulasan-item-nameblock">
          <span class="ulasan-item-name">${u.nama}</span>
          ${u.kota ? `<span class="ulasan-item-kota">${u.kota}</span>` : ''}
        </div>
        <div class="ulasan-item-meta">
          <span class="ulasan-item-time">${u.waktu}</span>
        </div>
      </div>
      <div class="ulasan-item-stars">${renderStars(u.rating)}</div>
      <div class="ulasan-item-text">${u.isi}</div>
    </div>
  `;
  return div;
}


/* ==================== BANGUN FEED ULASAN ====================
   Mengisi feed dengan semua ulasan (digandakan untuk efek loop tak terbatas).
*/
function buildFeed() {
  const feed = document.getElementById('feedUlasan');
  if (!feed) return;
  feed.innerHTML = '';
  // Gandakan data ulasan agar bisa loop seamless
  const allItems = [...dbUlasan, ...dbUlasan];
  allItems.forEach(u => feed.appendChild(renderUlasanItem(u)));
  scrollPos = 0;
  feed.style.transform = 'translateY(0px)';
}

// Dapatkan tinggi setengah feed (satu siklus ulasan asli)
function getHalfHeight() {
  const feed = document.getElementById('feedUlasan');
  return feed ? feed.scrollHeight / 2 : 0;
}


/* ==================== ANIMASI SCROLL FEED ====================
   Fungsi yang dipanggil setiap frame untuk menggerakkan feed ke atas.
   Menggunakan requestAnimationFrame untuk animasi yang halus.
*/
function tickScroll(timestamp) {
  if (!scrollPaused) {
    const feed = document.getElementById('feedUlasan');
    if (!feed) { scrollAnimFrame = requestAnimationFrame(tickScroll); return; }

    if (lastTimestamp === null) lastTimestamp = timestamp;
    const delta = (timestamp - lastTimestamp) / 1000; // konversi ms ke detik
    lastTimestamp = timestamp;

    scrollPos += SCROLL_SPEED * delta;

    // Reset ke posisi awal (seamless loop) saat sudah sampai setengah
    const half = getHalfHeight();
    if (half > 0 && scrollPos >= half) scrollPos -= half;

    feed.style.transform = `translateY(-${scrollPos}px)`;
  } else {
    lastTimestamp = null;
  }
  scrollAnimFrame = requestAnimationFrame(tickScroll);
}

// Mulai animasi scroll
function startScroll() {
  if (scrollAnimFrame) cancelAnimationFrame(scrollAnimFrame);
  scrollAnimFrame = requestAnimationFrame(tickScroll);
}

// Pause scroll saat mouse hover di atas feed
function initScrollPauseOnHover() {
  const wrapper = document.getElementById('feedWrapper');
  if (!wrapper) return;
  wrapper.addEventListener('mouseenter', () => { scrollPaused = true; lastTimestamp = null; });
  wrapper.addEventListener('mouseleave', () => {
    if (!document.getElementById('btnPauseScroll')?.classList.contains('paused')) {
      scrollPaused = false;
    }
  });
}

// Update teks jumlah ulasan
function updateCountText() {
  const el = document.getElementById('ulasanCountText');
  if (el) el.textContent = dbUlasan.length + ' ulasan';
}


/* ==================== INISIALISASI HALAMAN ULASAN ====================
   Dipanggil saat DOM siap. Mengatur semua interaksi di halaman Ulasan.
*/
function initUlasanPage() {
  loadUlasan();

  const feed = document.getElementById('feedUlasan');
  if (!feed) return;

  buildFeed();
  updateCountText();
  startScroll();
  initScrollPauseOnHover();

  // Tombol Pause / Resume scroll
  const pauseBtn = document.getElementById('btnPauseScroll');
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      scrollPaused = !scrollPaused;
      if (scrollPaused) {
        pauseBtn.classList.add('paused');
        pauseBtn.innerHTML = '&#9654; Resume';
        lastTimestamp = null;
      } else {
        pauseBtn.classList.remove('paused');
        pauseBtn.innerHTML = '&#9646;&#9646; Pause';
      }
    });
  }

  // Interaksi bintang rating (hover dan klik)
  const stars = document.querySelectorAll('#inputStars .ustar');
  stars.forEach(s => {
    s.addEventListener('mouseenter', () => {
      stars.forEach(st => st.classList.toggle('active', st.dataset.value <= s.dataset.value));
    });
    s.addEventListener('click', () => {
      inputRating = parseInt(s.dataset.value);
      stars.forEach(st => st.classList.toggle('active', st.dataset.value <= inputRating));
    });
  });
  document.getElementById('inputStars')?.addEventListener('mouseleave', () => {
    stars.forEach(st => st.classList.toggle('active', st.dataset.value <= inputRating));
  });

  // Hitung karakter textarea ulasan
  const textarea  = document.getElementById('teksUlasan');
  const charCount = document.getElementById('charCount');
  textarea?.addEventListener('input', () => {
    if (charCount) charCount.textContent = textarea.value.length;
  });

  // Upload foto avatar
  const avatarUpload  = document.getElementById('avatarUploadZone');
  const avatarInput   = document.getElementById('avatarInput');
  const avatarImg     = document.getElementById('avatarImg');
  const avatarPreview = document.getElementById('avatarPreview');

  avatarUpload?.addEventListener('click', () => avatarInput?.click());
  avatarInput?.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      avatarDataUrl = ev.target.result;
      avatarImg.src = avatarDataUrl;
      avatarImg.style.display = 'block';
      avatarPreview.querySelector('svg')?.remove();
    };
    reader.readAsDataURL(file);
  });

  // Submit ulasan baru
  document.getElementById('btnKirimUlasan')?.addEventListener('click', () => {
    const nama = document.getElementById('namaPengulas')?.value.trim();
    const kota = document.getElementById('kotaPengulas')?.value.trim();
    const teks = textarea?.value.trim();

    // Validasi input
    if (!nama)            { alert('Mohon isi nama Anda terlebih dahulu.'); return; }
    if (!teks)            { alert('Mohon tulis ulasan Anda terlebih dahulu.'); return; }
    if (inputRating === 0) { alert('Mohon pilih rating bintang.'); return; }

    // Buat objek ulasan baru
    const ulasanBaru = { nama, kota, isi: teks, rating: inputRating, waktu: 'Baru saja', avatar: avatarDataUrl || null };

    // Tambahkan ke database dan simpan
    dbUlasan.unshift(ulasanBaru);
    simpanUlasan();
    updateCountText();

    // Sisipkan ulasan baru ke feed langsung (tanpa rebuild seluruh feed)
    const feedEl = document.getElementById('feedUlasan');
    if (feedEl) {
      const newItem1 = renderUlasanItem(ulasanBaru, true);
      const newItem2 = renderUlasanItem(ulasanBaru, false);
      const midIndex = Math.floor(feedEl.children.length / 2);

      feedEl.insertBefore(newItem1, feedEl.children[0]);
      feedEl.insertBefore(newItem2, feedEl.children[midIndex + 1] || null);

      // Kompensasi posisi scroll agar tidak melompat
      scrollPos += newItem1.offsetHeight + 10;

      // Pause sebentar agar user bisa melihat ulasannya
      scrollPaused = true;
      lastTimestamp = null;
      if (pauseBtn) { pauseBtn.classList.add('paused'); pauseBtn.innerHTML = '&#9654; Resume'; }

      // Resume otomatis setelah 3 detik
      setTimeout(() => {
        scrollPaused = false;
        if (pauseBtn) { pauseBtn.classList.remove('paused'); pauseBtn.innerHTML = '&#9646;&#9646; Pause'; }
      }, 3000);
    }

    // Reset semua form
    document.getElementById('namaPengulas').value  = '';
    document.getElementById('kotaPengulas').value  = '';
    textarea.value = '';
    if (charCount) charCount.textContent = '0';
    inputRating   = 0;
    avatarDataUrl = null;
    stars.forEach(st => st.classList.remove('active'));
    if (avatarImg) { avatarImg.style.display = 'none'; avatarImg.src = ''; }

    if (typeof showToast === 'function') showToast('Ulasan berhasil dikirim! 🎉');
  });
}

document.addEventListener('DOMContentLoaded', initUlasanPage);
