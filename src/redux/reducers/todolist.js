/* eslint-disable no-fallthrough */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
import { GET_ADD_LIST, GET_MOCK_API, GET_REMOVE_LIST } from "redux/actions";

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ADD_LIST: {
      if (payload?.[1] === "delete") {
        const datas = { ...state };
        const extras = datas.data.filter((s, i) => {
          return state.data[i].id !== payload[0];
        });

        return {
          data: extras,
        };
      }
      if (payload?.[1] === "status") {
        const datas = { ...state };

        datas.data.map((s, i) => {
          if (s.id === payload[0]) {
            state.data[i].status = state.data[i].status === 0 ? 1 : 0;
          }
        });
        return {
          data: [...datas.data],
        };
      }
      if (payload?.[1] === "update") {
        const datas = { ...state };

        datas.data.map((s, i) => {
          if (s.id === payload[0].id) {
            state.data[i].title = payload[0].title;
            state.data[i].description = payload[0].description;
          }
        });

        // localStorage.setItem("update", true);
        return {
          data: [...datas.data],
        };
      }
      if (payload === "undefined" || payload === undefined) {
        return state;
      }
      return {
        data: [...state.data, payload],
      };
    }
    case GET_REMOVE_LIST: {
      if (payload === "undefined" || payload === undefined) {
        return state;
      }
      return {
        data: [...state.data, payload],
      };
    }
    case GET_MOCK_API: {
      if (state.data.length < 5) {
        return {
          data: payload,
        };
      }
    }
    default: {
      return state;
    }
  }
};
