import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Font */}
          <link rel="manifest" href="/manifest.json"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
          {/* font aswm - icons */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
          {/* meta tags */}
          {/* Primary Meta Tags */}
          <meta name="title" content="Lipa" />
          <meta name="description" content="You discover a unique travel destination, cultures, cuisine, new people, new movies & music, a wide array of books and literature, and of course, new career opportunities in languages" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lipa.vercel.app/" />
          <meta property="og:title" content="Lipa" />
          <meta property="og:description" content="You discover a unique travel destination, cultures, cuisine, new people, new movies & music, a wide array of books and literature, and of course, new career opportunities in languages" />
          <meta property="og:image" content="https://imgur.com/4ibSQfC.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://lipa.vercel.app/" />
          <meta property="twitter:title" content="Lipa" />
          <meta property="twitter:description" content="You discover a unique travel destination, cultures, cuisine, new people, new movies & music, a wide array of books and literature, and of course, new career opportunities in languages" />
          <meta property="twitter:image" content="https://imgur.com/4ibSQfC.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument