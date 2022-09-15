import { useState } from "react";

const Blog = (props) => {
  const [blog, setBlog] = useState(false);

  const openBlog = () => {
    setBlog((prev) => !prev);
  };

  return (
    <div className="max-w-screen-sm	 px-5 pt-3 mb-20 flex flex-col justify-center items-center">
      <div className={`w-80 h-20 ${props.color} rounded-xl`}></div>
      <div className="drop-shadow-2xl bg-violet-900 flex text-center px-5 py-2 mt-[-2rem] rounded">
        <h1
          className="flex font-bold text-2xl text-white select-none"
          onClick={openBlog}
        >
          this is sample
        </h1>
      </div>
      <div
        className={` flex flex-col ${
          blog ? "block" : "hidden"
        } whitespace-pre-line
        bg-yellow-100 p-3 rounded drop-shadow-lg`}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          corrupti veniam maxime, modi nisi laborum beatae aut nesciunt quisquam
          aliquid quod, porro laudantium fugit iste voluptate adipisci quos,
        </p>
        <p>
          tempore autem. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Doloribus corrupti veniam maxime, modi nisi laborum beatae aut
          nesciunt quisquam aliquid quod, porro laudantium fugit iste voluptate
          adipisci quos, tempore autem.
        </p>
      </div>
    </div>
  );
};

export default Blog;
