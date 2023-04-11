import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import Banner from './components/Banner/Banner'


export const JobContext = createContext([])

function App() {
  const jobs = useLoaderData()


  return (
    <JobContext.Provider value={jobs}>
      <div className="App">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </JobContext.Provider>
  )
}

export default App
