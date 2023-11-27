import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Image from 'next/image'


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col  justify-between p-5">
      <div className='bg-[rgba(36,36,36)] text-white min-h-screen snap-y snap-mandatory overflow-scroll z-0'>
       {/* Header */}
       <Header/>
       
        <section id='hero' className='snap-start'>
          <Hero/>
        </section>
       
        <section id='about' className='snap-center'>
          <About/>
        </section>
        
        
        <section id='experience' className='snap-center'>
          <WorkExperience/>
        </section>
        
        <section id='skills' className='snap-start'>
          <Skills/>
        </section>
        {/* projects */}
        {/* contact me */}
      </div>
    // </main>
  )
}
