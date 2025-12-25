//AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" className="mt-20 mb-20">
      <div className="flex items-center justify-center">
        <img 
          src="/img/profile-photo.jpeg" 
          alt="Noirtier Cano Profile"
          className="h-80 w-80 mt-3 rounded-full object-cover filter grayscale"
        />
      </div>

      <div id="info" className="space-y-2 max-w-2xl mx-auto text-center ">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 font-bold text-4xl mt-40">
          Hola, soy Noirtier Cano
        </h1>
        <p className="text-2xl">
          En todo lo que tenga que ver con tecnología, ahí estoy yo. Apasionado por el mundo del
          código, disfruto transformar ideas en soluciones reales.
        </p>

        <div className="flex justify-center space-x-4 mt-10">

          <a href="/Noirtier_Cano_CV_Software_Developer.pdf" download="CV_Noirtier_Cano_Dev"
            className="flex items-center space-x-2 gap2 border border-blue-600 text-blue-500 hover:bg-gradient-to-r cursor-pointer from-blue-600 to-blue-800 transition duration-300 ease-in-out hover:text-white rounded-xl text-sm p-2 font-semibold mt-5">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" /></svg>
            Descargar CV

          </a>

          <a
            href="https://github.com/noirtiercano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-blue-600 text-blue-500 hover:bg-gradient-to-r from-blue-600 to-blue-800 transition duration-300 ease-in-out hover:text-white rounded-xl text-sm px-3 py-2 font-semibold mt-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /></svg>
          </a>

          <a
            href=" https://co.linkedin.com/in/noirtier-cano-50756333b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-blue-600 text-blue-500 hover:bg-gradient-to-r from-blue-600 to-blue-800 transition duration-300 ease-in-out hover:text-white rounded-xl text-sm px-3 py-2 font-semibold mt-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
          </a>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;