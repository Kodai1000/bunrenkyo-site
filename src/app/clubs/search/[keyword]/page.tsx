import ListClubs from "@/components/microCMS/List_clubs";
type Props = {
  params: Promise<{
    keyword: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  let {keyword} = await params;
  keyword = decodeURIComponent(keyword);
  console.log("keyword:", keyword);
  return (
    <div className="px-4 py-8 space-y-12">
      <h1 className="text-3xl font-bold mb-6">検索結果: {keyword}</h1>
      <ListClubs option={keyword} />
    </div>
  )
}
