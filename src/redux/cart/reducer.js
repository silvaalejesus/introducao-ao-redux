import CartActionsTypes from "./action-types";

const initialState = {
  products: [],
//   produtcsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionsTypes.ADD_PRODUCT:
      // Verificar se o produto ja esta no carrinho.
      // Aqui ta verificando se o produto que esta no estado do reducer é igual ao produto que esta sendo adicionado no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      // se ele estiver, aumentar a quantidade em 1
      if (productIsAlreadyInCart) {
        return { ...state, products: state.products.map((product)=>
            product.id === action.payload.id 
            ? { ...product, quantity: product.quantity + 1} : product
            )};
      }
      
      // e se nao estiver, adiciona-lo
      return {
        ...state,
        products: [...state.products, {...action.payload, quantity: 1}]
      }
    
    case CartActionsTypes.REMOVE_PRODUCT:
        return {
            ...state,
            // esta pegando todos os ids que sejam diferente do id que estamos recebendo. tudo que vem de action.payload é o que estamos recebendo
            products: state.products.filter(product => product.id !== action.payload)
        }

    case CartActionsTypes.INCREASE_PRODUCT_QUANTITY:
        return{
            ...state,
            products: state.products.map((product)=>
                product.id === action.payload ? {...product, quantity: product.quantity + 1
            }: product )
        }

    case CartActionsTypes.DECREASE_PRODUCT_QUANTITY:
        return{
            ...state,
            products: state.products.map((product)=>
                product.id === action.payload ? {...product, quantity: product.quantity - 1
            }: product ).filter(product => product.quantity > 0 )
        }

    default:
        return state;
  }
};

export default cartReducer;
