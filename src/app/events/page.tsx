import ListEvents from "@/components/microCMS/List_events";


export const runtime = 'edge';

export const dynamic = 'force-dynamic'; 

export default function Home() {
  return (
    <div className="bg-white w-10xl">
      <ListEvents/>
    </div>
  );
}
