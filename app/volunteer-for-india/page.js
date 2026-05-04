import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import Counter from '@/components/Counter';
import Testimonial from '@/components/Testimonial';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Volunteer for India | Transformational Sports',
};

const infoBoxes = [
  'Thirty-three young adults from across India',
  'Understanding gender and inclusivity',
  'Bringing life-skills through sport',
];

export default function VolunteerForIndiaPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Volunteer for India" />

        {/* ============================================
            SECTION 2: Content with Background Image
        ============================================ */}
        <section
          className="parallax-bg relative overflow-hidden"
          style={{
            backgroundImage:
              'url(https://transformationalsports.org/wp-content/uploads/2022/02/VFIINTERIOR.jpeg)',
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
            style={{ paddingTop: '120px', paddingBottom: '120px' }}
          >
            <ScrollAnimator animation="fade-up">
              <p
                className="mx-auto text-center text-white"
                style={{
                  fontSize: '19px',
                  lineHeight: 1.6,
                  maxWidth: '800px',
                }}
              >
                TS was awarded a second U.S. Consulate grant, this time in
                Chennai, to help lay the foundation for India&apos;s first
                national youth volunteer network. The 9-month program kicked off
                with a four-day immersive workshop in Chennai in February 2020,
                designed along with Wind Dancers Trust (India).
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Three Info Boxes
        ============================================ */}
        <section
          className="parallax-bg relative overflow-hidden"
          style={{
            backgroundImage:
              'url(https://transformationalsports.org/wp-content/uploads/2022/02/VFIINTERIOR.jpeg)',
            backgroundPosition: 'center bottom',
            backgroundSize: 'cover',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(134deg, rgba(10,2,2,0.74), transparent)',
            }}
          />

          <div
            className="relative z-10 mx-auto max-w-7xl px-6"
            style={{ paddingTop: '0', paddingBottom: '80px' }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {infoBoxes.map((text, i) => (
                <ScrollAnimator
                  key={i}
                  animation="fade-up"
                  delay={`${i * 100}`}
                >
                  <div
                    className="rounded-md text-center text-white"
                    style={{
                      backgroundColor: 'rgba(48,48,48,0.75)',
                      padding: '60px 48px',
                    }}
                  >
                    <p style={{ fontSize: '19px', lineHeight: 1.6 }}>{text}</p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>

            <ScrollAnimator animation="fade-up" delay="200">
              <p
                className="mx-auto mt-16 text-center text-white"
                style={{
                  fontSize: '19px',
                  lineHeight: 1.6,
                  maxWidth: '800px',
                }}
              >
                By playing a mixed-gender, non-contact sport like Ultimate
                Frisbee, participants came face-to-face with several long-held
                prejudices and cultural practices that defined their lives, and
                have now found ways to work around it through sport. These
                learnings have become the foundations of the Volunteer for India
                initiative.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Impact
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
              <h3
                className="text-center text-3xl font-bold text-white"
              >
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
                    1650+
                  </span>
                  <span
                    className="mt-2 font-semibold uppercase text-white"
                    style={{ fontSize: '13px', letterSpacing: '3px' }}
                  >
                    people reached
                  </span>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="300">
                <div className="flex flex-col items-center text-center">
                  <span
                    className="font-bold"
                    style={{ fontSize: '48px', color: '#FFB23E' }}
                  >
                    24
                  </span>
                  <span
                    className="mt-2 font-semibold uppercase text-white"
                    style={{ fontSize: '13px', letterSpacing: '3px' }}
                  >
                    states
                  </span>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="500">
                <div className="flex flex-col items-center text-center">
                  <span
                    className="font-bold"
                    style={{ fontSize: '48px', color: '#FFB23E' }}
                  >
                    4
                  </span>
                  <span
                    className="mt-2 font-semibold uppercase text-white"
                    style={{ fontSize: '13px', letterSpacing: '3px' }}
                  >
                    union territories
                  </span>
                </div>
              </ScrollAnimator>
            </div>

            <ScrollAnimator animation="fade-up" delay="200">
              <p
                className="mx-auto mt-12 text-center text-white"
                style={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  maxWidth: '600px',
                }}
              >
                Post grant, TS selected two directors to take Volunteer for
                India forward.
              </p>
              <div className="mt-4 text-center">
                <a
                  href="http://www.volunteerforindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber transition-colors duration-200 hover:text-amber-dark"
                  style={{ fontSize: '16px' }}
                >
                  www.volunteerforindia.com
                </a>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 5: Testimonials
        ============================================ */}
        <section className="bg-white" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <Divider centered color="#FFB23E" />

            <div className="mt-12 flex flex-col gap-16">
              <ScrollAnimator animation="fade-up">
                <Testimonial
                  quote="What was the most useful session at the workshop? Ultimate Frisbee. The game taught me inclusiveness, gender neutrality and the importance of caring for each other."
                  author="K, age 21"
                />
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="200">
                <Testimonial
                  quote="Inclusion now comes to me more naturally; I'm more conscious about it. I think I've also learnt to be more flexible and leave a few things undone for the rest to take ownership. I now have a broader mindset, am more compassionate, more loving, and more accepting."
                  author="S, age 21"
                />
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 6: Mailing List
        ============================================ */}
        <section style={{ paddingTop: '40px', paddingBottom: '100px' }}>
          <MailingListCTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
