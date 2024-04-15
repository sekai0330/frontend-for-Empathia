import { useState } from 'react'
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Login from 'components/login-form'

const LoginPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Log in" />
                    <Login />
                </Layout>
            </StickyProvider>
        </ThemeProvider> 
    )
}

export default LoginPage