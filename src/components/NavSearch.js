import React from "react";
import {
    InputBase,

    makeStyles,
} from '@material-ui/core';
// import { fade } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(
    theme => ({
        search: {
            position: "relative",
            width: "auto",

            // borderRadius: theme.shape.borderRadius,
            // backgroundColor: fade(theme.palette.common.white, 0.15),
            // "&:hover": {
            //     backgroundColor: fade(theme.palette.common.white, 0.25),
            // },

            color: theme.color,
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(2),

            borderBottom: "1px solid #FFF",

            flexGrow: 1
        },
        searchIcon: {
            width: theme.spacing(7),
            height: "100%",
            
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            pointerEvents: "none",
        },
        inputRoot: {
            color: "inherit",
            width: "100%"
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),

            transition: theme.transitions.create("width"),
            width: "100%",
        },
    })
);

export default function NavSearch() {

    const classes = useStyles();

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
}
