import Header from "../components/Header"
import Footer from '../components/Footer';
export default function About() {
  return (
    <>
    <Header/>
    <div className="container py-4">
      <h1 className="fs-1 fw-normal">About Our Restaurants</h1>
      <p className="text">
        Welcome to our restaurant guide! We are passionate about exploring and
        sharing culinary experiences from around the world. Our mission is to
        connect food lovers with the best dining options and unforgettable
        flavors.
      </p>
      <p>
        Our team of food enthusiasts, chefs, and reviewers collaborates to
        curate a diverse collection of restaurant recommendations, highlighting
        the richness of global cuisines and the creativity of chefs.
      </p>
      <p>
        Join us as we embark on a gastronomic journey, discovering hidden gems,
        iconic eateries, and innovative culinary trends. Whether you're a
        seasoned foodie or an adventurous diner, we invite you to explore,
        indulge, and savor the flavors of the world with us. Thank you for being
        part of our culinary community!
      </p>
    </div>
    <Footer/>
    </>
  );
}
