const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ];
    default:
      return state;
  }
};

export default users;