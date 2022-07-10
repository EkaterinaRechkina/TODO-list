import { LOGOUT_USER, LOG_USER, REG_USER } from "../types";

export function userReducer(state = [], action) {
  const { type } = action;

  switch (type) {
    case REG_USER: {
      return action.payload;
    }

    case LOG_USER: {
      return action.payload;
    }
    case LOGOUT_USER: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
