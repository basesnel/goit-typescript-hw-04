import { Card, Container, Grid, H, Main } from "@components";
import { Observer } from "./homeworks/1";

const App = () => {
  return (
    <Main>
      <Container>
        <H level={1}>GoIt: Typescript tasks on React</H>
      </Container>
      <Container>
        <Grid>
          <Card title={<H level={2}>task 1</H>}>
            <Observer
              onContentEndVisible={() => {
                console.log("End is reached.");
              }}
            >
              {/* <HideOverFlow> */}
              <ul>
                {[...Array(40)].map((_, i) => (
                  <li key={i}>{`Item ${i + 1}`}</li>
                ))}
              </ul>
              {/* </HideOverFlow> */}
            </Observer>
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
