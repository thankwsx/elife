'use client';

import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

type DiaryEntity = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
};

export default function DiaryList() {
  const [diaryList, setDiaryList] = useState<{ data: DiaryEntity[] }>({ data: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const resp = await fetch(
          "https://strapi.jackyqi.cn/api/diarys?sort=title:desc&pagination[pageSize]=1&pagination[page]=1"
        );
        if (!resp.ok) {
          throw new Error('网络请求失败');
        }
        const data = await resp.json();
        setDiaryList(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '获取日记失败');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiaries();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen p-8 pb-20 sm:p-20 flex items-center justify-center">
        <div className="text-gray-600">加载中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 pb-20 sm:p-20 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

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
              <div className="text-sm text-gray-500">
                {new Date(diary.updatedAt).toLocaleString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              <ReactMarkdown components={{
                p: (props) => <p className="text-sm text-gray-700 whitespace-pre-wrap" {...props} />,
              }}>
                {diary.content}
              </ReactMarkdown>
            </div>
          );
        })}
      </div>
    </div>
  );
}
