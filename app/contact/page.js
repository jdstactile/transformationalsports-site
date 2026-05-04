import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollAnimator from '@/components/ScrollAnimator';

export const metadata = {
  title: 'Contact Us | Transformational Sports',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: Hero
        ============================================ */}
        <Hero title="Contact Us" />

        {/* ============================================
            SECTION 2: Contact Info
        ============================================ */}
        <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="mx-auto max-w-[600px] px-6">
            <ScrollAnimator animation="fade-up">
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    src="https://transformationalsports.org/wp-content/uploads/2021/03/cropped-ts-logo_icon-v2.png"
                    alt="Transformational Sports logo"
                    className="mx-auto"
                    style={{ width: '80px', height: 'auto' }}
                  />
                </div>

                {/* Contact details */}
                <div>
                  <h2
                    className="font-semibold"
                    style={{
                      fontSize: '33px',
                      lineHeight: 1.3,
                      color: '#808080',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    Have a question?
                  </h2>

                  <h3
                    className="mt-4"
                    style={{ fontSize: '23px', lineHeight: 1.5, color: '#444444' }}
                  >
                    Email:{' '}
                    <a
                      href="mailto:team@transformationalsports.org"
                      className="font-bold transition-colors duration-200 hover:underline"
                      style={{ color: '#444444' }}
                    >
                      team@transformationalsports.org
                    </a>
                  </h3>

                  <p className="mt-4 font-semibold text-brown">
                    You can also message us via{' '}
                    <a
                      href="https://www.linkedin.com/company/transformational-sports/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber transition-colors duration-200 hover:underline"
                      style={{ color: '#FFB23E' }}
                    >
                      LinkedIn
                    </a>
                    ,{' '}
                    <a
                      href="https://www.facebook.com/transformationalsports"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber transition-colors duration-200 hover:underline"
                      style={{ color: '#FFB23E' }}
                    >
                      Facebook
                    </a>
                    , or{' '}
                    <a
                      href="https://www.instagram.com/transformationalsports/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber transition-colors duration-200 hover:underline"
                      style={{ color: '#FFB23E' }}
                    >
                      Instagram
                    </a>
                    .
                  </p>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
