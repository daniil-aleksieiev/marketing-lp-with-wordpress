import { Helmet } from 'react-helmet';

const Seo = ({ data, location }) => (
  <Helmet>
    <title>
      {location} | {data.page_title}
    </title>
    <meta name="description" content={data.page_description} />
  </Helmet>
);

export default Seo;
