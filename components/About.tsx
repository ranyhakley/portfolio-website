import React from 'react'
import CodingTimer from './CodingTimer'
import LastUpdated from './LastUpdated'


const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
        </div>
        <div>
            <p className="text-neutral-400 text-md">
                Currently a 2nd Year Student at
                <span className="text-neutral-50"> Swinburne University of Technology </span>
                studying 
                <span className="text-neutral-50"> Bachelor of Computer Science</span>
                , majoring in 
                <span className="text-neutral-50"> Software Development</span>.
            </p>
            <p className="text-neutral-400 pt-4 text-md">
                Aspiring Software Developer with a passion in 
                <span className="text-neutral-50"> Web Development</span> and 
                <span className="text-neutral-50"> Artificial Intelligence</span>.            
            </p>
        </div>
        <div>
            <p className="mt-4 mb-2 text-neutral-400 pt-4 text-md">
                Foundation: <span className="text-neutral-50">C++, Java, Python</span>
                
            </p>
            <p className="mt-2 mb-2 text-neutral-400 pt-4 text-md">
                Web development: <span className="text-neutral-50">JS, TS, Streamlit, Vue, React, Bootstrap, Tailwind</span>
                
            </p>
            <p className="mt-2 text-neutral-400 pt-4 text-md">
                Artificial Intelligence: <span className="text-neutral-50">Python, Scikit-learn, Matplotlib, Panda</span>
                
            </p>
        </div>
        <div className="lg:pt-10 md:pt-5 ">
            <span className="text-l textColorFade inline relative">
                Portfolio last updated since:
                <LastUpdated/>
            </span>
        </div>
        <div className="lg:pt-10 md:pt-5">
            <span className="text-l textColorFade inline relative">
                I have been coding for:
                <CodingTimer/>
            </span>
        </div>

  </section>
  )
}

export default About