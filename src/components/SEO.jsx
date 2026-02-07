import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords,
  path = '',
  type = 'website',
  image = '/logo.png'
}) => {
  const baseUrl = 'https://real-computer-and-stationary.vercel.app';
  const fullUrl = `${baseUrl}${path}`;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  const fullTitle = title 
    ? `${title} | Real Computer & Stationary` 
    : 'Real Computer & Stationary | MP Online Services, PAN Card, Stationary in Sidhi, MP';

  const defaultDescription = 'Your trusted partner in Sidhi, MP for MP Online government services, PAN card applications, land documents, college forms, AEPS money withdrawal & quality stationary products.';
  const metaDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={fullImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={fullImage} />
    </Helmet>
  );
};

export default SEO;
