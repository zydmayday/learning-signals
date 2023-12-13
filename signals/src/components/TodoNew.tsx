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
        <TextField.Input
          placeholder="Your new todo..."
          value={newTodoText.value}
          onInput={onInput}
        />
        <Box>
          <Button onClick={addTodo} disabled={newTodoText.value === ""}>
            Add
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default TodoNew;
