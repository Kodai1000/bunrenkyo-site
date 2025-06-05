import ListClubs from "@/components/microCMS/List_clubs";
import SearchClubs from "@/components/microCMS/Search_clubs";

export const runtime = 'edge';


export const dynamic = 'force-dynamic'
export default function Home() {

  return (
    <div className="px-4 py-8 space-y-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        外語サークル図鑑
      </h1>
      <SearchClubs/>
      <ListClubs/>
    </div>
  );
}
