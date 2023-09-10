import { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import Hero from './Hero'
import Skill from './Skill'
import Contact from './Contact'
import About from './About'

function Home() {
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])
    
    return (
        (isLoading) ? (
            <Loader />
        ) :
        <>
        
            <Hero />
            <Skill />
            <About />
            <Contact />
            
        </>
    )
}

export default Home