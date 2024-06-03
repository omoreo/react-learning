// import logo from './logo.svg';
// import './App.css';
import { useRoutes } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import EditTodoForm from './components/EditTodoForm';

function App() {

  const elements = useRoutes([
    { path: '/', element: <TodoList />},
    { path: '/AddTodoForm', element: <AddTodoForm />},
    { path: '/EditTodoForm', element: <EditTodoForm />}
  ])

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
