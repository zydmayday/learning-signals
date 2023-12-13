import { useState } from "react";
import { Box, Button, Grid } from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid columns="2" gap="3" width="auto">
        <h1>Vite + React</h1>
      </Grid>
      <Grid columns="2" gap="3" width="auto">
        <Box className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </Box>
        <Box>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </Box>
      </Grid>
    </>
  );
}

export default App;
