import { Container, ListGroup, ListGroupItem, Spinner} from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import Hero from './Hero'

import styled from 'styled-components'
import TeachStack from './TeachStack'
import Contact from './Contact'
import About from './About'

const Component = styled.section`
    display: block;
    width: 100%;

    #hero{
        background-color: var(--primary-color);
    }

    #tech-stack{
        background-color: var(--tertiary-color);
    }

    #contacts{
        background-color: var(--quinary-color);
    }
`

function Home() {
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://db-json-nine.vercel.app/details')
            .then(res => {
                setDetails(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
        
        // axios.get('http://localhost:4000/details')
        //     .then(res => {
        //         setDetails(res.data)
        //         setIsLoading(false)
        //     })
        //     .catch(err => console.log(err))
    }, [])

    return (
        (isLoading) ? (
            <Loader />
        ) :
        <Component>
                
            <section id='hero'>
                <Hero data={details} />
            </section>

            <section id='tech-stack'>
                <TeachStack data={details} />
            </section>

            <section id='contacts'>
                <Contact data={details} />
            </section>

            <section id='about'>
                <About data={details} />
            </section>
        </Component>
    )
}

export default Home