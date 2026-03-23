import { Target, TrendingUp, HeartHandshake } from 'lucide-react';

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title keep-breaks-mobile" style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)' }}>
            なぜ<span className="text-gradient">koala</span>が選ばれるのか
          </h2>
          <p className="section-subtitle text-center" style={{ lineHeight: '1.8', marginBottom: '3rem' }}>
            エンタメの最前線で培った<br className="mobile-break" />「人を動かす」ノウハウと、<br className="desktop-break" />
            最先端AI技術の融合が<br className="mobile-break" />生み出す3つの約束。
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon mb-4 mx-auto">
              <Target size={32} className="text-accent" />
            </div>
            <h3 className="feature-title text-center">AIの知識は「一切不要」</h3>
            <p className="feature-desc text-center" style={{ lineHeight: '1.8' }}>
              AI社員の構築から教育、管理まで<br className="mobile-break" />
              すべて人間が代行いたします。<br className="desktop-break" /><br className="mobile-break" />
              お客様の会社で、AIの専門知識を<br className="mobile-break" />
              一から勉強する必要はありません。
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon mb-4 mx-auto">
              <TrendingUp size={32} className="text-blue" />
            </div>
            <h3 className="feature-title text-center">我々の真骨頂「シンプルな画面」</h3>
            <p className="feature-desc text-center" style={{ lineHeight: '1.8' }}>
              毎日使うものだからこそ、<br className="mobile-break" />
              「扱いやすさ」に命を懸けています。<br className="desktop-break" /><br className="mobile-break" />
              ポップで分かりやすいデザインで、<br className="mobile-break" />
              操作画面を極限までシンプルに。
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon mb-4 mx-auto">
              <HeartHandshake size={32} className="text-accent" />
            </div>
            <h3 className="feature-title text-center">伴走型の「ゼロから提案」</h3>
            <p className="feature-desc text-center" style={{ lineHeight: '1.8' }}>
              「何からAI化すべきか…」<br className="mobile-break" />
              そんな状態から一緒に伴走します。<br className="desktop-break" /><br className="mobile-break" />
              課題を深くヒアリングしながら、<br className="mobile-break" />
              最適なAI組織の形を無料でご提案。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
