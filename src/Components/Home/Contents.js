import React from 'react';
const Contents = () => {
    return (
        <div className='container mt-3 '>
            <div className='row'>
                <div className='col-md-8 d-flex gap-3'>
                    <p className='border-2 border-bottom border-dark'>All post(32)</p>
                    <p>Article</p>
                    <p>Event</p>
                    <p>Education</p>

                </div>
                <div className='col-md-4'>
                    <div className='d-flex gap-3 ms-5 '>
                    <button className='rounded border -none '>Write a post</button>
                    <button className='join-button rounded text-white border -none'>Join Group</button>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default Contents;