'use client';
import Head from 'next/head'
import Navbar           from '../components/Navbar'
import Hero             from '../components/Hero'
import About            from '../components/About'
import PracticeAreas    from '../components/PracticeAreas'
import Contact          from '../components/Contact'
import Footer           from '../components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'


export default function Home() {
  return (
    <ParallaxProvider>
      <Head>
        <title>Advocate Jane Doe — Portfolio</title>
        <meta name="description" content="Advocate Jane Doe | Expert legal services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Contact />
      <Footer />
    </ParallaxProvider>
  )
}
