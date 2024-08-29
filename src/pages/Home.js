import { useEffect, useState } from 'react';

import { Spinner } from '../components';

import { HomeScreen } from '../sections';

const Home = ({ cities, pages }) => {
  const [locations, setLocations] = useState();

  useEffect(() => {
    if ((cities, pages)) {
      let available_locations = [];

      pages.forEach((page) => {
        const citiesList = cities.map((city) => {
          if (page.categories.includes(city.id)) return city;

          return false;
        });

        available_locations = [...citiesList.filter((el) => el !== false)];
      });

      setLocations(available_locations);
    }
  }, [cities, pages]);

  if (!locations) return <Spinner />;

  return <HomeScreen locations={locations} />;
};

export default Home;
