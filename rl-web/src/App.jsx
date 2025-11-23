import './App.css'
import Profile from './assets/layout/firstSection/Profile'
import Footer from './assets/layout/Footer/Footer'
import Navbar from './assets/layout/Navbar/Navbar'
import Stacks from './assets/layout/secondSection/Stacks'
import Works from './assets/layout/thirdSection/Works'

function App() {

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-xxl fixed-top bg-transparent">
          <div className='container p-3'>
            <Navbar />
          </div>
        </nav>
      </header>

      <main>
        <div className='container rl-profile-app pt-5 mb-3 p-3'>
          <Profile />
        </div>

        <div className='container rl-arsenal-app mt-5 mb-3 p-3'>
          <Stacks />
        </div>

        <div className='container rl-works-app mt-2 pt-3 p-3'>
          <Works />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
