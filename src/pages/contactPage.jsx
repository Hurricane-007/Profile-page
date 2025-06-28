import React from 'react'
import ContactCard from '../components/ContactCard'

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-6 px-4">
      <img
        src="Hello.png"
        className="w-[200px] h-[200px] sm:w-48 sm:h-48 md:w-64 md:h-64"
        alt="Contact"
      />
      <ContactCard />
    </div>
  )
}

export default ContactPage