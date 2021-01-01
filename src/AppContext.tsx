import { useContext } from 'react';
import CartContext from './CartContext';

const AppContext: React.FC = () => {
  const { products } = useContext(CartContext);

  return (
    <ul>
      {products?.map((car) => (
        <li key={car.id}>
          nome:
          {' '}
          {car.name}
          , preço: R$
          {' '}
          {car.price}
        </li>
      ))}
    </ul>
  );
};

export default AppContext;
