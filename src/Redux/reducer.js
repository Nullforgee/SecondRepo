const initialState = {
  users: [],
  posts: [],
  todos: []
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
      case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
      case 'UPDATE_USER':
        return {
          ...state,
          users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
        };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}