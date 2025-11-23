import {useState} from 'react'
import './Profile.css'

import { Cloudinary } from '@cloudinary/url-gen/index'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'

import statement from './statement.txt?raw'
import closer from './closer.txt?raw'
import statement2 from './statement2.txt?raw'

const Profile = () => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'du68ssfzw'
        }
    })
    const avatar = cld.image('avatar_qaa5rv')
    avatar.resize(fill().height(190).width(190))

    const [name, setname] = useState('REY LERIOS')
    const [job, setjob] = useState('Web Developer')
    const [location, setlocation] = useState('Metro Manila, Philippines')

  return (
    <>

      <div className='row section-first'>

        <div className='col-md-6 text-center justify-content-center'>
          <AdvancedImage className='rounded-circle first-section-avatar' cldImg={avatar} alt='avatar.png' />
            <h1 className='pt-1'>{name}</h1>
            <h5>{job}</h5>
        </div>

        <div className='col-md-6'>
          <p>{statement}</p>
          <p>{closer}</p>
            
            <div className='first-section-location d-flex'>
              <i className='bx bx-location p-1'></i>
              <p>{location}</p>
            </div>
        </div>

      </div>

    </>
  )
}

export default Profile
