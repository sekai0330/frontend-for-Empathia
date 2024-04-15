import { useState } from 'react'
import Background from 'assets/login-background.png'
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Signup from 'components/signup-form';


const SignupPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
            <Layout>
                <SEO title="Sign up" />
                <Signup />
            </Layout>
            </StickyProvider>
        </ThemeProvider> 
    )
}

export default SignupPage