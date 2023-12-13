import { Box, Grid } from "@radix-ui/themes";
import { todos } from "../todoState";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <>
      <Grid key="todolist-grid">
        {todos.value.map((todo, i) => {
          return (
            <>
              <Box p="3" key={todo.text + i}>
                <TodoItem todo={todo} />
              </Box>
            </>
          );
        })}
      </Grid>
    </>
  );
}

export default TodoList;
