import { makePage, makeServerSideProps } from '../../src/makePage.jsx';

export default makePage('Rank', 'rank');

export function getServerSideProps() {
  return makeServerSideProps('rank');
}
