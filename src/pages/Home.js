import React from 'react'
import "./Home.css"
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Work from '../components/Home/Work.js'
import Test  from '../components/Home/Test'

function Home() {
    return (
        <div >
            <Section1 />
            <Section2 />
            <Section3 />
            <Work/>
            <Test/>
        </div>
    )
}

export default Home