// import { useParams } from "react-router-dom";
import Article from "./components/Article";
const ArticlePage = () => {
  // const { articleId } = useParams();

  // This would normally come from an API call based on the articleId
  const articleData = {
    title: "Understanding Modern Web Development",
    description: "A comprehensive guide to web development practices in 2023",
    content: `
      <p>Web development has evolved significantly over the past decade. Modern web applications are more complex, interactive, and user-friendly than ever before.</p>
      
      <h2>The Rise of JavaScript Frameworks</h2>
      <p>JavaScript frameworks like React, Vue, and Angular have revolutionized the way developers build web applications. These frameworks provide powerful tools for creating dynamic user interfaces with reusable components.</p>
      
      <h3>Key Advantages:</h3>
      <ul>
        <li>Component-based architecture</li>
        <li>Virtual DOM for improved performance</li>
        <li>Declarative programming model</li>
        <li>Rich ecosystem of libraries and tools</li>
      </ul>
      
      <h2>CSS Evolution</h2>
      <p>CSS has also seen significant advancements with the introduction of preprocessors like Sass and LESS, as well as utility-first frameworks like Tailwind CSS.</p>
      
      <h2>The Importance of Responsive Design</h2>
      <p>With the increasing diversity of devices used to access the web, responsive design has become essential. Building websites that work well on desktops, tablets, and smartphones is no longer optional.</p>
      
      <h2>Performance Optimization</h2>
      <p>Web performance has become a critical factor in user experience and SEO rankings. Techniques like code splitting, lazy loading, and image optimization are now standard practices in web development.</p>
      
      <h2>Conclusion</h2>
      <p>Web development continues to evolve rapidly, with new tools and techniques emerging regularly. Staying up-to-date with these changes is essential for building modern, performant web applications.</p>
    `,
    author: {
      name: "Jane Smith",
      avatar: "/placeholder.svg",
      role: "Senior Web Developer",
    },
    publishDate: "September 15, 2023",
    readTime: "8 min",
    tags: ["Web Development", "JavaScript", "CSS", "Responsive Design"],
  };
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 p-6 pt-16 md:pt-8 ml-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight font-epilogue">Article</h1>
          <p className="text-gray300 mt-1 text-sm">
            Expand your knowledge with detailed articles
          </p>
        </div>

        <Article
          title={articleData.title}
          description={articleData.description}
          content={articleData.content}
          author={articleData.author}
          publishDate={articleData.publishDate}
          readTime={articleData.readTime}
          tags={articleData.tags}
        />
      </div>
    </div>
  );
};

export default ArticlePage;
