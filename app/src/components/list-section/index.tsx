import React from "react";

import "./ListSection.css";

const ListSection: React.FC<any> = (props) => {
  const { list = [], selectedItem, setSelectedItem } = props;
  return (
    <div className="list-container">
      <div className="list">
        {list?.map((item: any) => {
          return (
            <div
              className={
                selectedItem === item?.key ? "list-item-active" : "list-item"
              }
              onClick={() => setSelectedItem(item?.key)}
            >
              {item?.label}
            </div>
          );
        })}
      </div>
      <div className="contact-section">
        Contact a Customer Support at
        <br />
        <a href="">support@websitename.com</a>
      </div>
    </div>
  );
};

export default ListSection;
