import { useState } from 'react'
import './Profile.css'
import {Cloudinary} from '@cloudinary/url-gen'
import {AdvancedImage} from '@cloudinary/react'
import {fill} from '@cloudinary/url-gen/actions/resize'
import sentence from './sentence.txt?raw'
import closing from './closing.txt?raw'

const Profile = () => {


    const cld = new Cloudinary({
        cloud: {
            cloudName: 'du68ssfzw'
        }
    })

     const imageAvatar = cld.image('default_avatar'); 
     imageAvatar.resize(fill().width(190).height(190));

     const name = 'REY LERIOS'
     const job = 'Software Developer'
     const[location,setlocation] = useState('Metro Manila, Philippines')

  return (
    <>

      <div className='col-md-6 text-center justify-content-center'>

        <AdvancedImage className='rounded-circle' alt='avatar profile' cldImg={imageAvatar} />
           <h1 className='pt-2'>{name}</h1>
             <h6 className='text-body-secondary'>{job}</h6>
             
      </div>

      <div className='col-md-6 pt-2 mt-3'>

        <p>{sentence}</p>
          <p>{closing}</p>

          <p className='d-flex text-primary loc'>
            <i class='bx  bx-location-pin p-1'></i>
            {location}
          </p>

      </div>

    </>
  )
}

export default Profile
