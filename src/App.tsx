import { Card, Container, Grid, H, Main } from "@components";
import { Task01v2 } from "./homeworks/Task01v2/Task01v2";
import { Task01v1 } from "./homeworks/Task01v1/Task01v1";
import Task02 from "./homeworks/Task02/Task02";
import Task03 from "./homeworks/Task03/Task03";
import Task04 from "./homeworks/Task04/Task04";

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
