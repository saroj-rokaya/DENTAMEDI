import React from 'react'
import BeforeFooterCard from './BeforeFooterCard.jsx'
import onlineConsultation from "../../../assets/BeforeFooterImages/online_consultation.svg";
import generalDentist from "../../../assets/BeforeFooterImages/general_dentist.svg";
import greatResult from "../../../assets/BeforeFooterImages/great_result.svg";

const BeforeFooter = () => {
  return (
    <>
      <section className='container-size flexCenter flex-wrap gap-2 '>
        <BeforeFooterCard  heading="Online Consultation" image={onlineConsultation}/>
        <BeforeFooterCard  heading="General Dentist" image={generalDentist}/>
        <BeforeFooterCard  heading="Great Results" image={greatResult}/>
      </section>
    </>
  )
}

export default BeforeFooter
