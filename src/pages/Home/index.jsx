import React, { useState } from 'react'
import "./styles.css"
import "./responsive.css"
import UserCard from '../../components/UserCard'
import Header from '../../components/Header'
import Network from '../../components/Network'
import Searchbar from '../../components/Searchbar'
import RepositoryCard from '../../components/RepositoryCard'
import axios from 'axios'

function Home() {

  const [repositories, setRepositories] = React.useState([])

  React.useEffect(() => {
    axios.get("https://api.github.com/users/vitoorfraga/repos")
      .then(res => {
        setRepositories(res.data)
        console.log(res.data)
      })
  }, [])

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
            {repositories.map((repository) => {
              return (
                <RepositoryCard
                  key={repository.id}
                  title={repository.name}
                  description={repository.description}
                  url={repository.html_url}
                  pageUrl={repository.homepage}
                />
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
