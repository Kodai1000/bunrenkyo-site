// app/clubs/page.tsx
import { client } from "@/lib/microcms";
import type { club_article } from "@/types/club_article";
import Link from "next/link";
import Image from "next/image";

export const runtime = 'edge';

export const dynamic = 'force-dynamic'; 

export default async function ListClubs({option = "none"}) {
  const club_blog = await client.get({ endpoint: "clubs" });
  let club_blogs: club_article[] = club_blog.contents;
  if (option == "none"){
    console.log("No option provided, displaying all clubs.");
  }else{
    club_blogs = club_blogs.filter((item) => item.title.includes(option));
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {club_blogs.map((item) => (
          <li
            key={item.id}
            className="bg-gray-300 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image src={item.picture.url} alt={item.title} width={500} height={500} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-black">{item.title}</h2>
              <p style={{ color: item.official.includes("非公認") ? "black" : "red" }}>{item.official}</p>
              <Link
                href={`/clubs/${item.slug}`}
                className="text-blue-600 hover:underline"
              >
                記事を読む →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
