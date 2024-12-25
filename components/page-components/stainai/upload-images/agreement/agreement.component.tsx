import React, { useState } from "react";
import classes from "./agreement.module.sass";
import classnames from "classnames";

interface AgreementProps {
  setAgree: (agree: boolean) => void;
  agree: boolean;
}

const Agreement: React.FC<AgreementProps> = ({ setAgree, agree }) => {
  return (
    <div className={classes.wrapper}>
      <input
        type="checkbox"
        onChange={() => {
          setAgree(!agree);
        }}
      />
      Agree: This web application tool is designed to assist academic
      institutes in quantifying cells for research and educational
      purposes. While we strive to ensure the accuracy and reliability
      of the results, we cannot guarantee the absolute precision of the
      calculations. The accuracy of cell counting may vary based on
      image quality and user input. The tool is not a substitute for
      professional medical or scientific analysis. Users are encouraged
      to verify the results independently for critical applications. The
      developers of this tool disclaim any responsibility for the
      accuracy, completeness, or reliability of the results obtained.
      Users are solely responsible for the interpretation and use of the
      data generated by this application. By using this web application,
      you agree to these terms and acknowledge the limitations of the
      tool.
    </div>
  );
};

export default Agreement;