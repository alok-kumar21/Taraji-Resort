import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const img1 =
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D';
  const img2 =
    'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D';
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="fw-normal">Featured Restaurants</h1>
        <div className="mt-3 ">
          <img src={img1} alt="img" className="img-fluid rounded" />
          <h2 className="mt-2">The Golden Spoon</h2>
          <p>Italian | Rating 4.5</p>
          <p>123 Main Street, Anytwon, USA</p>
        </div>
        <div className="mt-3 ">
          <img src={img2} alt="img" className="img-fluid rounded" />
          <h2 className="mt-2">Spice Junction</h2>
          <p>Indian | Rating 4.2</p>
          <p>456 Elm Street, Anytwon, India</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
