import { Main, H, Container, Grid } from "./Components";

const App = () => {
  return (
    <Main>
      <Container>
        <H level={1}>GoIt: Typescript tasks on React</H>
      </Container>
      <Container>
        <Grid>
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
