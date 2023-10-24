import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Degrees from './Degrees';
import Certificate from './CertificationsAndTrainings';
import Experience from './Experiences';
import Resume from './Resume';
import NoPage from './Nopage';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Message from './Message';
import Footer from '../components/Footer';
import '../css/Background.css';
import AcademicProjects from './AcademicProjects';

const App = () =>{
  return (
    <div className="Background">
      <Header />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Layout/>}/>
          <Route index element = {<Resume/>}/>
            <Route path='/Experience' element = {<Experience/>}/>
            <Route path='/Degrees' element = {<Degrees/>}/>
            <Route path='/Certificate' element = {<Certificate/>}/>
            <Route path='/AcademicProjects' element = {<AcademicProjects/>}/>
            <Route path='/Message' element = {<Message/>}/>
            <Route path='*' element = {<NoPage/>}/>
        </Routes>
      </BrowserRouter>
      <div className="black-line"></div>
       <Footer />
    </div>
  );
}

export default App;
