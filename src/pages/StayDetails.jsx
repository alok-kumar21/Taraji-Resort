import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const StayDetails = () => {
  const stayId = useParams();
  const stays = [
    {
      id: 1,
      title: 'Luxurious Taj Mahal View Aparment',
      type: 'Hotel',
      location: 'Mumbai',
      Rating: 4.9,
      description:
        'Wake up to breataking view of the Taj Mahal from this luxurious aparment.Explore the rich history and beauty of the iconic monument right from your window.',

      amenities: [
        {
          kitchen: true,
          wifi: true,
          security24x7: true,
        },
      ],
      price: '$650/night',
    },
    {
      id: 2,
      title: 'Cozy Cottage Retreat',
      type: 'Cottage',
      location: 'Mountain View,CA',
      Rating: 4.8,
      description: 'Escape to a charming cottage nestled in the mountains',

      amenities: [
        {
          kitchen: true,
          wifi: true,
          parking: true,
        },
      ],
      price: '$150/night',
    },
    {
      id: 3,
      title: 'Seaside Villa with Private beach Access',
      type: 'Beach',
      location: 'Gao',
      Rating: 4.3,
      description:
        'Indulge in luxury with this stunning seaside villa.Relax on pristine beaches, takes a dip in the private pool, and soak up the sun in this exclusive coastal retreat.',

      amenities: [
        {
          kitchen: true,
          wifi: true,
          parking: true,
        },
      ],
      price: '$350/night',
    },
    {
      id: 4,
      title: 'Modern Loft in the city',
      type: 'Apartment',
      location: 'Mountain View,CA',
      Rating: 4.3,
      description:
        'Experience Urban living at its finest with this modern loft.Conveniently located in the city Center it. offer style, comfort, and easy access to dining and entertainment options.',

      amenities: [
        {
          kitchen: true,
          wifi: true,
          parking: true,
        },
      ],
      price: '$350/night',
    },
  ];

  const stayData = stays.find((stay) => stay.id == stayId.stayId);

  console.log(stayData);
  return (
    <>
      <Header />
      <main>
        <div className="container py-4">
          <h1 className="fw-normal">{stayData.title}</h1>
          <p>Type: {stayData.type}</p>
          <p>Location: {stayData.location}</p>
          <p>Rating: {stayData.Rating}</p>
          <p>{stayData.description}</p>
          <hr />
          <h3>Amenities</h3>
          {stayData.amenities.map((facility) => (
            <div>
              <ul>
                <li>{facility.kitchen === true ? 'Kitchen' : 'No kitchen'}</li>
                <li>{facility.wifi === true ? 'WIFI' : 'No WIFI'}</li>
                <li>
                  {facility.security24x7 === true
                    ? 'Security 24 x 7'
                    : facility.parking
                    ? 'Parking'
                    : 'No Parking'}
                </li>
              </ul>
            </div>
          ))}
          <p>Price: {stayData.price}</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StayDetails;
