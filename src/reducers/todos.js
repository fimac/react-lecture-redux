const INIT_STATE = {
  todos: ['a', 'b', 'c '],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state.todos, action.payload];
    default:
      return state;
  }
};
