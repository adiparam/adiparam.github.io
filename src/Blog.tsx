import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import './Blog.css';

interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

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

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postModules = import.meta.glob('../blogcontent/*.md', { as: 'raw' });
      const postPromises = Object.entries(postModules).map(async ([path, resolver]) => {
        const rawContent = await resolver();
        const { data } = matter(rawContent);
        const slug = path.split('/').pop()?.replace('.md', '') || '';
        return { ...data, slug } as Post;
      });
      const fetchedPosts = await Promise.all(postPromises);
      setPosts(fetchedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-section">
      <h2>Blog</h2>
      <div className="blog-content">
        {posts.map(post => (
          <div className="blog-post" key={post.slug}>
            <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
            <p className="blog-date">{formatDate(post.date)}</p>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
