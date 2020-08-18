import React from 'react';
import { connect } from "react-redux";
import { getCars } from "../thunks/cars";

import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';

const Cars = (props) => {
    const cars = props.cars || [];

    return (
        <Grid container item xs={12} spacing={1}>
            <Grid item xs={6}>
                <Button variant="contained" color="primary" onClick={() => {props.getCars()}}>Get Cars</Button>
            </Grid>
            <Grid item xs={6}>
                <div />
            </Grid>
            {cars.map(car => {
                return (
                    <Grid item xs={2}>
                        <TextField variant="filled" key={car.vin} value={car.make + ' ' + car.model + ' VIN:' + car.vin} />
                    </Grid>
                );
            })}
       </Grid>
    );
};

const mapStateToProps = (state) => {
    return { cars: state.cars.cars };
};

export default connect(mapStateToProps, { getCars })(Cars);
