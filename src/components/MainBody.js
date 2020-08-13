import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';

import { connect } from "react-redux";
import { increment } from "../redux/actions";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const MainBody = (props) => {
    const classes = useStyles();

    const count = props.count;

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
                    <Button xs={6} onClick={() => { props.increment() }}>Increment</Button>
                    <TextField xs={6} value={props.count}></TextField>
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { count: state.core.count };
};

export default connect(mapStateToProps, { increment })(MainBody);
