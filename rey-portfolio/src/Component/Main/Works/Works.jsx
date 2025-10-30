import {Cloudinary} from '@cloudinary/url-gen'
import {AdvancedImage} from '@cloudinary/react'
import {fill} from '@cloudinary/url-gen/actions/resize'

const Works = () => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'du68ssfzw'
        }
    })

     const imageDefault = cld.image('default_photo'); 
     imageDefault.resize(fill().width(220));

     const slotOne = 'Project Name'
     const slotTwo = 'Project Name'
     const slotThree = 'Project Name'
     const slotFour = 'Project Name'
     const slotFive = 'Project Name'
     const slotSix = 'Project Name'

  return (
    <>
      <div className='col-12 text-start'>
        <h6>WORKS</h6>
      </div>

      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded' cldImg={imageDefault} />
        <h6 className='pt-3'>{slotOne}</h6>
      </div>
      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded' cldImg={imageDefault} />
        <h6 className='pt-3'>{slotTwo}</h6>
      </div>
      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded' cldImg={imageDefault} />
        <h6 className='pt-3'>{slotThree}</h6>
      </div>
      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded' cldImg={imageDefault} />
        <h6 className='pt-3'>{slotFour}</h6>
      </div>
      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded' cldImg={imageDefault} />
        <h6 className='pt-3'>{slotFive}</h6>
      </div>
      <div className='col-lg-4 col-md-6 mt-4 p-1 text-center'>
        <AdvancedImage className='rounded' cldImg={imageDefault} />
        <h6 className='pt-3'>{slotSix}</h6>
      </div>
    </>
  )
}

export default Works
