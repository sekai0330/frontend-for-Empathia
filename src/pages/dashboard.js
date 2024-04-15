import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import UserDashboard from 'components/user-dashboard';


export default function DashboardPage() {
    return (
      <ThemeProvider theme={theme}>
          <StickyProvider>
            <Layout>
              <SEO title="Talkhappi - Dashboard" />
                <UserDashboard/>    
            </Layout>
          </StickyProvider>
      </ThemeProvider>
    );
  }