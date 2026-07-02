-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2026 at 09:12 AM
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
  `id` int(11) NOT NULL,
  `kode_perawat` varchar(11) NOT NULL,
  `bulan` tinyint(4) NOT NULL,
  `tahun` smallint(6) NOT NULL,
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
  `d31` char(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `histori_shift`
--

INSERT INTO `histori_shift` (`id`, `kode_perawat`, `bulan`, `tahun`, `d01`, `d02`, `d03`, `d04`, `d05`, `d06`, `d07`, `d08`, `d09`, `d10`, `d11`, `d12`, `d13`, `d14`, `d15`, `d16`, `d17`, `d18`, `d19`, `d20`, `d21`, `d22`, `d23`, `d24`, `d25`, `d26`, `d27`, `d28`, `d29`, `d30`, `d31`, `created_at`) VALUES
(1, 'P01', 12, 2025, 'P', 'P', 'P', 'P', 'L', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'M', 'L', 'P', 'P', '2026-07-01 20:00:53'),
(2, 'P02', 12, 2025, 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'L', 'M', 'M', 'L', 'L', 'M', 'M', 'L', 'L', 'P', 'P', '2026-07-01 20:00:53'),
(3, 'P03', 12, 2025, 'P', 'P', 'P', 'P', 'P', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'L', 'P', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'L', 'S', 'P', 'P', 'S', '2026-07-01 20:00:53'),
(4, 'P04', 12, 2025, 'L', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'L', 'S', 'P', 'P', 'P', 'P', 'P', 'S', 'P', 'P', 'M', 'L', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'S', 'S', 'M', '2026-07-01 20:00:53'),
(5, 'P05', 12, 2025, 'S', 'S', 'S', 'S', 'M', 'L', 'L', 'S', 'P', 'P', 'p', 'P', 'P', 'S', 'M', 'L', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'P', 'M', 'M', 'L', '2026-07-01 20:00:53'),
(6, 'P06', 12, 2025, 'S', 'M', 'M', 'L', 'L', 'M', 'M', 'L', 'L', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', '2026-07-01 20:00:53'),
(7, 'P07', 12, 2025, 'P', 'S', 'S', 'P', 'P', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', '2026-07-01 20:00:53'),
(8, 'P08', 12, 2025, 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', '2026-07-01 20:00:53'),
(9, 'P09', 12, 2025, 'M', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'P', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'L', '2026-07-01 20:00:53'),
(10, 'P10', 12, 2025, 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', '2026-07-01 20:00:53'),
(11, 'P11', 12, 2025, 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'P', 'M', 'L', 'M', 'M', 'M', 'L', '2026-07-01 20:00:53'),
(12, 'P12', 12, 2025, 'P', 'P', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'M', 'L', 'L', 'L', 'S', 'S', 'S', 'P', 'P', 'P', 'L', 'S', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', '2026-07-01 20:00:53'),
(13, 'P13', 12, 2025, 'L', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', '2026-07-01 20:00:53'),
(14, 'P14', 12, 2025, 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'L', 'L', 'L', '2026-07-01 20:00:53'),
(15, 'P15', 12, 2025, 'L', 'S', 'S', 'P', 'P', 'L', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', '2026-07-01 20:00:53'),
(16, 'P16', 12, 2025, 'P', 'M', 'M', 'L', 'L', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', '2026-07-01 20:00:53'),
(17, 'P17', 12, 2025, 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'P', 'P', 'L', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', '2026-07-01 20:00:53'),
(18, 'P18', 12, 2025, 'M', 'L', 'L', 'P', 'P', 'P', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'S', 'M', 'M', '2026-07-01 20:00:53'),
(19, 'P19', 12, 2025, 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'S', 'S', 'P', 'L', 'S', 'S', '2026-07-01 20:00:53'),
(20, 'P20', 12, 2025, 'M', 'M', 'L', 'L', 'M', 'L', 'L', 'P', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'P', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'L', 'L', 'P', 'S', '2026-07-01 20:00:53'),
(21, 'P21', 12, 2025, 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', '2026-07-01 20:00:53'),
(22, 'P22', 12, 2025, 'L', 'L', 'P', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', '2026-07-01 20:00:53'),
(23, 'P23', 12, 2025, 'P', 'S', 'S', 'S', 'L', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'S', 'M', 'L', 'L', 'S', 'S', 'S', 'P', '2026-07-01 20:00:53'),
(24, 'P24', 12, 2025, 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'S', 'L', 'P', 'S', 'S', 'P', 'L', 'P', 'P', 'P', 'S', 'S', 'S', 'L', 'S', 'S', 'S', 'P', 'P', 'P', 'L', 'P', 'P', 'P', '2026-07-01 20:00:53');

-- --------------------------------------------------------

--
-- Table structure for table `histori_shift_backup`
--

CREATE TABLE `histori_shift_backup` (
  `id` int(11) NOT NULL DEFAULT 0,
  `kode_perawat` varchar(11) NOT NULL,
  `bulan` tinyint(4) NOT NULL,
  `tahun` smallint(6) NOT NULL,
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
  `d31` char(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `histori_shift_backup`
--

INSERT INTO `histori_shift_backup` (`id`, `kode_perawat`, `bulan`, `tahun`, `d01`, `d02`, `d03`, `d04`, `d05`, `d06`, `d07`, `d08`, `d09`, `d10`, `d11`, `d12`, `d13`, `d14`, `d15`, `d16`, `d17`, `d18`, `d19`, `d20`, `d21`, `d22`, `d23`, `d24`, `d25`, `d26`, `d27`, `d28`, `d29`, `d30`, `d31`, `created_at`) VALUES
(1, 'P01', 0, 0, 'P', 'P', 'P', 'P', 'L', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'M', 'L', 'P', 'P', '2026-07-01 20:00:53'),
(2, 'P02', 0, 0, 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'L', 'M', 'M', 'L', 'L', 'M', 'M', 'L', 'L', 'P', 'P', '2026-07-01 20:00:53'),
(3, 'P03', 0, 0, 'P', 'P', 'P', 'P', 'P', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'L', 'P', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'L', 'S', 'P', 'P', 'S', '2026-07-01 20:00:53'),
(4, 'P04', 0, 0, 'L', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'L', 'S', 'P', 'P', 'P', 'P', 'P', 'S', 'P', 'P', 'M', 'L', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'S', 'S', 'M', '2026-07-01 20:00:53'),
(5, 'P05', 0, 0, 'S', 'S', 'S', 'S', 'M', 'L', 'L', 'S', 'P', 'P', 'p', 'P', 'P', 'S', 'M', 'L', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'P', 'M', 'M', 'L', '2026-07-01 20:00:53'),
(6, 'P06', 0, 0, 'S', 'M', 'M', 'L', 'L', 'M', 'M', 'L', 'L', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', '2026-07-01 20:00:53'),
(7, 'P07', 0, 0, 'P', 'S', 'S', 'P', 'P', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', '2026-07-01 20:00:53'),
(8, 'P08', 0, 0, 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', '2026-07-01 20:00:53'),
(9, 'P09', 0, 0, 'M', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'P', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'L', '2026-07-01 20:00:53'),
(10, 'P10', 0, 0, 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', '2026-07-01 20:00:53'),
(11, 'P11', 0, 0, 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'P', 'M', 'L', 'M', 'M', 'M', 'L', '2026-07-01 20:00:53'),
(12, 'P12', 0, 0, 'P', 'P', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'M', 'L', 'L', 'L', 'S', 'S', 'S', 'P', 'P', 'P', 'L', 'S', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', '2026-07-01 20:00:53'),
(13, 'P13', 0, 0, 'L', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', '2026-07-01 20:00:53'),
(14, 'P14', 0, 0, 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'P', 'M', 'M', 'M', 'L', 'L', 'L', '2026-07-01 20:00:53'),
(15, 'P15', 0, 0, 'L', 'S', 'S', 'P', 'P', 'L', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', '2026-07-01 20:00:53'),
(16, 'P16', 0, 0, 'P', 'M', 'M', 'L', 'L', 'M', 'L', 'L', 'P', 'P', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', '2026-07-01 20:00:53'),
(17, 'P17', 0, 0, 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'P', 'P', 'L', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', '2026-07-01 20:00:53'),
(18, 'P18', 0, 0, 'M', 'L', 'L', 'P', 'P', 'P', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'S', 'M', 'M', '2026-07-01 20:00:53'),
(19, 'P19', 0, 0, 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'S', 'S', 'P', 'L', 'S', 'S', '2026-07-01 20:00:53'),
(20, 'P20', 0, 0, 'M', 'M', 'L', 'L', 'M', 'L', 'L', 'P', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'P', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'L', 'L', 'P', 'S', '2026-07-01 20:00:53'),
(21, 'P21', 0, 0, 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', '2026-07-01 20:00:53'),
(22, 'P22', 0, 0, 'L', 'L', 'P', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'S', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'P', 'P', 'M', 'M', '2026-07-01 20:00:53'),
(23, 'P23', 0, 0, 'P', 'S', 'S', 'S', 'L', 'P', 'P', 'P', 'M', 'M', 'L', 'L', 'S', 'S', 'S', 'S', 'M', 'M', 'L', 'L', 'P', 'P', 'P', 'S', 'M', 'L', 'L', 'S', 'S', 'S', 'P', '2026-07-01 20:00:53'),
(24, 'P24', 0, 0, 'M', 'M', 'L', 'L', 'P', 'S', 'S', 'S', 'L', 'P', 'S', 'S', 'P', 'L', 'P', 'P', 'P', 'S', 'S', 'S', 'L', 'S', 'S', 'S', 'P', 'P', 'P', 'L', 'P', 'P', 'P', '2026-07-01 20:00:53');

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

--
-- Dumping data for table `jadwal`
--

INSERT INTO `jadwal` (`id_jadwal`, `tanggal`, `kode_perawat`, `kode_shift`, `cost`) VALUES
(145, '2025-12-01', 'P01', 'S1', 5),
(146, '2025-12-01', 'P02', 'S1', 5),
(147, '2025-12-01', 'P03', 'S1', 5),
(148, '2025-12-01', 'P04', 'S1', 5),
(149, '2025-12-01', 'P05', 'S1', 5),
(150, '2025-12-01', 'P06', 'S1', 5),
(151, '2025-12-01', 'P07', 'S1', 5),
(152, '2025-12-01', 'P08', 'S1', 5),
(153, '2025-12-01', 'P09', 'S1', 5),
(154, '2025-12-01', 'P10', 'S1', 5),
(155, '2025-12-01', 'P11', 'S2', 5),
(156, '2025-12-01', 'P12', 'S2', 5),
(157, '2025-12-01', 'P13', 'S2', 5),
(158, '2025-12-01', 'P14', 'S2', 5),
(159, '2025-12-01', 'P15', 'S2', 5),
(160, '2025-12-01', 'P16', 'S3', 5),
(161, '2025-12-01', 'P17', 'S3', 5),
(162, '2025-12-01', 'P18', 'S3', 5),
(163, '2025-12-01', 'P19', 'S3', 5),
(164, '2025-12-01', 'P20', 'S3', 5),
(165, '2025-12-01', 'P21', 'S4', 5),
(166, '2025-12-01', 'P22', 'S4', 5),
(167, '2025-12-01', 'P23', 'S4', 5),
(168, '2025-12-01', 'P24', 'S4', 5),
(169, '2025-12-31', 'P01', 'S1', 1),
(170, '2025-12-31', 'P02', 'S1', 1),
(171, '2025-12-31', 'P03', 'S1', 1),
(172, '2025-12-31', 'P04', 'S2', 1),
(173, '2025-12-31', 'P05', 'S3', 1),
(174, '2025-12-31', 'P06', 'S4', 1),
(175, '2025-12-31', 'P07', 'S3', 1),
(176, '2025-12-31', 'P08', 'S2', 1),
(177, '2025-12-31', 'P09', 'S1', 1),
(178, '2025-12-31', 'P10', 'S1', 1),
(179, '2025-12-31', 'P11', 'S3', 1),
(180, '2025-12-31', 'P12', 'S4', 1),
(181, '2025-12-31', 'P13', 'S2', 1),
(182, '2025-12-31', 'P14', 'S4', 1),
(183, '2025-12-31', 'P15', 'S3', 1),
(184, '2025-12-31', 'P16', 'S4', 1),
(185, '2025-12-31', 'P17', 'S1', 1),
(186, '2025-12-31', 'P18', 'S3', 1),
(187, '2025-12-31', 'P19', 'S2', 1),
(188, '2025-12-31', 'P20', 'S1', 1),
(189, '2025-12-31', 'P21', 'S1', 1),
(190, '2025-12-31', 'P22', 'S1', 5),
(191, '2025-12-31', 'P23', 'S2', 1),
(192, '2025-12-31', 'P24', 'S1', 1);

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

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('Admin','Kepala Ruangan') DEFAULT 'Admin',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `username`, `password`, `role`, `created_at`) VALUES
(1, 'Administrator', 'admin', '$2b$10$deGo9XPT/EEik9njHZp8sOvs/TrffASLt6Aqe51qqExZY5BUCoAyi', 'Admin', '2026-05-30 13:03:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `histori_shift`
--
ALTER TABLE `histori_shift`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uk_histori` (`kode_perawat`,`bulan`,`tahun`),
  ADD UNIQUE KEY `uk_histori_shift` (`kode_perawat`,`bulan`,`tahun`);

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `histori_shift`
--
ALTER TABLE `histori_shift`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `jadwal`
--
ALTER TABLE `jadwal`
  MODIFY `id_jadwal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
