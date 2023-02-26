import { useState } from 'react'
import Header from './components/Header'
import UserCard from './components/CardUser'
import Network from './components/Network'

function App() {
  return (
    <>
      <Header />

      <main className='container content-grid'>
        <aside>
          <UserCard />
          <Network />
        </aside>
      </main>
    </>
  )
}

export default App
