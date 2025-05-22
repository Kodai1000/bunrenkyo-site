// app/clubs/page.tsx
import { client } from "@/lib/microcms";
import type { event_article } from "@/types/event_article.ts";
import Link from "next/link";
import Image from "next/image";

export const runtime = 'edge';

export const dynamic = 'force-dynamic'; 

export default async function ListEvents() {
  const club_blog = await client.get({ endpoint: "events" });
  const club_blogs: event_article[] = club_blog.contents;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        文化部連絡協議会 主催イベント一覧
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {club_blogs.map((item) => (
          <li
            key={item.id}
            className="bg-gray-300 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image src={item.picture.url} alt={item.title} width={500} height={500} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-black">{item.title}</h2>
              <p>{item.remarks}</p>
              <p
                style={{
                    color: item.status.includes("参加団体募集中")
                    ? "#28a745" // 緑
                    : item.status.includes("参加団体募集締め切り済")
                    ? "#dc3545" // 赤
                    : item.status.includes("企画中")
                    ? "#fd7e14" // オレンジ
                    : item.status.includes("終了")
                    ? "#6c757d" // グレー
                    : "black",  // それ以外は黒
                    fontWeight: "bold",
                }}
                >
                {item.status}
            </p>

              <Link
                href={`/events/${item.id}`}
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
