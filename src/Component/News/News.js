import React from 'react';
import './News.css';
import image from './profile.png';
import MainPage from '../MainPage/MainPage';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className='news-container'>
            <div className='sidebar-container'>
                <img src={image} alt="" />
                <h2>Student Name</h2>
                <p>
                    Zinzira High school and collage. <br />
                    Class: Eight <br />
                    Roll: 1023 <br />
                    Section: (A)<br />
                </p>
                <h4><Link to={'/mySchool/'}>My School</Link> </h4>
                <h4>Coordinator</h4>
                <h4>Class Teacher's list</h4>
                <h4>Student's list</h4>
            </div>
            <div className='news-contain'>
                <MainPage></MainPage>
            </div>
            
        </div>
    );
};

export default News;