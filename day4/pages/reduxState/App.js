import React from "react";
import { Provider} from "react-redux";
import TodoApp from "../../component/toDoApp/TodoApp";
import store from "../../redux/store"
// import TodoApp from "../../component/toDoApp/TodoApp";
const App= () => {
  return(
    <Provider store={store}>
      <>
        <TodoApp/>
      </>
    </Provider>
  )
}
export default App;
