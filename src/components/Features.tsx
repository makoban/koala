import { Target, TrendingUp, HeartHandshake } from 'lucide-react';

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            なぜ<span className="text-gradient">koala</span>が選ばれるのか
          </h2>
          <p className="section-subtitle">
            エンタメの最前線で培った「人を動かす」ノウハウと、<br className="desktop-only" />
            最先端AI技術の融合が生み出す3つの約束。
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon mb-4">
              <Target size={32} className="text-accent" />
            </div>
            <h3 className="feature-title">エンタメ出身の企画力</h3>
            <p className="feature-desc">
              <span style={{ display: 'inline-block' }}>元大手アイドルJ社、</span>
              <span style={{ display: 'inline-block' }}>元大手パチンコメーカーS社の</span>
              <span style={{ display: 'inline-block' }}>プロデューサー陣が直接担当。</span><br />
              <span style={{ display: 'inline-block' }}>ただのシステム開発ではなく、</span>
              <span style={{ display: 'inline-block' }}>「ユーザーが熱中する」</span>
              <span style={{ display: 'inline-block' }}>体験をデザインします。</span>
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon mb-4">
              <TrendingUp size={32} className="text-blue" />
            </div>
            <h3 className="feature-title">AIによる超高速・低コスト</h3>
            <p className="feature-desc">
              <span style={{ display: 'inline-block' }}>24時間稼働可能な7名の優秀な</span>
              <span style={{ display: 'inline-block' }}>AI社員が開発・運用を担当。</span><br />
              <span style={{ display: 'inline-block' }}>人海戦術では不可能だった</span>
              <span style={{ display: 'inline-block' }}>「1/10のコスト」と「10倍のスピード」で、</span>
              <span style={{ display: 'inline-block' }}>新たな事業を爆速で作り上げます。</span>
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon mb-4">
              <HeartHandshake size={32} className="text-accent" />
            </div>
            <h3 className="feature-title">AI知識は一切不要</h3>
            <p className="feature-desc">
              <span style={{ display: 'inline-block' }}>「AIで何かを作りたい」という</span>
              <span style={{ display: 'inline-block' }}>漠然とした思いで構いません。</span><br />
              <span style={{ display: 'inline-block' }}>AI社員への対応は我々が行うため、</span>
              <span style={{ display: 'inline-block' }}>難しい知識はまったく不要です。</span><br />
              <span style={{ display: 'inline-block' }}>形になるまで完全無料で伴走します。</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
