import React, { useState } from 'react';
import schoolList from '../fakedata/schoool info&MOCK_DATA.json';
import './SchoolList.css';
import { Link } from 'react-router-dom';

const SchoolList = () => {
    const [school, setSchool] = useState(schoolList);
    return (
        <div className='schoolList-conteinar'>
            <ol>
                {
                    school.map(data => <li>
                        <h2>School Name : <Link to={'/schools/'+data.schoolCode}>{data.schoolName}</Link> </h2>
                        <h3>Code : {data.schoolCode}</h3>
                        <h3>Address : {data.address}</h3><hr />
                    </li>)
                }
            </ol>
        </div>
    );
};

export default SchoolList;