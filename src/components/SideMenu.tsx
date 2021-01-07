import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    SideMenu : {
        display : "flex",
        flexDirection : "column",
        position : "absolute",
        left:"0px",
        width:"320px",
        height:"100%",
        background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
    }

});

function SideMenu(){
    const classes = useStyles();
    return(
        <div className={classes.SideMenu}></div>
    )
};

export default SideMenu;