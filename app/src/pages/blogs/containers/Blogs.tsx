import React from "react";

import { InfoCard } from "../../../components";
import { blogs } from "./helpers";

import "./Blogs.css";

const Blogs: React.FC<any> = (props) => {
  return (
    <>
      <div className="blogs">
        <div className="container">
          <h1>Blogs</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <div className="blogs-content">
            {blogs?.map((blog: any) => {
              return (
                <InfoCard
                  {...{
                    ...blog,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
