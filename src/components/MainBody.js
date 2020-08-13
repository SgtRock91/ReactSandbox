import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const MainBody = (state, props) => {
    const classes = useStyles();

    const storeValue = state.displayValue;

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
                <Grid item xs={12} spacing={3}>
                    <div xs={12}>store value: {storeValue}</div>
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { displayValue: state.core.field };
};

export default connect(mapStateToProps)(MainBody);
