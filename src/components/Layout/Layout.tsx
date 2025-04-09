


import {
  LayoutComponent,
  Header,
  LogoText,
  Nav,
  Main,
  Footer
} from "./styles"
import { LayoutProps } from "./types"

function Layout({children} : LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <LogoText>Company name</LogoText>
        <Nav>
          {/* NavLink - компонент библиотеки, который добавляет ссылку на 
          страницу по маршруту через prop to */}
         <StyledNavLink to='/'>Home</StyledNavLink>
          <StyledNavLink to='/about'>About</StyledNavLink>
          <StyledNavLink to='/course'>Course</StyledNavLink>

        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <LogoText>Company name</LogoText>
      </Footer>
    </LayoutComponent>
  )
}

export default Layout