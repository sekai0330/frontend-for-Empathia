// import React from 'react';
// import { ThemeProvider } from 'theme-ui';
// import { StickyProvider } from '../contexts/app/app.provider';
// import theme from 'theme';
// import SEO from 'components/seo';
// import Layout from 'components/layout';
// import Banner from '../sections/banner';
// import KeyFeature from '../sections/key-feature';
// import ServiceSection from '../sections/service-section';
// import Feature from '../sections/feature';
// import CoreFeature from '../sections/core-feature';
// import WorkFlow from '../sections/workflow';
// import Package from '../sections/package';
// import TeamSection from '../sections/team-section';
// import TestimonialCard from '../sections/testimonial';
// import BlogSection from '../sections/blog-section';
// import Subscribe from '../sections/subscribe';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import Link from 'next/link'
// import { useAuthContext } from 'hooks/useAuthContext';
// import HomePage from './home';
// import ProductPage from './product';
// import LoginPage from './login';
// import SignupPage from './signup';
// import DashboardPage from './dashboard';

// export default function IndexPage() {
//   const { user } = useAuthContext()

//   return (
//     <div>
//       <Link href="/">
//         <HomePage />
//       </Link>
//       <Link href="/product">
//         <ProductPage />
//       </Link>
//       <Link href="/login">
//         <LoginPage />
//       </Link>
//       <Link href="/signup">
//         <SignupPage />
//       </Link>
//       <Link href="/dashboard">
//         <DashboardPage />
//       </Link>
//     </div>
//   );
// }

import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
        <StickyProvider>
          <Layout>
            <SEO title="Talkhappi" />
            <Banner />
            <KeyFeature />
            <ServiceSection />
            {/* <Feature /> */}
            <WorkFlow />
            <CoreFeature />
            <TeamSection />
            {/* <TestimonialCard />
            <BlogSection />
            <Subscribe /> */}
          </Layout>
        </StickyProvider>
    </ThemeProvider>
  );
}


// import React from 'react';
// import { ThemeProvider } from 'theme-ui';
// import { StickyProvider } from '../contexts/app/app.provider';
// import theme from 'theme';
// import SEO from 'components/seo';
// import Layout from 'components/layout';
// import Banner from '../sections/banner';
// import KeyFeature from '../sections/key-feature';
// import ServiceSection from '../sections/service-section';
// import Feature from '../sections/feature';
// import CoreFeature from '../sections/core-feature';
// import WorkFlow from '../sections/workflow';
// import Package from '../sections/package';
// import TeamSection from '../sections/team-section';
// import TestimonialCard from '../sections/testimonial';
// import BlogSection from '../sections/blog-section';
// import Subscribe from '../sections/subscribe';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// import 

// export default function IndexPage() {
//   return (
//     <ThemeProvider theme={theme}>
//         <StickyProvider>
//           <Layout>
//             <SEO title="Talkhappi" />
//             <Banner />
//             <KeyFeature />
//             <ServiceSection />
//             {/* <Feature /> */}
//             <CoreFeature />
//             <WorkFlow />
//             <TestimonialCard />
//             <TeamSection />
//             {/* <TestimonialCard />
//             <BlogSection />
//             <Subscribe /> */}
//           </Layout>
//         </StickyProvider>
//     </ThemeProvider>
//   );
// }
