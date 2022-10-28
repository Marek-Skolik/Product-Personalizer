import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Product from './components/Product/Product';

const App = () => {

  return (
    <Container>
      <Header />
      <Product />
      <Products />
    </Container>
  );
}

export default App;
