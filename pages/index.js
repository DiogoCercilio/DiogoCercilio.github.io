import Head from 'next/head'
import App from '../components/app/App'

import '../components/_global-styles/imports.scss'

function IndexPage() {
  return (
    <>
    <Head>
        <meta charset="utf-8" />
        {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />        
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link href="http://fonts.googleapis.com/css?family=Quicksand|Fjalla+One|Caveat" rel="stylesheet" type="text/css" />
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-159564058-1"></script>
        <script>
          {(function() {
            if (!process.browser) return;
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-159564058-1');              
          })()}
        </script> 
        <title>Diogo Cercílio - Brazilian Fullstack developer</title>
    </Head>
    <App/>
    </>
  )
}

export default IndexPage