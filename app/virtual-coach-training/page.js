import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import TeamCard from '@/components/TeamCard';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Building Strong Mixed-Gender Teams | Transformational Sports',
};

const courseTestimonials = [
  {
    quote:
      "Easy to understand, and they talk about real life solutions. It's not just based on theory.",
    author: 'Coach Siddharth',
  },
  {
    quote:
      'The best course in regards to the knowledge of mixed-gender training.',
    author: 'Coach Bonnke',
  },
  {
    quote:
      'I got so many thoughts, ideas and solutions from this course...thank you so much once again.',
    author: 'Coach Sohail',
  },
  {
    quote:
      'This is an amazing course...a great opportunity to get to know yourself.',
    author: 'Coach Selvi',
  },
];

const trainingOutcomes = [
  {
    text: 'Retain and onboard players, ',
    bold: 'especially girls',
  },
  {
    text: 'Implement their new ',
    bold: 'toolkit of strategies for socially aware coaching',
  },
  {
    text: 'Increase player ',
    bold: 'communication to help overcome shyness amongst genders',
  },
];

const modules = [
  { title: 'Module 1: Mixed-Gender Basics', lessons: '4 lessons' },
  { title: 'Module 2: The Transformational Sports Method', lessons: '4 lessons' },
  { title: 'Module 3: Gender', lessons: '6 lessons' },
  { title: 'Module 4: Communication', lessons: '4 lessons' },
  { title: 'Module 5: Inclusion', lessons: '3 lessons' },
];

const teamMembers = [
  {
    name: 'Liz Haynes',
    role: 'Director & Facilitator',
    imageUrl:
      'https://transformationalsports.org/wp-content/uploads/2022/08/LH-Headshot-Copy-1.jpg',
    bio: 'Liz, raised in the U.S., has lived, played and coached in India since 2013. She has a passion for developing sports and gender curriculum for young people.',
  },
  {
    name: 'Benoy Stephen',
    role: 'Program Manager & Facilitator',
    imageUrl:
      'https://transformationalsports.org/wp-content/uploads/2022/02/s-4-1.jpg',
    bio: 'Benoy joined TS in 2017 as a Bridging the Gaps fellow and became passionate about breaking gender barriers. He co-founded Y-Ultimate, a young not-for-profit that uses ultimate frisbee to build life skills in children.',
  },
  {
    name: 'Rakesh Anandan',
    role: 'Facilitator',
    imageUrl:
      'https://transformationalsports.org/wp-content/uploads/2024/07/Rakesh-Anandan.jpg',
    bio: 'Rakesh is a volleyball player and fitness trainer who has facilitated thousands of classes of mixed-gender adults and young people. Since 2018, Rakesh has worked with Transformational Sports as a facilitator and curriculum builder.',
  },
  {
    name: 'Nimisha Vasava',
    role: 'Facilitator',
    imageUrl:
      'https://transformationalsports.org/wp-content/uploads/2024/07/Nimisha-Vasava.jpg',
    bio: 'Nimisha is an ultimate frisbee player and has represented India internationally six times as both a player and a coach. She began her journey with Transformational Sports in 2014.',
  },
];

