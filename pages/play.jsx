import { makePage, makeServerSideProps } from '../src/makePage.jsx';

export default makePage('Play', 'play');

export function getServerSideProps() {
  return makeServerSideProps('play');
}
