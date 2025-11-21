
import { Cloudinary } from '@cloudinary/url-gen/index'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { useState } from 'react'
import './Footer.css'

const Footer = () => {

      const cld = new Cloudinary({
            cloud: {
                cloudName: 'du68ssfzw'
            }
        })

        const footerFirst = cld.image('github_1_ccwu34')
        footerFirst.resize(fill(). width(30))

        const[footerDetailOne, setfooterDetailOne] = useState('Github')


            const footerSecondIcon = cld.image('gmail_ujhyaq')
            footerSecondIcon.resize(fill().width(30))
            const[footerSlotTwo, setfooterSlotTwo] = useState('Gmail')

            const footerThirdIcon = cld.image('phone-ring_kyagfq')
            footerThirdIcon.resize(fill().width(30))
            const[footerSlotThree, setfooterSlotThree] = useState('Viber')

            const footerFourthIcon = cld.image('code-alt_bymkiy')
            footerFourthIcon.resize(fill().width(30))
            const[footerSlotFour, setfooterSlotFour] = useState('Snippets')

  return (
    <>
      <div className='container-fluid mt-5 pt-5 pb-5 bg-black text-white'>
          <div className='row gx-1 bg-black'>
            <div className='col-lg-12 mb-2 mt-3 bg-black text-center'>
              <p className='bg-black text-white'>Design and developed by Rey Lerios</p>
            </div>

            <ul className='list-unstyled bg-black d-flex text-center justify-content-center pt-3 mb-3'>
              <li className='bg-black text-center justfy-content-center'>
                <a href='https://github.com/ReyLerios'>
                
                  <p className='footer-detail'>{footerDetailOne}</p>
                </a>
              </li>

               <li className='bg-black text-center justfy-content-center ms-5'>
                <a href='mailto:reylerios30@gmail.com'>
                
                  <p className='footer-detail'>{footerSlotTwo}</p>
                </a>
              </li>

               <li className='bg-black text-center justfy-content-center ms-5'>
                <a href='#'>
       
                  <p className='footer-detail'>{footerSlotThree}</p>
                </a>
              </li>

               <li className='bg-black text-center justfy-content-center ms-5'>
                <a href='#'>

                  <p className='footer-detail'>{footerSlotFour}</p>
                </a>
              </li>
            </ul>

          </div>
        </div>
    </>
  )
}

export default Footer
