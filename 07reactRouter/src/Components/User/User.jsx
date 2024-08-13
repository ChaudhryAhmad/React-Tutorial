import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  // Destructuring the userId from the useParams() hook
  const { userId } = useParams();

  // Now you can use the userId variable in your component
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userId}</div>
  );
}

export default User;
