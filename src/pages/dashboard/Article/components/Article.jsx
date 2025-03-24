import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

export default function Article({
  title,
  description,
  content,
  author,
  publishDate,
  readTime,
  tags = [],
}) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray300 flex items-center justify-center text-lg font-semibold text-white">
          {author.avatar ? (
            <img
              src={author.avatar}
              alt={author.name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            author.name.charAt(0)
          )}
        </div>
        <div>
          <p className="font-medium text-gray-800">{author.name}</p>
          {author.role && (
            <p className="text-sm text-gray-500">{author.role}</p>
          )}
        </div>
      </div>


      <h1 className="text-2xl font-bold text-gray-900 font-epilogue">{title}</h1>
      {description && <p className="mt-2 text-gray-600">{description}</p>}

      <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Icon icon="mdi:calendar-month-outline" className="text-lg mr-1" />
          <span>{publishDate}</span>
        </div>
        <div className="flex items-center">
          <Icon icon="mdi:clock-outline" className="text-lg mr-1" />
          <span>{readTime} read</span>
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div
        className="prose max-w-none mt-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <div className="flex space-x-3">
          <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
            <Icon icon="mdi:thumb-up-outline" className="text-xl mr-2" />
            Like
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
            <Icon icon="mdi:comment-outline" className="text-xl mr-2" />
            Comment
          </button>
        </div>

        <div className="flex space-x-3">
          <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
            <Icon icon="mdi:bookmark-outline" className="text-xl mr-2" />
            Save
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
            <Icon icon="mdi:share-outline" className="text-xl mr-2" />
            Share
          </button>
        </div>
      </div>

      <div className="w-full pt-6 border-t mt-4">
        <h3 className="font-medium mb-2 text-gray-800">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded-lg text-gray-700 text-left">
            Advanced CSS Techniques
          </button>
          <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded-lg text-gray-700 text-left">
            JavaScript Performance Tips
          </button>
        </div>
      </div>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  publishDate: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
