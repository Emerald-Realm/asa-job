import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import headerLogo from '../public/headerlogo.png'

export default function Home(results: any) {
  const intialState = results.asalist;
  // const [asalist, setAsalist] = useState(intialState.asalist)
  console.log(intialState[1])
  return (
    <div className={styles.container}>
      <Head>
        <title>Asalyics Assesment</title>
        <meta name="description" content="Asalytics Assement" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/headerlogo.png" />
      </Head>

      <div>
        <nav className={styles.nav}>
        <link rel="icon" href="/headerlogo.png" />
        <Image src={headerLogo} height={50} width={100}/>
          {/* <img src={headerLogo} alt="" /> */}
          <button className={styles.navButton}>ANALYZE ASAs</button>
        </nav>
          <h1 className={styles.title}>
            List of Algorand Standard Assets<br/>
            on ASAlytics
          </h1>


        <div className={styles.collection}>
          {intialState.map((results: any) =>
            <Card key={results.assetId} results={results} />
          )}
        </div>
      </div>

    </div>
  )
}



export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://analytics-api.herokuapp.com/analytics",
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({

    query: gql`
  query {
  asalist {
    results {
      assetId
      available
      logo
      name
      unitname1
    }
  }
}`
  })

  return {
    props: {
      asalist: data.asalist.results,
    }
  }
}
