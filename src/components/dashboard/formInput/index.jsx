import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { HIT_ADD_LIST } from "redux/actions";
import { NOW } from "helpers/createdAt";
import { Hooks } from "providers";
function Index(props) {
  const { __popUp, set__popUp, set__popUpData, __popUpData } =
    useContext(Hooks);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    // validate,
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is required"),
      desc: Yup.string().required("Desc is required"),
    }),
    onSubmit: async (values) => {
      if (props.full) {
        const data = {
          id: __popUpData.id,
          title: formik.values.title,
          description: formik.values.desc,
        };
        dispatch({ type: HIT_ADD_LIST, payload: [data, "update"] });
      } else {
        const data = {
          id: props.list.length + 1,
          title: formik.values.title,
          description: formik.values.desc,
          status: 0,
          createdAt: NOW(),
        };
        dispatch({ type: HIT_ADD_LIST, payload: data });
      }
      set__popUp(false);
    },
  });
  useEffect(() => {}, [formik, __popUpData]);
  useEffect(() => {
    if (props.full) {
      formik.values.title = __popUpData.title;
      formik.values.desc = __popUpData.desc;
    }
  }, []);

  return (
    <div className="mj-form-input container">
      <div className="title">
        <h2 className="font-weight-bold">
          {props.full ? "Edit Todo List" : "Majoo - Todo List"}
        </h2>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div
            className={`input d-flex flex-column ${
              !props.full && " col-lg-6"
            } col-12 p-0`}
          >
            <label htmlFor="title" className="m-0">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="pl-3"
              placeholder="Input your title"
              defaultValue={props.full && __popUpData.title}
              style={{
                border: formik.errors.title ? "2px solid red" : "",
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title ? (
              <span className="error text-danger pt-1">
                {formik.errors.title}
              </span>
            ) : null}
            <label htmlFor="title" className="m-0 pt-4">
              Description
            </label>
            <textarea
              id="desc"
              className="p-3"
              defaultValue={props.full && __popUpData.desc}
              placeholder="Input your description"
              style={{
                border: formik.errors.desc ? "2px solid red" : "",
              }}
              onChange={(e) => (formik.values.desc = e.target.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.desc && formik.errors.desc ? (
              <span className="error text-danger pt-1">
                {formik.errors.desc}
              </span>
            ) : null}
          </div>
          <div className={`btn-wrap ${!props.full && " col-lg-6"} col-12 p-0`}>
            <button
              type="submit"
              onClick={(e) => formik.handleSubmit(e)}
              className="btn-submit my-3 float-right rounded bg-primary text-white border-0 px-3 py-2"
            >
              {!props.full ? "Submit" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Index;
