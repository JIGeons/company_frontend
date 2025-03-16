import React from 'react';

// Dummy Data
import { servicesList, dummyProccess } from "../../DummyData/dummyData.js";

const Services = () => {
  return (
    <div className='container mx-auto px-4 py-32 max-w-7xl'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>우리의 서비스</h1>
        <p className='text-xl text-gray-600'>
          혁신적인 기술로 비즈니스 성공을 지원합니다.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
        { servicesList.map((service) => (
          <div key={service.id} className='bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300'>
            <div className='text-4xl mb-4'>{service.icon}</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>{service.title}</h3>
            <p className='text-gray-600 leading-relaxed'>{service.description}</p>
          </div>
        ))}
      </div>

      <div className='text-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-8'>
          왜 우리를 선택해야 할까요?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              10년+ 경험
            </h3>
            <p className='text-gray-600'>
              다양한 산업 분야의 프로젝트 경험
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              전무가 팀
            </h3>
            <p className='text-gray-600'>
              숙련된 개발자와 컨설턴트로 구성
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              24/7 지원
            </h3>
            <p className='text-gray-600'>
              연중무휴 기술 지원 서비스
            </p>
          </div>
        </div>
      </div>

      <div className='mt-32'>
        <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>
          프로젝트 진행 프로세스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          { dummyProccess.map((item, index) => (
            <div key={index} className='relative p-6 bg-white rounded-xl shadow-md'>
              <div className='text-blue-600 text-5xl font-bold mb-4'>{item.step}</div>
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-gray-600'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-32 bg-blue-600 rounded-2xl p-12 text-center text-white'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
          프로젝트를 시작할 준비가 되셨나요?
        </h2>
        <p className='text-xl mb-8'>
          전문가와 상담하고 최적의 솔루션을 찾아보세요.
        </p>
        <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300'>
          무료 상담 신청하기
        </button>
      </div>
    </div>
  );
}

export default Services;