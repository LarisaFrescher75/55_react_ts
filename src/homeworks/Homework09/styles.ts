

import styled from "@emotion/styled";


interface BoxInfoStyledProps {
  primary?: boolean
}

export const BoxInfo = styled.div<BoxInfoStyledProps>`
 display: flex;
 align-items: center;
 justify-content: ${({ primary }) => primary ? 'center' : 'flex-end'};;
 padding: 20px;
 width: 350px;
 height: 350px;
 
 background-color: ${({ primary }) => primary ? 'blue' : 'green'};
 font-size: 24px;
`;

export const VipUser = styled.h2`
 color: #D5CBE8;
 font-size: 50px;
`

// export const TitleCard = styled.h2``

export const RegularUser = styled.h2`
  color: yellow;
  font-size: 50px;
`

export const AvatarImg = styled.img`
 width: 100px;
`