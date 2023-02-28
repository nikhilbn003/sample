import '../styles/globals.css'
import { ProductsContextProvider } from './components/ProductsContext';
// import type { AppProps } from 'next/app'
// import  productProvider from './components/prodContext'

 function App({ Component, pageProps }) {
  return ( 
    <>
    <ProductsContextProvider>
       <Component {...pageProps} />
    </ProductsContextProvider>
      
    
    </>
  );
  
}

export default App