import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import './Blog.css';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  
  // Add ordinal suffix (st, nd, rd, th)
  const getOrdinalSuffix = (n: number): string => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };
  
  return `${month} ${day}${getOrdinalSuffix(day)} ${year}`;
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ content: string; title: string; date: string; bannerHeader?: string } | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postFile = await import(`../blogcontent/${slug}.md?raw`);
        const { data, content } = matter(postFile.default);
        setPost({ ...data, content } as { content: string; title: string; date: string; bannerHeader?: string });
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post-full">
      {post.bannerHeader && (
        <div className="blog-banner">
          <img src={`/resources/${post.bannerHeader}`} alt="Blog Banner" />
        </div>
      )}
      <h2>{post.title}</h2>
      <p className="blog-date">{formatDate(post.date)}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
