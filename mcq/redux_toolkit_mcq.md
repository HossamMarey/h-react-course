# Redux Toolkit - Multiple Choice Questions

1. What is the primary purpose of Redux Toolkit?
   a) To replace Redux entirely
   b) To simplify Redux setup and usage
   c) To add new features to React
   d) To optimize React performance

2. Which function from Redux Toolkit is used to create a Redux store?
   a) createStore
   b) configureStore
   c) makeStore
   d) setupRedux

3. What does the `createSlice` function in Redux Toolkit do?
   a) Creates a new React component
   b) Generates action creators and reducers
   c) Splits the Redux store into multiple parts
   d) Creates middleware for async actions

4. In Redux Toolkit, what is the purpose of `createAsyncThunk`?
   a) To create synchronous actions
   b) To handle side effects and async logic
   c) To optimize Redux performance
   d) To replace Redux middleware

5. Which of the following is true about immer in Redux Toolkit?
   a) It's an optional add-on
   b) It allows "mutating" logic in reducers
   c) It's used for routing
   d) It replaces the need for actions

6. What is the recommended way to define initial state in a Redux Toolkit slice?
   a) As a separate constant
   b) Within the `createSlice` function
   c) In the store configuration
   d) Using a special `initState` function

7. How does Redux Toolkit simplify the process of adding middleware?
   a) It doesn't support middleware
   b) It automatically adds all available middleware
   c) It provides a simple way to add middleware in `configureStore`
   d) It replaces middleware with a new concept

8. What is the purpose of `createEntityAdapter` in Redux Toolkit?
   a) To create new entities in the database
   b) To normalize data and provide CRUD operations
   c) To handle authentication
   d) To create React components for entities

9. In Redux Toolkit, how are action types typically defined?
   a) Manually as string constants
   b) Automatically by `createSlice`
   c) Using a separate `createActionType` function
   d) They are not used in Redux Toolkit

10. What is the `prepare` callback used for in Redux Toolkit's `createSlice`?
    a) To prepare the initial state
    b) To customize the payload of action creators
    c) To prepare the store for updates
    d) To create middleware

11. How does Redux Toolkit handle combining reducers?
    a) It doesn't support combining reducers
    b) Using the `combineReducers` function
    c) Automatically when using `configureStore`
    d) Through a new `mergeReducers` function

12. What is the purpose of the `createSelector` function in Redux Toolkit?
    a) To create new slices
    b) To memoize selector functions
    c) To select specific actions
    d) To create new state properties

13. How does Redux Toolkit help prevent accidental state mutations?
    a) By using Immer under the hood
    b) By freezing the state object
    c) By not allowing state updates
    d) By using a special `immutable` type

14. What is the recommended way to handle loading states in Redux Toolkit?
    a) Using separate loading reducers
    b) Using the `createAsyncThunk` and checking the action's `meta` field
    c) Adding a loading property to each slice
    d) Using a global loading state

15. In Redux Toolkit, what is the purpose of the `extraReducers` field in `createSlice`?
    a) To add extra state properties
    b) To handle actions from other slices or thunks
    c) To create additional reducers for the slice
    d) To define middleware
