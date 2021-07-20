import { Grid, Typography, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Editor, { useMonaco } from '@monaco-editor/react';
import React, { useState , useEffect, useRef } from 'react';
import Page from '../lib/layouts/Page';

import {fromMonaco} from "@hackerrank/firepad";

import firebase from 'firebase';

// const config = {
//     apiKey: "AIzaSyAKdTU7ZcNlrUIqj2I1urKkbc0Lnw5GiHY",
//     authDomain: "https://code-pair-37026-default-rtdb.firebaseapp.com",
//     // databaseURL: "https://code-pair-37026-default-rtdb.firebaseio.com"
//     databaseURL: "https://code-pair-37026-default-rtdb.asia-southeast1.firebaseio.com"
//     // databaseURL: "https://code-pair-37026-default-rtdb.asia-southeast1.firebasedatabase.app/"
//   };
const  config =  {
    apiKey: "AIzaSyBSgyG7mriD5OkfUf_GtPeDzl6R8oNHA2Q",
    authDomain: "test-project-63a71.firebaseapp.com",
    databaseURL: "https://test-project-63a71-default-rtdb.firebaseio.com",
    projectId: "test-project-63a71",
    storageBucket: "test-project-63a71.appspot.com",
    messagingSenderId: "887324975431",
    appId: "1:887324975431:web:9e708da0d77f59c97dac62"
  };


export default function EditorPage() {

    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    const [logs,setLogs]  = useState([""]);
    const log = (text) => {
        let tLogs = Array.from(logs);
        tLogs.push(typeof text === "string" ? text : JSON.stringify(text));
        setLogs(tLogs);
    }
    // const monaco = useMonaco();

    useEffect(() => {
        if(!editorRef.current){
            return;
        }
        firebase.initializeApp(config);
        const dbRef = firebase.database().ref().child("pair");

        dbRef.on("value",d => console.log(d.val()));

        // const firepad = fromMonaco(dbRef,monaco.editor.IStandaloneCodeEditor);
        const firepad = fromMonaco(dbRef,editorRef.current);
        console.log(firepad,"test");

        return () => {
            // log("Cleaning Up Effect");

        }
    }, [editorRef.current]);

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
                        onMount={handleEditorDidMount}
                    />
                </Grid>
                <Grid item xs={6} style={{padding: 10}}>
                    <Typography variant="h5">Logs: <IconButton size="small" variant="outlined" onClick={()=>setLogs([])}> <Delete /> </IconButton></Typography>
                    <Typography variant="body2">
                        {
                            logs.map((l,k) => <React.Fragment key={k}>
                                {l}<br/>
                            </React.Fragment>)
                        }
                    </Typography>
                </Grid>
            </Grid>
        </Page>
    )
}
