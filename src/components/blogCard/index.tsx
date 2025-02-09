import React from "react";
import icons from "constants/icons";
import image from "constants/images";

const BlogCard = () => {
  return (
    // <div className="w-[280px] rounded-2xl blogShodow bg-white p-1  border border-[#D8D8D8] ">
    //   <img src={icons.more} alt="icon" className="p-2" />
    //   <img
    //     src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFCEUQA6xphnnJfF97IORPaCqU-_6yfWJhIyyesbXHNDI6oIQhihi9OeenddeHRRjMqlZJEd5pqueA5ZV4_H8Oow5d9BIQDmEkyJcCmA"
    //     alt="Blog Cover"
    //     className="w-full h-36 object-cover rounded-lg"
    //   />
    //   <div className="pt-3">
    //     <p className="text-base font-semibold">
    //       Lorem ipsum dolor sit amet consectetur.
    //     </p>
    //     <p className="text-gray-600">
    //       Lectus eu mattis velit ut ac tortor pharetra.
    //     </p>
    //   </div>
    //   <div className="flex items-center justify-between mt-4">
    //     <div className="flex items-center space-x-2">
    //       <img
    //         src="https://i.pravatar.cc/40" // Random avatar
    //         alt="Author"
    //         className="w-8 h-8 rounded-full"
    //       />
    //       <span className="text-sm font-semibold">Sarah Elohor</span>
    //     </div>
    //     <span className="text-sm text-gray-500">Jan 12, Dec</span>
    //   </div>
    // </div>

    <div className="w-[310px] rounded-[10px] py-2.5 px-3.5 blogShadow">
      <img src={icons.more} alt="icon" className="py-2 px-1 cursor-pointer" />
      <div className="">
        <img src={image.blogImg} alt="blog" />
      </div>
      <h1 className="text-base font-medium pt-1">
        Lorem ipsum dolor sit amet consectetur. Lectus eu mattis velit ut ac
        tortor pharetra.
      </h1>
      <div className="flex justify-between items-center pt-3">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile-pic"
            className="w-8 h-8 rounded-full"
          />

          <h2 className="text-sm font-medium">Sarah Elohor</h2>
        </div>

        <h1 className="text-sm font-medium">Jan 12, Dec</h1>
      </div>
    </div>
  );
};

export default BlogCard;
