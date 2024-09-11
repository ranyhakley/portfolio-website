"use client";
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [activeSection, setActiveSection] = useState<string>(''); // State to track the current active section

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Select all section elements

    const options = {
      root: null, // This refers to the viewport
      rootMargin: '0px',
      threshold: 0.6, // 60% of the section should be visible before activating the nav
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the ID of the currently visible section
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section); // Start observing each section
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section); // Cleanup observer on unmount
      });
    };
  }, []);

  return (
    <section id="hero">
      <div>
        <span className="text-4xl font-extrabold textColorFade inline relative">
          <a href="/">Rany Hakley Hong</a>
        </span>
      </div>
      <div className="pt-4">
        <span className="text-xl font-bold textColorFade inline relative">
          Junior Software Developer
        </span>
      </div>
      <div className="pt-8">
        <div>
          <span className="text-l textColorFade inline relative">
            Currently specializing in Front-End Development,
          </span>
        </div>
        <div>
          <span className="text-l textColorFade inline relative">
            looking to broaden my horizons.
          </span>
        </div>
      </div>
      <div>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a
                className={`group flex items-center py-3 ${
                  activeSection === 'about' ? 'text-neutral-50' : 'text-neutral-500'
                }`}
                href="#about"
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 transition-all ${
                    activeSection === 'about' ? 'w-16 bg-neutral-50' : 'bg-neutral-600'
                  } group-hover:w-16 group-hover:bg-neutral-50`}
                />
                <span className="nav-text text-s font-bold uppercase tracking-widest">
                  About
                </span>
              </a>
            </li>
            <li>
              <a
                className={`group flex items-center py-3 ${
                  activeSection === 'projects' ? 'text-neutral-50' : 'text-neutral-500'
                }`}
                href="#projects"
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 transition-all ${
                    activeSection === 'projects' ? 'w-16 bg-neutral-50' : 'bg-neutral-600'
                  } group-hover:w-16 group-hover:bg-neutral-50`}
                />
                <span className="nav-text text-s font-bold uppercase tracking-widest">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a
                className={`group flex items-center py-3 ${
                  activeSection === 'contact' ? 'text-neutral-50' : 'text-neutral-500'
                }`}
                href="#contact"
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 transition-all ${
                    activeSection === 'contact' ? 'w-16 bg-neutral-50' : 'bg-neutral-600'
                  } group-hover:w-16 group-hover:bg-neutral-50`}
                />
                <span className="nav-text text-s font-bold uppercase tracking-widest">
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
          <div>
              <ul className="ml-1 mr-24 mt-8 flex">
                  <li className="mr-5 text-xs shrink-0">
                      <a className="block hover:text-neutral-50 text-neutral-400" href="https://github.com/midoriiiiiiiii" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                          <div className="flex flex-col items-center justify-center">
                              <span className="sr-only">GitHub</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                  </path>
                              </svg>
                              Github
                          </div>
                      </a>
                  </li>
                  <li className="mr-5 text-xs shrink-0">
                      <a className="block hover:text-neutral-50 text-neutral-400" href="https://www.linkedin.com/in/ranyhakleyh/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                          <div className="flex flex-col items-center justify-center">
                              <span className="sr-only">LinkedIn</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
                                  </path>
                              </svg>
                              LinkedIn
                          </div>
                      </a>
                  </li>
                  <li className="mr-5 text-xs shrink-0">
                      <a className="block hover:text-neutral-50 text-neutral-400" href="#contact" title="Gmail">
                          <div className="flex flex-col items-center justify-center">
                              <span className="sr-only">Gmail</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 60" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                  <path d="M55,10H9c-2.209,0-4,1.791-4,4v34c0,2.209,1.791,4,4,4h46c2.209,0,4-1.791,4-4V14C59,11.791,57.209,10,55,10z M55,45.738 C54.954,47,53.901,48,52.618,48H49.5L51,21L32,33L13,22l1.5,26h-3.118C10.099,48,9.046,47,9,45.738V16.289 c0-1.25,1.03-2.263,2.3-2.263h1.2L32,29l19.5-14.974h1.2c1.27,0,2.3,1.013,2.3,2.263V45.738z"></path>
                              </svg>
                              Gmail
                          </div>

                      </a>
                  </li>
                  <li className="mr-5 text-xs shrink-0">
                      <a className="block hover:text-neutral-50 text-neutral-400" href="/RanyHakleyHongResume.pdf" download title="Resume">
                          <div className="flex flex-col items-center justify-center">
                              <span className="sr-only">Resume</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 48" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                  <path d="M 43.988281 23.542969 C 43.75 17.6875 38.910156 13 33 13 C 31.980469 13 31.003906 13.132813 30.035156 13.40625 C 27.796875 10.054688 24.019531 8 20 8 C 13.582031 8 8.324219 13.0625 8.015625 19.40625 C 3.324219 20.695313 0 25.027344 0 30 C 0 36.066406 4.933594 41 11 41 L 41 41 C 45.964844 41 50 36.964844 50 32 C 50 28.167969 47.515625 24.734375 43.988281 23.542969 Z M 25 35.414063 L 18.292969 28.707031 L 19.707031 27.292969 L 24 31.585938 L 24 20 L 26 20 L 26 31.585938 L 30.292969 27.292969 L 31.707031 28.707031 Z"></path>
                              </svg>
                              Resume
                          </div>
                      </a>
                  </li>
              </ul>
          </div>
    </section>
  );
};

export default Hero;