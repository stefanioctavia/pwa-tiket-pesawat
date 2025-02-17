import { Link } from "react-router-dom";
import "../styles/HomePage.css"; // Pastikan path ini benar

export default function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Selamat Datang di Pemesanan Tiket Pesawat</h1>
      <p className="homepage-description">
        Temukan penerbangan terbaik dengan harga terbaik. Klik tombol di bawah untuk memesan tiket Anda.
      </p>
      <Link to="/booking">
        <button className="booking-button">Pesan Tiket</button>
      </Link>
    </div>
  );
}
