import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getCurrentDate } from './../utils/currentDate';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  card: {
    width: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    height: '80px',
    overflow: 'hidden',
  },
}));

export default function RecipeReviewCard({label,image,url,
  dietLabels,healthLabels,cautions,ingredients,calories,
  totalWeight,totalTime}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const today = getCurrentDate();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {label[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={label}
        subheader={today}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={label}
      />
      <CardContent>
        <div className={classes.root}>
          {healthLabels.map(healthLabel =>(
            <Chip
              icon={<FaceIcon />}
              label={healthLabel}
              color="primary"
            />
          ))}
    
          {cautions.map(caution =>(
            <Chip
              icon={<FaceIcon />}
              label={caution}
              color="secondary"
            />
          ))}
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={url} color="inherit" target="_blank" aria-label="Share">
          <LinkIcon />
        </Link>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>

          {ingredients.map(ingredient =>(

            <Typography paragraph>
              {ingredient.text} - ({ingredient.weight})
            </Typography>

          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}