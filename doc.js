const galleryItems = [
  {
    src: "/public/img/documentation/observasi-pertama.jpeg",
    caption: "Observasi Topejawa Hari Pertama",
  },
  {
    src: "/public/img/documentation/diskusi-kades.jpg",
    caption: "Diskusi Bersama Kepala Desa",
  },
  {
    src: "/public/img/documentation/senam-rutin.jpeg",
    caption: "Senam Rutin Bersama Puskesmas",
  },
  {
    src: "/public/img/documentation/observasi-kajang.jpeg",
    caption: "Observasi Dusun Kajang",
  },
  {
    src: "/public/img/documentation/sempro.jpeg",
    caption: "Seminar Program Kerja",
  },
  {
    src: "/public/img/documentation/bongkar-kantor.jpg",
    caption: "Pembongkaran Kantor Desa",
  },
  {
    src: "/public/img/documentation/belanja-tepo.jpeg",
    caption: "Belanja Kebutuhan di Pasar Tepo",
  },
  {
    src: "/public/img/documentation/kunjungan-lengkese.jpeg",
    caption: "Kunjungan Posko Lengkese",
  },
  {
    src: "/public/img/documentation/kegiatan-posyandu.jpeg",
    caption: "Kegiatan Posyandu Pendataan Stunting",
  },
  {
    src: "/public/img/documentation/sosialisasi-gemari.jpeg",
    caption: "Sosialisasi Gemari",
  },
  {
    src: "/public/img/documentation/sosialisasi-sampah.jpeg",
    caption: "Sosialisasi Pentingnya Buang Sampah",
  },
  {
    src: "/public/img/documentation/rumah-baca.jpeg",
    caption: "Kegiatan Rumah Baca Lo'Mo",
  },
  {
    src: "/public/img/documentation/pawai-kapal.jpeg",
    caption: "Pawai Kapal Menyambut 17 Agustus",
  },
  {
    src: "/public/img/documentation/sosialisasi-website.jpeg",
    caption: "Sosialisasi Pelatihan Website",
  },
  {
    src: "/public/img/documentation/sosialisasi-selai.jpg",
    caption: "Sosialisasi Selai dari Kulit Semangka",
  },
  {
    src: "/public/img/documentation/sosialisasi-merk.jpg",
    caption: "Sosialisasi Pendaftaran Merk",
  },
  {
    src: "/public/img/documentation/pengecatan-gerbang.jpeg",
    caption: "Pengecatan Gerbang Dusun Lamangkia",
  },
  {
    src: "/public/img/documentation/kunjungan-banggae.jpeg",
    caption: "Kunjungan Posko Banggae",
  },
  {
    src: "/public/img/documentation/persiapan-trap.jpg",
    caption: "Persiapan Pemasangan Yellow Sticky Trap",
  },
  {
    src: "/public/img/documentation/pemasangan-trap.jpeg",
    caption: "Pemasangan Yellow Sticky Trap",
  },
  {
    src: "/public/img/documentation/rapat-kecamatan.jpeg",
    caption: "Rapat Posko Sekecamatan Mangarabombang",
  },
  {
    src: "/public/img/documentation/penyerahan-desain.jpeg",
    caption: "Penyerahan Desain Interior Kantor Desa",
  },
  {
    src: "/public/img/documentation/ratek-lomba.jpeg",
    caption: "Rapat Teknis Topejawa Hebat Cup",
  },
  {
    src: "/public/img/documentation/pembukaan-lomba.jpeg",
    caption: "Pembukaan Topejawa Hebat Cup",
  },
];

const galleryGrid = document.querySelector(".galeri-grid");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("galeri-item");

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.caption;

  const caption = document.createElement("div");
  caption.classList.add("galeri-caption");
  const captionTitle = document.createElement("h3");
  captionTitle.textContent = item.caption;

  caption.appendChild(captionTitle);
  galleryItem.appendChild(img);
  galleryItem.appendChild(caption);
  galleryGrid.appendChild(galleryItem);
});