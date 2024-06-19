import AppRoutes from '../../Routes/Routes'
import Header from '../Header/Header'
import './App.css'

function App() {

  return (
    <div className="app">
      <Header/>
      <div className="container">
        <AppRoutes/>
      </div>
      
    </div>
  )
}

export default App
