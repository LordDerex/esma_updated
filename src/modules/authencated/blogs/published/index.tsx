import BlogCard from "components/blogCard";
import React from "react";

const PublishedBlog = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default PublishedBlog;
