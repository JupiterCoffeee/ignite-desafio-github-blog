import logo from '../../assets/Logo.svg'
import { HeaderContainer, HeaderContent } from './style'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt=""/>
            </HeaderContent>
        </HeaderContainer>
    )
}