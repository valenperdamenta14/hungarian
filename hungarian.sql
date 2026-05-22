-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2026 at 01:17 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hungarian`
--

-- --------------------------------------------------------

--
-- Table structure for table `histori_shift`
--

CREATE TABLE `histori_shift` (
  `kode_perawat` varchar(11) NOT NULL,
  `d01` char(1) DEFAULT NULL,
  `d02` char(1) DEFAULT NULL,
  `d03` char(1) DEFAULT NULL,
  `d04` char(1) DEFAULT NULL,
  `d05` char(1) DEFAULT NULL,
  `d06` char(1) DEFAULT NULL,
  `d07` char(1) DEFAULT NULL,
  `d08` char(1) DEFAULT NULL,
  `d09` char(1) DEFAULT NULL,
  `d10` char(1) DEFAULT NULL,
  `d11` char(1) DEFAULT NULL,
  `d12` char(1) DEFAULT NULL,
  `d13` char(1) DEFAULT NULL,
  `d14` char(1) DEFAULT NULL,
  `d15` char(1) DEFAULT NULL,
  `d16` char(1) DEFAULT NULL,
  `d17` char(1) DEFAULT NULL,
  `d18` char(1) DEFAULT NULL,
  `d19` char(1) DEFAULT NULL,
  `d20` char(1) DEFAULT NULL,
  `d21` char(1) DEFAULT NULL,
  `d22` char(1) DEFAULT NULL,
  `d23` char(1) DEFAULT NULL,
  `d24` char(1) DEFAULT NULL,
  `d25` char(1) DEFAULT NULL,
  `d26` char(1) DEFAULT NULL,
  `d27` char(1) DEFAULT NULL,
  `d28` char(1) DEFAULT NULL,
  `d29` char(1) DEFAULT NULL,
  `d30` char(1) DEFAULT NULL,
  `d31` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `histori_shift`
--

INSERT INTO `histori_shift` (`kode_perawat`, `d01`, `d02`, `d03`, `d04`, `d05`, `d06`, `d07`, `d08`, `d09`, `d10`, `d11`, `d12`, `d13`, `d14`, `d15`, `d16`, `d17`, `d18`, `d19`, `d20`, `d21`, `d22`, `d23`, `d24`, `d25`, `d26`, `d27`, `d28`, `d29`, `d30`, `d31`) VALUES
('P01', 'P', 'P', 'P', 'P', 'L', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'M', 'L', 'P', 'P'),
('P02', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'L', 'M', 'M', 'L', 'L', 'M', 'M', 'L', 'L', 'P', 'P'),
('P03', 'P', 'P', 'P', 'P', 'P', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'L', 'P', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'L', 'S', 'P', 'P', 'S'),
('P04', 'L', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'L', 'S', 'P', 'P', 'P', 'P', 'P', 'S', 'P', 'P', 'M', 'L', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'S', 'S', 'M'),
('P05', 'S', 'S', 'S', 'S', 'M', 'L', 'L', 'S', 'P', 'P', 'p', 'P', 'P', 'S', 'M', 'L', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'P', 'M', 'M', 'L'),
('P06', 'S', 'M', 'M', 'L', 'L', 'M', 'M', 'L', 'L', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S'),
('P07', 'P', 'S', 'S', 'P', 'P', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L'),
('P08', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P'),
('P09', 'M', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'P', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'L'),
('P10', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M'),
('P11', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'P', 'M', 'L', 'M', 'M', 'M', 'L'),
('P12', 'P', 'P', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'M', 'L', 'L', 'L', 'S', 'S', 'S', 'P', 'P', 'P', 'L', 'S', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L'),
('P13', 'L', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P'),
('P14', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'L', 'L', 'L'),
('P15', 'L', 'S', 'S', 'P', 'P', 'L', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L'),
('P16', 'P', 'M', 'M', 'L', 'L', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S'),
('P17', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'P', 'P', 'L', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P'),
('P18', 'M', 'L', 'L', 'P', 'P', 'P', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'S', 'M', 'M'),
('P19', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'S', 'S', 'P', 'L', 'S', 'S'),
('P20', 'M', 'M', 'L', 'L', 'M', 'L', 'L', 'P', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'P', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'L', 'L', 'P', 'S'),
('P21', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M'),
('P22', 'L', 'L', 'P', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M'),
('P23', 'P', 'S', 'S', 'S', 'L', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'S', 'M', 'L', 'L', 'S', 'S', 'S', 'P'),
('P24', 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'S', 'L', 'P', 'S', 'S', 'P', 'L', 'P', 'P', 'P', 'S', 'S', 'S', 'L', 'S', 'S', 'S', 'P', 'P', 'P', 'L', 'P', 'P', 'P');

-- --------------------------------------------------------

--
-- Table structure for table `jadwal`
--

CREATE TABLE `jadwal` (
  `id_jadwal` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `kode_perawat` varchar(11) NOT NULL,
  `kode_shift` varchar(10) NOT NULL,
  `cost` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `perawat`
--

CREATE TABLE `perawat` (
  `kode_perawat` varchar(11) NOT NULL,
  `nama_perawat` varchar(100) NOT NULL,
  `grup` char(1) NOT NULL,
  `jabatan` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `perawat`
--

INSERT INTO `perawat` (`kode_perawat`, `nama_perawat`, `grup`, `jabatan`) VALUES
('P01', 'Gusesta Jeli, AMK.', 'A', 'PJ SHIFT'),
('P02', 'Natalita Amk', 'A', 'PJ SHIFT'),
('P03', 'Agnes Nelsy H. Tampubolon, Amk', 'A', 'PJ SHIFT'),
('P04', 'Wana Delima Malau, AMK.', 'A', 'PJ SHIFT'),
('P05', 'Ferdycha Ginting S.Kep. Ns', 'A', 'PJ SHIFT'),
('P06', 'Winda, AMK.', 'B', 'PP'),
('P07', 'Rumondang Sitorus, AMK.', 'B', 'PP'),
('P08', 'Meiliana Sinaga, Amd.Kep.', 'B', 'PP'),
('P09', 'Ike Roharti Lubis Amd.Kep', 'B', 'PP'),
('P10', 'Hiskia Nainggolan Amd.Kep', 'B', 'PP'),
('P11', 'Rusmani Simanullang, Amd.Kep.', 'B', 'PP'),
('P12', 'Sulastri Sihombing, Amd.Kep.', 'B', 'PP'),
('P13', 'Desi, S.Kep, Ns.', 'C', 'PP'),
('P14', 'Lamria, AMK.', 'C', 'PP'),
('P15', 'Samuel Silalahi Amd.Kep', 'C', 'PP'),
('P16', 'Dora, AMK', 'C', 'PP'),
('P17', 'Nadia Yolanda H. Amd. Kep', 'C', 'PP'),
('P18', 'Grace O Paviani brasa Amd.Kep', 'C', 'PP'),
('P19', 'Novia Wulandari S.Kep,Ns', 'C', 'PP'),
('P20', 'Bevit sri wahyuni, AMK', 'D', 'PP'),
('P21', 'Elvira, S.Kep, Ns', 'D', 'PP'),
('P22', 'Nur Cahyani Ndraha, Amd.', 'D', 'PP'),
('P23', 'Angga Pradana, AMK.', 'D', 'PP'),
('P24', 'Ropina, AMK', 'D', 'PP');

-- --------------------------------------------------------

--
-- Table structure for table `shift`
--

CREATE TABLE `shift` (
  `kode_shift` varchar(11) NOT NULL,
  `nama_shift` enum('Pagi','Sore','Malam','Libur') NOT NULL,
  `jumlah_shift` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shift`
