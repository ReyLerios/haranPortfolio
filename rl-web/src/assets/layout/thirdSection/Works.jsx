import React, { useState } from 'react'
import './Works.css'

import { Cloudinary } from '@cloudinary/url-gen/index'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'

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
      <div className='row stacks'>
        <div className='col-12 text-start'>
          <h3>Works</h3>
        </div>
      </div>

      <div className='row works'>
        <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
          <AdvancedImage 
             className='rounded border border-2 border-tertiary image-pro' 
             cldImg={firstWork} 
             alt='work.png' 
          />
          <p className='rl-works'>{slotOne}</p>
        </div>

        <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
          <AdvancedImage 
             className='rounded border border-2 border-tertiary image-pro' 
             cldImg={secondWork} 
             alt='work.png' 
          />
          <p className='rl-works'>{slotTwo}</p>
        </div>

        
        <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
          <AdvancedImage 
             className='rounded border border-2 border-tertiary image-pro' 
             cldImg={thirdWork} 
             alt='work.png' 
          />
          <p className='rl-works'>{slotThree}</p>
        </div>

          
        <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
          <AdvancedImage 
             className='rounded border border-2 border-tertiary image-pro' 
             cldImg={fourthWork} 
             alt='work.png' 
          />
          <p className='rl-works'>{slotFour}</p>
        </div>

        <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
          <AdvancedImage 
             className='rounded border border-2 border-tertiary image-pro' 
             cldImg={fifthWork} 
             alt='work.png' 
          />
          <p className='rl-works'>{slotFive}</p>
        </div>

        <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
          <AdvancedImage 
             className='rounded border border-2 border-tertiary image-pro' 
             cldImg={sixthWork} 
             alt='work.png' 
          />
          <p className='rl-works'>{slotSix}</p>
        </div>

         <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
          <AdvancedImage 
             className='rounded border border-2 border-tertiary image-pro' 
             cldImg={seventhWork} 
             alt='work.png' 
          />
          <p className='rl-works'>{slotSeven}</p>
        </div>

         <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
          <AdvancedImage 
             className='rounded border border-2 border-tertiary image-pro' 
             cldImg={eightWork} 
             alt='work.png' 
          />
          <p className='rl-works'>{slotEight}</p>
        </div>

          <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
          <AdvancedImage 
             className='rounded border border-2 border-tertiary image-pro' 
             cldImg={ninthWork} 
             alt='work.png' 
          />
          <p className='rl-works'>{slotNine}</p>
        </div>
      </div>
    </>
  )
}

export default Works;
