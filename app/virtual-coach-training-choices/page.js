import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import MailingListCTA from '@/components/MailingListCTA';

export const metadata = {
  title: 'Virtual Coach Training | Transformational Sports',
};

const courses = [
  {
    level: 'LEVEL 1',
    subtitle: 'Building Strong Mixed-Gender Teams',
    backgroundImage:
      'https://transformationalsports.org/wp-content/uploads/2024/07/thumb21.jpg',
    href: '/virtual-coach-training',
  },
  {
    level: 'LEVEL 2',
    subtitle: 'Puberty & Teen Relationships on Mixed-Gender Teams',
    backgroundImage:
      'https://transformationalsports.org/wp-content/uploads/2024/07/thumb11.png',
    href: '/puberty-teen-relationships',
  },
];

export default function VirtualCoachTrainingChoicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Virtual Coach Training" />

        {/* ============================================
            SECTION 2: Two Course Cards
        ============================================ */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {courses.map((course, i) => (
                <ScrollAnimator
                  key={course.level}
                  animation="fold"
                  delay={`${i * 200}`}
                >
                  <Link
                    href={course.href}
                    className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundImage: `url(${course.backgroundImage})`,
                      minHeight: '355px',
                    }}
                  >
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(30, 30, 30, 0.7), rgba(255, 216, 159, 0.35))',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-10 text-center">
                      <h3
                        className="font-semibold uppercase text-white"
                        style={{
                          fontSize: '33px',
                          letterSpacing: '4px',
                        }}
                      >
                        {course.level}
                      </h3>
                      <p
                        className="text-xl text-white"
                        style={{ fontWeight: 400 }}
                      >
                        {course.subtitle}
                      </p>
                    </div>
                  </Link>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 3: Mailing List
        ============================================ */}
        <section style={{ paddingTop: '40px', paddingBottom: '100px' }}>
          <MailingListCTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
