import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Stays() {
  const img1 =
    'https://images.trvl-media.com/lodging/20000000/19460000/19458500/19458493/8cf0d468.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill';
  const img2 =
    'https://images.squarespace-cdn.com/content/v1/52fce719e4b09783fb186eee/1591708955333-ES5N1GEOUAXQBTM1G4OQ/The+Omnia+Hotel%2C+Zermatt';
  const img3 =
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/615942779.jpg?k=27d7e5ff87b5b61a090a71009ced4ee4263c154911cae361a49c115c9b5cc743&o=&hp=1';
  const img4 =
    'https://ownwoodenhouse.com/img/misc/202005200604474.jpg?ver=158994388931&w=1100';
  return (
    <>
      <Header />
      <main>
        <div className="container py-4 mb-5">
          <h2 className="fw-normal">Featured Stays</h2>
          <div className="card mb-3 mt-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={img1}
                  className="img-fluid rounded-start"
                  alt="img1"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Luxurious Taj Mahal View Aparment
                  </h5>
                  <p className="card-text">
                    Wake up to breataking view of the Taj Mahal from this
                    luxurious aparment.Explore the rich history and beauty of
                    the iconic monument right from your window.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 min ago
                    </small>
                  </p>
                  <Link className="btn btn-primary" to="/stays/1">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 mt-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={img2}
                  className="img-fluid rounded-start"
                  alt="img2"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Cozy Retreat in the Mountains</h5>
                  <p className="card-text">
                    Escape to nature with this cozy mountain retreat. Enjoy
                    transquility and stunning views while being surrounede by
                    lush forests and fresh mountains air.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 10 min ago
                    </small>
                  </p>
                  <Link className="btn btn-primary" to="/stays/2">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 mt-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={img3}
                  className="img-fluid rounded-start"
                  alt="img1"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Seaside Villa with Private beach Access
                  </h5>
                  <p className="card-text">
                    Indulge in luxury with this stunning seaside villa.Relax on
                    pristine beaches, takes a dip in the private pool, and soak
                    up the sun in this exclusive coastal retreat.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 15 min ago
                    </small>
                  </p>
                  <Link className="btn btn-primary" to="/stays/3">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 mt-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={img4}
                  className="img-fluid rounded-start"
                  alt="img1"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Modern Loft in the city Center</h5>
                  <p className="card-text">
                    Experience Urban living at its finest with this modern
                    loft.Conveniently located in the city Center it. offer
                    style, comfort, and easy access to dining and entertainment
                    options.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 20 min ago
                    </small>
                  </p>
                  <Link className="btn btn-primary" to="/stays/4">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
