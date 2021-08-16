import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            <Button color="inherit" onClick={() => router.push("/")}>
              Log Parser
            </Button>
          </Typography>

          <Button color="inherit" onClick={() => router.push("/date-time-viz")}>
            Date & time
          </Button>
          <Button color="inherit" onClick={() => router.push("/web-os-viz")}>
            Os & browser
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
