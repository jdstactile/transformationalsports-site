import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Volunteer for India 2.0 | Transformational Sports',
};

export default function VolunteerForIndia2Page() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Volunteer for India 2.0" />

        {/* ============================================
            SECTION 2: Content with Background Image
        ============================================ */}
        <section
          className="parallax-bg relative overflow-hidden"
          style={{
            backgroundImage:
              'url(https://transformationalsports.org/wp-content/uploads/2022/02/2-small-1.jpg)',
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
            <ScrollAnimator animation="fade-right">
              <p
                className="text-white"
                style={{
                  fontSize: '19px',
                  lineHeight: 1.6,
                  maxWidth: '700px',
                }}
              >
                Volunteer for India (VFI) started as a seed idea back in
                2019-20 when Transformational Sports received a grant from the
                U.S. Consulate General Chennai to create India&apos;s first-ever
                youth volunteer network. Before COVID, back in February 2020, we
                gathered the first VFI cohort for a week-long workshop and used
                sports, gender &amp; inclusion teachings to form the backbone of
                their mission.
              </p>
            </ScrollAnimator>

            <ScrollAnimator animation="fade-right" delay="200">
              <p
                className="mt-8 text-white"
                style={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  maxWidth: '700px',
                }}
              >
                We continued to help VFI grow in 2021, nurturing it into a
                full-fledged organization and launching the first Volship
                program. Volship, a 6 week volunteer program, ran across 9
                cities in India, leading selected participants through the
                ideation and implementation of a community volunteer project.
                Though Volship was initially planned as a six week program, it
                was later extended to nine weeks to accommodate the challenges
                brought about by the second wave of COVID.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Impact
        ============================================ */}
        <section
          style={{
            backgroundColor: '#0a0a0a',
            paddingTop: '100px',
            paddingBottom: '100px',
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3 className="text-center text-3xl font-bold text-white">
                Impact
              </h3>
            </ScrollAnimator>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
              <ScrollAnimator animation="fade-up" delay="100">
                <div className="flex flex-col items-center text-center">
                  <span
                    className="font-bold"
                    style={{ fontSize: '48px', color: '#FFB23E' }}
                  >
                    400+
                  </span>
                  <span
                    className="mt-2 font-semibold uppercase text-white"
                    style={{ fontSize: '13px', letterSpacing: '3px' }}
                  >
                    Beneficiaries
                  </span>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="300">
                <div className="flex flex-col items-center text-center">
                  <span
                    className="font-bold"
                    style={{ fontSize: '48px', color: '#FFB23E' }}
                  >
                    11
                  </span>
                  <span
                    className="mt-2 font-semibold uppercase text-white"
                    style={{ fontSize: '13px', letterSpacing: '3px' }}
                  >
                    partner organizations
                  </span>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="500">
                <div className="flex flex-col items-center text-center">
                  <span
                    className="font-bold"
                    style={{ fontSize: '48px', color: '#FFB23E' }}
                  >
                    22
                  </span>
                  <span
                    className="mt-2 font-semibold uppercase text-white"
                    style={{ fontSize: '13px', letterSpacing: '3px' }}
                  >
                    events/sessions held
                  </span>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Mailing List
        ============================================ */}
        <section style={{ paddingTop: '80px', paddingBottom: '100px' }}>
          <MailingListCTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
