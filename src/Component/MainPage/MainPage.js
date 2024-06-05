import React, { useState } from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';
import Posts from '../Posts/Posts';

const MainPage = () => {

    const [timelinePosts, setTimelinePosts] = useState({
        file: "",
        class: "",
        description: "",
    });
    const [length, setLength] = useState([]);
    const handelPosts = (e) => {
        // console.log(e,"event")
        const name = e.target.name;
        const value = e.target.value;

        setTimelinePosts((prv) => {
            return { ...prv, [name]: value }
        });
    };
    const handelsubmit = (e) => {
        e.preventDefault();
        // console.log(timelinePosts);
    };
    // console.log(length)


    return (
        <div className='timeline-container'>
            <div className='post-section'>

                <form onSubmit={handelsubmit}>
                    <span></span>
                    <label for="photo">File : </label>
                    <input type="file" id="photo" name="file" onChange={handelPosts}  />
                    <span></span>
                    <label for="class">Class : </label>
                    <input type="text" name="class" id="class" onChange={handelPosts} placeholder='Enter class ' required /><br />
                    <label for="description">Description:</label>
                    <textarea id="text" name="description" onChange={handelPosts} rows="4" placeholder="  Enter description" required></textarea>

                    <button type="submit">Post</button>
                </form>

            </div>
            <div className='posts'>
                
                <h1> </h1>
            </div>

        </div>
    );
};

export default MainPage;