import { Box, Button, Grid, TextField } from "@radix-ui/themes";
import { newTodoText, addTodo } from "../todoState";

function TodoNew() {
  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    console.log("onInput...");
    newTodoText.value = event.target.value;
  };
  return (
    <>
      <Grid columns="2" gap="3">
        <Box width="100%" p="3">
          <TextField.Input
            placeholder="Your new todo..."
            value={newTodoText.value}
            onInput={onInput}
          />
        </Box>
        <Box width="1" p="3">
          <Button onClick={addTodo}>Add</Button>
        </Box>
      </Grid>
    </>
  );
}

export default TodoNew;
