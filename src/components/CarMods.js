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
        <div>
            <h4>Mod List</h4>
            <Grid>
                {(mods || []).map(mod => {
                    return (
                        <TextField xs={12} variant="filled" key={mod.sku} value={mod.name + ' ' + mod.price} />
                    );
                })}
            </Grid>
            <br/>
            <h4>Add Mod</h4>
            <TextField xs={4} label="Name" variant="outlined" value={name} onChange={(e) => {dispatch(setCarModName(e.target.value))}} />
            <TextField xs={4} label="Price" variant="outlined" value={price} onChange={(e) => {dispatch(setCarModPrice(e.target.value))}} />
            <TextField xs={4} label="Mod SKU" variant="outlined" value={sku} onChange={(e) => {dispatch(setCarModSKU(e.target.value))}} />
            <Button variant="contained" color="primary" xs={12} onClick={() => {dispatch(addCarMod())}}>Add Mod</Button>
        </div>
    );
};



export default CarMods;
