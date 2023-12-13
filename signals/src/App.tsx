import { Grid } from "@radix-ui/themes";
import TodoNew from "./components/TodoNew";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Grid>
        <TodoNew />
        <TodoList />
      </Grid>
    </>
  );
}

export default App;
