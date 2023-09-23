import { Show } from "@/types";

export default function ShowList({ shows }: { shows: Show[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {shows.map((show) => (
        <div
          key={show.id}
          className="p-4 bg-white text-black shadow-md rounded-lg"
        >
          {show.name}
        </div>
      ))}
    </div>
  );
}
