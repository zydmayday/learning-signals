import { Box, Grid } from "@radix-ui/themes";
import { todos } from "../todoState";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <>
      <Grid>
        {todos.value.map((todo, i) => {
          return (
            <>
              <Box p="1" key={todo.text + i}>
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
