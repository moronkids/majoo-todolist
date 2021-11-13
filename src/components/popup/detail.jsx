import React, { useContext, useEffect } from "react";
import FormInput from "components/dashboard/formInput";
import { Hooks } from "providers";
function Detail() {
  const { __popUp, set__popUp, set__popUpData, __popUpData } =
    useContext(Hooks);
  useEffect(() => {}, [__popUpData]);
  return (
    <div className="popup">
      <div
        className="bg-overlay"
        onClick={(e) => {
          set__popUp(false);
        }}
      ></div>
      <div className="popup-detail">
        <div className="wrap">
          <div className="mj-dashboard">
            <FormInput full={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
