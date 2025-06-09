import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// styles
import './styles/null-styles.css'
import './styles/root-styles.css'
import './styles/main.css'
import './styles/head.css'
import './styles/aboutMe.css'
import './styles/gallery.css'
import './styles/price.css'
import './styles/bioText.css'
import './styles/contacts.css'
import './styles/feedbackForm.css'
import './styles/footer.css'

// blocks
import Head from './blocks-jsx/head/head.jsx'
import AboutMe from './blocks-jsx/about-me/aboutMe.jsx'
import Gallery from './blocks-jsx/gallery/Gallery.jsx'
import Price from './blocks-jsx/price/Price.jsx'
import Contacts from './blocks-jsx/contacts/Contacts.jsx'
import Form from './blocks-jsx/feedbackForm/Form.jsx'
import Footer from './blocks-jsx/footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <Head/>
    </header>
   

    <main>
      <AboutMe/>

      <div className='quote-block center-column'>
        <img src="../../media/galaxy-bg-img.webp" alt="galaxy"/>
        <div className='quote'>
          <p>«Фотография — <span>это искусство</span>
          <br/><span>остановить</span> <span>время.»</span></p>

          <p>Орхен Памук</p>
        </div>
      </div>

      <Gallery/>
      <Price/>
      <Contacts/>
      <Form/>
    </main>

    <footer>
      <Footer/>
    </footer>  
  </StrictMode>,
)
