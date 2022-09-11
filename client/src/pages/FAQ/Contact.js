import React, { useEffect, useState } from 'react'
import './style.css'
import {createMastText} from '../../utils/helpers'
import Masthead from '../../components/Masthead'

export default function Contact() {
    const [text,setText] = useState();
    
    useEffect(() => {
        const data = createMastText();

        setText(data);

        console.log("*****",data);
    },[]);

    return (
        <div>
            <Masthead {...createMastText()}/>

        <div className='contact-box mx-auto mt-5 col-md-10 mt-100'>
    
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a question? Want to send feedback about a beta feature? Need details about our Business plan? Let us know below.</p> */}
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label><br />
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="youremail@email.com" required/>
          </div><br />
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label><br />
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Dearest PetConnect..." required/>
          </div><br />
          <div className="sm:col-span-4">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label><br />
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your message in a bottle (or just a contact form)"></textarea>
          </div><br /><br />
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
      </form>
  </div>
</section>
        
        </div>
        </div>
    )};