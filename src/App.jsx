import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Stack from './components/Stack';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('sobre-mi');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <Navbar 
        toggleTheme={toggleTheme} 
        theme={theme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <div className="mx-10 pt-20">
        <AboutMe />
        
        <main className="flex flex-col justify-center items-center space-y-5">
          <div id="sobre-mi" className="bg-gradient-to-r from-blue-600 to-blue-800 max-w-7xl rounded-xl p-10 text-center space-y-5 text-white"
            data-aos="fade-up"
            data-aos-duration="1200">
            <h1 className="text-2xl font-semibold">SOBRE MI</h1>
            <p className="text-xl text-justify">
              Estudiante de Análisis y Desarrollo de Software, con conocimientos en
              desarrollo web y base de datos. Siempre con interés de
              aprender cosas nuevas, trabajar en equipo y crear proyectos que generen impacto. Con el objetivo de
              seguir creciendo como desarrollador y aportar soluciones creativas en el mundo digital.
            </p>
          </div>

          <Projects />
          <Stack />
          <ContactForm />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;