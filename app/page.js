import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import ScrollAnimator from '@/components/ScrollAnimator';
import SectionLabel from '@/components/SectionLabel';
import Divider from '@/components/Divider';
import Counter from '@/components/Counter';
import MailingListCTA from '@/components/MailingListCTA';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero Slider
        ============================================ */}
        <HeroSlider />

        {/* ============================================
            SECTION 2: Quote
        ============================================ */}
        <section
          className="relative"
          style={{ borderRight: '8vw solid #FFD89F' }}
        >
          <div className="mx-auto max-w-7xl px-6 py-[70px] pb-[3px] md:py-[110px] md:pb-[110px]">
            <ScrollAnimator animation="fade-up">
              <div className="mx-auto max-w-[700px]">
                <div
                  style={{
                    borderLeft: '10px solid #313e47',
                    paddingLeft: '30px',
                  }}
                >
                  <p
                    className="text-near-black text-base md:text-[19px]"
                    style={{
                      lineHeight: 1.6,
                      letterSpacing: '-1px',
                    }}
                  >
                    What if you played a mixed-gender sport for the first time?
                    What if your coach was well-versed in the challenges of
                    mixed-gender teams and could create an environment where all
                    players could thrive? What if you could learn from that
                    coach? What if entire communities participated in
                    mixed-gender programs that taught not just the sport but the
                    tenets of equality, sensitivity, respect and empathy? What if
                    you could develop a new set of skills that allowed you to
                    view gender, and the relationships between genders,
                    differently? What if a new generation of coaches and players
                    took these skills and created a new norm?
                  </p>
                  <p
                    className="mt-6 font-semibold"
                    style={{ fontSize: '19px', lineHeight: 1.6, color: '#ffba60' }}
                  >
                    When we play the game differently, we view the world
                    differently.
                  </p>
                </div>
              </div>
            </ScrollAnimator>
          </div>

        </section>

        {/* ============================================
            SECTION 3: About Us / Who Are We
        ============================================ */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 pt-0 pb-[100px] md:pt-[100px] md:pb-[100px]">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Left column */}
              <ScrollAnimator animation="fade-right" className="pt-0 md:pt-[60px]">
                <SectionLabel text="about us" centered={false} />
                <h2
                  className="mt-4 font-normal text-brown"
                  style={{ fontSize: '40px', lineHeight: 1.3 }}
                >
                  Who are we?
                </h2>
                <Divider width="70px" weight="3px" />
                <p
                  className="mt-6 text-[#808080]"
                  style={{ fontSize: '16px', lineHeight: 1.6 }}
                >
                  Transformational Sports is a female-led, inclusive, non-profit
                  organization committed to working with people who want to bring
                  about a change in the mindset, perspective and reality of
                  gender through mixed-gender sports. We primarily work in India
                  where stark gender inequities exist and women are traditionally
                  not encouraged to play sports.
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-amber transition-colors duration-200 hover:text-amber-dark"
                >
                  Read about our journey here
                  <span className="text-lg">&rarr;</span>
                </Link>
              </ScrollAnimator>

              {/* Right column */}
              <ScrollAnimator animation="fade-left" className="pt-0 md:pt-[90px]">
                <Image
                  src="https://transformationalsports.org/wp-content/uploads/2022/02/so-5-1-1536x1017-1.jpg"
                  alt="Transformational Sports team in action"
                  width={700}
                  height={464}
                  className="w-full rounded-2xl object-cover"
                />
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Programs / What Do We Do
        ============================================ */}
        <section className="bg-black/[0.03]">
          <div
            className="mx-auto max-w-7xl px-6"
            style={{ paddingTop: '100px', paddingBottom: '100px' }}
          >
            <ScrollAnimator animation="fade-up">
              <div className="text-center">
                <SectionLabel text="PROGRAMS" centered />
                <h2
                  className="mt-4 font-normal text-brown"
                  style={{ fontSize: '40px', lineHeight: 1.3 }}
                >
                  What do we do?
                </h2>
                <Divider width="70px" weight="3px" centered />
                <p
                  className="mx-auto mt-6 max-w-[800px] text-[#808080]"
                  style={{ fontSize: '19px', lineHeight: 1.6 }}
                >
                  We create programs, conduct workshops and offer online
                  certifications to train a new generation of coaches,
                  facilitators and teams in mixed-gender play and gender equity.
                  We also incubate sports-for-development projects that focus on
                  improving gender inequities in marginalized communities. We can
                  take any sport and modify it to teach the fundamentals of
                  equality and inclusion, and to care about these fundamentals
                  more than winning.
                </p>
                <div className="mt-8">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-amber transition-colors duration-200 hover:text-amber-dark"
                  >
                    These are the programs we offer
                    <span className="text-lg">&rarr;</span>
                  </Link>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 5: Mission (Dark Hero)
        ============================================ */}
        <section
          className="relative bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              'url(https://transformationalsports.org/wp-content/uploads/2020/12/screenshot_2020_12_2_Fo1wv.jpg)',
          }}
        >
          {/* Gradient overlay with multiply blend */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(20deg, #1f1f1f 50%, rgba(31,31,31,0))',
              mixBlendMode: 'multiply',
            }}
          />
          <div
            className="relative z-10 mx-auto max-w-7xl px-6"
            style={{ paddingTop: '200px', paddingBottom: '200px' }}
          >
            <ScrollAnimator animation="fade-right" className="max-w-xl">
              <SectionLabel text="mission" light centered={false} />
              <h2
                className="mt-4 font-normal text-white"
                style={{ fontSize: '40px', lineHeight: 1.3 }}
              >
                Why do we do this?
              </h2>
              <Divider width="70px" weight="3px" />
              <p
                className="mt-6 text-white"
                style={{ fontSize: '16px', lineHeight: 1.6 }}
              >
                Across the world today, we are faced with staggering problems
                related to gender, be it at home or at work. We believe that
                sports, if taught with the intention of equality and
                inclusivity, can transform our society into one that nurtures a
                deep respect for all people, regardless of gender.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 6: Who Is This For?
        ============================================ */}
        <section className="bg-black/[0.03]">
          <div
            className="mx-auto max-w-7xl px-6 text-center"
            style={{ paddingTop: '100px', paddingBottom: '100px' }}
          >
            <ScrollAnimator animation="fade-up">
              <h2
                className="font-normal text-brown"
                style={{ fontSize: '40px', lineHeight: 1.3 }}
              >
                Who is this for?
              </h2>
              <Divider width="70px" weight="3px" centered />
              <p
                className="mx-auto mt-6 max-w-[700px] text-[#808080]"
                style={{ fontSize: '19px', lineHeight: 1.6 }}
              >
                Any individual, non-profit organization or team that would like
                to learn about or use sports-based programs to bridge the gaps of
                gender.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-amber transition-colors duration-200 hover:text-amber-dark"
                >
                  Join our community
                  <span className="text-lg">&rarr;</span>
                </Link>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 7: Our Impact (Gold Banner)
        ============================================ */}
        <section style={{ backgroundColor: '#FFD89F' }}>
          <div
            className="mx-auto max-w-7xl px-6"
            style={{ paddingTop: '100px', paddingBottom: '100px' }}
          >
            <h2
              className="text-center font-normal text-brown"
              style={{ fontSize: '40px', lineHeight: 1.3 }}
            >
              Our Impact
            </h2>
            <Divider width="70px" weight="3px" centered />
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
              <ScrollAnimator animation="fade-up" delay="100">
                <Counter
                  number="400+"
                  label="Coaches & Facilitators Trained in Gender & Sports"
                  icon="https://transformationalsports.org/wp-content/uploads/2022/02/ic3-1.png"
                />
              </ScrollAnimator>
              <ScrollAnimator animation="fade-up" delay="300">
                <Counter
                  number="6000+"
                  label="Youth & Young Adults Impacted"
                  icon="https://transformationalsports.org/wp-content/uploads/2022/02/ic2-1.png"
                />
              </ScrollAnimator>
              <ScrollAnimator animation="fade-up" delay="500">
                <Counter
                  number="70+"
                  label="Organizations Impacted"
                  icon="https://transformationalsports.org/wp-content/uploads/2022/02/ic1-1.png"
                />
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 8: Our Partners
        ============================================ */}
        <section>
          <div
            className="mx-auto max-w-7xl px-6"
            style={{ paddingTop: '120px', paddingBottom: '120px' }}
          >
            <ScrollAnimator animation="fade-up">
              <h2
                className="text-center font-normal text-brown"
                style={{ fontSize: '33px', lineHeight: 1.3 }}
              >
                Our Partners
              </h2>
              <Divider width="70px" weight="3px" centered />
              <div className="mt-12 grid grid-cols-1 items-center gap-12 sm:grid-cols-3">
                <a
                  href="https://ariadiscs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  <img
                    src="https://transformationalsports.org/wp-content/uploads/2022/08/logo1.png"
                    alt="Aria Discs"
                    className="h-24 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </a>
                <a
                  href="https://volunteerforindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  <img
                    src="https://transformationalsports.org/wp-content/uploads/2022/08/logo2.png"
                    alt="Volunteer for India"
                    className="h-24 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </a>
                <a
                  href="https://katradi.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  <img
                    src="https://transformationalsports.org/wp-content/uploads/2022/08/logo3.jpg"
                    alt="Katradi"
                    className="h-24 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </a>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 9: Mailing List
        ============================================ */}
        <section
          style={{ paddingTop: '100px', paddingBottom: '100px' }}
        >
          <MailingListCTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
