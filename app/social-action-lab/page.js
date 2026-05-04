import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import Testimonial from '@/components/Testimonial';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Social Action Lab | Transformational Sports',
};

const featureCards = [
  {
    bg: '#FFF7EB',
    textColor: '#534B38',
    text: 'Six projects on the themes of gender equity, reproductive health and gender-based violence were selected',
  },
  {
    bg: '#FFD89F',
    textColor: '#534B38',
    text: 'Project leaders were paired with mentors from NGOs across the Kolkata Consular Region',
  },
  {
    bg: '#FFB23E',
    textColor: '#FFFFFF',
    text: 'Projects were implemented in Delhi, Bihar, Jharkhand, West Bengal, Assam and Meghalaya, in both rural and urban areas',
  },
  {
    bg: '#D58816',
    textColor: '#FFFFFF',
    text: 'In July 2019, the 6 project leaders presented at our culminating Lessons Learned event where over 100+ Kolkata school students attended',
  },
];

export default function SocialActionLabPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Social Action Lab" />

        {/* ============================================
            SECTION 2: Content with Background Image
        ============================================ */}
        <section
          className="parallax-bg relative overflow-hidden"
          style={{
            backgroundImage:
              'url(https://transformationalsports.org/wp-content/uploads/2022/02/Social-ActionLabInterior.jpeg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {/* Gradient overlay with blend */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(134deg, rgba(10,2,2,0.74), transparent)',
              mixBlendMode: 'overlay',
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
                Our first U.S. Consulate grant with the American Center,
                Kolkata, began with a five-day workshop in February 2019
                focusing on gender equity, leadership and team-building sessions
                with 28 young change-makers from across North and East India.
                TS, in partnership with Wind Dancers Trust (India), used sport
                and art in unorthodox ways to build gender dialogues.
              </p>
            </ScrollAnimator>

            <ScrollAnimator animation="fade-up" delay="200">
              <div className="mt-12 flex flex-col items-center">
                <span
                  className="font-bold"
                  style={{ fontSize: '48px', color: '#FFB23E' }}
                >
                  700+
                </span>
                <span
                  className="mt-2 font-semibold uppercase text-white"
                  style={{ fontSize: '13px', letterSpacing: '3px' }}
                >
                  youth and adults impacted
                </span>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Feature Cards Grid
        ============================================ */}
        <section className="bg-cream" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {featureCards.map((card, i) => (
                <ScrollAnimator
                  key={i}
                  animation="fold"
                  delay={`${i * 100}`}
                >
                  <div
                    className="rounded-md text-center"
                    style={{
                      backgroundColor: card.bg,
                      color: card.textColor,
                      padding: '80px',
                    }}
                  >
                    <p style={{ fontSize: '16px', lineHeight: 1.8 }}>
                      {card.text}
                    </p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Testimonials
        ============================================ */}
        <section className="bg-white" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <Divider centered color="#FFB23E" />

            <div className="mt-12 flex flex-col gap-16">
              <ScrollAnimator animation="fade-up">
                <Testimonial
                  quote="I never thought I would be capable of leading such a project since I don't speak English and I'm not highly educated. Everything was such a challenge for me. But it has been my passion for a long time to go back to the red-light area from where I come and work with the women who are still there."
                  author="S, age 31"
                />
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="200">
                <Testimonial
                  quote="They all feel there should be no discrimination; they all feel there is discrimination; they all want to be a part of a change."
                  author="A, age 20"
                />
              </ScrollAnimator>
            </div>
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
