import React from 'react';
import { connect } from "react-redux";
import { increment } from "../redux/actions";

import Cars from './cars';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';

const MainBody = (props) => {
    const count = props.count;

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} spacing={3}>
                    <Button xs={6} onClick={() => { props.increment() }}>Increment</Button>
                    <TextField xs={6} value={count}></TextField>
                </Grid>
                <Grid item xs={12} spacing={3}>
                    <Cars />
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { count: state.core.count };
};

export default connect(mapStateToProps, { increment })(MainBody);
