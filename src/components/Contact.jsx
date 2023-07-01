import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5a46yga', 'template_sfxc6gm', form.current, 'D-9_qw_uo9jcEF6IM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      toast('Message sent Succesfully !')
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-96 lg:mt-0 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="from_email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <input type="submit" value="Send" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"/>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Contact;
