function Event({ params }: { params: { id: string } }) {
  return <div>page id = {params.id}</div>;
}

export default Event;
