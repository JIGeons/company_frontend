import React from 'react';
import { Link } from "react-router-dom";

// Dummy Data
import { dummyCompanyInfo } from "../../DummyData/dummyData.js";

const Contact = () => {
  return (
    <div className='bg-white py-20 lg:py-48'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            문의하기
          </h2>
          <p className='text-gray-600 text-lg'>
            궁금하신 점이 있으신가요? 언제든 문의해주세요.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 mb-20'>
          { dummyCompanyInfo.map((item, index) => (
            <div key={index} className='bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300 text-center'>
              <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.info}</p>
              <p className='text-gray-500 text-sm'>{item.subInfo}</p>
            </div>
          ))}
        </div>

        <div className='mb-12 max-w-4xl mx-auto'>
          <div className='bg-white shadow rounded-xl overflow-hidden'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50600.001332588865!2d126.91796235000002!3d37.56684034999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb421c44ad%3A0xe955a50c118085f8!2z6rSR7ZmU66y46rSR7J6l!5e0!3m2!1sko!2skr!4v1742141386524!5m2!1sko!2skr"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='w-full h-[400px] md:h[600px] lg:h-[600px]'
            ></iframe>
          </div>
        </div>

        <div className='mt-12 text-center'>
          <Link
            to='/contact'
            className='inline-block px-10 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-all duration-300 ease-in-out hover:shadow-lg'
          >
            문의하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;