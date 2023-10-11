import Image from 'next/image'

export default function Contact() {
    return (
      <div className = "contact-page">
        <div className = "contact-head"> Contact Us</div>
        <div className = "contact-body"> 
            <div> Need assistance with our products?</div>
            Call <b>419-379-4512</b> or email questions to <a href = "mailto: keiser.70@osu.edu">keiser.70@osu.edu</a>
        </div>
        <img
        src="https://media.istockphoto.com/id/1359876068/vector/customer-service-hotline-operators-consult-customers-with-headsets-on-computers-247-global.jpg?s=612x612&w=0&k=20&c=HcrFsPakslvox6rWnOWllH-jJ32TUNrTKusZ1J0_5oc="
        width={612}
        height={367}
        alt="Customer Service Image"></img>      
      </div>
    );
  }
  