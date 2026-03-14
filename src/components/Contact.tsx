import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card bg-glass animate-on-scroll">
          <div className="contact-content text-center">
            <h2 className="section-title keep-breaks-mobile" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
              新しいAI事業を、<br />
              <span className="text-gradient">圧倒的なフットワークで形にしませんか？</span>
            </h2>
            <p className="contact-desc keep-breaks-mobile" style={{ fontSize: 'clamp(0.9rem, 3.5vw, 1.25rem)' }}>
              「AIで何かを作りたい」という最初の一歩から、私たちが完全無料で伴走します。<br />
              まずはお気軽にご相談ください。
            </p>
            
            <div className="contact-actions">
              <a href="https://lin.ee/kGD3hGa" target="_blank" rel="noopener noreferrer" className="btn-primary contact-btn" style={{ backgroundColor: '#00B900', color: 'white' }}>
                <MessageCircle size={20} />
                LINEでお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer text-center">
        <div className="container">
          <p className="copyright">© 2026 koala | All Rights Reserved.</p>
          <p className="brand-note">Produced by koala (AI×Entertainment)</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
