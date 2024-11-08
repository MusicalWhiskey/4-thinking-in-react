import './App.css'
import produce from './data/Produce'
import FilterableProductTable from './components/FilterableProductTable'

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={produce} />
    </div>
  )    
}

export default App