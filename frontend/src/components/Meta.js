import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to our Coffe Shop 🤗',
  description: 'We sell the best coffee-related products',
  keywords: 'coffee, buy coffee, coffee machine, espresso, espresso machine',
};

export default Meta;
