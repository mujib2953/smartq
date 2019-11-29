import React from "react";

import {
    AppBar,
    Button,
    Box,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles";

const useStyle = makeStyles(
    theme => ({
        root: {
            flexGrow: 1,
        },
        title: {
            borderBottom: "1px solid #FFF"
        },
        subtitle: {
            borderBottom: "1px solid #FFF",
            fontStyle: "italic",
        },

        search: {
            position: "relative",
            width: "auto",

            // borderRadius: theme.shape.borderRadius,
            // backgroundColor: fade(theme.palette.common.white, 0.15),
            // "&:hover": {
            //     backgroundColor: fade(theme.palette.common.white, 0.25),
            // },

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

export default function Navbar() {

    const classes = useStyle();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title} noWrap>
                        Smart
                    </Typography>
                    <Typography variant="h4" className={classes.subtitle}>Q</Typography>

                    {/* Search fields */}
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
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </div>
    );
}
