
import {CodingTimer} from '@/components/CodingTimer';
import {LastUpdated} from '@/components/LastUpdated';


export const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-lg font-bold uppercase tracking-widest text-neutral-50 lg:sr-only">About</h2>
        </div>
        <div>
            <p className="text-neutral-400 text-md">
                Recent graduate at
                <span className="text-neutral-50"> Swinburne University of Technology </span>
                completed my 
                <span className="text-neutral-50"> Bachelor of Computer Science</span>
                , majoring in 
                <span className="text-neutral-50"> Software Development</span>.
            </p>
            <p className="text-neutral-400 pt-4 text-md">
                {`I have 6 months of experience working in a professional, 
                and agile environment with Water Source Australia as an
                Intern Software Engineer. Led a solo project for an Android App.`}
            </p>
            <p className="text-neutral-400 pt-4 text-md">
                {`Once an idea comes to mind, I find it hard to keep myself from stopping.
                I started coding in 2023 July, and so far i'm in love with it!
                I'm always eager to learn new things and ready to face a challenge!
                I'm confident in my ability to change and adapt to new environments.`}
            </p>
        </div>
        <div>
            <p className="mt-2 mb-2 text-neutral-400 pt-4 text-md">
                Foundation: <span className="textColorFade inline relative">C++, Java, Python</span>
            </p>
            <p className="mt-2 mb-2 text-neutral-400 pt-4 text-md">
                Web development: <span className="text-neutral-50 textColorFade inline relative">JavaScript, TypeScript, Streamlit, Vue, React, Bootstrap, Tailwind</span>
            </p>
            <p className="mt-2 text-neutral-400 pt-4 text-md">
                Artificial Intelligence: <span className="text-neutral-50 textColorFade inline relative">Python, Scikit-learn, Matplotlib, Panda</span>
            </p>
        </div>
        <div className="lg:pt-10 md:pt-5 pt-5 ">
            <span className="text-l textColorFade inline relative">
                Portfolio last updated since:
                <LastUpdated/>
            </span>
        </div>
        <div className="lg:pt-10 md:pt-5 pt-5">
            <span className="text-l textColorFade inline relative">
                I have been coding for:
                <CodingTimer/>
            </span>
        </div>

  </section>
  )
}
