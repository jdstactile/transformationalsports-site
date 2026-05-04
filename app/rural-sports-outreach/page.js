import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import Testimonial from '@/components/Testimonial';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Rural Sports Outreach | Transformational Sports',
};

export default function RuralSportsOutreachPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Rural Sports Outreach" />

        {/* ============================================
            SECTION 2: Content with Background Image
        ============================================ */}
        <section
          className="parallax-bg relative overflow-hidden"
          style={{
            backgroundImage:
              'url(https://transformationalsports.org/wp-content/uploads/2022/02/Rural-Sports-Outreach-1-1.jpg)',
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
                className="mx-auto text-white"
                style={{
                  fontSize: '28px',
                  lineHeight: 1.4,
                  maxWidth: '800px',
                }}
              >
                Rural Sports Outreach kicked off in 2021 with a mixed-gender
                sports program for youth in Kalavai Kootroad Village in rural
                Tamil Nadu. The multi-sport program uses a mix of Ultimate
                Frisbee, fitness training and traditional games such as kabaddi
                &amp; weekly gender sessions.
              </p>
            </ScrollAnimator>

            <ScrollAnimator animation="fade-up" delay="200">
              <p
                className="mx-auto mt-8 text-white"
                style={{
                  fontSize: '19px',
                  lineHeight: 1.6,
                  maxWidth: '800px',
                  fontWeight: 300,
                }}
              >
                A regular group of 25 youth, from primary schoolers to teens,
                attend. Additionally, weekend workshops with guest coaches bring
                youth from nearby villages attending as well, totaling 60
                participants.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Testimonial
        ============================================ */}
        <section className="bg-white" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
          <div
            className="mx-auto px-6"
            style={{ maxWidth: '55%' }}
          >
            <ScrollAnimator animation="fade-up">
              <Testimonial
                quote="When we play normally boys are not giving chance to girls. But when you conduct the session, the boys care about the girls and give the opportunity to them because we are a team."
                author="-S, female player, age 13"
              />
            </ScrollAnimator>

            <ScrollAnimator animation="fade-up" delay="200">
              <p
                className="mt-8 text-center text-sm font-semibold text-brown/70"
                style={{ letterSpacing: '1px' }}
              >
                Thilaga Palani, Rural Sport Outreach Program Manager
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Mailing List
        ============================================ */}
        <section style={{ paddingTop: '40px', paddingBottom: '100px' }}>
          <MailingListCTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
