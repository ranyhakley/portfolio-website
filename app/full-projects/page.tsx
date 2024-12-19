"use client";
import React, { useEffect, useState } from 'react';

interface GradientPosition {
  x: string;
  y: string;
}

const Archive: React.FC = () => {
  // State for storing the gradient position
  const [gradientPosition, setGradientPosition] = useState<GradientPosition>({ x: '50%', y: '50%' });

  useEffect(() => {
    // Handler for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = ((clientX / innerWidth) * 100) + '%';
      const y = ((clientY / innerHeight) * 100) + '%';
      setGradientPosition({ x, y });
    };

    // Attach event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="m-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(500px at ${gradientPosition.x} ${gradientPosition.y}, rgba(100, 100, 100, 0.3), rgba(87, 87, 87, 0.1), transparent 80%)`
        }} />
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
      </div>
      <div> 
        <a className="group mb-2 inline-flex items-center font-semibold leading-tight text-neutral-300 group-hover:text-white group-hover:bg-white" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
            <path d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z">
            </path>
          </svg>
          Go Back
        </a>
      </div>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-lg font-bold uppercase tracking-widest text-neutral-50 lg:sr-only">
          All Projects
        </h2>
      </div>
      <div className="hidden lg:block sticky top-0 z-20 -mx-6 mb-10 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-lg font-bold uppercase tracking-widest text-neutral-50">
          All Projects
        </h2>
      </div>
      <ul className="group/list">
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
            </div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a className="inline-flex items-baseline font-medium leading-tight text-neutral-300 hover:text-white focus-visible:text-white group/link text-base" href="https://github.com/midoriiiiiiiii/custom-app" target="_blank" rel="noreferrer noopener" aria-label="Custom App (opens in a new tab)">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>Custom E-commerce Web<span> </span>
                    <span className="inline-block">App
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                        <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z">
                        </path>
                      </svg>
                    </span>
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Full-stack e-commerce website with user registration, user authentication, content visibility, multi-page-application.
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">VueJS</div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">Bootstrap</div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">Firebase RTDB</div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">Vercel</div>
                </li>
              </ul>
            </div>
            <img alt="Custom app homepage" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 hover:opacity-0" src="/ecommerce.png" />
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
            </div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a className="inline-flex items-baseline font-medium leading-tight text-neutral-300 hover:text-white focus-visible:text-white group/link text-base" href="https://github.com/ranyhakley/custom-app" target="_blank" rel="noreferrer noopener" aria-label="ai mtvrp (opens in a new tab)">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>AI MTVRP Web<span> </span>
                    <span className="inline-block">App
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                        <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z">
                        </path>
                      </svg>
                    </span>
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Using Artificial Intelligence and Machine Learning to solve the common but elevated Traveling Salesman Problem aka Multi-trip Vehicle Routing Problem.
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">Python</div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">Streamlit</div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">VROOM API</div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">Panda</div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">Folium</div>
                </li>
              </ul>
            </div>
            <img alt="AI MTVRP homepage" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 hover:opacity-0" src="/intelligentroute.png" />
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
            </div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a className="inline-flex items-baseline font-medium leading-tight text-neutral-300 hover:text-white focus-visible:text-white group/link text-base" href="https://housing-price-prediction-ten.vercel.app/" target="_blank" rel="noreferrer noopener" aria-label="Spotify Profile (opens in a new tab)">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>Housing Price Prediction Web<span> </span>
                    <span className="inline-block">App
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                        <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z">
                        </path>
                      </svg>
                    </span>
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Utilizing multiple machine learning algorithm to predict housing price in melbourne area. Built with next.js and deployed on Vercel.
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">ReactJS</div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">Panda</div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">Matplotlib</div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300 ">scikit-learn</div>
                </li>
              </ul>
            </div>
            <img alt="housing price prediction web app homepage" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 hover:opacity-0" src="/housepriceprediction.png" />
          </div>
        </li>
      </ul>
      <div className="text-center text-l inline relative text-neutral-200 mt-10">
        <h1>Looks abit empty doesnt it... More projects coming soon!</h1>
      </div>
    </div>

  )
}

export default Archive