import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/BookingForm.css";

export default function BookingPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [price, setPrice] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  // Daftar harga tiket (contoh)
  const ticketPrices = {
    "Jakarta-Surabaya": 750000,
    "Jakarta-Bali": 1200000,
    "Surabaya-Bali": 850000,
    "Malang-Surabaya": 300000,
  };

  // Fungsi untuk menghitung harga tiket
  const calculatePrice = () => {
    const route = `${from}-${to}`;
    if (ticketPrices[route]) {
      setPrice(ticketPrices[route] * passengers);
    } else {
      setPrice(null); // Jika rute tidak ditemukan
    }
  };

  // Fungsi untuk menampilkan notifikasi saat pemesanan berhasil
  const handleBooking = () => {
    if (!from || !to || !passengers || !price) {
      alert("Mohon isi semua data dengan benar!");
      return;
    }
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h2 className="booking-title">Pesan Tiket Pesawat</h2>

        {/* Kota Asal */}
        <div className="input-group">
          <label>Dari:</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="">Pilih Kota Asal</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Surabaya">Surabaya</option>
            <option value="Bali">Bali</option>
            <option value="Malang">Malang</option>
          </select>
        </div>

        {/* Kota Tujuan */}
        <div className="input-group">
          <label>Ke:</label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="">Pilih Kota Tujuan</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Surabaya">Surabaya</option>
            <option value="Bali">Bali</option>
            <option value="Malang">Malang</option>
          </select>
        </div>

        {/* Jumlah Penumpang */}
        <div className="input-group">
          <label>Penumpang:</label>
          <input
            type="number"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />
        </div>

        {/* Tombol Hitung Harga */}
        <button className="calculate-button" onClick={calculatePrice}>
          Hitung Harga
        </button>

        {/* Menampilkan Harga */}
        {price !== null && (
          <div className="price-box">
            <p>Total Harga: <strong>Rp {price.toLocaleString()}</strong></p>
          </div>
        )}

        {/* Tombol Pemesanan */}
        <button className="booking-button" onClick={handleBooking}>
          Pesan Tiket
        </button>

        <Link to="/" className="back-link">Kembali ke Beranda</Link>
      </div>

      {/* Notifikasi Pemesanan Berhasil */}
      {showNotification && (
        <div className="notification">
          <p>✅ Tiket berhasil dipesan! Total: Rp {price.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
