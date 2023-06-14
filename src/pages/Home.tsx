import { Avatar, Box, Container, Grid, Paper, Tooltip, Typography, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container spacing={theme.spacing(2)}>
        <Grid item xs={12}>
          <GreetingCard />
        </Grid>
        <Grid item xs={12}>
          <Skills />
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

const Skills = () => {
  const theme = useTheme();

  const skills = [//TODO: fetch from API
    {
      name: 'Python',
      icon: './python.png'
    },
    {
      name: 'React',
      icon: './logo192.png'
    },
    {
      name: 'Docker',
      icon: './docker.png'
    },
    {
      name: 'Git',
      icon: './git.png'
    },
    {
      name: 'WordPress',
      icon: './wordpress.png'
    },
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{fontWeight: 700, marginBottom: theme.spacing(1)}}>
        Skills
      </Typography>
      <Box sx={{display: 'flex', flexWrap: "wrap", gap: theme.spacing(2)}}>
        {skills.map((skill, index) => (
          <Tooltip key={index} title={skill.name}>
            <Avatar key={index} alt={skill.name} src={skill.icon} variant="square" /> 
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}

export default Home;