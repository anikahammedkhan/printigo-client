import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-us block md:flex items-center justify-evenly p-4 md:p-0'>
            <div className='w-full md:w-1/4 lg:w-1/2 my-8 md:my-0'>
                <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold text-yellow-400'>Let's Talk</h1>
                <p className='font-bold text-xl md:text-lg lg:text-2xl text-white'>To Request a quote or want to meet-up for a coffee, Contact me directly on What's App or fill out the form and I'will get back to you promptly!</p>
            </div>
            <div className='w-full md:w-1/3 lg:w-1/3 contact-form shadow-2xl'>
                <form>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@gmail.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how can I help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-lg font-bold text-center text-white rounded-lg bg-success sm:w-fit hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;