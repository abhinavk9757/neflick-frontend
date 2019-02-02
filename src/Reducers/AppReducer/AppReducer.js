const initialState = {
  verified: 'null',
};

const appReducer = (state = initialState, action) => {
  if (action.type === 'VERIFIED') {
    return {
      verified: action.payload,
    };
  } else {
    return state;
  }
};

export default appReducer;
