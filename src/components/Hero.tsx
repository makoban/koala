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
          
          <h1 className="hero-title animate-fade-in delay-200 mt-4 text-double-outline" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span style={{ display: 'block', fontSize: 'clamp(1.1rem, 4.5vw, 2.2rem)', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', lineHeight: '1.4' }}>
              人の1/10のコストで<br className="mobile-break" />24時間文句を言わずに働く
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}><span className="text-gradient" style={{textShadow: 'none'}}>AI社員を作りませんか？</span></span>
          </h1>

          <div className="hero-price-punch animate-fade-in delay-300" style={{ backgroundColor: 'rgba(255,255,255,0.95)', padding: '1.5rem', borderRadius: '1.5rem', border: '4px solid var(--accent-primary)', marginTop: '2rem', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(255,107,107,0.3)', backdropFilter: 'blur(10px)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent-primary)', marginBottom: '1.2rem', letterSpacing: '0.05em' }}>すべてが人間の<span style={{ fontSize: '2.2rem' }}>「1/10」</span>の価格！</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', textAlign: 'left', maxWidth: '100%', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px dashed #eee', paddingBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#555' }}>採用費 <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.85rem' }}>(市場:200〜300万円)</span></span>
                <span style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--blue)' }}>👉 20〜30<span style={{ fontSize: '1rem' }}>万円</span></span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#555' }}>固定費 <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.85rem' }}>(月給:40〜50万円)</span></span>
                <span style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--blue)' }}>👉 4〜5<span style={{ fontSize: '1rem' }}>万円/月</span></span>
              </div>
            </div>
          </div>
          
          <p className="hero-subtitle animate-fade-in delay-400" style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
            新規事業の立ち上げも、日々の業務効率化も、<br className="mobile-break" />
            すべて<strong>「AI社員」の構築</strong>で解決します。<br className="desktop-break" /><br className="mobile-break" />
            
            最大の強みは、ユーザーを熱狂させる<br className="mobile-break" />
            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>「エンタメ要素」</span>を組み込めること。<br className="desktop-break" /><br className="mobile-break" />
            
            <span style={{ fontSize: 'clamp(0.9rem, 3.5vw, 1.2rem)', fontWeight: 800, color: 'var(--primary)', backgroundColor: 'rgba(255,255,255,0.8)', padding: '0.6rem 1.5rem', borderRadius: '2rem', display: 'inline-block', marginBottom: '1.2rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
              実は我々自身も「人間2名 ＋ AI社員7名」の<br className="mobile-break" />
              9名体制で会社を運営しています！
            </span><br />
            
            自ら実証済みの最強ノウハウをもとに、<br className="mobile-break" />
            最適なAIアシスタントを伴走構築します。
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
