import React from 'react';
import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';

const CarMods = (props) => {
    const mods = useSelector(state => state.carMods.mods)

    return (
        <div>
            <h4>Mod List</h4>
            <Grid>
                {(mods || []).map(mod => {
                    return (
                        <TextField xs={12} key={mod.sku} value={mod.name + ' ' + mod.price} />
                    );
                })}
            </Grid>
            <br/>
            <h4>Add Mod</h4>
            <TextField xs={4} defaultValue='Mod Name' />
            <TextField xs={4} defaultValue='Mod Price' />
            <TextField xs={4} defaultValue='Mod SKU' />
            <Button xs={12}>Add Mod</Button>
        </div>
    );
};



export default CarMods;
