import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="badge animate-fade-in delay-100">
            <Sparkles size={16} />
            <span>AI × Entertainment Production</span>
          </div>

          <div className="animate-fade-in delay-100">
            <div className="mascot-logo-wrapper">
              <img src="/images/mascot-logo.png" alt="koala Mascot" className="mascot-logo" />
              <div className="text-triple-outline">
                <span className="rainbow-t">t</span>
                <span className="rainbow-e">e</span>
                <span className="rainbow-a">a</span>
                <span className="rainbow-m">m</span>
                &nbsp;
                <span className="rainbow-k">k</span>
                <span className="rainbow-o">o</span>
                <span className="rainbow-a2">a</span>
                <span className="rainbow-l">l</span>
                <span className="rainbow-a3">a</span>
              </div>
            </div>
          </div>
          
          <h1 className="hero-title animate-fade-in delay-200 mt-4 text-double-outline">
            <span style={{ display: 'block', marginBottom: '8px' }}>エンタメプロデューサー × AI社員</span>
            <span style={{ display: 'block' }}><span className="text-gradient" style={{textShadow: 'none'}}>AIクリエイティブ企業</span></span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in delay-300">
            我々はAI社員を24時間使い、<br />
            驚異的なスピードであなたの会社の<br />
            新商材、新サービス、AI業務改善を<br />
            作ることが出来る。<br />
            <br />
            AI社員は我々が対応するので<br />
            まったく難しい知識は不要です。
          </p>
          
          <div className="hero-actions animate-fade-in delay-300">
            <a href="https://lin.ee/kGD3hGa" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: '#00B900', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              LINEでお問い合わせ
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
