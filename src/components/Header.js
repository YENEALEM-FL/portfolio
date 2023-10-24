import React from 'react';
import Value from '../images/photo.jpg'; // Import the image

const Header = () => {
  return (<>
    <div className='text-center'>
      <img src={Value} className="rounded-circle" style={{ height: '20vh', width: '12vw' }} alt="Yenealem"/>
      
    </div>
    </>
  );
}

export default Header;
