import React from 'react'
import { Feed, Sidebar, Widgets } from '../../components'

const Home: React.FC = () => {
    return (
        <>
            <Sidebar />
            <Feed />
            <Widgets />
        </>
    )
}

export default Home