--

INSERT INTO `shift` (`kode_shift`, `nama_shift`, `jumlah_shift`) VALUES
('S1', 'Pagi', 10),
('S2', 'Sore', 5),
('S3', 'Malam', 5),
('S4', 'Libur', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `histori_shift`
--
ALTER TABLE `histori_shift`
  ADD PRIMARY KEY (`kode_perawat`);

--
-- Indexes for table `jadwal`
--
ALTER TABLE `jadwal`
  ADD PRIMARY KEY (`id_jadwal`),
  ADD UNIQUE KEY `unique_jadwal` (`tanggal`,`kode_perawat`),
  ADD KEY `kode_perawat` (`kode_perawat`),
  ADD KEY `kode_shift` (`kode_shift`);

--
-- Indexes for table `perawat`
--
ALTER TABLE `perawat`
  ADD PRIMARY KEY (`kode_perawat`);

--
-- Indexes for table `shift`
--
ALTER TABLE `shift`
  ADD PRIMARY KEY (`kode_shift`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jadwal`
--
ALTER TABLE `jadwal`
  MODIFY `id_jadwal` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `histori_shift`
--
ALTER TABLE `histori_shift`
  ADD CONSTRAINT `histori_shift_ibfk_1` FOREIGN KEY (`kode_perawat`) REFERENCES `perawat` (`kode_perawat`) ON DELETE CASCADE;

--
-- Constraints for table `jadwal`
--
ALTER TABLE `jadwal`
  ADD CONSTRAINT `jadwal_ibfk_1` FOREIGN KEY (`kode_perawat`) REFERENCES `perawat` (`kode_perawat`) ON DELETE CASCADE,
  ADD CONSTRAINT `jadwal_ibfk_2` FOREIGN KEY (`kode_shift`) REFERENCES `shift` (`kode_shift`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
