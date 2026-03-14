const teamMembers = [
  {
    category: 'Producer',
    name: 'R.O',
    role: 'IT Producer',
    description: '元大手アイドル事務所(J社)担当。クリエイティブな企画力とデジタルの融合を得意とする。',
    image: '/images/team/avatar_producer_ro_1773474045969.png',
  },
  {
    category: 'Producer',
    name: 'M.B',
    role: 'Development Producer',
    description: '元大手パチンコメーカー(S社)開発担当。日本一の販売台数を誇る実績と緻密な計算力を持つ。',
    image: '/images/team/avatar_producer_mb_1773474098732.png',
  },
  {
    category: 'AI Employee',
    name: 'PM Koala',
    role: 'Project Manager',
    description: 'フットワーク軽く進行管理を担当。チームkoalaのリーダー的存在。',
    image: '/images/team/avatar_ai_pm_koala_1773474143618.png',
  },
  {
    category: 'AI Employee',
    name: 'Finance Owl',
    role: '財務担当',
    description: '圧倒的低コスト(1/10)を実現するための予算管理と計算を瞬時に行う。',
    image: '/images/team/avatar_ai_finance_owl_1773474183385.png',
  },
  {
    category: 'AI Employee',
    name: 'PR Fox',
    role: '広報担当',
    description: 'SNSやメディアへの露出戦略を24時間体制で考え続けるアイデアマン。',
    image: '/images/team/avatar_ai_pr_fox_1773474196288.png',
  },
  {
    category: 'AI Employee',
    name: 'SE Cat',
    role: 'システムエンジニア',
    description: 'AI業務改善やシステムのアーキテクチャ設計を高速で構築する。',
    image: '/images/team/avatar_ai_se_cat_1773474233158.png',
  },
  {
    category: 'AI Employee',
    name: 'Programmer Dog',
    role: 'プログラマー',
    description: '超高速(10倍)納品を支える、休まずコードを書き続ける忠実な開発者。',
    image: '/images/team/avatar_ai_programmer_dog_1773474248911.png',
  },
  {
    category: 'AI Employee',
    name: 'Designer Bunny',
    role: 'デザイナー',
    description: '最新のトレンドを取り入れたポップでクリエイティブなUI/UXを量産する。',
    image: '/images/team/avatar_ai_designer_bunny_1773474261540.png',
  },
  {
    category: 'AI Employee',
    name: 'Debugger Hedgehog',
    role: 'デバッガー',
    description: '少しのバグも見逃さない。チクチクと細かいテストを自動で実行する。',
    image: '/images/team/avatar_ai_debugger_hedgehog_1773474304410.png',
  }
];

const Team = () => {
  const producers = teamMembers.filter(m => m.category === 'Producer');
  const aiEmployees = teamMembers.filter(m => m.category === 'AI Employee');
  const pmKoala = aiEmployees.find(m => m.name === 'PM Koala');
  const otherAiMembers = aiEmployees.filter(m => m.name !== 'PM Koala');

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header text-center animate-fade-in">
          <h2 className="section-title">Team members</h2>
          <p className="section-subtitle">エンタメのプロと、24時間働くAIスペシャリストたち</p>
        </div>

        <div className="team-category mb-12">
          <h3 className="category-title text-center mb-8">
            <span className="text-gradient">Human Producers</span>
          </h3>
          <div className="team-grid producers-grid">
            {producers.map((member, index) => (
              <div key={index} className={`team-card animate-fade-in delay-${(index + 1) * 100}`}>
                <div className="avatar-wrapper">
                  <img src={member.image} alt={member.name} className="team-avatar" />
                </div>
                <div className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role text-accent">{member.role}</p>
                  <p className="team-desc">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-category">
          <h3 className="category-title text-center mb-8">
            <span className="text-gradient-alt">AI Employees</span>
          </h3>
          {pmKoala && (
            <div className="pm-koala-wrapper mb-12 flex justify-center">
              <div className="team-card animate-fade-in delay-100 pm-koala-card">
                <div className="avatar-wrapper ai-avatar-wrapper">
                  <img src={pmKoala.image} alt={pmKoala.name} className="team-avatar" />
                </div>
                <div className="team-info">
                  <h4 className="team-name">{pmKoala.name}</h4>
                  <p className="team-role text-blue">{pmKoala.role}</p>
                  <p className="team-desc">{pmKoala.description}</p>
                </div>
              </div>
            </div>
          )}

          <div className="team-grid ai-grid">
            {otherAiMembers.map((member, index) => (
              <div key={index} className={`team-card animate-fade-in delay-${(index % 3 + 1) * 100}`}>
                <div className="avatar-wrapper ai-avatar-wrapper">
                  <img src={member.image} alt={member.name} className="team-avatar" />
                </div>
                <div className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role text-blue">{member.role}</p>
                  <p className="team-desc">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
