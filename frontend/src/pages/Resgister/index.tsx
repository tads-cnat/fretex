import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import RegisterClienteForm from '../../components/RegisterComponents/RegisterClienteForm'
import { Wrapper } from '../../styles'

const Register = () => {
  return (
    <>
      <Navbar/>
      <Wrapper bgColor='#282828'>
        <RegisterClienteForm/>
      </Wrapper>
      <Footer/>
    </>
  )
}

export default Register