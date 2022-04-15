import api from "../API";

//Select type of form action

export const selectedForm = (data) => {
  console.log(data);
  return {
    type: "SELECTED_FORM_TYPE",
    payload: data,
  };
};

export const fetchTypeOfService = (data) => {
  return {
    type: "SELECTED_SERVICE_TYPE",
    payload: data,
  };
};

export const fetchDescription = (text) => {
  return {
    type: "DESCRIPTION",
    payload: text,
  };
};

export const fetchDateTime = (text) => {
  return {
    type: "DATE_TIME",
    payload: text,
  };
};

export const fetchUserInformation = (text) => {
  return {
    type: "USER_INFORMATION",
    payload: text,
  };
};

export const fetchCurentLocation = (text) => {
  return {
    type: "CURRENT_LOCATION",
    payload: text,
  };
};

export const fetchAdress = (text) => {
  return {
    type: "ADRESS",
    payload: text,
  };
};

export const bookNow = (text) => {
  return {
    type: "BOOK_NOW",
    payload: text,
  };
};

// Fetch Apis ADMIN adn ORDER
export const fetchAdminsProducts = () => async (dispatch) => {
  const response = await api.get(`/admins/`);
  dispatch({
    type: "FETCH_API_ADMINS",
    payload: response.data,
  });
};
export const fetchOrderProducts = () => async (dispatch) => {
  const response = await api.get(`/orders/`);
  dispatch({
    type: "FETCH_API_ORDERS",
    payload: response.data,
  });
};

//CRUD OPERATIONS

export const addProduct = (name, product) => async (dispatch) => {
  const response = await api.post(`/${name}/add/`, product);
  dispatch({
    type: "ADD_PRODUCT",
    payload: response.data,
  });
};

export const editProduct = (name, id, formValues) => async (dispatch) => {
  const response = await api.post(`/${name}/edit/${id}/`, formValues);
  dispatch({
    type: "EDIT_PRODUCT",
    payload: response.data,
  });
};

export const deleteProduct = (name, id) => async (dispatch) => {
  await api.delete(`/${name}/delete/${id}/`);
  dispatch({
    type: "DELETE_PRODUCT",
    payload: id,
  });
};

// Curent Admin
export const CurentAdmin = (data) => {
  if (data === "") {
    return {
      type: "CURENT_ADMIN_LOGOUT",
    };
  }
  return {
    type: "CURENT_ADMIN",
    payload: data,
  };
};

//Read Admin

export const ReadAdmin = (admin) => {
  return {
    type: "READ_ADMIN",
    payload: admin,
  };
};
//Read ORDER

export const ReadOrder = (order) => {
  return {
    type: "READ_ORDER",
    payload: order,
  };
};

export const selectedAnyItem = (item) => {
  return {
    type: "SELECTED_ANY_ITEM",
    payload: item,
  };
};
