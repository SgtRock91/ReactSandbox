import React from 'react';
import { connect } from "react-redux";
import { getCars } from "../thunks/cars";

import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';

const Cars = (props) => {
    const cars = props.cars || [];

    return (
        <div>
            <Button xs={6} onClick={() => {props.getCars()}}>Get Cars</Button>
            <Grid>
                {cars.map(car => {
                    return (
                        <TextField xs={12} key={car.vin} value={car.vin + ' ' + car.make + ' ' + car.model} />
                    );
                })}
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { cars: state.cars.cars };
};

export default connect(mapStateToProps, { getCars })(Cars);
