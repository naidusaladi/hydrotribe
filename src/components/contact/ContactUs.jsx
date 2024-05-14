import React from 'react'

const ContactUs = () => {
  return (
<div className="flex flex-col items-center justify-center p-12" id='contact'>
<h1 className='text-5xl text-green-500 py-10'>ContactUs <span className='font-serif font-bold text-5xl'>.</span></h1>
<div className="mx-auto w-full max-w-[550px]">
  <form action="" method="POST">
    <div className="mb-5">
      <label
        htmlFor="name"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        Full Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#50b44c] focus:shadow-md"
      />
    </div>
    <div className="mb-5">
      <label
        htmlFor="email"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        Email Address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@domain.com"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#50b44c] focus:shadow-md"
      />
    </div>
    <div className="mb-5">
      <label
        htmlFor="subject"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        Subject
      </label>
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Enter your subject"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#50b44c] focus:shadow-md"
      />
    </div>
    <div className="mb-5">
      <label
        htmlFor="message"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        Message
      </label>
      <textarea
        rows="4"
        name="message"
        id="message"
        placeholder="Type your message"
        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#50b44c] focus:shadow-md"
      ></textarea>
    </div>
    <div>
      <button
        className="hover:shadow-form rounded-md bg-[#68bd4e] py-3 px-8 text-base font-semibold text-white outline-none"
      >
        Submit
      </button>
    </div>
  </form>
</div>
</div>
  )
}

export default ContactUs
