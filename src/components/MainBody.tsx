import React from 'react';
import { connect } from 'react-redux';
import { increment } from "../redux/actions";

import Cars from './Cars';
import CarMods from './CarMods';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes, { InferProps } from "prop-types";

const MainBody: any = (props: InferProps<typeof MainBody.propTypes>) => {
    const count = props.count;

    const useStyles = makeStyles((theme) => ({
        item: {
          padding: theme.spacing(2),
        },
      }));

    const classes = useStyles();

    return (
        <Grid container direction="row" justify="flex-start" alignItems="baseline" spacing={2} className={classes.item}>
            <Grid item xs={12}>
                <h3>Simple Redux State Flow</h3>
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained" color="primary" onClick={() => { props.increment() }}>Increment</Button>
            </Grid>
            <Grid item xs={11}>
                <TextField value={count}></TextField>
            </Grid>
            <Grid item xs={12}>
                <h3>Thunk Async State Flow</h3>
            </Grid>
            <Cars/>
            <Grid item xs={12}>
                <h3>Hooks With Redux Flow</h3>
            </Grid>
            <CarMods />
        </Grid>
    );
};

MainBody.propTypes = {
    count: PropTypes.number.isRequired,
    price: PropTypes.func.isRequired,
  };

const mapStateToProps = (state: any) => {
    return { count: state.core.count };
};

export default connect(mapStateToProps, { increment })(MainBody);
