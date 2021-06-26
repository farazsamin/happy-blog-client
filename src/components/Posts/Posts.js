import React from 'react';
import './Posts.css'
const Posts = (props) => {
    const {title,content} = props;

    return (
        <div>
            <div className="card" style={{ border: '1px solid black', margin: '2%', padding: '2%' }}>

                <div className="card-body">
                    {/* <h2>{name}</h2> */}
                    <h3 className="">{title}</h3>
                    <p className="card-text">{ content ? content : "..."}</p>
                </div>
            </div>
        </div>
    );
};

export default Posts;