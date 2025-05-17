import { client } from "@/lib/microcms";
import type { event_article } from "@/types/event_article";
import Image from "next/image";

export async function generateStaticParams(): Promise<
  { params: { slug: string } }[]
> {
  const event_blog = await client.get({ endpoint: "events" });
  const event_blogs: event_article[] = event_blog.contents;
  return event_blogs.map((event) => ({
    params: { slug: event.slug },
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const event_blog = await client.get({ endpoint: "events" });
  const event_blogs: event_article[] = event_blog.contents;
  const { slug } = await params;
  const specified_event_blog = event_blogs.find(
    (event_blog) => slug === event_blog.slug
  );

  if (!specified_event_blog) {
    return (
      <p className="text-center text-red-500 mt-10">
        記事が見つかりませんでした。
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        {specified_event_blog.title}
      </h1>
      <p className="text-center">{specified_event_blog.status}</p>
      <p className="text-center">{specified_event_blog.remarks}</p>
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