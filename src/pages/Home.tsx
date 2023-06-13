import { Container, Grid, Paper, Typography, useTheme } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <GreetingCard />
        </Grid>
        <Grid item xs={12}>
          <div>
            This is the home
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            This is the home
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

const GreetingCard = () => {
  const theme = useTheme();

  return (
    <Paper variant="outlined" sx={{padding: theme.spacing(3)}}>
      <Typography variant="h5" sx={{fontWeight: 700}}>
        Hi, I'm
      </Typography>
      <Typography variant="h3" color="primary" sx={{fontWeight: 700}}>
        Marco Tamayo
      </Typography>
      <Typography variant="subtitle1" sx={{lineHeight: 1.3}}>
        Computer Systems Engineer & Full Stack Developer
      </Typography>
    </Paper>
  );
}

export default Home;