const initialState = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
};

const toolBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSPARENT':
      return {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      };
    case 'OPAQUE':
      return {
        backgroundColor: 'rgba(0, 0, 0, 1)',
      };
    default:
      return state;
  }
};

export default toolBarReducer;
