import { Layout, Seo } from '../components';

import { Hero } from '../sections';

const PageTemplate = ({ location, data, phone, areas }) => (
  <Layout phone={phone} pageTitle={data.title}>
    <Seo data={data.acf.seo} location={location.title} />
    {console.log(data)}
    <Hero title={data.title} image={data.acf.general.images.main_image} location={location.title} />
  </Layout>
);

export default PageTemplate;
