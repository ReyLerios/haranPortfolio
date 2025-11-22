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
    avatar.resize(fill().height(130).width(130))

    const [name, setname] = useState('REY LERIOS')
    const [job, setjob] = useState('Web/App Developer')
    const [location, setlocation] = useState('Metro Manila, Philippines')

  return (
    <>
      <div className='row profile'>
        <div className='col-md-6 text-center justify-content-center ms-auto profile-left-section'>
            <AdvancedImage className='rounded-circle p-3 avatar' cldImg={avatar} />
            <h1 className='fw-bold rl-header-hue'>{name}</h1>
            <h6 className='rl-sub-hue fw-bold'>{job}</h6>
        </div>
        <div className='col-md-6 profile-right-section'>
            <p className='pt-3 rl-text'>{statement}</p>
            <p className='pt-1 rl-text'>{closer}</p>
            <i className='bx bx-location text-primary'> {location}</i>
        </div>
      </div>
    </>
  )
}

export default Profile
