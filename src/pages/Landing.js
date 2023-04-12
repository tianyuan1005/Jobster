import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components/'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum
            deserunt rem tenetur commodi? Odio eligendi commodi aliquid ex illo,
            corporis debitis animi voluptates at expedita eaque hic tempora
            omnis quidem qui voluptas natus dolores amet ab blanditiis accusamus
            reiciendis? Tenetur a commodi autem dolores eum voluptatem quia
            labore mollitia!
          </p>

          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
