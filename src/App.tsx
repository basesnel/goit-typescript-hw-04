// import H from "@components/H";
// import Container from "@components/Container";
// import Grid from "@components/Grid";
// import Card from "@components/Card";
// import Main from "@components/Main";
import { Card, Container, Grid, H, Main } from "@components";

const App = () => {
  return (
    <Main>
      <Container>
        <H level={1}>GoIt: Typescript tasks on React</H>
      </Container>
      <Container>
        <Grid>
          <Card title="Task 1">
            <p>There will be task 1</p>
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
