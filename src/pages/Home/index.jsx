import { useState } from 'react'
import "./styles.css"
import "./responsive.css"
import UserCard from '../../components/UserCard'
import Header from '../../components/Header'
import Network from '../../components/Network'
import Searchbar from '../../components/Searchbar'
import RepositoryCard from '../../components/RepositoryCard'

function Home() {
  return (
    <>
      <Header />

      <main className='container content-grid'>
        <aside className='left-sidebar'>
          <UserCard />
          <Network />
        </aside>

        <section>
          <Searchbar />

          <div className="repositories">
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
            <RepositoryCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
