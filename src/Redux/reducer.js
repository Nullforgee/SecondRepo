const initialState = {
  users: [],
  posts: [],
  todos: [],
  tache: []
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
        case "SET_USERS":
      return {
        ...state,
        users: action.payload
      };
       case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload
      };

    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload
      };

    default:
      return state;
}}