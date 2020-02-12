import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { api, hashGenerator } from '../../services/api';
import { ProductList } from './styles';
import { addRequest } from '../../store/modules/cart/actions';

export default function Home(props) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(24);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const { data: response } = await api.get(
        `/v1/public/comics?apikey=${
          process.env.REACT_APP_MARVEL_PUB_KEY
        }&hash=${hashGenerator()}&ts=1&limit=${perPage}&offset=${page}`
      );
      setProducts(response.data.results);
    }
    loadProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li>
          <img
            src={`${product.thumbnail.path}/standard_fantastic.${product.thumbnail.extension}`}
            alt={product.title}
          />
          <strong>{product.title}</strong>
          <button type="button" onClick={() => dispatch(addRequest(product))}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {product.prices[0].price ? `$ ${product.prices[0].price}` : 'OUT'}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
