import React from "react";

import {
    FormControl,
    MenuItem,
    Select,

    makeStyles,
} from '@material-ui/core';
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles(
    theme => ({
        location: {
            position: "relative",
            minWidth: theme.spacing(30),
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

export default function Location({ value, handleChange }) {

    const classes = useStyles();

    return (
        <div className={classes.location}>
            <div className={classes.locationIcon}>
                <RoomIcon />
            </div>
            <FormControl className={classes.formControl}>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                    // labelId="demo-simple-select-label"
                    id="location-select"
                    value={value}
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
    );
}
