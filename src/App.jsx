import Navbar from './components/navbar/Navbar'
import './App.css'
import Productos from'./components/productos/Productos'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <ItemListContainer />
      </main>
    </div>
  )
}

export default App
