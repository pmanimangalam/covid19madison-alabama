import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Recipe from '../recipe/Recipe';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid({recipes}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        {recipes.map(recipe =>(

            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Recipe label={recipe.recipe.label}
                image={recipe.recipe.image}
                url={recipe.recipe.url}
                dietLabels={recipe.recipe.dietLabels}
                healthLabels={recipe.recipe.healthLabels}
                cautions={recipe.recipe.cautions}
                ingredients={recipe.recipe.ingredients}
                calories={recipe.recipe.calories}
                totalWeight={recipe.recipe.totalWeight}
                totalTime={recipe.recipe.totalTime}/>
            </Grid>
  
        ))}

      </Grid>
    </div>
  );
}