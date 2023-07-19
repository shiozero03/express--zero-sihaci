-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2023 at 04:58 AM
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
  `nama_akomodasi` varchar(255) NOT NULL,
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
  `link_twitter` text DEFAULT NULL,
  `link_facebook` text DEFAULT NULL
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

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id_event`, `nama_event`, `banner_event`, `image_event`, `deskripsi_event`) VALUES
(1, 'a', '1689229612632_banner_Lighthouse.jpg', '1689229612631_image_Chrysanthemum.jpg', 'a'),
(13, 'daf', '1689227442394_banner_Tulips.jpg', '1689227442394_image_Koala.jpg', 'fafa'),
(14, 'daf', '1689227443294_banner_Tulips.jpg', '1689227443294_image_Koala.jpg', 'fafa'),
(15, 'daf', '1689227444277_banner_Tulips.jpg', '1689227444277_image_Koala.jpg', 'fafa'),
(16, 'events 1', '1689229318085_banner_Koala.jpg', '1689229318085_image_Desert.jpg', 'event lorem ipsum'),
(17, 'events 1', '1689229376380_banner_Koala.jpg', '1689229376380_image_Desert.jpg', 'event lorem ipsum'),
(18, 'events 1', '1689229414700_banner_Koala.jpg', '1689229414700_image_Tulips.jpg', 'event lorem ipsum'),
(19, 'fa', '1689229438901_banner_Chrysanthemum.jpg', '1689229438901_image_Lighthouse.jpg', 'fa'),
(20, 'events 1', '1689229639575_banner_Jellyfish.jpg', '1689229639575_image_Tulips.jpg', 'dada'),
(21, 'events 1', '1689229727875_banner_Jellyfish.jpg', '1689229727875_image_Tulips.jpg', 'dada'),
(22, 'events 1', '1689229821510_banner_Jellyfish.jpg', '1689229821508_image_Tulips.jpg', 'dada');

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
  `link_instagram` text DEFAULT NULL,
  `link_shopee` text DEFAULT NULL,
  `link_tokopedia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kuliners`
--

INSERT INTO `kuliners` (`id_kuliner`, `nama_kuliner`, `alamat_kuliner`, `banner_kuliner`, `image_kuliner`, `deskripsi_kuliner`, `link_gmaps`, `link_instagram`, `link_shopee`, `link_tokopedia`) VALUES
(5, 'a', 'a', '1689229055024_banner_Lighthouse.jpg', '1689229055024_image_Chrysanthemum.jpg', 'a', 'a', 'a', 'a', 'a'),
(6, 'a', 'a', '1689229055213_banner_Lighthouse.jpg', '1689229055213_image_Chrysanthemum.jpg', 'a', 'a', 'a', 'a', 'a'),
(7, 'a', 'a', '1689229128407_banner_Jellyfish.jpg', '1689229128407_image_Koala.jpg', 'a', 'a', 'a', 'a', 'a'),
(8, 'a', 'a', '1689229891993_banner_Lighthouse.jpg', '1689229891978_image_Koala.jpg', 'a', 'a', 'a', 'a', 'a');

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
  `jam_buka` time DEFAULT NULL,
  `jam_tutup` time DEFAULT NULL,
  `trip_dan_harga` text DEFAULT NULL,
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

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` bigint(20) NOT NULL,
  `nama_user` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_user` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `nama_user`, `username`, `password`, `role_user`) VALUES
(1, 'Administrator', 'admin', '$2b$10$MU/yWsSeAiwK5KftTl7Lge6fSYYVlz7iqh1s4JBZPE1rwQpTd.w8G', 'Admin'),
(3, 'Hotel', 'hotelpermataindah', '$2b$10$PflWmn3s6jRTwnOObN4cXecZl/k.gK5J/Xl7B.c6AbbxdKImOx7IG', 'Hotel');

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`);

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
  MODIFY `id_akomodasi` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id_hotel` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kuliners`
--
ALTER TABLE `kuliners`
  MODIFY `id_kuliner` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `laporan_hotels`
--
ALTER TABLE `laporan_hotels`
  MODIFY `id_laporan` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `objek_wisatas`
--
ALTER TABLE `objek_wisatas`
  MODIFY `id_wisata` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `travels`
--
ALTER TABLE `travels`
  MODIFY `id_travel` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
