import { HeaderContainer } from "./styles";
import  logo  from '../../assets/logo-dio.png'
import Button from "../Button";

const Header = () => {
    return(
        <>
            <HeaderContainer>
            <img src={logo} width={62} height={25}/>
            <div>
                <Button title="Entrar"></Button>
                <Button title="Cadastrar"></Button>
            </div>
            </HeaderContainer>
        </>
    )
}

export default Header;