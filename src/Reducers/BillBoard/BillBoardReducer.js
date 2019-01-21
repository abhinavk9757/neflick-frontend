const initialState = {
  marginBot: 0,
};

const billBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_BOT_MARGIN':
      const currentHeight = document.getElementById('billboard').clientHeight;
      return {
        marginBot: currentHeight * -0.18,
      };
    default:
      return state;
  }
};

export default billBoardReducer;