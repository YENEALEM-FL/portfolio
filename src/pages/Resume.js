import React from 'react';
import Experiences from './Experiences';
import Degrees from './Degrees';
import Certification from './CertificationsAndTrainings';
import '../css/AppStyle.css';
const Resume = () => {
  return (
    <div>
      <Experiences/>
      <Degrees/>
      <Certification/>
    </div>
  );
};
export default Resume;