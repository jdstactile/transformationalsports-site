import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import Counter from '@/components/Counter';
import Testimonial from '@/components/Testimonial';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Fellowship & School Outreach Program | Transformational Sports',
};

const partnerOrgs = [
  { name: 'Kriya/Mahindra United World College India', location: 'Pune' },
  { name: 'Auroville Village Action Group', location: 'Auroville' },
  { name: 'Arunodhaya Centre for Street & Working Children', location: 'Chennai' },
  { name: 'Auroville Ultimate', location: 'Auroville' },
  { name: 'Lavad Primary School', location: 'Ahmedabad' },
  { name: 'Rainbow Home', location: 'Kolkata' },
  { name: 'Surat Ultimate', location: 'Surat' },
  { name: 'Bachapan Banao', location: 'Chattisgarh' },
  { name: 'Teach for India', location: 'Hyderabad' },
];

export default function FellowshipSchoolOutreachPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Fellowship & School Outreach Program" />

        {/* ============================================
            SECTION 2: Content with Background Image
        ============================================ */}
        <section
          className="parallax-bg relative overflow-hidden"
          style={{
            backgroundImage:
              'url(https://transformationalsports.org/wp-content/uploads/2022/02/BTG-Day_1-15.jpeg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(134deg, rgba(10,2,2,0.74), transparent)',
            }}
          />

          <div
            className="relative z-10 mx-auto max-w-7xl px-6"
            style={{ paddingTop: '120px', paddingBottom: '520px' }}
          >
            <ScrollAnimator animation="fade-right">
              <p
                className="text-white"
                style={{
                  fontSize: '16px',
                  lineHeight: 1.9,
                  maxWidth: '600px',
                }}
              >
                In 2017, TS created its first fellowship in partnership with the
                Wind Dancers Trust (India) where we selected 21 fellows from NGOs
                across India working with teen populations and interested in using
                sports for building gender equity. After being trained in an
                immersion-style, dynamic four-session sport and gender module, the
                fellows returned to their home towns to teach a minimum of 100
                school students each a curriculum of Ultimate Frisbee and our
                gender module topics: sex, gender &amp; stereotypes; reproductive
                health; media &amp; gender; and gender-based violence.
              </p>
            </ScrollAnimator>

            <ScrollAnimator animation="fade-up" delay="200">
              <div className="mt-12 flex flex-col items-start">
                <span
                  className="font-bold"
                  style={{ fontSize: '48px', color: '#FFB23E' }}
                >
                  3000+
                </span>
                <span
                  className="mt-2 font-semibold uppercase text-white"
                  style={{ fontSize: '13px', letterSpacing: '3px' }}
                >
                  youth and young adults impacted
                </span>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Partner Organizations Grid
        ============================================ */}
        <section className="bg-cream" style={{ padding: '80px 0' }}>
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3
                className="text-center font-semibold text-brown"
                style={{ fontSize: '33px', lineHeight: 1.3 }}
              >
                Partner Organizations
              </h3>
            </ScrollAnimator>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partnerOrgs.map((org, i) => (
                <ScrollAnimator
                  key={org.name}
                  animation="fold"
                  delay={`${(i % 3) * 100}`}
                >
                  <div
                    className="rounded-md transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundColor: '#FFD89F',
                      padding: '29px 48px',
                    }}
                  >
                    <p className="text-xl font-semibold text-brown">
                      {org.name}
                    </p>
                    <p className="mt-1 text-sm text-brown">{org.location}</p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Follow-up Text
        ============================================ */}
        <section className="bg-white" style={{ padding: '80px 0' }}>
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <p
                className="mx-auto text-center text-brown"
                style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  maxWidth: '800px',
                }}
              >
                Since then, TS has worked with several schools in rural Tamil
                Nadu and with schools in Chennai, along with our long-time
                collaborator and staff member, Thilaga, based in Kanchipuram,
                Tamil Nadu.
              </p>
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
                  quote="I always knew that women faced a lot of hardship in India and never knew what to do about it. This fellowship has given me strategies not only to change my attitude but also talk to my friends about how to change things."
                  author="B, age 17"
                />
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="200">
                <Testimonial
                  quote="I learned to be open with everyone. And I learned that boys and girls should be equal. And I should not be shy of my period. And shouldn't be shy to say that I have my period. Because boys should know about us and what is happening in our bodies and we should also know about boys' bodies."
                  author="R, age 13"
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
