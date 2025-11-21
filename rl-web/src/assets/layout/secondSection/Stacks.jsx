import { useState } from 'react'
import './Stacks.css'

const Stacks = () => {

    const slot1 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
    fetch(slot1).then(response => response.json()).then(data => console.log(data))
    const [firstLang, setfirstLang] = useState('Python')

    const slot2 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg'
    fetch(slot2).then(response => response.json()).then(data => console.log(data))
    const [secondLang, setsecondLang] = useState('Swift')

    const slot3 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg'
    fetch(slot3).then(response => response.json()).then(data => console.log(data))
    const [thirdLang, setthirdLang] = useState('C++')

    const slot4 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'
    fetch(slot4).then(response => response.json()).then(data => console.log(data))
    const [fourthLang, setfourthLang] = useState('Linux')

    const slot5 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    fetch(slot5).then(response => response.json()).then(data => console.log(data))
    const [fifthLang, setfifthLang] = useState('React')

    const slot6 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg'
    fetch(slot6).then(response => response.json()).then(data => console.log(data))
    const [sixthLang, setsixthLang] = useState('Angular')

    const slot7 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
    fetch(slot7).then(response => response.json()).then(data => console.log(data))
    const [seventhLang, setseventhLang] = useState('Bootstrap 5')

    const slot8 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'
    fetch(slot8).then(response => response.json()).then(data => console.log(data))
    const [eightLang, seteightLang] = useState('Material UI')

    const slot9 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
    fetch(slot9).then(response => response.json()).then(data => console.log(data))
    const [ninthLang, setninthLang] = useState('Express')

    const slot10 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
    fetch(slot10).then(response => response.json()).then(data => console.log(data))
    const [tenthLang, settenthLang] = useState('Mongo DB')

    const slot11 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg'
    fetch(slot11).then(response => response.json()).then(data => console.log(data))
    const [eleventhLang, seteleventhLang] = useState('Flutter')

    const slot12 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg'
    fetch(slot12).then(response => response.json()).then(data => console.log(data))
    const [twelvethLang, settwelveLang] = useState('Dart')

  return (
    <>
      <div className='row stacks'>
        <div className='col-12'>
            <h3 className='rl-arsenal-icon'>Stacks</h3>
        </div>
      </div>

      <div className='row stacks text-center justify-content-center'>

        <div className='col-lg-3 col-6 col-md-6 col-12 mt-5'>
          <img src={slot1} alt='programming language icon' />
          <p className='rl-sub-hue'>{firstLang}</p>
        </div>

        <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>
          <img src={slot2} alt='programming language icon' />
          <p className='rl-sub-hue'>{secondLang}</p>
        </div>

        <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>
          <img src={slot3} alt='programming language icon' />
          <p className='rl-sub-hue'>{thirdLang}</p>
        </div>

        <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>
          <img src={slot4} alt='programming language icon' />
          <p className='rl-sub-hue'>{fourthLang}</p>
        </div>
      </div>

      <div className='row stacks text-center justify-content-center'>

        <div className='col-lg-3 col-6 col-md-6 col-12 mt-5'>
          <img src={slot5} alt='programming language icon' />
          <p className='rl-sub-hue'>{fifthLang}</p>
        </div>

        <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>
          <img src={slot6} alt='programming language icon' />
          <p className='rl-sub-hue'>{sixthLang}</p>
        </div>

        <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>
          <img src={slot7} alt='programming language icon' />
          <p className='rl-sub-hue'>{seventhLang}</p>
        </div>

        <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>
          <img src={slot8} alt='programming language icon' />
          <p className='rl-sub-hue'>{eightLang}</p>
        </div>
      </div>

      <div className='row stacks text-center justify-content-center'>

        <div className='col-lg-3 col-6 col-md-6 col-12 mt-5'>
          <img src={slot9} alt='programming language icon' />
          <p className='rl-sub-hue'>{ninthLang}</p>
        </div>

        <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>
          <img src={slot10} alt='programming language icon' />
          <p className='rl-sub-hue'>{tenthLang}</p>
        </div>

        <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>
          <img src={slot11} alt='programming language icon' />
          <p className='rl-sub-hue'>{eleventhLang}</p>
        </div>

        <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>
          <img src={slot12} alt='programming language icon' />
          <p className='rl-sub-hue'>{twelvethLang}</p>
        </div>
      </div>
    </>
  )
}

export default Stacks
