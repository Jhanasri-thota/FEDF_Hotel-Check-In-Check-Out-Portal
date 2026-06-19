import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>🏨 Hotel Check-In & Check-Out Portal</h1>

      <h2>Welcome Guest</h2>

      <div className="services">
        <div className="service-card">
          <h3>Check-In</h3>
          <p>Register and book your room.</p>
        </div>

        <div className="service-card">
          <h3>Room Assignment</h3>
          <p>View allocated room details.</p>
        </div>

        <div className="service-card">
          <h3>Digital Key</h3>
          <p>Access your room securely.</p>
        </div>

        <div className="service-card">
          <h3>Invoice</h3>
          <p>Generate billing information.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;