import { useState } from 'react'
import PageHeader from './layouts/PageHeader'
import CategoryPills from './components/CategoryPills'
import VideoGridItem from './components/VideoGridItem'
import './App.css'

const App = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>Sidebar</div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills />
        </div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill, minmax(300px,1fr))]">
          <VideoGridItem />
        </div>
      </div>
    </div>
  )
}

export default App
