import { Card, Container, Grid, H, Main } from "@components";
import { Task01v2 } from "./homeworks/Task01v2/Task01v2";
import { Task01v1 } from "./homeworks/Task01v1/Task01v1";

const App = () => {
  return (
    <Main>
      <Container>
        <H level={1}>GoIt: Typescript tasks on React</H>
      </Container>
      <Container>
        <Grid>
          <Card title={<H level={2}>task 1 version 1</H>}>
            <Task01v1 />
          </Card>
          <Card title={<H level={2}>task 1 version 2</H>}>
            <Task01v2 />
          </Card>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                height: "200px",
                background: "yellow",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {i + 1}
            </div>
          ))}
        </Grid>
      </Container>
    </Main>
  );
};

export default App;
