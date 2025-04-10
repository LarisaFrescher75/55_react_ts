


import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ButtonContainer } from "../../components/Layout/styles";
import { ClientsWrapper, Title, StyledLink } from "./styles"

function Clients() {

    const navigate = useNavigate();
  
    const goToAtosPage = ()=>{
      navigate('/atos')
    }
  
    const goToColumbusPage = ()=>{
      navigate('/clients/columbus')
    }

    const goToLegrandPage = ()=>{
        navigate('/clients/lerand')
    }


  return (
    <ClientsWrapper>
      <Title>Clients pages</Title>
      {/*<Image src='https://avatars.mds.yandex.net/i?id=4dc24c2d9b39f9b42334498641728077ce05009b-5879431-images-thumbs&n=13' />*/}
      
      <StyledLink to='atos'>Atos</StyledLink>
      <StyledLink to='/clients/legrand'>Legrand</StyledLink>
      <StyledLink to='columbus'>Columbus</StyledLink>

      <ButtonContainer>
        <Button name='More about atos' onClick={goToAtosPage} />
        <Button name='More about legrand' onClick={goToLegrandPage}/>
        <Button name='More about columbus' onClick={goToColumbusPage} />
      </ButtonContainer>


    </ClientsWrapper>
  )
}

export default Clients