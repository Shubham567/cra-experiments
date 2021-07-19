import { Grid, Typography, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Editor from '@monaco-editor/react';
import React, { useState , useEffect } from 'react';
import Page from '../lib/layouts/Page';

// import {fromMonaco} from "@hackerrank/firepad";

export default function EditorPage() {

    const [logs,setLogs]  = useState([""]);
    const log = (text) => {
        let tLogs = Array.from(logs);
        tLogs.push(typeof text === "string" ? text : JSON.stringify(text));
        setLogs(tLogs);
    }

    useEffect(() => {
        log("Running Effect");


        return () => {
            log("Cleaning Up Effect");

        }
    }, []);

    return (
        <Page>
            <Typography variant="h2" align="center" style={{padding: 10}}>
                @hackerrank/firepad
            </Typography>
            <Grid container>
                <Grid item xs={6}>
                    <Editor
                        height="90vh"
                        defaultLanguage="javascript"
                        defaultValue="// some comment"
                        theme="vs-dark"
                    />
                </Grid>
                <Grid item xs={6} style={{padding: 10}}>
                    <Typography variant="h5">Logs: <IconButton size="small" variant="outlined" onClick={()=>setLogs([])}> <Delete /> </IconButton></Typography>
                    <Typography variant="body2">
                        {
                            logs.map(l => <>
                                {l}<br/>
                            </>)
                        }
                    </Typography>
                </Grid>
            </Grid>
        </Page>
    )
}
