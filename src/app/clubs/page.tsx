import ListClubs from "@/components/microCMS/List_clubs";


export const runtime = 'edge';

export const dynamic = 'force-dynamic'; 

export default function Home() {
  return (
    <div className="bg-white w-10xl">
      <ListClubs/>
    </div>
  );
}
