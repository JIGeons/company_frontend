import React, { useState } from 'react';

// Dummy Data
import { dummyBoardPosts } from '../../DummyData/dummyData.js';

const Board = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPage - itemsPerPage;
  const currentPosts = dummyBoardPosts.slice(indexOfFirstPost, indexOfLastPage);

  return (
    <div className='p-4 md:p-6 max-w-7xl mx-auto py-32 md:py-32'>
      <h1 className='text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center'>업무 게시판</h1>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border rounded-lg'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-[8%]'>
                번호
              </th>
              <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-auto'>
                제목
              </th>
              <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-[15%]'>
                작성일
              </th>
              <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-[10%]'>
                첨부파일
              </th>
              <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-[8%]'>
                조회수
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            { currentPosts.map((post) => (
              <tr key={post._id} className='hover:bg-gray-50 cursor-pointer'>
                <td className='px-6 py-4 whitespace-nowrap'>{post.number}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{post.title}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{post.createdAt}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{post.views}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Board;