import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (<>
 <div className="header">
    <Link to='/'>Logout</Link>
 </div>
    <div className='home'>
     <img src="https://img.freepik.com/free-vector/welcome-concept-illustration_114360-370.jpg?w=740&t=st=1677051138~exp=1677051738~hmac=8e946c888a2f07e8e8254e75bda20c9f9d55435946bfeed5ae35518dedd6a109" alt="Loading" />
     <div>
        <h1 className='home-text'>"WELCOME HOME, <span>where memories are made and hearts are filled.</span>"</h1>
     </div>
    </div>
    </>
  )
}

export default Home;