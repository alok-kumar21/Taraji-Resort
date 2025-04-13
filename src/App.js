import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const img1 =
    "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg";
  const img2 =
    "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D";
  return (
    <main>
      <div className="container py-4">
        <h1 className="fs-1 fw-normal mb-3">Latest Listings</h1>
        <div>
          <img src={img1} alt="img" className="img-fluid rounded" />
          <h2 className="mt-3">Cozy Loft in the City Center</h2>
          <p>
            <small>Entire loft . 2 guests . 1 bedroom . 1 bed . 1 bath</small>
          </p>
          <p>
            Enjoy your stay in this stylish loft aprtment located in the heart
            of the city. Close to restaurants, shops, and attractions, it's the
            perfect base for exploring the city.
          </p>
          <p>$120 per night</p>
        </div>
        <div className="mt-4">
          <img src={img2} alt="img" className="img-fluid rounded" />
          <h2 className="mt-3">Beachfront Villa with Stunning Views</h2>
          <p>
            <small>Entire Villa . 6 guests . 3 bedroom . 3 bed . 2 baths</small>
          </p>
          <p>
            Relax and unwind in this beautiful beachfront villa.Wake up to
            panoramic ocean views. take a dip in the private pool, and enjoy
            seamless indoor-outdoor living.
          </p>
          <p>$300 per night</p>
        </div>
      </div>
    </main>
  );
}
