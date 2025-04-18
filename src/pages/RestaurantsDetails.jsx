import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RestaurantsDetails = () => {
  const restaurantsId = useParams();

  const restaurants = [
    {
      id: 1,
      title: 'The Golden Spoon',
      cuisine: 'Italian',
      location: '123 Main Street, Cityville',
      rating: 4.5,
      description: 'Experience authentic Italian cuisine in a cozy atmosphere.',
      menu: [
        {
          dish: 'Spaghetti Carbonara',
          price: 15,
        },
        {
          dish: 'Margherita Pizza',
          price: 12,
        },
        {
          dish: 'Tiramisu',
          price: 9,
        },
      ],
    },
    {
      id: 2,
      title: 'Spice Junction',
      cuisine: 'Indian',
      location: '456 Elm Street, Townsville',
      rating: 4.2,
      description: 'Savor the flavors of India wiht our traditional dishes.',
      menu: [
        {
          dish: 'Chicken Tikka Masala',
          price: 14,
        },
        {
          dish: 'Vegetable Biryani',
          price: 12,
        },
        {
          dish: 'Gulab Jamun',
          price: 6,
        },
      ],
    },
    {
      id: 3,
      title: 'Sushi Delight',
      cuisine: 'Japanese',
      location: '789 Oak Avenue, Villageland',
      rating: 4.7,
      description: 'Enjoy exquisite Japanese sushi prepared by master chef.',
      menu: [
        {
          dish: 'California Roll',
          price: 10,
        },
        {
          dish: 'Sashimi Platter',
          price: 18,
        },
        {
          dish: 'Green Tea Ice Cream',
          price: 5,
        },
      ],
    },
  ];

  const restaurantData = restaurants.find(
    (hotel) => hotel.id == restaurantsId.restaurantsId
  );

  return (
    <>
      <Header />
      <main>
        <div className="container py-4 ">
          <h1 className="fw-normal">{restaurantData.title}</h1>
          <p>Cuisine: {restaurantData.cuisine}</p>
          <p>Location: {restaurantData.location}</p>
          <p>Rating: {restaurantData.rating}</p>
          <p>{restaurantData.description}</p>
          <div className=" py-3">
            <h2>Menu</h2>
            <div className="row">
              {restaurantData.menu.map((item) => (
                <div className="col-md-4 ">
                  <div className="card p-3 mt-3">
                    <h5>{item.dish}</h5>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default RestaurantsDetails;
