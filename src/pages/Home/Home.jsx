// import { useEffect, useState } from 'react'
import './Home.css'
// import Loader from '../../components/Loader/Loader'
import Hero from './Hero'
import Social from "./Social";
// import Skill from './Skill'
// import Contact from './Contact'
import About from './About'
import data from '../../data/data.json'

function Home() {
    
    
    return (
        <main className="Home">
        
            <Hero data={data.personal} />
            <About data={data} />
            <Social data={data.socials} />
            {/* <Skill />
            <Contact /> */}
            
        </main>
    )
}

export default Home