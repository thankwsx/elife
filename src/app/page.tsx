import Image from "next/image";

import ReactMarkdown from 'react-markdown';

type ArticleEntity = {
  id: string;
  title: string;
  content: string;
};

export default async function Home() {
  const resp = await fetch(
    "https://strapi.jackyqi.cn/api/articles?sort=createdAt:desc&populate=*"
  );
  const articleList = await resp.json();
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 gap-8">
        {articleList.data?.map((diary: ArticleEntity) => {
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
  {diary.blocks[0].body}
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
