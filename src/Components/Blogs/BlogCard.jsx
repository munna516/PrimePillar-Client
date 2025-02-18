

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-5 w-full border mt-5">
      <h2 className="text-xl  text-dark-blue font-bold dark:text-white">
        {blog.title}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {blog.postDate} | {blog.name}
      </p>
      <p className="mt-2 text-gray-700 dark:text-gray-300 text-base ">
        {
        blog.description[0]
        }
        {
        blog?.description[1]
        }
        {
        blog?.description[2]
        }
        {
        blog?.description[3]
        }
        {
        blog?.description[4]
        }

      </p>
    </div>
  );
};

export default BlogCard;
