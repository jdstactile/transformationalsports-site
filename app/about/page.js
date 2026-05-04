import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';
import Divider from '@/components/Divider';
import TeamCard from '@/components/TeamCard';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'About — Transformational Sports',
  description:
    'Learn about Transformational Sports — 10+ years of experience training players, coaches and Indian non-profit organizations in the soft skills of building mixed-gender teams.',
};

/* ── SVG icons for the TS Method section ─────────────────────────────────── */
const BalanceIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffba60"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v18" />
    <path d="M2 7h4l6-4 6 4h4" />
    <path d="M5 7l-3 9h6L5 7z" />
    <path d="M19 7l-3 9h6l-3-9z" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffba60"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const PeopleIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffba60"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    <path d="M17 11a4 4 0 014 4v2" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffba60"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

/* ── Method blurb data ───────────────────────────────────────────────────── */
const methodBlurbs = [
  {
    icon: <BalanceIcon />,
    title: 'Make it balanced',
    body: 'Youth sports faces drop-outs when practices either become too competitive or lack focus. We teach coaches how to strike the right balance between fun and competition in each practice session.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Make it safe',
    body: "We train coaches on how to ensure sports practice sessions are a safe space for all players. Plus, we believe practice isn\u2019t over until every player reaches home safely.",
  },
  {
    icon: <PeopleIcon />,
    title: "Make it 'truly' mixed-gender",
    body: 'We train coaches on how to make small incremental changes to their practice sessions so that players across genders can work together better and move past the everyday realities of shyness, gender stereotypes, and norms.',
  },
  {
    icon: <ChartIcon />,
    title: 'Make it better each time',
    body: 'We encourage coaches to reflect after each of their sports sessions to improve the players experience for the next time regarding balance, safety and equality.',
  },
];

/* ── Team data ───────────────────────────────────────────────────────────── */
const teamRow1 = [
  {
    name: 'Liz Haynes',
    role: 'Director & Facilitator',
    imageUrl:
      'https://transformationalsports.org/wp-content/uploads/2022/08/LH-Headshot-Copy-1.jpg',
    bio: 'Liz, raised in the U.S., has lived, played and coached in India since 2013. She has a passion for developing sports and gender curriculum for young people. She has created sports & gender immersion camps, coach trainings, fellowships, social action labs and rural sports outreach programs all with the sole focus of advancing gender equity through mixed-gender sports programs.',
  },
  {
    name: 'Benoy Stephen',
    role: 'Program Manager & Facilitator',
    imageUrl:
      'https://transformationalsports.org/wp-content/uploads/2022/02/s-4-1.jpg',
    bio: 'Benoy joined TS in 2017 as a Bridging the Gaps fellow and became passionate about breaking gender barriers. He completed the Teach for India fellowship in 2018 and co-founded Y-Ultimate, a young not-for-profit that uses the sport of ultimate frisbee to build life skills in children, especially those from marginalised backgrounds.',
  },
  {
    name: 'Suprabha Hosamane',
    role: 'Strategy Officer & Curriculum Developer',
    imageUrl:
      'https://transformationalsports.org/wp-content/uploads/2024/07/Soups_Alishan-11.jpg',
    bio: "Suprabha is an entrepreneur from Chennai who began her journey with sports only in high school, after a childhood where she wasn\u2019t encouraged to take an interest in sports. She has now competed in tournaments, captained teams and also been a coach for youth teams.",
  },
];

const teamRow2 = [
  {
    name: 'Nimisha Vasava',
    role: 'Facilitator',
    imageUrl:
      'https://transformationalsports.org/wp-content/uploads/2024/07/Nimisha-Vasava.jpg',
    bio: 'Nimisha is an ultimate frisbee player and has represented India internationally six times as both a player and a coach. She began her journey with Transformational Sports in 2014 serving as a coach at Bridging the Gaps camps in Auroville.',
  },
  {
    name: 'Rakesh Anandan',
    role: 'Facilitator',
    imageUrl:
      'https://transformationalsports.org/wp-content/uploads/2024/07/Rakesh-Anandan.jpg',
    bio: 'Rakesh is a volleyball player and fitness trainer who has facilitated thousands of classes of mixed-gender adults and young people. Since 2018, Rakesh has worked with Transformational Sports as a facilitator and curriculum builder.',
  },
];

