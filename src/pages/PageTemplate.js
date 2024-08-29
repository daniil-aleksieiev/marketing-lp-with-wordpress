import { Layout, Seo, Container } from '../components';

const PageTemplate = ({ location, data, phone, areas }) => (
  <Layout phone={phone} pageTitle={data.title}>
    <Seo data={data.acf.seo} location={location.title} />
    {console.log(data)}
    <Container>Main</Container>
  </Layout>
);

export default PageTemplate;
