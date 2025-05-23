import { client } from "@/lib/microcms";
import type { club_article } from "@/types/club_article";
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
  const specified_club_blog : club_article = await client.get({ endpoint: `clubs/${slug}` });
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        {specified_club_blog.title}
      </h1>
      <p
        className="text-2xl"
        style={{
          color: specified_club_blog.official.includes("非公認") ? "blue" : "red",
          textAlign: "center"
        }}
      >
        {specified_club_blog.official}
      </p>
      <div className="flex justify-center mb-8">
        <Image
          alt="Picture of the club"
          src={specified_club_blog.picture.url}
          width={500}
          height={500}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <p className="text-2xl leading-relaxed text-gray-700 whitespace-pre-line">
        {specified_club_blog.body}
      </p>
    </div>
  );
}
