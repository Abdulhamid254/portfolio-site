import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col  justify-between p-5">
      <div className='bg-[rgba(36,36,36)] text-white min-h-screen snap-y snap-mandatory overflow-scroll z-0'>
       {/* Header */}
       <Header/>
        {/* hero */}
        <section id='hero' className='snap-center'>
          <Hero/>
        </section>
        {/* about */}
        {/* experience */}
        {/* skills */}
        {/* projects */}
        {/* contact me */}
      </div>
    // </main>
  )
}
