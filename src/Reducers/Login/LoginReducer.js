const initialState = {
  email: null,
  password: null,
  displayError: 'none',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'E_MAIL':
      const email = action.payload;
      return { ...state, email: email };
    case 'PASSWORD':
      const password = action.payload;
      return { ...state, password: password };
    case 'DISPLAY_ERROR':
      const displayError = action.payload;
      return { ...state, displayError: displayError };
    default:
      return state;
  }
};

export default loginReducer;
