import { Typography } from '@material-ui/core';
import React from 'react';
import Page from '../lib/layouts/Page';
import "./../styles/clip.css";

export default function ClipPage() {
    return (
        <Page>
        
            <div className="clip-img">
                <div className="head-title">
                    <Typography variant="h4" align="center" className="head-title-primary">
                        Happy Independence Day
                    </Typography>
                </div>
            </div>
        </Page>
    )
}
