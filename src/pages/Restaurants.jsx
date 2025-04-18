import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
export default function Restaurants() {
  const img1 =
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D';
  const img2 =
    'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D';
  const img3 =
    'https://static1.squarespace.com/static/58586a70e58c6258a14cc79f/5bec43ab4ae2378e0c9ae1f9/60f5f40baa01757630d03e58/1692934553782/andre-davis-SmwMwHMHIV0-unsplash.jpg?format=1500w';

  return (
    <>
      <Header />
      <div className="container py-4 mb-5">
        <h2 className="fw-normal">Restaurants</h2>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img1} className="img-fluid rounded-start" alt="img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">The Golden Spoon</h5>
                <p className="card-text">
                  Experience authentic Italian cuisine in a cozy atmosphere.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Rating 4.5 | Open Now
                  </small>
                </p>
                <Link className="btn btn-primary" to="/restaurants/1">
                  View More{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img2} className="img-fluid rounded-start" alt="img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Spice Junction</h5>
                <p className="card-text">
                  Savor the flavors of India wiht our traditional dishes.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Rating 4.2 | Open Now
                  </small>
                </p>
                <Link className="btn btn-primary" to="/restaurants/2">
                  View More{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img3} className="img-fluid rounded-start" alt="img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Sushi Delight</h5>
                <p className="card-text">
                  Enjoy exquisite Japanese sushi prepared by master chef
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Rating 4.7 | Open Now
                  </small>
                </p>
                <Link className="btn btn-primary" to="/restaurants/3">
                  View More{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
