
import './App.css'
import SideBar from './components/SideBar'
import Header from './components/header'
import Overview from './components/Overview'
import Table from './components/Table'

function App() {

  return (
    <>
      <div className='flex min-h-screen'>
        <SideBar/>
        <div className='w-4/5 p-0'>
          <Header/>
          <Overview/>
          <Table/>
        </div>
      </div>
    </>
  )
}

export default App
