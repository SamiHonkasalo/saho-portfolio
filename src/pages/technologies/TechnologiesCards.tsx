import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import DockerIcon from "mdi-react/DockerIcon";
import DotNetIcon from "mdi-react/DotNetIcon";
import TypescriptIcon from "mdi-react/LanguageTypescriptIcon";
import MaterialUiIcon from "mdi-react/MaterialUiIcon";
import AzureIcon from "mdi-react/MicrosoftAzureIcon";
import ReactIcon from "mdi-react/ReactIcon";
import React from "react";

const { div: MotionDiv } = motion;

type TechnologyType = {
  name: string;
  icon: JSX.Element;
};

const Technologies: TechnologyType[] = [
  { name: "React", icon: <ReactIcon /> },
  { name: "TypeScript", icon: <TypescriptIcon /> },
  { name: "C#/.NET", icon: <DotNetIcon /> },
  { name: "Docker", icon: <DockerIcon /> },
  { name: "Material UI", icon: <MaterialUiIcon /> },
  { name: "Azure", icon: <AzureIcon /> },
];

export const TechnologiesCards = (): JSX.Element => {
  return (
    <Box
      sx={{
        mt: 8,
        mb: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        item
        xl={6}
        lg={7}
        md={8}
        sm={10}
        xs={11}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        {Technologies.map((tech) => (
          <TechnologyCard key={tech.name} {...tech} />
        ))}
      </Grid>
    </Box>
  );
};

function TechnologyCard({ name, icon }: TechnologyType): JSX.Element {
  const theme = useTheme();
  return (
    <Grid item xl={4} lg={4} md={6} sm={7} xs={10}>
      <MotionDiv
        viewport={{ once: true }}
        initial={{
          transform: "rotate3d(0,1,0,180deg)",
        }}
        whileInView={{
          transform: "rotate3d(0,1,0,0deg)",
        }}
        transition={{ type: "spring", duration: 2, bounce: 0.5 }}
      >
        <Paper
          elevation={4}
          sx={{
            backgroundColor: theme.palette.common.white,
            p: 2,
            pb: 6,
          }}
        >
          <Grid container>
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Typography
                sx={{
                  color: theme.palette.common.black,
                  fontSize: theme.typography.pxToRem(24),
                  fontWeight: theme.typography.fontWeightBold,
                  textAlign: "center",
                }}
              >
                {name}
              </Typography>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              xs={12}
              sx={{ color: theme.palette.common.black }}
            >
              {React.cloneElement(icon, {
                style: { height: 100, width: 100 },
              })}
            </Grid>
          </Grid>
        </Paper>
      </MotionDiv>
    </Grid>
  );
}
