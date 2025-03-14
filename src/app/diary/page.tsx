import ReactMarkdown from 'react-markdown';

type DiaryEntity = {
  id: string;
  title: string;
  content: string;
};

export default async function DiaryList() {
  const resp = await fetch(
    "https://strapi.jackyqi.cn/api/diarys?sort=title:desc"
  );
  const diaryList = await resp.json();
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 gap-8">
        {diaryList.data?.map((diary: DiaryEntity) => {
          return (
            <div
              key={diary.id}
              className="w-full flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {diary.title}
              </h2>
<ReactMarkdown components={{
  p: (props) => <p className="text-sm text-gray-700 whitespace-pre-wrap" {...props} />,
}}>
  {diary.content}
</ReactMarkdown>
{/* Remove the unused button */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Remove the unused openEditor function and DiaryEditor reference
