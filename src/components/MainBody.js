import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

function MainBody() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} spacing={3}>
                    <Button xs={6}>Click me</Button>
                    <Button xs={6}>Click me 2</Button>
                </Grid>
                <Grid item xs={12} spacing={3}>
                    <Button xs={6}>Click me</Button>
                    <Button xs={6}>Click me 2</Button>
                </Grid>
            </Grid>
        </div>
    );
};


export default MainBody;
