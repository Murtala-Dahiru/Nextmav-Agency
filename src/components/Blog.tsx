import React from 'react';

const Blog = () => {
  const articles = [
    {
      title: 'The Future of AI in Business: Opportunities & Risks',
      excerpt: 'Explore how artificial intelligence is reshaping business landscapes and what it means for your organization.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      date: '',
    },
    {
      title: 'Cloud Cost Optimization: How Companies Save Millions',
      excerpt: 'Learn the strategies and best practices for optimizing your cloud infrastructure costs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      date: '',
    },
    {
      title: 'Cybersecurity in 2025: Key Trends & Challenges',
      excerpt: 'Stay ahead of emerging cybersecurity threats and prepare your organization for the future.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      date: '',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Latest Insights</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{article.date}</div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;