import React, { useState, useEffect } from 'react';

const Navbar = ({ toggleTheme, theme, activeSection, setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], div[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) observer.unobserve(section);
      });
    };
  }, [setActiveSection]);

  const isActive = (sectionId) => activeSection === sectionId;

  return (
    <header
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
    >
      <nav className="w-fit px-4 inline-flex mx-auto h-10 bg-white/80 dark:bg-gray-800/80 shadow-lg ring-1 backdrop-blur-sm ring-black/5 dark:ring-white/10 isolate rounded-xl">
        <div className="flex gap-10">

          <a
            href="#about-me"
            className="w-10 h-10 items-center justify-center flex group"
            title="Sobre mi"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 transition-colors ${isActive('sobre-mi')
                ? 'text-blue-600'
                : 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white'
                }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </a>

          <a
            href="#projects"
            className="w-10 h-10 items-center justify-center flex group"
            title="Projects"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 transition-colors ${isActive('projects')
                ? 'text-blue-600'
                : 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white'
                }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
          </a>

          <a
            href="#stack"
            className="w-10 h-10 items-center justify-center flex group"
            title="Stack"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className={`w-6 h-6 transition-colors ${isActive('stack')
              ? 'text-blue-600'
              : 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white'
              }`}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 4l-8 4l8 4l8 -4l-8 -4" /><path d="M4 12l8 4l8 -4" /><path d="M4 16l8 4l8 -4" /></svg>
          </a>

          <a
            href="#contacto"
            className="w-10 h-10 items-center justify-center flex group"
            title="Contacto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 transition-colors ${isActive('contacto')
                ? 'text-blue-600'
                : 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white'
                }`}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </a>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 items-center justify-center flex group"
            title="Cambiar tema"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white " //duration-300 transform group-hover:rotate-180 transition-transform ease-in-out
            >
              {theme === 'dark' ? (

                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              ) : (

                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;