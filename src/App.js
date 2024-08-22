import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { PageError } from './pages/errorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      { 
        path: 'about',
        element: <div>A propos</div>
      }
    ]
  }
])

function Root () {
  return <>
      <header>
        <nav>
          <NavLink to="/"><HomePage/></NavLink>
          <NavLink to="/about">A propos</NavLink>
        </nav>
      </header>
      <div className='container my-4'>
        <Outlet/>
      </div>
  </>
}

function App() {
  return <RouterProvider router={router}/>
}

export default App;
