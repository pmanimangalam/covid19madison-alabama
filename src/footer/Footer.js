import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary">
          <Box color="text.primary" component="span">Developed by </Box> Praveen Manimangalam and Anirudh Bellamkonda.
          <br />
          <Box color="text.primary" component="span">Rt value provided by </Box> Dr. Yi Tan.
        </Typography>
      </Box>
    </Container>
  );
}