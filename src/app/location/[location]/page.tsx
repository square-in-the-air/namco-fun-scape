interface PageProps {
  params: { location: string };
}

export default async function Home({ params }: PageProps) {
  const { location } = params;

  return (
    <main>
      <h1>{location}</h1>
    </main>
  );
}
