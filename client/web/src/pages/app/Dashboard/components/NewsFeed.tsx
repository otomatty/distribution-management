import React from "react";
import { Newspaper } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
}

interface NewsFeedProps {
  news: NewsItem[];
}

export const NewsFeed: React.FC<NewsFeedProps> = ({ news }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">ニュース</h2>
      <ul className="space-y-4">
        {news.map((item) => (
          <li
            key={item.id}
            className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
          >
            <div className="flex items-start">
              <Newspaper className="mr-2 h-5 w-5 text-blue-500" />
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{item.summary}</p>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
