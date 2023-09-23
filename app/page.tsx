import ShowList from "@/components/show-list";
import { Show } from "@/types";

async function getShows(): Promise<Show[]> {
  try {
    const res = await fetch("http://localhost:3000/api/shows", {
      cache: "force-cache",
    });

    return res.json();
  } catch (e: unknown) {
    console.error(e);
  }
  throw new Error("failed to fetch show data");
}

export default async function Home() {
  const shows = await getShows();
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl">Responsive Layout</h1>
      </header>
      <main className="container mx-auto p-4">
        <ShowList shows={shows} />
      </main>
      <footer className="bg-blue-500 p-4 text-white">
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}
