export default async function DiaryList() {
  const resp = await fetch("https://strapi.jackyqi.cn/api/diarys");
  const diaryList = await resp.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {diaryList.data.map((diary) => {
        return (
          <div key={diary.id} className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
            <h2 className="text-gray-900">{diary.title}</h2>
            <p className="text-sm/6 text-gray-700"><pre>{diary.content}</pre></p>
          </div>
        );
      })}
    </div>
  );
}
