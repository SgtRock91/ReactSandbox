import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCarModName, setCarModPrice, setCarModSKU, addCarMod } from '../redux/actions' 


import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';

const CarMods = (props) => {
    const dispatch = useDispatch()

    const mods = useSelector(state => state.carMods.mods);
    const name = useSelector(state => state.carMods.name);
    const price = useSelector(state => state.carMods.price);
    const sku = useSelector(state => state.carMods.sku);


    return (
        <Grid container item xs={12} spacing={1}>
            <Grid item xs={12}>
                <h4>Mod List</h4>
            </Grid>
            {(mods || []).map(mod => {
                return (
                    <Grid item xs={2} key={mod.sku} >
                        <TextField variant="filled" value={mod.name + ' ' + mod.price} />
                    </Grid>
                    
                );
            })}
            <Grid item xs={12}>
                <h4>Add Mod</h4>
            </Grid>
            <Grid item xs={1}>
                <TextField label="Name" variant="outlined" value={name} onChange={(e) => {dispatch(setCarModName(e.target.value))}} />
            </Grid>
            <Grid item xs={1}>
                <TextField label="Price" variant="outlined" value={price} onChange={(e) => {dispatch(setCarModPrice(e.target.value))}} />
            </Grid>
            <Grid item xs={1}>
                <TextField label="Mod SKU" variant="outlined" value={sku} onChange={(e) => {dispatch(setCarModSKU(e.target.value))}} />
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained" color="primary" xs={12} onClick={() => {dispatch(addCarMod())}}>Add Mod</Button>
            </Grid>
        </Grid>
    );
};

export default CarMods;
