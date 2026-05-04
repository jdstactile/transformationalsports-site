import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';
import ProgramCard from '@/components/ProgramCard';

export const metadata = {
  title: 'Programs | Transformational Sports',
};

const programs = [
  {
    title: 'VIRTUAL COACH TRAINING',
    backgroundImage:
      'https://transformationalsports.org/wp-content/uploads/2022/02/Virtual-Coach-Training-1.jpg',
    href: '/virtual-coach-training-choices',
  },
  {
    title: 'RURAL SPORTS OUTREACH',
    backgroundImage:
      'https://transformationalsports.org/wp-content/uploads/2022/02/Rural-Sports-Outreach.jpg',
    href: '/rural-sports-outreach',
  },
  {
    title: 'SOCIAL ACTION LAB',
    backgroundImage:
      'https://transformationalsports.org/wp-content/uploads/2022/02/Social-Action-Lab.jpg',
    href: '/social-action-lab',
  },
  {
    title: 'FELLOWSHIP & SCHOOL OUTREACH',
    backgroundImage:
      'https://transformationalsports.org/wp-content/uploads/2022/02/Fellowship-School-Outreach.jpg',
    href: '/fellowship-school-outreach',
  },
  {
    title: 'VOLUNTEER FOR INDIA',
    backgroundImage:
      'https://transformationalsports.org/wp-content/uploads/2022/02/Volunteer-for-India.jpg',
    href: '/volunteer-for-india',
  },
  {
    title: 'VOLUNTEER FOR INDIA 2.0',
    backgroundImage:
      'https://transformationalsports.org/wp-content/uploads/2022/02/2-small-1.jpg',
    href: '/volunteer-for-india-2',
  },
  {
    title: 'BRIDGING THE GAPS (BTG)',
    backgroundImage:
      'https://transformationalsports.org/wp-content/uploads/2022/02/BTGInterior1.jpeg',
    href: '/bridging-the-gaps',
  },
  {
    title: 'COVID-19 RELIEF',
    backgroundImage:
      'https://transformationalsports.org/wp-content/uploads/2022/02/Photo-from-Liz-3-Copy-1.jpg',
    href: '/covid19-relief',
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Programs" />

        {/* ============================================
            SECTION 2: Program Cards Grid
        ============================================ */}
        <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2" style={{ marginBottom: '-15px' }}>
              {programs.map((program, index) => (
                <ScrollAnimator
                  key={program.href}
                  animation="fold"
                  delay={`${index * 100}`}
                >
                  <ProgramCard
                    title={program.title}
                    backgroundImage={program.backgroundImage}
                    href={program.href}
                  />
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
