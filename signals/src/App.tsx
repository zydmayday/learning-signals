import { Box, Button, Grid } from "@radix-ui/themes";
import { signal } from "@preact/signals-react";

const count = signal(1);
function App() {
  const increaseCount = () => {
    console.log("clicked");
    count.value++;
    console.log(count);
  };

  return (
    <>
      <Grid columns="1" gap="3" width="auto">
        <h1>Radix + Signals</h1>
      </Grid>
      <Grid columns="2" gap="3" width="auto">
        <Box className="card">
          <Button onClick={increaseCount}>click</Button>
        </Box>
        <Box>count is {count.value}</Box>
      </Grid>
    </>
  );
}

export default App;
