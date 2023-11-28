import About from '@/components/About'
import Communites from '@/components/Communites'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Image from 'next/image'


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col  justify-between p-5">
      <div className='bg-[rgba(36,36,36)] text-white min-h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
       {/* Header */}
       <Header/>
       
        <section id='hero' className='snap-start'>
          <Hero/>
        </section>
       
        <section id='about' className='snap-center'>
          <About/>
        </section>

        <section id='communites' className='snap-center'>
          <Communites/>
        </section>
        
        
        <section id='experience' className='snap-center'>
          <WorkExperience/>
        </section>
        
        <section id='skills' className='snap-start'>
          <Skills/>
        </section>
        
        
        <section id='projects' className='snap-start'>
          <Projects/>
        </section>
        
        <section id='contact' className='snap-start'>
          <ContactMe />
        </section>
      </div>
    // </main>
  )
}
