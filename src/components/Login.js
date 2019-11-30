import React from "react";
import {
    withStyles
} from '@material-ui/core/styles';
import {
    Button,
    Box,
    Dialog,
    IconButton,
    Typography,

    makeStyles,
} from "@material-ui/core";

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';

import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(
    theme => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        loginButton: {
            color: "inherit",
            border: "1px solid #FFF",
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },

        // --- modal body
        modalContent: {
            padding: theme.spacing(2),

            display: "flex",
            flexDirection: "column",
        },
        buttons: {
            marginBottom: theme.spacing(1),
        },
        tosText: {
            color: theme.palette.grey[500]
        }
    })
);

export default function Login() {

    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                className={classes.loginButton}
                variant="outlined"
                onClick={handleClickOpen}
            >
                Login
            </Button>

            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <MuiDialogTitle disableTypography className={classes.root}>
                    <Typography variant="h6">
                        Login
                    </Typography>
                    <IconButton
                        aria-label="close"
                        className={classes.closeButton}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </MuiDialogTitle>

                <MuiDialogContent dividers className={classes.modalContent}>
                    <Box color="text.primary" clone>
                        <Button
                            color="primary"
                            variant="outlined"
                            className={classes.buttons}
                        >
                            Continue with Google
                        </Button>
                    </Box>

                    <Box color="text.primary" clone>
                        <Button
                            color="primary"
                            variant="outlined"
                            className={classes.buttons}
                        >
                            Continue with Facebook
                        </Button>
                    </Box>

                    <Box color="text.primary" clone>
                        <Button
                            color="primary"
                            variant="outlined"
                            className={classes.buttons}
                        >
                            Continue with Phone
                        </Button>
                    </Box>

                    <Box color="text.primary" clone>
                        <Button
                            color="primary"
                            variant="outlined"
                            className={classes.buttons}
                        >
                            Continue with Email & Password
                        </Button>
                    </Box>

                    <Typography align="center">
                        We won't share your personal details with anyone
                    </Typography>

                    <Typography align="center">
                        <span className={classes.tosText}>If you continue, are are accepting </span>
                        <a href="#" target="_blank">SmartQ Terms and Condtions and Privacy Policy</a>
                    </Typography>
                </MuiDialogContent>
            </Dialog>
        </div>
    );
}
