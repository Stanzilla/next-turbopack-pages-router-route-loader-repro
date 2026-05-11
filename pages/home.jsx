export default function HomePage({ payload }) {
  return (
    <section className="pageSurface">
      <h1>Home</h1>
      <p data-testid="route-name">home</p>
      <p>Payload checksum: {payload.checksum}</p>
    </section>
  );
}

export function getServerSideProps() {
  return {
    props: {
      payload: {
        checksum: 100,
      },
    },
  };
}
