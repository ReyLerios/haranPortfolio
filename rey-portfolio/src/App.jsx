import './App.css'
import Arsenal from './Component/Main/Arsenal/Arsenal'
import Profile from './Component/Main/Profile/Profile'
import Works from './Component/Main/Works/Works'

function App() {

  return (

    <>

       <header>
        <nav className='navbar navbar-expand-lg'>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              <i class='bx  bx-code-alt'></i> 
            </a>
          </div>
        </nav>
       </header>

       <main>
        <div className='container mt-5 p-3'>

          <div className='row mb-2'>
            <Profile />
          </div>

          <div className='row mb-2 text-center justify-content-center mt-5 pt-5'>
            <Works />
          </div>

          <div className='row mt-5 mb-2 arsenal justify-content-center text-center'>
            <Arsenal />
          </div>
        </div>
       </main>

       <footer></footer>

    </>

  )
}

export default App
