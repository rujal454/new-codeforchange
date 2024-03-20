import React from 'react'
import page from "../assets/camp.jpg";
const Camp = () => {
  return (
    
        <div name ="Campaign" className='flex h-screen relative' style={{ backgroundImage: `url(${page})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute inset-0 bg-ml-10 h-96 w-1/2 mt-60 bg-[rgb(247,255,230)] rounded-xl shadow-lg backdrop-filter backdrop-blur-sm' >
            <div className='text-[rgb(71,106,43)] font-bold  text-5xl font-spacing-tight ml-40 mt-8'>OUR CAMPAIGN</div>
            <div className='text-black  font-spacing-tight mt-8 ml-8'>
            MedCare advocates medicine reuse to revolutionize healthcare sustainability, minimizing waste and enhancing global accessibility. Our campaign raises awareness about the environmental impact of medicinal waste, promoting reuse as a sustainable solution.<br></br><br></br>
We engage communities and healthcare professionals in responsible medication disposal, fostering environmental stewardship. Collaborating with influential figures in India's healthcare sector,
 we inspire collective action for a greener future. Join us in reshaping healthcare sustainably.
            </div>
          </div>
          
        </div>
      );
  }

export default Camp