/* ========================================================================= */
export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* ── SECTION 1: Hero ──────────────────────────────────────────── */}
        <section
          className="parallax-bg hero-zoom relative flex flex-col items-center justify-center overflow-hidden"
          style={{
            backgroundImage:
              'url(https://transformationalsports.org/wp-content/uploads/2022/02/s-2_1.jpg)',
            paddingTop: '120px',
            paddingBottom: '120px',
            minHeight: '340px',
          }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, #313e47, rgba(49, 62, 71, 0.5))',
            }}
          />

          {/* Title */}
          <h1
            className="relative z-10 px-6 text-center text-white"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 57px)',
              lineHeight: 1.2,
            }}
          >
            10+ years of experience
          </h1>

          {/* Subtitle */}
          <p
            className="relative z-10 mx-auto mt-4 px-6 text-center text-lg font-bold text-white"
            style={{ maxWidth: '700px', lineHeight: 1.6 }}
          >
            training players, coaches and Indian non-profit organizations in the
            soft skills of building mixed-gender teams
          </p>
        </section>

        {/* ── SECTION 2: Since 2014 ────────────────────────────────────── */}
        <section style={{ paddingTop: '90px', paddingBottom: '90px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-3">
              {/* Left column — 1/3 */}
              <ScrollAnimator animation="fade-right" className="md:col-span-1">
                <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                  <h2
                    className="text-near-black"
                    style={{
                      fontSize: 'clamp(2.5rem, 4vw, 48px)',
                      lineHeight: 1.2,
                    }}
                  >
                    Since 2014
                  </h2>
                  <Divider color="#ffa40d" weight="3px" width="70px" />
                  <p
                    className="mt-6 text-base"
                    style={{ lineHeight: 1.6, color: '#808080' }}
                  >
                    Transformational Sports (TS) was formally registered in 2016
                    as a non-profit organization in the United States, but
                    unofficially, TS had already seen its beginnings through
                    sports and gender-based camps in India since 2014. The need
                    to leverage its potential with a formal organizational
                    structure and active funding was a result of the success seen
                    in those early camps, where sports became a powerful tool to
                    talk to both young women and men about gender roles and
                    gender equity, especially in societies where women are
                    traditionally not encouraged to play sports, or where sports
                    is considered a predominantly male endeavor.
                  </p>
                </div>
              </ScrollAnimator>

              {/* Right column — 2/3 */}
              <ScrollAnimator
                animation="fade-left"
                delay="200"
                className="md:col-span-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://transformationalsports.org/wp-content/uploads/2022/08/pic-1.jpg"
                  alt="Transformational Sports in action"
                  className="w-full"
                  style={{
                    border: '30px solid white',
                    boxShadow: '0 15px 60px rgba(29, 61, 71, 0.2)',
                  }}
                />
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Our Mission ───────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gray-bg">
          {/* Right decorative border */}
          <div
            className="absolute right-0 top-0 h-full"
            style={{
              width: '8vw',
              backgroundColor: 'rgba(255, 186, 96, 0.6)',
            }}
          />

          <div
            className="relative z-10 mx-auto max-w-7xl px-6"
            style={{
              paddingTop: 'clamp(120px, 20vw, 340px)',
              paddingBottom: 'clamp(120px, 20vw, 340px)',
            }}
          >
            <ScrollAnimator animation="fade-up">
              <h2
                className="mx-auto text-center text-near-black"
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 48px)',
                  lineHeight: 1.2,
                  maxWidth: '800px',
                }}
              >
                Our mission is to advance gender equity through mixed-gender
                sports
              </h2>
              <div className="mt-6">
                <Divider color="#ffa40d" width="70px" centered />
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ── SECTION 4: The TS Method ─────────────────────────────────── */}
        <section
          className="bg-white"
          style={{ paddingTop: '140px', paddingBottom: '110px' }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h2
                className="text-center text-near-black"
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 48px)',
                  lineHeight: 1.2,
                }}
              >
                The Transformational Sports Method
              </h2>
              <p
                className="mx-auto mt-4 text-center text-base"
                style={{ maxWidth: '700px', lineHeight: 1.6, color: '#808080' }}
              >
                We mentor coaches and facilitators to adapt the Transformational
                Sports method for their sports sessions:
              </p>
              <div className="mt-6">
                <Divider centered />
              </div>
            </ScrollAnimator>

            {/* Method grid */}
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              {methodBlurbs.map((blurb, i) => (
                <ScrollAnimator
                  key={blurb.title}
                  animation="fade-up"
                  delay={String((i + 1) * 100)}
                >
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-[42px] w-[42px] items-center justify-center">
                      {blurb.icon}
                    </div>
                    <h3
                      className="text-xl font-semibold text-near-black"
                      style={{ lineHeight: 1.6, fontSize: '19px' }}
                    >
                      {blurb.title}
                    </h3>
                    <p
                      className="mx-auto mt-3 text-base"
                      style={{
                        lineHeight: 1.6,
                        color: '#808080',
                        maxWidth: '480px',
                      }}
                    >
                      {blurb.body}
                    </p>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Why Mixed-Gender ──────────────────────────────── */}
        <ScrollAnimator animation="fade-up">
          <section className="bg-amber-warm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left — Image */}
              <div className="relative min-h-[400px] md:min-h-[600px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://transformationalsports.org/wp-content/uploads/2022/02/slide2.jpg"
                  alt="Mixed-gender sports session"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Right — Content */}
              <div
                className="flex flex-col justify-center"
                style={{
                  paddingTop: '80px',
                  paddingBottom: '80px',
                  paddingLeft: '5%',
                  paddingRight: '5%',
                }}
              >
                <h2
                  className="text-brown"
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 48px)',
                    lineHeight: 1.2,
                  }}
                >
                  Why Mixed-Gender (Co-Ed) Sports?
                </h2>
                <div className="mt-4">
                  <Divider color="#534B38" width="70px" />
                </div>
                <p
                  className="mt-6 text-base text-brown"
                  style={{ lineHeight: 1.6 }}
                >
                  We are asked this question many times, especially in India,
                  since our programs are designed as &lsquo;mixed-gender&rsquo;
                  programs amidst a vast sea of single-gender programs. Gender
                  stereotypes and inequities persist across the world and we
                  believe that gender-based programs these days have become
                  synonymous with empowerment of girls and women, rather than all
                  genders. In order to change deeply-set mindsets in society, we
                  need youth to play together, to take up the same space, and to
                  learn from each other, rather than separately. Mixed-gender
                  sports, if facilitated well, teach us how to interact
                  respectfully, sensitively and empathetically with those
                  different from us. It means we can move society forward,
                  together, rather than separately.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimator>

        {/* ── SECTION 6: Our Team ──────────────────────────────────────── */}
        <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <ScrollAnimator animation="fade-up">
              <h2
                className="text-center text-near-black"
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 48px)',
                  lineHeight: 1.2,
                }}
              >
                Our Team
              </h2>
              <p
                className="mx-auto mt-4 text-center text-base"
                style={{ maxWidth: '800px', lineHeight: 1.6, color: '#808080' }}
              >
                We work with a talented and passionate project-based staff,
                along with equally passionate and committed volunteers who take
                part in our programs as sports coaches, facilitators, and
                organizers.
              </p>
              <div className="mt-6">
                <Divider centered />
              </div>
            </ScrollAnimator>

            {/* Row 1 — 3 cards */}
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {teamRow1.map((member, i) => (
                <ScrollAnimator
                  key={member.name}
                  animation="fade-up"
                  delay={String((i + 1) * 200)}
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

            {/* Row 2 — 2 cards, centered */}
            <div
              className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2"
            >
              {teamRow2.map((member, i) => (
                <ScrollAnimator
                  key={member.name}
                  animation="fade-up"
                  delay={String((i + 1) * 200)}
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

        {/* ── SECTION 7: Mailing List ──────────────────────────────────── */}
        <section style={{ paddingTop: '40px', paddingBottom: '100px' }}>
          <MailingListCTA />
        </section>
      </main>

      <Footer />
    </>
  );
}
