// app/clubs/page.tsx
import { client } from "@/lib/microcms";
import type { event_article } from "@/types/event_article";
import Link from "next/link";
import Image from "next/image";

export default async function ListEvents() {
  const event_blog = await client.get({ endpoint: "events" });
  const event_blogs: event_article[] = event_blog.contents;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        文連協開催イベント一覧
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {event_blogs.map((item) => (
          <li
            key={item.id}
            className="border-b bg-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* 画像がある場合はこちらを使用 */}
            {/* <img src={item.picture.url} alt={item.title} className="w-full h-48 object-cover" /> */}
            <Image src={item.picture.url} alt={item.title} width={500} height={500} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-black">{item.title}</h2>
              <p>{item.status}</p>
              <p>{item.remarks}</p>
              <Link
                href={`/events/${item.slug}`}
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
