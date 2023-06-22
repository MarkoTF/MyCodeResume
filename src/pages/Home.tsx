import { CSSProperties } from "react";
import { Avatar, Box, Container, Grid, Paper, Stack, Tooltip, Typography, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  return (
    <>
    <Grid container spacing={theme.spacing(5)}>
      <Grid item xs={12}>
        <Container>
          <GreetingCard />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container sx={{pl: 0}}>
          <Grid container spacing={theme.spacing(5)}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={5}>
                  <AspectRatioImg aspectRatio={200} src="/profile.png" />
                </Grid>
                <Grid item xs={7}>
                  <Skills />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container sx={{pr: 0}}>
          <RecentProjects />
        </Container>
      </Grid>
    </Grid>
    </>
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

interface AspectRatioImgProps {
  src: string,
  aspectRatio?: number,
  style?: CSSProperties
}

const AspectRatioImg = (props: AspectRatioImgProps) => {
  const { aspectRatio, style, src } = props;
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${aspectRatio}%`,  /* set the aspect ratio */
      }}
    >
      <img 
        src={src} 
        alt="Profile" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '10px',
          ...style
        }}
      />
    </Box>
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

const RecentProjects = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        Recent projects
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{ overflowX: 'auto', marginTop: 2 }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Stack>
    </Box>
  );
}

const ProjectCard = () => {
  return (
    <Box sx={{minWidth: 200}}>
      <AspectRatioImg aspectRatio={65} src="/profile.png" />
    </Box>
  );
}

export default Home;