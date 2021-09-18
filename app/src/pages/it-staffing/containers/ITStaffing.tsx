import React from "react";

import ITStaffingContent from "../components/ITStaffingContent";
import Reviews from "../../home/components/Reviews";

const ITStaffing: React.FC<any> = (props) => {
  return (
    <>
      <ITStaffingContent />
      <Reviews />
    </>
  );
};

export default ITStaffing;
