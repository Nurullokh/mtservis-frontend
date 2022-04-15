import { combineReducers } from "redux";
import { selectedFormReducer } from "./formRender";

export const fetchTypeOfServiceReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECTED_SERVICE_TYPE":
      return action.payload;
    default:
      return state;
  }
};

export const fetchDescriptionReducer = (state = "No description", action) => {
  switch (action.type) {
    case "DESCRIPTION":
      return action.payload;
    default:
      return state;
  }
};

export const fetchDateTimeReducer = (state = [], action) => {
  switch (action.type) {
    case "DATE_TIME":
      return action.payload;
    default:
      return state;
  }
};

export const fetchUserInformationReducer = (state = [], action) => {
  switch (action.type) {
    case "USER_INFORMATION":
      return action.payload;
    default:
      return state;
  }
};

export const fetchCurentLocationReducer = (state = [], action) => {
  switch (action.type) {
    case "CURRENT_LOCATION":
      return action.payload;
    default:
      return state;
  }
};

export const fetchAdressReducer = (state = [], action) => {
  switch (action.type) {
    case "ADRESS":
      return action.payload;
    default:
      return state;
  }
};

export const bookNowReducer = (state = [], action) => {
  switch (action.type) {
    case "BOOK_NOW":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  selectedData: selectedFormReducer,
  serviceType: fetchTypeOfServiceReducer,
  describtion: fetchDescriptionReducer,
  dateTime: fetchDateTimeReducer,
  userInformation: fetchUserInformationReducer,
  currentLocation: fetchCurentLocationReducer,
  adress: fetchAdressReducer,
  booked: bookNowReducer,
});
