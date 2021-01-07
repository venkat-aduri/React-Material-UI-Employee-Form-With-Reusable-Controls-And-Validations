import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor : "#fff",
        transform : "translateZ(0)"
    },
    searchInput:{
        opacity : "0.6",
        padding : `0px ${theme.spacing(1)}px`,
        fonstSize : "0.8rem",
        width : "300px",
        border : "1px solid grey",
        borderRadius : "10px",
        '&:hover':{
            backgroundColor : "#f2f2f2"
        },
        '& .MuiSvgIcon-root':{
            marginRight : theme.spacing(1)
        }
    }
}));

function Header(){
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase placeholder="search here" className={classes.searchInput}
                                   startAdornment={<SearchIcon fontSize={"small"}/>}/>
                    </Grid>
                    <Grid item sm={true}/>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={5} color="secondary">
                                <NotificationsActiveIcon fontSize={"small"}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <MailOutlineIcon fontSize={"small"}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize={"small"}/>
                        </IconButton>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    )

};

export default Header;