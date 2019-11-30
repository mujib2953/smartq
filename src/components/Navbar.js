import React, { useState } from "react";

import {
    AppBar,
    Toolbar,
    Typography,

    makeStyles,
} from '@material-ui/core';

import Location from "./Location";
import NavSearch from "./NavSearch";
import NavUserInfo from "./NavUserInfo";

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

    })
);

export default function Navbar() {

    const classes = useStyle();
    const [location, setLocation] = useState("Embassy Golf Links");

    // --- on Location change
    const handleLocationChange = event => {
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
                    <NavSearch />

                    {/* Location filter */}
                    <Location
                        value={ location }
                        handleChange={handleLocationChange}
                    />

                    {/* User information */}
                    <NavUserInfo />
                </Toolbar>
            </AppBar>
        </div>
    );
}
