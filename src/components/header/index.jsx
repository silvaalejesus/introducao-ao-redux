import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser, logoutUser } from '../../redux/user/actions';
import { selectProductsCount } from "../../redux/cart/cart.selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  // para acessar o currentUser que esta no reducer usamos o useSelector
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)
  const productsCount = useSelector(selectProductsCount)

  // o dispatch é utilizado para alterar a action. por exemplo, o estado inicial do currentUser é null e quero alterar o valor dele para 10, nesse caso precisamos usar o dispatch
  const dispatch = useDispatch()

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    // o type é obrigatorio para dizer qual action estamos alterando
    // o payload é opcional
    dispatch(loginUser({ name: "Felipe", email: "felipe@rocha.com"}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser)
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleLogoutClick}>Sair</div> : (<div onClick={handleLoginClick}>Login</div>)}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
