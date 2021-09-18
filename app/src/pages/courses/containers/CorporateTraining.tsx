import React from "react";

import CorporateTrainingContent from "../components/CorporateTrainingContent";
import Reviews from "../../home/components/Reviews";

const CorporateTraining: React.FC<any> = (props) => {
  return (
    <>
      <CorporateTrainingContent />
      <Reviews />
    </>
  );
};

export default CorporateTraining;
