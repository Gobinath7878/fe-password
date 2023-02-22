import { useNavigate } from 'react-router-dom'


const Nav = () => {

  const navigate = useNavigate()

  return (
    <nav>
     
      <div className="controls-container">
        <div className="icon" onClick={() => navigate('/dashboard')}>hlo</div>
       hlo
      </div>
    </nav>
  )
}

export default Nav