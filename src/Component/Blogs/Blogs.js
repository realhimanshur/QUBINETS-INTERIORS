import React from "react";
import "./Blogs.css";  
class Blogs extends React.Component {
  render() {
    const blogPosts = [
      {
        id: 1,
        title: '10 Tips for Creating a Functional Home Office',
        date: 'July 1, 2024',
        author: 'John Doe',
        excerpt: 'Discover how to design a home office that boosts productivity and enhances your work-from-home experience.',
        link: '#',
      },
      {
        id: 2,
        title: 'The Power of Color: Choosing the Right Palette for Your Space',
        date: 'June 15, 2024',
        author: 'Jane Smith',
        excerpt: 'Learn how to select the perfect colors for your home or office to create the desired atmosphere and style.',
        link: '#',
      },
    ];

    return (
      <div className="container">
        <section className="blogs_banner">
          <img
            src="/img/blogs.jpg"
            alt="BLOGS"
          />
          <h1>KEEP YOURSELF UPDATED</h1>
          <p>Explore our latest insights, trends, and tips on interior design.</p>
        </section>

        <hr className="hr" />
        
        {blogPosts.map((post) => (
          <div key={post.id} className="post">
            <h2 className="postTitle"><a href={post.link} className="postLink">{post.title}</a></h2>
            <p className="meta"><strong>Date:</strong> {post.date}</p>
            <p className="meta"><strong>Author:</strong> {post.author}</p>
            <p className="excerpt">{post.excerpt}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Blogs;
