import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import FormInput from "components/dashboard/formInput";
import ListDone from "components/dashboard/listDone";
import ListUnDone from "components/dashboard/listUnDone";
import PopUp from "components/popup/detail";
import { HIT_MOCK_API } from "redux/actions";
import { Hooks } from "providers";
function Index() {
  const { __popUp, set__popUp } = useContext(Hooks);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => ({
    data: state?.list?.data,
  }));

  useEffect(() => {
    dispatch({ type: HIT_MOCK_API });
  }, []);
  useEffect(() => {}, [__popUp]);
  return (
    <>
      {__popUp && <PopUp />}
      <div className="mj-dashboard py-sm-5 py-2 ">
        <FormInput list={data} />
        <div className="mj-list-done border-1 container d-lg-flex d-block m-auto justify-content-center px-3 ">
          <ListUnDone data={data} />
          <ListDone data={data} />
        </div>
      </div>
    </>
  );
}

export default Index;
