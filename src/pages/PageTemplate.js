import { Layout, Seo } from '../components';

const PageTemplate = ({ location, data, phone, areas }) => (
  <Layout phone={phone} pageTitle={data.title}>
    <Seo data={data.acf.seo} location={location.title} />
  </Layout>
);

export default PageTemplate;
