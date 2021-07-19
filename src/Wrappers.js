import React from 'react'
import { Provider } from 'react-redux'
import { theme } from './defs/theme'
import store from './store'
import { ThemeProvider } from '@material-ui/styles'

export default function Wrappers({children}) {
    return (
        <React.Fragment>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    )
}