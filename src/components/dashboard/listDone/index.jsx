import { Hooks } from "providers";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import undo from "assets/img/undo.png";
import edit from "assets/img/edit.png";
import { HIT_ADD_LIST } from "redux/actions";

function Index({ data }) {
  const dispatch = useDispatch();
  const { __popUp, set__popUp, __popUpData, set__popUpData } =
    useContext(Hooks);
  const handlePopUp = (val) => {
    set__popUp(true);
    set__popUpData({
      id: val.id,
      title: val.title,
      desc: val.desc,
    });
  };

  const done = data
    ?.filter((s) => s.status !== 0)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  return (
    <>
      <div className="table-wrap col-lg-6 col-12 p-1 mb-sm-0 mb-5">
        <div className="table-list-not d-flex text-align-center justify-content-center my-auto text-center text-white">
          <h5 className="my-auto">Task Done</h5>
        </div>
        <div className="row col-12 border py-2 m-0 ">
          <div className="col-1 p-0 font-weight-bold">No</div>
          <div className="col-8 p-0 font-weight-bold">Name</div>
          <div className="col-3 p-0 font-weight-bold text-center">Action</div>
        </div>
        {done?.map((val, i) => {
          return (
            <div className="row col-12 border border-top-0 py-2 m-0 ">
              <div className="col-1 pl-1 text-secondary my-auto">{i + 1}</div>
              <div className="col-7 p-0 text-secondary my-auto text-truncate">
                {val.title}
              </div>
              <div className="d-flex justify-content-center align-items-center col-4 p-0 text-secondary my-auto text-center">
                <div
                  onClick={() =>
                    handlePopUp({
                      id: val.id,
                      title: val.title,
                      desc: val.description,
                    })
                  }
                >
                  <img src={edit} alt="" width="34" height="34px" />
                </div>
                <div
                  className="pl-1"
                  onClick={() =>
                    dispatch({
                      type: HIT_ADD_LIST,
                      payload: [val.id, "status"],
                    })
                  }
                >
                  <img src={undo} alt="" width="34" height="34px" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Index;
