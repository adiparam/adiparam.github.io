import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
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

interface PostData {
  content: string;
  title: string;
  date: string;
  bannerHeader?: string;
  bannerSubtext?: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postFile = await import(`../blogcontent/${slug}.md?raw`);
        const { data, content } = matter(postFile.default);
        setPost({ ...data, content } as PostData);
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
          {post.bannerSubtext && (
            <div className="banner-caption">
              {post.bannerSubtext}
            </div>
          )}
        </div>
      )}
      <h2>{post.title}</h2>
      <p className="blog-date">{formatDate(post.date)}</p>
      <ReactMarkdown
        components={{
          code({className, children, ...props}: any) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            
            // Only render SyntaxHighlighter for code blocks (not inline code)
            if (className) {
              return (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={language}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            }
            
            // For inline code
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPost;
