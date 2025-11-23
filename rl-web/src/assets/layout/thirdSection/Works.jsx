import React, { useState } from 'react'
import './Works.css'

import { Cloudinary } from '@cloudinary/url-gen/index'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'

import statement2 from './statement2.txt?raw'

const Works = () => {

      const cld = new Cloudinary({
        cloud: {
            cloudName: 'du68ssfzw'
        }
    })
    const firstWork = cld.image('homepage_qfwni0')
    firstWork.resize(fill().width(200))
    const[slotOne, setslotOne] = useState('Waving Strings Music')

    const secondWork = cld.image('1_nbkckn')
    secondWork.resize(fill().width(200))
    const[slotTwo, setslotTwo] = useState('Crimson Sillage Perfumes')

    const thirdWork = cld.image('portfolio_d6eeqg')
    thirdWork.resize(fill().width(200))
    const[slotThree, setslotThree] = useState('Portfolio')

    
    const fourthWork = cld.image('login_qdswxu')
    fourthWork.resize(fill().width(200))
    const[slotFour, setslotFour] = useState('Virtual Fitness App')

    const fifthWork = cld.image('interface_oc6axw')
    fifthWork.resize(fill().width(200))
    const[slotFive, setslotFive] = useState('SCC Student Portal')

    const sixthWork = cld.image('admin_slnubt')
    sixthWork.resize(fill().width(200))
    const[slotSix, setslotSix] = useState('SCC Library Web')

    const seventhWork = cld.image('Untitled_design_edgdk9')
    seventhWork.resize(fill().width(200))
    const[slotSeven, setslotSeven] = useState('Hapitot Video Game')

    const eightWork = cld.image('default_photo')
    eightWork.resize(fill().width(200))
    const[slotEight, setslotEight] = useState('Python Payroll with UI')

    const ninthWork = cld.image('sd_idosd3')
    ninthWork.resize(fill().width(200))
    const[slotNine, setslotNine] = useState('Mobile Store')

  return (
    <>
      <div className='row section-third text-center justify-content-center'>

        <div className='col-12 text-start'>
          <h6 className='rl-sub-header'>Works</h6>
          <p className='rl-tertiary-text'>{statement2}</p>
        </div>

        <div className='col-lg-4 col-md-6'>
          <AdvancedImage className='rounded p-1 border image-project' cldImg={firstWork} />
          <p className='rl-tertiary-text'>{slotOne}</p>
        </div>

        <div className='col-lg-4 col-md-6'>
          <AdvancedImage className='rounded p-1 border image-project' cldImg={secondWork} />
          <p className='rl-tertiary-text'>{slotTwo}</p>
        </div>

        <div className='col-lg-4 col-md-6'>
          <AdvancedImage className='rounded p-1 border image-project' cldImg={thirdWork} />
          <p className='rl-tertiary-text'>{slotThree}</p>
        </div>

        <div className='col-lg-4 col-md-6'>
          <AdvancedImage className='rounded p-1 border image-project' cldImg={fourthWork} />
          <p className='rl-tertiary-text'>{slotFour}</p>
        </div>

        <div className='col-lg-4 col-md-6'>
          <AdvancedImage className='rounded p-1 border image-project' cldImg={fifthWork} />
          <p className='rl-tertiary-text'>{slotFive}</p>
        </div>

        <div className='col-lg-4 col-md-6'>
          <AdvancedImage className='rounded p-1 border image-project' cldImg={sixthWork} />
          <p className='rl-tertiary-text'>{slotSix}</p>
        </div>

        <div className='col-lg-4 col-md-6'>
          <AdvancedImage className='rounded p-1 border image-project' cldImg={seventhWork} />
          <p className='rl-tertiary-text'>{slotSeven}</p>
        </div>

        <div className='col-lg-4 col-md-6'>
          <AdvancedImage className='rounded p-1 border image-project' cldImg={eightWork} />
          <p className='rl-tertiary-text'>{slotEight}</p>
        </div>

        <div className='col-lg-4 col-md-6'>
          <AdvancedImage className='rounded p-1 border image-project' cldImg={ninthWork} />
          <p className='rl-tertiary-text'>{slotNine}</p>
        </div>

      </div>
    </>
  )
}

export default Works;
