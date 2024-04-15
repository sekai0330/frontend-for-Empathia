import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import ProductInput from 'components/product-input'


export default function ProductPage() {
  return (
    <ThemeProvider theme={theme}>
        <StickyProvider>
          <Layout>
            <SEO title="Talkhappi" />
            <ProductInput/>
          </Layout>
        </StickyProvider>
    </ThemeProvider>
  );
}