/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Performance',
    title: 'Performance',
    text:
      'We know the lengthy wait for counsellors. Skip the wait with our product brining you fast results!',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Safety',
    title: 'Safety',
    text:
      'With our advanced security features, your data will not be shown to anyone but you!',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Dashboard',
    title: 'Dashboard',
    text:
      "You get access to our dashboard that tracks your usages and feedback received over time!",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Accessibility',
    title: 'Accessibility',
    text:
      'Away from home? As long as you have WiFi and a device, you are able to access this website!',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="What’s the function"
          title="Features of talkhAPPi"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
