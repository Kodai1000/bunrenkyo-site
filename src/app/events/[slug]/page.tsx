import { client } from "@/lib/microcms";
import type { event_article } from "@/types/event_article";
import Image from "next/image";


export const runtime = 'edge';


export const dynamic = 'force-dynamic'


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const {slug} = await params;
  const specified_event_blog : event_article = await client.get({ endpoint: `events/${slug}` });
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        {specified_event_blog.title}
      </h1>
      <div className="flex-col text-center mb-8">
        <p>{specified_event_blog.remarks}<br/></p>
        
        <p
        style={{
            color: specified_event_blog.status.includes("参加団体募集中")
            ? "#28a745" // 緑
            : specified_event_blog.status.includes("参加団体募集締め切り済")
            ? "#dc3545" // 赤
            : specified_event_blog.status.includes("企画中")
            ? "#fd7e14" // オレンジ
            : specified_event_blog.status.includes("終了")
            ? "#6c757d" // グレー
            : "black",  // それ以外は黒
            fontWeight: "bold",
        }}
        >{specified_event_blog.status}</p>
    </div>
      <div className="flex justify-center mb-8">
        <Image
          alt="Picture of the club"
          src={specified_event_blog.picture.url}
          width={500}
          height={500}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <p className="text-2xl leading-relaxed text-gray-700 whitespace-pre-line">
        {specified_event_blog.content}
      </p>
    </div>
  );
}
