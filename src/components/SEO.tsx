import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Academy Lash Master - Corsi Professionali Extension Ciglia",
  description = "Academy Lash Master offre corsi professionali di extension ciglia certificati. Impara le tecniche più avanzate con Ana Maria, esperta del settore. Formazione completa per diventare professionista.",
  keywords = [
    "corsi extension ciglia",
    "formazione extension ciglia",
    "corso extension ciglia Milano",
    "Academy Lash Master",
    "Ana Maria extension ciglia",
    "corso base extension ciglia",
    "corso avanzato extension ciglia",
    "master class extension ciglia",
    "certificazione extension ciglia",
    "tecnica extension ciglia",
    "volume ciglia",
    "mega volume ciglia",
    "beauty academy",
    "corso estetista",
    "formazione beauty"
  ],
  canonicalUrl,
  ogImage = "/soggetto/corsi.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noIndex = false
}) => {
  const fullTitle = title.includes("Academy Lash Master") ? title : `${title} | Academy Lash Master`;
  const keywordsString = keywords.join(", ");
  const siteUrl = "https://academylashmaster.com";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content="Academy Lash Master" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Academy Lash Master" />
      <meta property="og:locale" content="it_IT" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
