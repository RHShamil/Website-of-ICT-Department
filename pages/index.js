import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Achievements from '../components/Achievements/Achievements'
import Programs from '../components/Programs/Programs'
import { sampleReq } from '../utils/fetcher'
import Research from '../components/Research/Research'
import { Store } from '../utils/store'
import { useContext, useEffect } from 'react'

const Home = ({data}) => {

    const {state, dispatch} = useContext(Store)

    useEffect( () => {
        dispatch({type: 'LOAD', payload: data})
    }, [] )

    return(
        <>
            <Layout description="Website of ICT" title="ICT">             
                <Banner />   
                <Achievements />
                <Programs />
                <Research />
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    
    return {
        props: {
            data: await sampleReq(),
        }
    }
}

export default Home