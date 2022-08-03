import React from 'react'
import { Feed, Sidebar, Widgets } from '../../components/index'

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