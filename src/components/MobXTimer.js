
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import state from '../MobXState/index';
import { observer } from 'mobx-react';

const MobXTimer = () => {
    return (
        <Grid container item xs={12} spacing={1}>
            <Grid item xs={6}>
                <Button variant="contained" color="primary" onClick={() => { state.timer.startTimer() }}>Start Timer</Button>
            </Grid>
            <Grid item xs={6}>
                <TextField value={state.timer.time} />
            </Grid>
       </Grid>
    );
};

export default observer(MobXTimer);