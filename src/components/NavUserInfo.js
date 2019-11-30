import React from "react";

import {
    IconButton,

    makeStyles,
} from '@material-ui/core';

import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(
    theme => ({
        accountInfo: {
            marginLeft: theme.spacing(1)
        }
    })
);

export default function NavUserInfo() {

    const classes = useStyles();
    
    return (
        <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
            className={classes.accountInfo}
        >
            <AccountCircle />
        </IconButton>
    );
}
