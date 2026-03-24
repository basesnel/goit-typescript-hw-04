import { Card, Container, Grid, H, Main } from "@components";
import { Task01v1, Task01v2, Task02, Task03, Task04 } from "@homeworks";

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
          <Card title={<H level={2}>task 2</H>}>
            <Task02 />
          </Card>
          <Card title={<H level={2}>task 3</H>}>
            <Task03 />
          </Card>
          <Card title={<H level={2}>task 4</H>}>
            <Task04 />
          </Card>
        </Grid>
      </Container>
    </Main>
  );
};

export default App;
