

import './styles.css'

import { BoxInfo, VipUser, RegularUser, AvatarImg } from './styles'
import Avatar from '../../assets/avatar.jpg'


function Homework09() {
  
  const textStyles = { color: 'blue', fontSize: '28px' }

  return (
    <div className="Homework09-container">
      <h1>Styling components</h1>
      
      <div style={{ color: 'blue', fontSize: '24px' }}>Inline styles example</div>
      <p style={textStyles}>Inline styles example 1</p>
      <div style={textStyles}>Inline styles example 2</div>

      
      <BoxInfo primary>
         <VipUser>Paul</VipUser>
         <AvatarImg src={Avatar}/>
      </BoxInfo>
      <BoxInfo primary>
        <RegularUser>Jon</RegularUser>

        </BoxInfo>
    </div>
  )
}

export default Homework09