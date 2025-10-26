import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import About from './component/About';
import Skills from './component/Skills';
import Experience from './component/Experience';
import ProjectCard from './component/ProjectCard';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import WhatsAppButton from './component/whatsapp';

function App() {
  return (
    <>
      <WhatsAppButton />
      <Header/>
      <About />
      <Skills />
      <Experience />
      <ProjectCard  />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
