import React, { useState } from 'react';
import { motion } from "framer-motion";
import axios from "axios";

// Dummy Data
import { dummyContactData } from "../../DummyData/dummyData.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    status: 'in progress',
  });

  // input, textArea의 내용이 바뀔 때 마다 formData 수정
  const handleChange = (e) => {
    setFormData({
      ...formData,  // 기존 데이터 삽입
      [e.target.name]: e.target.value // 새로운 데이터 수정
    });
  }

  // 문의 내용 제출
  const handleSubmit = async (e) => {
    e.preventDefault(); // form 제출, 링크 이동 등의 기본 동작을 막아 사용자 정의 동작을 실행시키는 함수
    try {
      const response = await axios.post("http://localhost:3000/api/contact", formData);

      if (response.status === 201) {
        alert("문의가 성공적으로 접수 되었습니다.");
      }

      // formData 초기화
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        status: 'in progress',
      });
    } catch (error) {
      console.log("에러 발생: ", error);
      alert("문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <motion.div
      className="min-h-screen bg-white py-32"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        variants={fadeInVariants}
        custom={0}
      >
        <motion.div className="text-center mb-16" variants={fadeInVariants} custom={1}>
          <h1 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-6'>문의하기</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            태양광 설비 설치부터 유지보수까지, 전문가와 상담하세요. 24시간 내에 답변드리겠습니다.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          variants={fadeInVariants}
          custom={2}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            variants={fadeInVariants}
            custom={3}
          >
            <form className='bg-white rounded-2xl shadow-xl p-8' onSubmit={handleSubmit}>
              <div className='space-y-6'>
                <div>
                  <label className='block text-gray-700 font-medium mb-2'>이름</label>
                  <input
                    type='text'
                    name='name'
                    className='w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue-200 transition-colors duration-300'
                    placeholder='홍길동'
                    required={true}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-2'>이메일</label>
                  <input
                    type='email'
                    name='email'
                    className='w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue-200 transition-colors duration-300'
                    placeholder='example@example.com'
                    required={true}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-2'>전화번호</label>
                  <input
                    type='tel'
                    name='phone'
                    className='w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue-200 transition-colors duration-300'
                    placeholder='010-1234-5678'
                    required={true}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-2'>문의 내용</label>
                  <textarea
                    name='message'
                    className='w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue-200 transition-colors duration-300 h-40'
                    placeholder='문의하실 내용을 자세히 적어주세요.'
                    required={true}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button className='w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300'>
                  문의하기
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div className="space-y-8" variants={fadeInVariants} custom={4}>
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>연락처 정보</h3>
              <div className='space-y-6'>
                { dummyContactData.map((item, index) => (
                  <div key={index} className='flex items-start'>
                    <div className='ml-4'>
                      <h4 className='font-medium text-gray-800'>{item.title}</h4>
                      <p className='text-gray-600'>{item.info}</p>
                      <p className='text-sm text-gray-500'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              variants={fadeInVariants}
              custom={5}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.279301018033!2d126.9754847612344!3d37.572040327749015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb421c44ad%3A0xe955a50c118085f8!2sGwanghwamun%20Square!5e0!3m2!1sen!2skr!4v1735115389923!5m2!1sen!2skr"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[400px] md:h-[600px] lg:h-[600px]"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;