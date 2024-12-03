"use client";
import Layout from "@/components/Layout";
import NewsHero from "@/components/News-Articles/hero";
import NewsContent from "@/components/News-Articles/NewsContent";
import { news } from "@/data";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

function DetailedNews() {
  const params = useParams();
  const id = params.news;

  const [filteredSubNews, setFilteredSubNews] = useState<any>([]);

  useEffect(() => {
    const filterSubNewsById = (subNewsId: string | string[] | undefined) => {
      const flattenedSubNews = news.flatMap((category) => category.subNews);
      const result = flattenedSubNews.filter(
        (subNews: any) => subNews.id === subNewsId
      );
      return result;
    };
    if (id) {
      const result = filterSubNewsById(id);
      setFilteredSubNews(result);
    }
  }, [id]);

  const sanitizedContent = DOMPurify.sanitize(filteredSubNews[0]?.content);

  return (
    <Layout>
      <main>
        <NewsHero
          title={filteredSubNews[0]?.title}
          author={filteredSubNews[0]?.author}
        />
        <NewsContent sanitizedContent={sanitizedContent} />
      </main>
    </Layout>
  );
}

export default DetailedNews;
