import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import TeamCard from '@/components/TeamCard';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title:
    'Puberty & Teen Relationships on Mixed-Gender Teams | Transformational Sports',
};

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

const modules = [
  {
    title: 'Module 1: Puberty',
    lessons: [
      'Introduction',
      'How our bodies & minds change',
      'Menstruation & puberty',
      'Nightfall & puberty',
      'False stories about puberty',
      'Playing with a pad',
    ],
  },
  {
    title: 'Module 2: Teen Relationships',
    lessons: [
      'Introduction',
      'Attraction & teen relationships',
      'Eve-teasing',
      'Love failure',
      'Consent',
      'Sex',
    ],
  },
  {
    title: 'Module 3: Biological Sex & Gender',
    lessons: ['Biological Sex', 'Gender', 'Inclusion'],
  },
  {
    title: 'Module 4: Talking with Parents',
    lessons: [
      'How to talk to parents about puberty',
      'How to talk to parents about periods & sports',
      'How to talk to parents about teen attraction & relationships',
    ],
  },
];

export default function PubertyTeenRelationshipsPage() {
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
            src="https://transformationalsports.org/wp-content/uploads/2024/07/pic11.png"
            alt="Puberty & Teen Relationships on Mixed-Gender Teams"
            className="h-auto w-full object-cover"
            style={{ maxHeight: '500px' }}
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
                Puberty &amp; Teen Relationships on Mixed-Gender Teams
              </h1>
              <p
                className="mt-4 font-bold"
                style={{ fontSize: '19px', color: '#808080', fontWeight: 300 }}
              >
                4-week virtual training course
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
                A step-by-step guide for sports coaches to confidently navigate
                puberty and teen relationships on a mixed-gender team
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Which issues do mixed-gender sports coaches still face?
        ============================================ */}
        <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-stretch gap-0 md:grid-cols-2">
              {/* Left — Image */}
              <ScrollAnimator animation="fade-right">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://transformationalsports.org/wp-content/uploads/2022/02/BTG-Day_1-191.jpg"
                  alt="Mixed-gender sports coaching session"
                  className="h-full w-full rounded-md object-cover"
                  style={{ minHeight: '400px' }}
                />
              </ScrollAnimator>

              {/* Right — Content */}
              <ScrollAnimator
                animation="fade-left"
                className="flex flex-col justify-center"
                style={{ paddingLeft: '5%', paddingRight: '5%' }}
              >
                <div
                  style={{
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    paddingTop: '40px',
                    paddingBottom: '40px',
                  }}
                >
                  <h3
                    className="font-bold text-near-black"
                    style={{ fontSize: '28px', lineHeight: 1.4 }}
                  >
                    Which issues do mixed-gender sports coaches still face?
                  </h3>
                  <ul
                    className="mt-8 flex flex-col gap-4 text-near-black"
                    style={{ fontSize: '19px', lineHeight: 1.6 }}
                  >
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-amber">&#8226;</span>
                      <span>
                        Social stigma on discussing menstruation and puberty in
                        general
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-amber">&#8226;</span>
                      <span>
                        Not being trained in sex-ed and gender sensitivity
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-amber">&#8226;</span>
                      <span>
                        Not understanding how to discuss relationships that
                        develop between players and the impact on the overall
                        team
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-amber">&#8226;</span>
                      <span>
                        Fear of speaking out on topics like this when they have
                        not embodied it in their own lives
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: Why take this training? — Three Scenarios
        ============================================ */}
        <section
          style={{
            backgroundColor: '#f1f1f1',
            paddingTop: '80px',
            paddingBottom: '80px',
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3
                className="text-center font-bold text-near-black"
                style={{ fontSize: '33px', lineHeight: 1.3, marginBottom: '40px' }}
              >
                Why take this training?
              </h3>
            </ScrollAnimator>

            <div className="flex flex-col items-center gap-10">
              {/* Scenario 1 */}
              <ScrollAnimator
                animation="fade-up"
                delay="100"
                className="w-full md:w-1/2"
              >
                <div
                  className="rounded-md bg-white"
                  style={{ padding: '40px' }}
                >
                  <p
                    className="italic text-brown"
                    style={{ fontSize: '19px', lineHeight: 1.6 }}
                  >
                    There is a male coach of a mixed-gender team in Chennai who
                    had a 9-year-old girl at practice who got her first periods
                    while on the field. Her shorts had a blood stain on them. She
                    didn&rsquo;t know what periods were because no one had ever
                    told her.{' '}
                    <strong>
                      The coach never expected a 9-year-old to get her periods so
                      early and doesn&rsquo;t know what to do.
                    </strong>
                  </p>
                </div>
              </ScrollAnimator>

              {/* Scenario 2 */}
              <ScrollAnimator
                animation="fade-up"
                delay="200"
                className="w-full md:w-1/2"
              >
                <div
                  className="rounded-md bg-white"
                  style={{ padding: '40px' }}
                >
                  <p
                    className="italic text-brown"
                    style={{ fontSize: '19px', lineHeight: 1.6 }}
                  >
                    There is a female coach of a teenage mixed-gender team in
                    Bangalore. Two of the players have a love failure. The team
                    starts taking sides and one of the players is being excluded.{' '}
                    <strong>
                      The coach doesn&rsquo;t know what to do.
                    </strong>
                  </p>
                </div>
              </ScrollAnimator>

              {/* Scenario 3 */}
              <ScrollAnimator
                animation="fade-up"
                delay="300"
                className="w-full md:w-1/2"
              >
                <div
                  className="rounded-md bg-white"
                  style={{ padding: '40px' }}
                >
                  <p
                    className="italic text-brown"
                    style={{ fontSize: '19px', lineHeight: 1.6 }}
                  >
                    There is a male coach of a mixed-gender team in a rural
                    village of 6th, 7th and 8th standard players. One of the boys
                    comes to him and tells him he is worried because all the
                    other boys are growing taller and bigger but he isn&rsquo;t.{' '}
                    <strong>
                      The coach doesn&rsquo;t know what to say.
                    </strong>
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5: Training Outcomes
        ============================================ */}
        <section
          style={{
            backgroundColor: '#f1f1f1',
            paddingTop: '0',
            paddingBottom: '80px',
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
              {/* Left content — 3/5 */}
              <div className="md:col-span-3">
                <ScrollAnimator animation="fade-right">
                  <h3
                    className="font-bold text-near-black"
                    style={{ fontSize: '33px', lineHeight: 1.3 }}
                  >
                    By the end of this training, participants will be able to:
                  </h3>
                  <ul
                    className="mt-8 flex flex-col gap-4 text-near-black"
                    style={{ fontSize: '19px', lineHeight: 1.6 }}
                  >
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-amber">&#8226;</span>
                      <span>
                        Understand puberty and the developmental changes that
                        occur in the body, mind and heart
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-amber">&#8226;</span>
                      <span>
                        Respond more confidently to questions that youth players
                        ask about puberty and relationships
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-amber">&#8226;</span>
                      <span>
                        Create a more understanding, open and comfortable
                        environment for those playing while having periods
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-amber">&#8226;</span>
                      <span>
                        Learn sample dialogues for how to open conversations with
                        players on these topics
                      </span>
                    </li>
                  </ul>
                </ScrollAnimator>
              </div>

              {/* Right — 2/5 image */}
              <div className="md:col-span-2">
                <ScrollAnimator animation="fade-left">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://transformationalsports.org/wp-content/uploads/2024/07/dfsdds.jpg"
                    alt="Training outcomes"
                    className="w-full rounded-md object-cover"
                    style={{ minHeight: '400px' }}
                  />
                </ScrollAnimator>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 6: Special Features
        ============================================ */}
        <section
          className="bg-white"
          style={{ paddingTop: '80px', paddingBottom: '80px' }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <ScrollAnimator animation="fade-up" delay="100">
                <div
                  className="border-t-4 border-amber"
                  style={{ padding: '32px' }}
                >
                  <h4
                    className="font-bold text-near-black"
                    style={{ fontSize: '23px', lineHeight: 1.5 }}
                  >
                    Customization
                  </h4>
                  <p
                    className="mt-4"
                    style={{ fontSize: '19px', color: '#808080', lineHeight: 1.6 }}
                  >
                    Work with NGO leaders to understand which lessons are suited;
                    NGOs can select whether lessons on consent or sex be included
                  </p>
                </div>
              </ScrollAnimator>

              {/* Feature 2 */}
              <ScrollAnimator animation="fade-up" delay="200">
                <div
                  className="border-t-4 border-amber"
                  style={{ padding: '32px' }}
                >
                  <h4
                    className="font-bold text-near-black"
                    style={{ fontSize: '23px', lineHeight: 1.5 }}
                  >
                    Shared experience
                  </h4>
                  <p
                    className="mt-4"
                    style={{ fontSize: '19px', color: '#808080', lineHeight: 1.6 }}
                  >
                    Interviews with veteran coaches and facilitators across India
                  </p>
                </div>
              </ScrollAnimator>

              {/* Feature 3 */}
              <ScrollAnimator animation="fade-up" delay="300">
                <div
                  className="border-t-4 border-amber"
                  style={{ padding: '32px' }}
                >
                  <h4
                    className="font-bold text-near-black"
                    style={{ fontSize: '23px', lineHeight: 1.5 }}
                  >
                    Open-minded, empathetic facilitators
                  </h4>
                  <p
                    className="mt-4"
                    style={{ fontSize: '19px', color: '#808080', lineHeight: 1.6 }}
                  >
                    Mindset of non-judgment; believe in educating on body
                    development, respect, equality
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 7: Course Format
        ============================================ */}
        <section
          style={{
            backgroundColor: '#FFF7EB',
            paddingTop: '80px',
            paddingBottom: '80px',
          }}
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <h3
                className="font-bold text-brown"
                style={{ fontSize: '28px', lineHeight: 1.4 }}
              >
                Course Format
              </h3>
              <div className="mt-4">
                <Divider centered />
              </div>
              <ul
                className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 text-near-black"
                style={{ fontSize: '19px', lineHeight: 1.6 }}
              >
                <li className="flex items-start justify-center gap-3">
                  <span className="mt-1 text-amber">&#8226;</span>
                  <span className="text-left">
                    Blended curriculum of pre-recorded videos, assignments and
                    live sessions
                  </span>
                </li>
                <li className="flex items-start justify-center gap-3">
                  <span className="mt-1 text-amber">&#8226;</span>
                  <span className="text-left">
                    English and Hindi language options
                  </span>
                </li>
                <li className="flex items-start justify-center gap-3">
                  <span className="mt-1 text-amber">&#8226;</span>
                  <span className="text-left">
                    18 pre-recorded lessons + weekly assignments via Thinkific
                  </span>
                </li>
                <li className="flex items-start justify-center gap-3">
                  <span className="mt-1 text-amber">&#8226;</span>
                  <span className="text-left">
                    Online support forum for coaches
                  </span>
                </li>
                <li className="flex items-start justify-center gap-3">
                  <span className="mt-1 text-amber">&#8226;</span>
                  <span className="text-left">
                    2 hours/week of live sessions
                  </span>
                </li>
              </ul>
            </ScrollAnimator>
          </div>
        </section>

        {/* ============================================
            SECTION 8: Who is this training for?
        ============================================ */}
        <section
          className="bg-white"
          style={{ paddingTop: '80px', paddingBottom: '80px' }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3
                className="text-center font-bold text-near-black"
                style={{ fontSize: '28px', lineHeight: 1.4 }}
              >
                Who is this training for?
              </h3>
              <div className="mt-4">
                <Divider centered />
              </div>
            </ScrollAnimator>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              <ScrollAnimator animation="fade-up" delay="100">
                <div className="text-center">
                  <p
                    className="text-near-black"
                    style={{ fontSize: '19px', lineHeight: 1.6 }}
                  >
                    A sports coach/facilitator not equipped to handle social
                    aspects
                  </p>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="200">
                <div className="text-center">
                  <p
                    className="text-near-black"
                    style={{ fontSize: '19px', lineHeight: 1.6 }}
                  >
                    A sports coach/facilitator struggling to make their team more
                    gender-equal &amp; inclusive
                  </p>
                </div>
              </ScrollAnimator>

              <ScrollAnimator animation="fade-up" delay="300">
                <div className="text-center">
                  <p
                    className="text-near-black"
                    style={{ fontSize: '19px', lineHeight: 1.6 }}
                  >
                    Coaches that have already been certified in{' '}
                    <strong>
                      Level 1: Building Strong Mixed-Gender Teams
                    </strong>
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 9: Module Overview (Accordion)
        ============================================ */}
        <section
          className="bg-white"
          style={{ paddingTop: '80px', paddingBottom: '80px' }}
        >
          <div className="mx-auto max-w-3xl px-6">
            <ScrollAnimator animation="fade-up">
              <h3
                className="text-center font-bold text-near-black"
                style={{
                  fontSize: '33px',
                  lineHeight: 1.3,
                  marginBottom: '40px',
                }}
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
                      <ul className="flex flex-col gap-2 text-brown">
                        {mod.lessons.map((lesson, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2"
                            style={{ fontSize: '16px' }}
                          >
                            <span className="mt-0.5">&#8226;</span>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 10: Team
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
            SECTION 11: Sign-Up
        ============================================ */}
        <section
          className="bg-white"
          style={{ paddingTop: '80px', paddingBottom: '80px' }}
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <ScrollAnimator animation="fade-up">
              <p
                className="mx-auto"
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
            SECTION 12: Mailing List
        ============================================ */}
        <section style={{ paddingTop: '40px', paddingBottom: '100px' }}>
          <MailingListCTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
