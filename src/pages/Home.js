import { Button, Grid, Typography } from '@material-ui/core'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Page from '../lib/layouts/Page';

const colors = ["#fff","#af7a3b","#7aaf3b","#3b7aaf"];

export default function Home() {

    const appDetails = useSelector((state) => state.AppReducer);
    
    const [color, setColor] = useState(0);

    const changeColor = () => {
        setColor((color + 1)%colors.length);
    }

    return (
        <React.Fragment>
            <Page>
                <Grid container justifyContent="center" alignItems="center" direction="column">
                    <Grid item>
                        <Typography variant="h3" component="h1" align="center">
                            Welcome to <span style={{color:colors[color]}}>{appDetails?.pageTitle}</span>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" component="h2"  align="center">
                            Quickly Kick Start your Redux CRA app with React Router and Material UI
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={changeColor}>
                            Change Color
                        </Button>
                    </Grid>
                </Grid>
            </Page>
        </React.Fragment>
    )
}
