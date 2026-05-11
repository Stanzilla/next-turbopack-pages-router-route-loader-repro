import { makePage, makeServerSideProps } from '../src/makePage.jsx';

export default makePage('Shop', 'shop');

export function getServerSideProps() {
  return makeServerSideProps('shop');
}
