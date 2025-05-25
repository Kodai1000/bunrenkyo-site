import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 py-8 space-y-12">
    <div className="flex flex-col items-center">
      <Image
        src="/brk.png"
        alt="文連協を象徴する写真"
        width={4000}
        height={1000}
        style={{ objectFit: 'cover' }}
      />
    </div>
    {/* ボタンリンクセクション */}
    <section className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
      <Link
        href="/clubs"
        className="border border-black w-full md:w-[500px] min-h-[180px] bg-gray-500 text-white rounded-lg flex flex-col justify-center items-center text-center hover:bg-sky-900 hover:scale-105 hover:shadow-xl transition-transform duration-200 cursor-pointer"
      >
        <div className="px-4 py-6 flex flex-col justify-center h-full">
          <p className="text-3xl font-semibold mb-2">サークルを探す</p>
          <p className="text-base font-semibold">大阪大学外国語学部のサークルを調べる</p>
        </div>
      </Link>

      <Link
        href="/events"
        className="w-full md:w-[500px] min-h-[180px] bg-gray-500 text-white rounded-lg flex flex-col justify-center items-center text-center hover:bg-sky-900 hover:scale-105 hover:shadow-xl transition-transform duration-200 cursor-pointer"
      >
        <div className="px-4 py-6 flex flex-col justify-center h-full">
          <p className="text-3xl font-semibold mb-2">イベントを探す</p>
          <p className="text-base font-semibold">文連協が開催するイベントを調べる</p>
        </div>
      </Link>
    </section>
      {/* 文連協とはセクション */}
      <section className="max-w-250 mx-auto bg-white rounded-xl shadow-lg p-8 border">
        <h1 className="text-4xl font-bold text-center border-b pb-4 mb-6">
          文連協とは？
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          大阪大学外国語学部文化部連絡協議会（通称：文連協）は、箕面キャンパスの文化活動を盛り上げるために活動する学部公認団体です。
          箕面サークルオリエンテーションをはじめとした様々なイベントを通じて、学生の交流と活動を支援しています。
        </p>
      </section>


    </div>
  );
}


