import { Target, TrendingUp, HeartHandshake } from 'lucide-react';

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title keep-breaks-mobile" style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)' }}>
            なぜ<span className="text-gradient">koala</span>が選ばれるのか
          </h2>
          <p className="section-subtitle keep-breaks-mobile" style={{ fontSize: 'clamp(0.9rem, 3.5vw, 1.25rem)' }}>
            エンタメの最前線で培った「人を動かす」ノウハウと、<br />
            最先端AI技術の融合が生み出す3つの約束。
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon mb-4 mx-auto">
              <Target size={32} className="text-accent" />
            </div>
            <h3 className="feature-title text-center">エンタメ出身の企画力</h3>
            <p className="feature-desc keep-breaks-mobile text-center" style={{ fontSize: 'clamp(0.85rem, 3.2vw, 1rem)' }}>
              元大手アイドルJ社、<br />
              元大手パチンコメーカーS社の<br />
              プロデューサー陣が直接担当。<br />
              ただのシステム開発ではなく、<br />
              「ユーザーが熱中する」<br />
              体験をデザインします。
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon mb-4 mx-auto">
              <TrendingUp size={32} className="text-blue" />
            </div>
            <h3 className="feature-title text-center">AIによる超高速・低コスト</h3>
            <p className="feature-desc keep-breaks-mobile text-center" style={{ fontSize: 'clamp(0.85rem, 3.2vw, 1rem)' }}>
              24時間稼働可能な7名の優秀な<br />
              AI社員が開発・運用を担当。<br />
              人海戦術では不可能だった<br />
              「1/10のコスト」と「10倍のスピード」で、<br />
              新たな事業を爆速で作り上げます。
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon mb-4 mx-auto">
              <HeartHandshake size={32} className="text-accent" />
            </div>
            <h3 className="feature-title text-center">AI知識は一切不要</h3>
            <p className="feature-desc keep-breaks-mobile text-center" style={{ fontSize: 'clamp(0.85rem, 3.2vw, 1rem)' }}>
              「AIで何かを作りたい」という<br />
              漠然とした思いで構いません。<br />
              AI社員への対応は我々が行うため、<br />
              難しい知識はまったく不要です。<br />
              形になるまで完全無料で伴走します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
