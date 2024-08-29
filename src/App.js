import { useState, useEffect, Fragment } from 'react';
import useFetch from 'react-fetch-hook';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Spinner } from './components';

import PageTemplate from './pages/PageTemplate';

const App = () => {
  const categories = useFetch(`${process.env.REACT_APP_API_URL}/categories?per_page=100`);
  const pages = useFetch(`${process.env.REACT_APP_API_URL}/posts?per_page=100`);

  const [locations, setLocations] = useState();

  // Define locations
  useEffect(() => {
    if (!categories.isLoading && !pages.isLoading) {
      const locationsData = categories.data.map((el) => ({
        phone: el.acf.phone_number,
        areas: el.acf.service_areas,
        slug: el.slug,
        title: el.name,
        pages: pages.data
          ?.map((page) => {
            if (page.categories.includes(el.id)) {
              const pageData = {
                title: page.title.rendered,
                acf: page.acf,
                content: page.content.rendered,
                slug: page.slug,
              };

              return pageData;
            }

            return false;
          })
          .filter((page) => page !== undefined),
      }));

      setLocations(locationsData);
    }
  }, [categories, pages]);

  if (!locations) return <Spinner />;

  return (
    <Routes>
      <Route path="/" element={<div>HOME</div>} />

      <Route path="*" element={<Navigate replace to="/404" />} />

      {locations.map((location) =>
        location.pages.map((page) => (
          <Fragment>
            <Route
              path={`/${location.slug}/${page.slug}`}
              element={
                <PageTemplate
                  location={{
                    title: location.title,
                    slug: location.slug, // TODO: create a page with all services for each location
                  }}
                  data={page}
                  phone={location.phone}
                  areas={location.areas}
                />
              }
            />
            <Route
              path={`/${location.slug}`}
              element={<Navigate replace to={`/${location.slug}/appliance-repair`} />}
            />
          </Fragment>
        )),
      )}
    </Routes>
  );
};

export default App;
