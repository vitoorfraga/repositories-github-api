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
  const [filteredRepositories, setFilteredRepositories] = React.useState([])
  const [searchString, setSearchString] = React.useState("")

  React.useEffect(() => {
    axios.get("https://api.github.com/users/vitoorfraga/repos")
      .then(res => {
        setRepositories(res.data)
      })
  }, [])

  const handleChange = (value) => {
    setSearchString(value)
    let dataTemp = repositories.filter((item) => {
      const formatSearchString = searchString.toLocaleLowerCase()
      const formatItemName = item.name.toLocaleLowerCase().replaceAll('-', ' ')
      if (formatItemName.includes(formatSearchString)) {
        return item
      }
    })

    setFilteredRepositories(dataTemp)
  }

  return (
    <>
      <Header />

      <main className='container content-grid'>
        <aside className='left-sidebar'>
          <UserCard />
          <Network />
        </aside>

        <section>
          <Searchbar
            value={searchString}
            onChange={(e) => handleChange(e.target.value)}
          />


          <div className="repositories">
            {
              searchString == "" ?
                repositories.map((repository) => {
                  return (
                    <RepositoryCard
                      key={repository.id}
                      title={repository.name}
                      description={repository.description}
                      url={repository.html_url}
                      pageUrl={repository.homepage}
                    />
                  )
                })
                :
                filteredRepositories.map((teste) => {
                  return (
                    <RepositoryCard
                      key={teste.id}
                      title={teste.name}
                      description={teste.description}
                      url={teste.html_url}
                      pageUrl={teste.homepage}
                    />
                  )
                })

            }
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
