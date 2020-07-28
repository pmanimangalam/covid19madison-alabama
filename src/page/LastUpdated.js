import React from 'react';
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ReactTimeAgo from 'react-time-ago';
import Typography from '@material-ui/core/Typography';

export default function LastUpdated({ date }) {
    JavascriptTimeAgo.addLocale(en)
  return (
    <Typography variant="body1" component="p" color="inherit" className="text-center">
        Last updated : <ReactTimeAgo date={date}/>
    </Typography>

  )
}