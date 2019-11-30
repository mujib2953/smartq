import React, { useState } from "react";

import {
    AppBar,
    FormControl,
    InputBase,
    makeStyles,
    MenuItem,
    Select,
    Toolbar,
    Typography,
} from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from '@material-ui/icons/Room';
// import { fade } from "@material-ui/core/styles";

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

        // --- location filter
        location: {
            position: "relative",
            width: theme.spacing(30),
        },
        locationIcon: {
            minWidth: theme.spacing(7),
            height: "100%",

            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            pointerEvents: "none",
        },
        formControl: {
            width: "100%",
        },
        selectInput: {
            padding: theme.spacing(1, 1, 1, 4),
            color: theme.palette.common.white
        },
    })
);

export default function Navbar() {

    const classes = useStyle();
    const [location, setLocation] = useState("Embassy Golf Links");

    const handleChange = event => {
        setLocation(event.target.value);
    }

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

                    {/* Location filter */}
                    <div className={classes.location}>
                        <div className={classes.locationIcon}>
                            <RoomIcon />
                        </div>
                        <FormControl className={classes.formControl}>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Select
                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={location}
                                onChange={handleChange}
                                classes={{
                                    root: classes.inputRoot,
                                    select: classes.selectInput,
                                }}
                            >
                                <MenuItem value={"Embassy Golf Links"}>Embassy Golf Links</MenuItem>
                                <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                                <MenuItem value={"Delhi"}>Delhi</MenuItem>
                                <MenuItem value={"Kolkata"}>Kolkata</MenuItem>
                                <MenuItem value={"Chennai"}>Chennai</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
