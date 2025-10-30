import React, { useState } from 'react'
import './Arsenal.css'

const Arsenal = () => {

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

  return (
    <>
      <div className='col-12 text-start'>
        <h6>TECH STACKS</h6>
      </div>

      <div className='col-lg-3 col-6 col-md-6 col-12 mt-5'>  
        <img className='rounded-circle p-1 border border-3' alt='slot 1 language' src={slot1} width={50} />
        <p className='text-body-secondary lang pt-1'>{firstLang}</p>
      </div>

       <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>  
        <img className='rounded-circle p-1 border border-3' alt='slot 2 language' src={slot2} width={50} />
        <p className='text-body-secondary lang pt-1'>{secondLang}</p>
      </div>

       <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>  
        <img className='rounded-circle p-1 border border-3' alt='slot 3 language' src={slot3} width={50} />
        <p className='text-body-secondary lang pt-1'>{thirdLang}</p>
      </div>

       <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-5'>  
        <img className='rounded-circle p-1 border border-3' alt='slot 4 language' src={slot4} width={50} />
        <p className='text-body-secondary lang pt-1'>{fourthLang}</p>
      </div>

      <div className='col-lg-3 col-6 col-md-6 col-12 mt-3'>  
        <img className='rounded-circle p-1 border border-3' alt='slot 5 language' src={slot5} width={50} />
        <p className='text-body-secondary lang pt-1'>{fifthLang}</p>
      </div>

      <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-3'>  
        <img className='rounded-circle p-1 border border-3' alt='slot 6 language' src={slot6} width={50} />
        <p className='text-body-secondary lang pt-1'>{sixthLang}</p>
      </div>

       <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-3'>  
        <img className='rounded-circle p-1 border border-3' alt='slot 7 language' src={slot7} width={50} />
        <p className='text-body-secondary lang pt-1'>{seventhLang}</p>
      </div>

       <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-3'>  
        <img className='rounded-circle p-1 border border-3' alt='slot 8 language' src={slot8} width={50} />
        <p className='text-body-secondary lang pt-1'>{eightLang}</p>
      </div>

      
    </>
  )
}

export default Arsenal
