const initialState = {
  email: null,
  password: null,
  displayError: 'none',
  verified: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'E_MAIL':
      const email = action.payload;
      return { ...state, email: email };
    case 'PASSWORD':
      const password = action.payload;
      return { ...state, password: password };
    case 'VERIFIED':
      const verified = action.payload;
      return { ...state, verified: verified };
    case 'DISPLAY_ERROR':
      const displayError = action.payload;
      return { ...state, displayError: displayError };
    default:
      return state;
  }
};

export default loginReducer;
