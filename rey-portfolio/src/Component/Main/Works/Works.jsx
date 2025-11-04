import {Cloudinary} from '@cloudinary/url-gen'
import {AdvancedImage} from '@cloudinary/react'
import {fill} from '@cloudinary/url-gen/actions/resize'
import { useState } from 'react'

const Works = () => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'du68ssfzw'
        }
    })

     const imageDefault = cld.image('default_photo'); 
     imageDefault.resize(fill().width(220));

     const slotFive = 'Project Name'
     const slotSix = 'Project Name'

     const imageFirstSlot = cld.image('homepage_qfwni0'); 
     imageFirstSlot.resize(fill().width(220));
     const[slotOne, setslotOne] = useState('Waving Strings Music')

     const imageSecondSlot = cld.image('login_klddh2'); 
     imageSecondSlot.resize(fill().width(220));
     const[slotTwo, setslotTwo] = useState('Student Portal')

     const imageThirdSlot = cld.image('admin_slnubt'); 
     imageThirdSlot.resize(fill().width(220));
     const[slotThree, setslotThree] = useState('Web-based Library (Admin Panel)')

     const imageFourthSlot = cld.image('login_qdswxu'); 
     imageFourthSlot.resize(fill().width(220));
     const[slotFour, setslotFour] = useState('Harcadis Fitness App')

  return (
    <>
      <div className='col-12 text-start'>
        <h6>WORKS</h6>
      </div>

      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded border border-2 p-1' cldImg={imageFirstSlot} />
        <h6 className='pt-3'>{slotOne}</h6>
      </div>
      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded border border-2 p-1' cldImg={imageSecondSlot} />
        <h6 className='pt-3'>{slotTwo}</h6>
      </div>
      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded border border-2 p-1' cldImg={imageThirdSlot} />
        <h6 className='pt-3'>{slotThree}</h6>
      </div>
      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded border border-2 p-1' cldImg={imageFourthSlot} />
        <h6 className='pt-3'>{slotFour}</h6>
      </div>
      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded border border-2 p-1' cldImg={imageDefault} />
        <h6 className='pt-3'>{slotFive}</h6>
      </div>
      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded border border-2 p-1' cldImg={imageDefault} />
        <h6 className='pt-3'>{slotSix}</h6>
      </div>
    </>
  )
}

export default Works
