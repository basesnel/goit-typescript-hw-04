import { Card, Container, Grid, H, Main } from "@components";
import { Task01 } from "./homeworks/Task01/Task01";

const App = () => {
  return (
    <Main>
      <Container>
        <H level={1}>GoIt: Typescript tasks on React</H>
      </Container>
      <Container>
        <Grid>
          <Card title={<H level={2}>task 1</H>}>
            <Task01 />
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
