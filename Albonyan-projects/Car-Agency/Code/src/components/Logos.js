import React from 'react'
import './Logos.css'
import bmw from '../components/logos/bmw.png'
import volvo from '../components/logos/Volvo_logo1_1.png'
import suzuky from '../components/logos/Suzuki_logo_2_1.png'
import toyota from '../components/logos/Toyota_EU_1.png'
import nissan from '../components/logos/Nissan_2020_logo.png'
import mercedes from '../components/logos/Mercedes-Benz_free_logo.png'
import subaru from '../components/logos/image_262.png'
import mits from '../components/logos/Vector.png'

const Logos = () => {
  return (
    <div>
      <section className='logos-section'>
      <img src={bmw} alt=''/>
      <img src={volvo} alt=''/>
      <img src={suzuky} alt=''/>
      <img src={toyota} alt=''/>
      <img src={nissan} alt=''/>
      <img src={mercedes} alt=''/>
      <img src={subaru} alt=''/>
      <img src={mits} alt=''/>

      </section>
    </div>
  )
}

export default Logos