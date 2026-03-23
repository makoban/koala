import { ArrowRight, Bot, Users } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title keep-breaks-mobile" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.8rem)', marginBottom: '1rem', fontWeight: 800 }}>
            <span className="text-gradient">圧倒的なコストパフォーマンス</span>
          </h2>
          <p className="section-subtitle text-center" style={{ lineHeight: '1.8' }}>
            「人間を採用する」よりも、<br className="mobile-break" />
            はるかに安く、早く、確実に。<br className="desktop-break" /><br className="mobile-break" />
            AI社員の導入は、最強の投資です。
          </p>
        </div>

        <div className="pricing-comparison" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginBottom: '4rem' }}>
          
          {/* Human Cost Card */}
          <div className="pricing-card obsolete-card" style={{ flex: '1 1 300px', backgroundColor: '#fff', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', opacity: 0.7, filter: 'grayscale(0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', justifyContent: 'center', color: '#6b7280' }}>
              <Users size={28} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>一般的な人間の採用</h3>
            </div>
            <div>
              <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem', textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem' }}>採用費・教育費 (初期)</span>
                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 800, textDecoration: 'line-through' }}>約 200万〜300万円</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem' }}>月給・福利厚生 (月額)</span>
                <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 800, textDecoration: 'line-through' }}>約 40万〜50万円</span>
              </div>
            </div>
          </div>

          <div className="vs-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', borderRadius: '50%', width: '3rem', height: '3rem', fontWeight: 800, color: '#9ca3af', flexShrink: 0, margin: '0 1rem' }}>
            VS
          </div>

          {/* AI Cost Card (Highlighted) */}
          <div className="pricing-card highlight-card" style={{ flex: '1 1 350px', background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,248,255,0.9))', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(255,107,107,0.15)', border: '2px solid var(--accent-primary)', position: 'relative', transform: 'scale(1.05)' }}>
            <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', backgroundColor: 'var(--accent-primary)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: 800, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', transform: 'rotate(12deg)' }}>
              コスト 1/10 !
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', justifyContent: 'center' }}>
              <Bot size={36} className="text-accent" />
              <h3 className="text-gradient" style={{ fontSize: '1.75rem', fontWeight: 800 }}>koalaのAI社員</h3>
            </div>
            <div>
              <div style={{ borderBottom: '1px solid rgba(78,205,196,0.2)', paddingBottom: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>AI社員 制作費 (初期)</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', justifyContent: 'center' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-primary)', lineHeight: 1 }}>20〜30</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>万円 / 人</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>AI雇用・運用費 (月額)</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', justifyContent: 'center' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-primary)', lineHeight: 1 }}>4〜5</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>万円 / 人</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The FREE Consultation USP */}
        <div className="free-support-banner" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', padding: '3rem', borderRadius: '1.5rem', border: '1px solid #e2e8f0', textAlign: 'center', maxWidth: '900px', margin: '0 auto', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            さらに、<span className="text-accent">AIの管理・教育サポートは完全無料</span>
          </h3>
          <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: '#4b5563', textAlign: 'center' }}>
            AI社員の教育、日々の管理業務、<br className="mobile-break" />
            アップデート対応まで。<br className="desktop-break" /><br className="mobile-break" />
            「人間のエンタメプロデューサー」への<br className="mobile-break" />
            <strong>ご相談料は一切いただきません。</strong><br className="desktop-break" /><br className="mobile-break" />
            難しいITインフラのお世話は<br className="mobile-break" />
            すべて我々に丸投げしてください。
          </p>
          <a href="https://lin.ee/kGD3hGa" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            まずは無料で相談してみる <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