export default function VirtualCoachTrainingPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Full-Width Hero Image
        ============================================ */}
        <section className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://transformationalsports.org/wp-content/uploads/2022/02/DSC_0120-1-1.jpg"
            alt="Building Strong Mixed-Gender Teams"
            className="h-auto w-full object-cover"
            style={{ maxHeight: '550px' }}
          />
        </section>

        {/* ============================================
            SECTION 2: Title Area
        ============================================ */}
        <section className="bg-white" style={{ padding: '60px 0' }}>
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <h1
                className="font-semibold"
                style={{
                  fontSize: '48px',
                  color: '#FFB23E',
                  lineHeight: 1.2,
                }}
              >
                Building Strong Mixed-Gender Teams
              </h1>
              <p
                className="mt-4 font-light"
                style={{ fontSize: '19px', color: '#808080' }}
              >
                Five-Week Virtual Training Course
              </p>
              <p
                className="mx-auto mt-4"
                style={{
                  fontSize: '19px',
                  color: '#808080',
                  maxWidth: '700px',
                  lineHeight: 1.6,
                }}
              >
                A step-by-step guide for sports coaches and youth facilitators
                to bridge the gaps of gender on their teams.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: What do mixed-gender sports NGOs struggle with?
        ============================================ */}
        <section
          style={{
            background: 'linear-gradient(to right, #FFB23E, #FFFFFF 71%)',
            paddingTop: '80px',
            paddingBottom: '80px',
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <div
                className="mx-auto rounded-md bg-white"
                style={{
                  padding: '58px 70px',
                  maxWidth: '700px',
                }}
              >
                <h3
                  className="font-bold text-near-black"
                  style={{ fontSize: '33px', lineHeight: 1.3 }}
                >
                  What do mixed-gender sports NGOs struggle with?
                </h3>
                <div className="mt-4">
                  <Divider color="#FFB23E" width="180px" weight="5px" />
                </div>
                <ul
                  className="mt-8 flex flex-col gap-4 text-near-black"
                  style={{ fontSize: '19px', lineHeight: 1.6 }}
                >
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-amber">&#8226;</span>
                    <span>Onboarding &amp; retention of girl players</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-amber">&#8226;</span>
                    <span>
                      Training coaches to be as socially proficient as they are
                      technically proficient
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-amber">&#8226;</span>
                    <span>
                      Creating an environment where boys and girls overcome
                      their shyness and become true teammates
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Course Testimonials
        ============================================ */}
        <section
          style={{
            backgroundColor: '#f1f1f1',
            paddingTop: '80px',
            paddingBottom: '80px',
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-5">
              {/* Left column — 3/5 */}
              <div className="md:col-span-3">
                <ScrollAnimator animation="fade-right">
                  <h3
                    className="font-bold text-near-black"
                    style={{ fontSize: '33px', lineHeight: 1.3 }}
                  >
                    Course Testimonials
                  </h3>
                  <p
                    className="mt-2"
                    style={{ fontSize: '19px', color: '#808080' }}
                  >
                    Participant coaches rated the course 9 out of 10!
                  </p>
                </ScrollAnimator>

                <div className="mt-10 flex flex-col gap-8">
                  {courseTestimonials.map((item, i) => (
                    <ScrollAnimator
                      key={i}
                      animation="fade-up"
                      delay={`${i * 100}`}
                    >
                      <blockquote>
                        <p
                          className="italic text-near-black"
                          style={{ fontSize: '19px', lineHeight: 1.6 }}
                        >
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        <footer
                          className="mt-2 font-semibold"
                          style={{ color: '#FFB23E' }}
                        >
                          -{item.author}
                        </footer>
                      </blockquote>
                    </ScrollAnimator>
                  ))}
                </div>
              </div>

              {/* Right column — 2/5 */}
              <div className="md:col-span-2">
                <ScrollAnimator animation="fade-left">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://transformationalsports.org/wp-content/uploads/2022/02/IMG_5803_1-1.jpg"
                    alt="Coach training session"
                    className="w-full rounded-md object-cover"
                    style={{ minHeight: '400px' }}
                  />
                </ScrollAnimator>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5: Training Outcomes
        ============================================ */}
        <section
          style={{
            background: 'linear-gradient(to right, #FFFFFF, #FFB23E)',
            paddingTop: '80px',
            paddingBottom: '80px',
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <div
                className="mx-auto rounded-md bg-white"
                style={{
                  padding: '58px 70px',
                  maxWidth: '700px',
                }}
              >
                <h3
                  className="font-bold text-near-black"
                  style={{ fontSize: '33px', lineHeight: 1.3 }}
                >
                  By the end of this training participants will be able to:
                </h3>
                <ul className="mt-8 flex flex-col gap-5">
                  {trainingOutcomes.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-near-black"
                      style={{ fontSize: '19px', lineHeight: 1.6 }}
                    >
                      <svg
                        className="mt-1 flex-shrink-0"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFB23E"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>
                        {item.text}
                        <strong>{item.bold}</strong>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 6: Course Format
        ============================================ */}
        <section
          style={{
            background: 'linear-gradient(to right, #FFB23E, #FFFFFF 73%)',
            paddingTop: '80px',
            paddingBottom: '80px',
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <div
                className="mx-auto rounded-md bg-white"
                style={{
                  padding: '58px 70px',
                  maxWidth: '700px',
                }}
              >
                <h3
                  className="font-bold text-near-black"
                  style={{ fontSize: '33px', lineHeight: 1.3 }}
                >
                  Course Format
                </h3>
                <div className="mt-4">
                  <Divider color="#FFB23E" width="180px" weight="5px" />
                </div>
                <ul
                  className="mt-8 flex flex-col gap-4 text-near-black"
                  style={{ fontSize: '19px', lineHeight: 1.6 }}
                >
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-amber">&#8226;</span>
                    <span>
                      A 5-week blended training program available in Hindi,
                      Tamil, Kannada &amp; English
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-amber">&#8226;</span>
                    <span>
                      Participation by senior &amp; junior coaches
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-amber">&#8226;</span>
                    <span>
                      Blended training includes: 21 pre-recorded lessons, online
                      support forum, 1 hour/week 1:1 sessions
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 7: Module Overview (Accordion)
        ============================================ */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="mx-auto max-w-3xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3
                className="text-center font-bold text-near-black"
                style={{ fontSize: '33px', lineHeight: 1.3, marginBottom: '40px' }}
              >
                Module Overview
              </h3>
            </ScrollAnimator>

            <div className="flex flex-col">
              {modules.map((mod, i) => (
                <ScrollAnimator
                  key={i}
                  animation="fade-up"
                  delay={`${i * 100}`}
                >
                  <details
                    className="group border-b border-brown/20"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <summary
                      className="flex cursor-pointer items-center justify-between py-5 font-semibold text-brown transition-colors duration-200 hover:text-near-black"
                      style={{ fontSize: '19px' }}
                    >
                      <span>{mod.title}</span>
                      <svg
                        className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div
                      className="rounded-b-md pb-5"
                      style={{
                        backgroundColor: '#FFF7EB',
                        padding: '20px 24px',
                        marginBottom: '8px',
                      }}
                    >
                      <p className="text-brown" style={{ fontSize: '16px' }}>
                        {mod.lessons}
                      </p>
                    </div>
                  </details>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 8: Team
        ============================================ */}
        <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3
                className="text-center font-bold text-near-black"
                style={{ fontSize: '33px', lineHeight: 1.3 }}
              >
                Our Team
              </h3>
              <div className="mt-6">
                <Divider centered />
              </div>
            </ScrollAnimator>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {teamMembers.map((member, i) => (
                <ScrollAnimator
                  key={member.name}
                  animation="fade-up"
                  delay={`${(i + 1) * 200}`}
                >
                  <TeamCard
                    name={member.name}
                    role={member.role}
                    imageUrl={member.imageUrl}
                    bio={member.bio}
                  />
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 9: Sign-Up
        ============================================ */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <h3
                className="font-bold text-near-black"
                style={{ fontSize: '33px', lineHeight: 1.3 }}
              >
                Sign-Up Details
              </h3>
              <div className="mt-4">
                <Divider centered />
              </div>
              <p
                className="mx-auto mt-8"
                style={{
                  fontSize: '19px',
                  color: '#808080',
                  lineHeight: 1.6,
                  maxWidth: '600px',
                }}
              >
                Email{' '}
                <a
                  href="mailto:team@transformationalsports.org"
                  className="font-semibold text-amber transition-colors duration-200 hover:text-amber-dark"
                >
                  team@transformationalsports.org
                </a>{' '}
                to be part of our next cohort!
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 10: Mailing List
        ============================================ */}
        <section style={{ paddingTop: '40px', paddingBottom: '100px' }}>
          <MailingListCTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
