import { client } from "@/lib/microcms";
import type { club_article } from "@/types/club_article";
import Image from "next/image";
import Link from "next/link";

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
      <h1 className="text-6xl font-bold text-gray-800 text-center mb-4">
            {specified_club_blog.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          <Image
            alt="Picture of the club"
            src={specified_club_blog.picture.url}
            width={300}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>        
        <div className="flex item-center">
        
          <table className="w-full table-auto border border-black overflow-hidden shadow-sm">
            <tbody>
              <tr className="border border-black">
                <td className="p-4 text-xl font-semibold bg-gray-300 w-1/4">公認状況:</td>
                <td
                  className="p-4 text-xl text-center"
                  style={{
                    color: specified_club_blog.official.includes("非公認") ? "blue" : "red"
                  }}
                >
                  {specified_club_blog.official}
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-4 text-xl font-semibold bg-gray-300">Instagram:</td>
                <td className="p-4 text-xl">
                  <Link
                    href={specified_club_blog.instagram}
                    className="text-blue-500 hover:underline break-all"
                  >
                    {specified_club_blog.instagram}
                  </Link>
                </td>
              </tr>
              <tr className="border border-black">
                <td className="p-4 text-xl font-semibold bg-gray-300">X:</td>
                <td className="p-4 text-xl">
                  <Link
                    href={specified_club_blog.twitter}
                    className="text-blue-500 hover:underline break-all"
                  >
                    {specified_club_blog.twitter}
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
      <p className="text-2xl leading-relaxed text-gray-700 whitespace-pre-line mt-8">
        {specified_club_blog.body}
      </p>
        
    </div>
  );
}
