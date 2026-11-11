export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: users
});
export const setPosts = (posts) => ({
  type: 'SET_POSTS',
  payload: posts
}); 
export const setTodos = (todos) => ({
  type: 'SET_TODOS',
  payload: todos
});
export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user
});