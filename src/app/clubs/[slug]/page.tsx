import { client } from "@/lib/microcms";
import type { club_article } from "@/types/club_article";
import Image from "next/image";
import { Metadata } from "next";


export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const club_blog = await client.get({ endpoint: "clubs" });
  const club_blogs: club_article[] = club_blog.contents;
  return club_blogs.map((club) => ({
    slug: club.slug,
  }));
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const club_blog = await client.get({ endpoint: "clubs" });
  const club_blogs: club_article[] = club_blog.contents;
  const specified_club_blog = club_blogs.find((club) => club.slug === params.slug);

  return {
    title: specified_club_blog?.title || "クラブ記事",
    description: specified_club_blog?.body.substring(0, 100) || "",
  };
}


type PageProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: PageProps) {
  const club_blog = await client.get({ endpoint: "clubs" });
  const club_blogs: club_article[] = club_blog.contents;
  const { slug } = params;
  const specified_club_blog = club_blogs.find(
    (club_blog) => slug === club_blog.slug
  );

  if (!specified_club_blog) {
    return (
      <p className="text-center text-red-500 mt-10">
        記事が見つかりませんでした。
      </p>
    );
  }

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