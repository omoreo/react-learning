// import logo from './logo.svg';
import './App.css';
import './style.css';
import FilterableProductTable from './components/FilterableProductTable';

const Products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Food", price: "$5", stocked: true, name: "Fried Rice"},
  { category: "Food", price: "$5", stocked: false, name: "Pasta"},
  { category: "Food", price: "$4", stocked: true, name: "Curry"},
  
];

function App() {
  return (
    <FilterableProductTable products={Products} />
  );
}

export default App;
