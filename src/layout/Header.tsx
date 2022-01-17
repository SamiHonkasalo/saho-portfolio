import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";

export const Header = (): JSX.Element => {
  const notAtTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 75,
  });

  return (
    <AppBar
      position="fixed"
      elevation={notAtTop ? 3 : 0}
      sx={{
        background: `rgba(0, 0, 0, ${notAtTop ? 0.1 : 0.02})`,
        mixBlendMode: "normal",
        backdropFilter: `blur(${notAtTop ? 20 : 10}px)`,
      }}
    >
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={3} />
          <Grid item xs={1}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: (theme) => theme.typography.fontWeightBold,
                fontSize: (theme) => theme.typography.pxToRem(24),
                lineHeight: 1.2,
              }}
            >
              Sami Honkasalo
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
