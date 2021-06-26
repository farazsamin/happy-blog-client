import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
const Home = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
                
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
   
    return (
        <div>
            {
              posts.map((post)=>{
                  return (<Posts title={post.title.rendered} content={post.content.rendered}></Posts>) 
              })
            }
        </div>
    );
};

export default Home;