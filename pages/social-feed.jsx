import { makePage, makeServerSideProps } from '../src/makePage.jsx';

export default makePage('Feed', 'social-feed');

export function getServerSideProps() {
  return makeServerSideProps('social-feed');
}
