import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4 py-8 space-y-12">
      {/* 文連協とはセクション */}
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border">
        <h1 className="text-4xl font-bold text-center border-b pb-4 mb-6">
          文連協とは？
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          大阪大学外国語学部文化部連絡協議会（通称：文連協）は、箕面キャンパスの文化活動を盛り上げるために活動する学部公認団体です。
          箕面サークルオリエンテーションをはじめとした様々なイベントを通じて、学生の交流と活動を支援しています。
        </p>
      </section>

      {/* ボタンリンクセクション */}
      <section className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <Link
          href="/clubs"
          className="w-full md:w-64 h-64 bg-sky-900 text-white rounded-lg flex flex-col justify-center items-center text-center hover:bg-sky-100 hover:scale-105 hover:shadow-xl transition-transform duration-200 cursor-pointer"
        >
          <p className="text-4xl font-bold mb-2">▶</p>
          <p className="text-xl font-semibold">サークルを探す</p>
        </Link>
      </section>
    </div>
  );
}


