import { Box, Button, Grid, Text } from "@radix-ui/themes";
import { Todo, deleteTodo } from "../todoState";

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <>
      <Grid gap="3" columns="2">
        <Text>{todo.text}</Text>
        <Box>
          <Button color="red" onClick={() => deleteTodo(todo)}>
            remove
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default TodoItem;
