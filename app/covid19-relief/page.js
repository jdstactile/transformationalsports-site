import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'COVID-19 Relief | Transformational Sports',
};

const featureBoxes = [
  'Distribution of rations & supplies to the hardest-hit families',
  'Delivery of 10 oxygen cylinders to Cheyyar Hospital',
  'Vaccination awareness campaign in Ranipet and Tiruvannamalai',
  'The program spread correct information about COVID-19 & vaccines',
];

export default function Covid19ReliefPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="COVID-19 Relief" />

        {/* ============================================
            SECTION 2: Content with Background Image
        ============================================ */}
        <section
          className="parallax-bg relative overflow-hidden"
          style={{
            backgroundImage:
              'url(https://transformationalsports.org/wp-content/uploads/2022/02/Photo-from-Liz-3-1.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(134deg, rgba(10,2,2,0.74), transparent)',
            }}
          />

          <div
            className="relative z-10 mx-auto max-w-7xl px-6"
            style={{ paddingTop: '120px', paddingBottom: '200px' }}
          >
            <ScrollAnimator animation="fade-up">
              <p
                className="mx-auto text-center text-white"
                style={{
                  fontSize: '28px',
                  lineHeight: 1.4,
                  maxWidth: '800px',
                }}
              >
                In 2020 and 2021, TS raised over $27,000 USD in donations for
                the many Indian families severely affected by COVID-19 in rural
                Tamil Nadu and North Chennai.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Four Feature Boxes
        ============================================ */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featureBoxes.map((text, i) => (
                <ScrollAnimator
                  key={i}
                  animation="fold"
                  delay={`${i * 100}`}
                >
                  <div
                    className="rounded-md text-center"
                    style={{
                      border: '5px solid #FFB23E',
                      padding: '40px 24px',
                      minHeight: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <p
                      className="text-brown"
                      style={{ fontSize: '16px', lineHeight: 1.8 }}
                    >
                      {text}
                    </p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Partnership Text
        ============================================ */}
        <section className="bg-white" style={{ paddingTop: '0', paddingBottom: '80px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <p
                className="mx-auto text-center text-brown"
                style={{
                  fontSize: '19px',
                  lineHeight: 1.6,
                  maxWidth: '700px',
                }}
              >
                In partnership with{' '}
                <strong>Katradi</strong> and{' '}
                <strong>Arunodhaya Centre for Street and Working Children</strong>
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 5: Mailing List
        ============================================ */}
        <section style={{ paddingTop: '40px', paddingBottom: '100px' }}>
          <MailingListCTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
