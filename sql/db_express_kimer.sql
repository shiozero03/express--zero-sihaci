-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2023 at 08:23 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_express_kimer`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id_admin` bigint(20) NOT NULL,
  `nama_admin` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id_admin`, `nama_admin`, `username`, `password`) VALUES
(1, 'Administrator', 'admin', '$2b$10$Yt9Hz4u/lMk2/NdlpOLhQupTuNSMyVKZisy7l5ekK5HmLe0egECB2'),
(2, 'Zero', 'shiota03', '$2b$10$KZnC94XaawMD57UaEC4dGOq0IxKUWqcKkpC6Kfpj8ZZvg8wX052Dq'),
(4, 'Shiota Zero', 'shiota', '$2b$10$3PFn8kg8WnsyFi3JEhBJGeDWPSkfZ.KJ3wHo2lS8SX2FwWwOJA52.');

-- --------------------------------------------------------

--
-- Table structure for table `akomodasis`
--

CREATE TABLE `akomodasis` (
  `id_akomodasi` bigint(20) NOT NULL,
  `id_hotel` bigint(20) DEFAULT NULL,
  `kategori_hotel` varchar(255) DEFAULT NULL,
  `harga_terendah` int(11) DEFAULT NULL,
  `harga_tertinggi` int(11) DEFAULT NULL,
  `nomor_telepon` varchar(255) DEFAULT NULL,
  `alamat_akomodasi` text DEFAULT NULL,
  `banner_akomodasi` varchar(255) DEFAULT NULL,
  `image_akomodasi` varchar(255) DEFAULT NULL,
  `deskripsi_akomodasi` text DEFAULT NULL,
  `link_gmaps` text DEFAULT NULL,
  `link_website` text DEFAULT NULL,
  `link_instagram` text DEFAULT NULL,
  `link_youtube` text DEFAULT NULL,
  `link_twitter` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id_event` int(11) NOT NULL,
  `nama_event` varchar(255) DEFAULT NULL,
  `banner_event` varchar(255) DEFAULT NULL,
  `image_event` varchar(255) DEFAULT NULL,
  `deskripsi_event` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id_hotel` bigint(20) NOT NULL,
  `nama_hotel` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kuliners`
--

CREATE TABLE `kuliners` (
  `id_kuliner` bigint(20) NOT NULL,
  `nama_kuliner` varchar(255) DEFAULT NULL,
  `alamat_kuliner` text DEFAULT NULL,
  `banner_kuliner` varchar(255) DEFAULT NULL,
  `image_kuliner` varchar(255) DEFAULT NULL,
  `deskripsi_kuliner` text DEFAULT NULL,
  `link_gmaps` text DEFAULT NULL,
  `link_instagram` int(11) DEFAULT NULL,
  `link_shopee` text DEFAULT NULL,
  `link_tokopedia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `laporan_hotels`
--

CREATE TABLE `laporan_hotels` (
  `id_laporan` bigint(20) NOT NULL,
  `id_hotel` bigint(20) NOT NULL,
  `tanggal_laporan` date DEFAULT NULL,
  `klasifikasi_hotel` varchar(255) DEFAULT NULL,
  `jumlah_kamar_dimiliki` int(11) DEFAULT NULL,
  `jumlah_kamar_terjual` int(11) DEFAULT NULL,
  `jumlah_wisatawan_lokal` int(11) DEFAULT NULL,
  `jumlah_wisatawan_asia` int(11) DEFAULT NULL,
  `jumlah_wisatawan_afrika` int(11) DEFAULT NULL,
  `jumlah_wisatawan_amerika_utara` int(11) DEFAULT NULL,
  `jumlah_wisatawan_amerika_selatan` int(11) DEFAULT NULL,
  `jumlah_wisatawan_antartika` int(11) DEFAULT NULL,
  `jumlah_wisatawan_eropa` int(11) DEFAULT NULL,
  `jumlah_wisatawan_australia` int(11) DEFAULT NULL,
  `jumlah_karyawan_lakilaki` int(11) DEFAULT NULL,
  `jumlah_karyawan_perempuan` int(11) DEFAULT NULL,
  `rata_rata_lama_tinggal` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `objek_wisatas`
--

CREATE TABLE `objek_wisatas` (
  `id_wisata` bigint(20) NOT NULL,
  `nama_wisata` varchar(255) DEFAULT NULL,
  `kategori_wisata` varchar(255) DEFAULT NULL,
  `jam_buka_hari_kerja` time DEFAULT NULL,
  `jam_tutup_hari_kerja` time DEFAULT NULL,
  `jam_buka_weekend` time DEFAULT NULL,
  `jam_tutup_weekend` time DEFAULT NULL,
  `harga_tiket_hari_kerja` int(11) DEFAULT NULL,
  `harga_tiket_weekend` int(11) DEFAULT NULL,
  `alamat_wisata` text DEFAULT NULL,
  `banner_wisata` varchar(255) DEFAULT NULL,
  `image_wisata` varchar(255) DEFAULT NULL,
  `deskripsi_wisata` text DEFAULT NULL,
  `link_gmaps` text DEFAULT NULL,
  `link_website` text DEFAULT NULL,
  `link_instagram` text DEFAULT NULL,
  `link_facebook` text DEFAULT NULL,
  `link_youtube` text DEFAULT NULL,
  `link_twitter` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `travels`
--

CREATE TABLE `travels` (
  `id_travel` bigint(20) NOT NULL,
  `nama_travel` varchar(255) DEFAULT NULL,
  `jam_keberangkatan` time DEFAULT NULL,
  `trip_dan_harga` varchar(255) DEFAULT NULL,
  `alamat_travel` text DEFAULT NULL,
  `nomor_telepon_travel` varchar(255) DEFAULT NULL,
  `banner_travel` varchar(255) DEFAULT NULL,
  `image_travel` varchar(255) DEFAULT NULL,
  `deskripsi_travel` text DEFAULT NULL,
  `link_gmaps` text DEFAULT NULL,
  `link_website` text DEFAULT NULL,
  `link_instagram` text DEFAULT NULL,
  `link_facebook` text DEFAULT NULL,
  `link_twitter` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `akomodasis`
--
ALTER TABLE `akomodasis`
  ADD PRIMARY KEY (`id_akomodasi`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id_event`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id_hotel`);

--
-- Indexes for table `kuliners`
--
ALTER TABLE `kuliners`
  ADD PRIMARY KEY (`id_kuliner`);

--
-- Indexes for table `laporan_hotels`
--
ALTER TABLE `laporan_hotels`
  ADD PRIMARY KEY (`id_laporan`);

--
-- Indexes for table `objek_wisatas`
--
ALTER TABLE `objek_wisatas`
  ADD PRIMARY KEY (`id_wisata`);

--
-- Indexes for table `travels`
--
ALTER TABLE `travels`
  ADD PRIMARY KEY (`id_travel`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id_admin` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `akomodasis`
--
ALTER TABLE `akomodasis`
  MODIFY `id_akomodasi` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id_hotel` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kuliners`
--
ALTER TABLE `kuliners`
  MODIFY `id_kuliner` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `laporan_hotels`
--
ALTER TABLE `laporan_hotels`
  MODIFY `id_laporan` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `objek_wisatas`
--
ALTER TABLE `objek_wisatas`
  MODIFY `id_wisata` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `travels`
--
ALTER TABLE `travels`
  MODIFY `id_travel` bigint(20) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
