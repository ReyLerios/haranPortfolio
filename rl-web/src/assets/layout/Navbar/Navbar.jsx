import React from 'react'

import { Cloudinary } from '@cloudinary/url-gen/index'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'

const Navbar = () => {

      const cld = new Cloudinary({
            cloud: {
                cloudName: 'du68ssfzw'
            }
        })
         const gmail = cld.image('gmail_den9nd')
          gmail.resize(fill().width(25))
  return (
    <>
      <a 
        href='mailto:reylerios30@gmail.com' 
        target='_blank'>

            <AdvancedImage className='rl-gmail' cldImg={gmail} alt='gmail icon' />
        </a>    
    </>
  )
}

export default Navbar
