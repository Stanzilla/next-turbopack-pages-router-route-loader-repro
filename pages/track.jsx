import { makePage, makeServerSideProps } from '../src/makePage.jsx';

export default makePage('Track', 'track');

export function getServerSideProps() {
  return makeServerSideProps('track');
}
