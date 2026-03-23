import { ArrowRight } from 'lucide-react';

const LineBotMockup = () => (
  <div style={{ backgroundColor: '#849b87', width: '100%', height: '100%', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.65rem', fontFamily: 'sans-serif', boxSizing: 'border-box', overflow: 'hidden' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignSelf: 'flex-end', maxWidth: '85%' }}>
      <span style={{ fontSize: '0.55rem', color: '#e2e8f0', textAlign: 'right', paddingRight: '4px' }}>田中課長</span>
      <div style={{ backgroundColor: '#8de055', padding: '6px 10px', borderRadius: '12px 12px 0 12px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
        約200万円で鈴木商事から新規案件で在庫のお願いが来ておりますがどうしますか？
      </div>
    </div>
    <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
      <div style={{ width: '22px', height: '22px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0 }}>🐨</div>
      <div style={{ backgroundColor: '#fff', padding: '6px 10px', borderRadius: '12px 12px 12px 0', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', lineHeight: '1.4' }}>
        200万円だと、3か月以内に1000万円の売り上げの約束が必要となりますので先方と交渉してください。
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignSelf: 'flex-end', maxWidth: '85%', marginTop: '2px' }}>
      <span style={{ fontSize: '0.55rem', color: '#e2e8f0', textAlign: 'right', paddingRight: '4px' }}>渡辺主任</span>
      <div style={{ backgroundColor: '#8de055', padding: '6px 10px', borderRadius: '12px 12px 0 12px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
        部長のパワハラがきついです。対応して欲しいです。
      </div>
    </div>
    <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
      <div style={{ width: '22px', height: '22px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0 }}>🐨</div>
      <div style={{ backgroundColor: '#fff', padding: '6px 10px', borderRadius: '12px 12px 12px 0', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', lineHeight: '1.4' }}>
        それは心配です。もう少し内容を教えてほしいです。
      </div>
    </div>
  </div>
);

const BookingMockup = () => (
  <div style={{ backgroundColor: '#f0f2f5', width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
    <div style={{ backgroundColor: '#fff', width: '90%', padding: '12px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <div style={{ color: '#28a745', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        ✓ 予約が確定しました
      </div>
      <div style={{ fontSize: '0.75rem', color: '#333', lineHeight: '1.6' }}>
        <strong>店舗:</strong> 焼肉トラジ 星空店<br />
        <strong>日時:</strong> 4月15日(金) 19:30〜<br />
        <strong>人数:</strong> 12名（コース予約済）
      </div>
      <div style={{ width: '100%', padding: '6px', marginTop: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', fontSize: '0.75rem', textAlign: 'center', fontWeight: 'bold' }}>カレンダーに追加</div>
    </div>
  </div>
);

const FinanceMockup = () => (
  <div style={{ backgroundColor: '#1e293b', width: '100%', height: '100%', padding: '12px 16px', color: '#fff', display: 'flex', flexDirection: 'column', gap: '10px', boxSizing: 'border-box' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>今月の営業キャッシュフロー</span>
      <span style={{ fontSize: '0.65rem', backgroundColor: '#059669', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>正常</span>
    </div>
    <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#10b981' }}>+ ¥3,450,000</div>
    <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '4px', paddingTop: '8px' }}>
      {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
        <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i === 6 ? '#10b981' : '#334155', borderRadius: '2px 2px 0 0' }}></div>
      ))}
    </div>
    <div style={{ fontSize: '0.65rem', color: '#94a3b8', textAlign: 'center' }}>来月の資金ショートリスクは0％です</div>
  </div>
);

const EmailMockup = () => (
  <div style={{ backgroundColor: '#fff', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
    <div style={{ backgroundColor: '#f8fafc', padding: '8px 12px', borderBottom: '1px solid #e2e8f0', fontSize: '0.75rem', color: '#64748b' }}>
      <div style={{ marginBottom: '4px' }}><strong>宛先:</strong> system-admin@client.co.jp</div>
      <div><strong>件名:</strong> [解決済] 先日のAPIエラー原因とパッチの提供</div>
    </div>
    <div style={{ padding: '12px', fontSize: '0.7rem', color: '#334155', lineHeight: '1.6', flex: 1 }}>
      お世話になっております。<br />
      ご報告いただいた認証エラーについて、トークン有効期限のパース処理に起因するものと特定いたしました。<br />
      修正を適用したパッチファイル(v2.1.4)を送付いたしますので...
    </div>
  </div>
);

const DesignMockup = () => (
  <div style={{ backgroundColor: '#2d3748', width: '100%', height: '100%', display: 'flex', padding: '8px', gap: '8px', boxSizing: 'border-box' }}>
    <div style={{ width: '32px', display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '4px' }}>
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{ width: '24px', height: '24px', backgroundColor: '#4a5568', borderRadius: '4px' }}></div>
      ))}
    </div>
    <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', borderRadius: '4px', padding: '10px', color: '#d53f8c', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '1px' }}>SPRING SALE 2026</div>
        <div style={{ fontSize: '1.1rem', fontWeight: '900', margin: '4px 0' }}>春の特大セール</div>
        <div style={{ alignSelf: 'center', fontSize: '0.65rem', backgroundColor: '#d53f8c', color: '#fff', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold' }}>50% OFF</div>
      </div>
    </div>
  </div>
);

const servicesData = [
  {
    avatar: "/images/team/avatar_ai_pm_koala_1773474143618.png",
    mockupElement: <LineBotMockup />,
    title: "AI社長（社長室・秘書）",
    desc: "社長の考え方を学習し、LINEボットで社員から来た質問に対して社長に代わって的確な回答を返信します。",
    badge: "トップの右腕"
  },
  {
    avatar: "/images/team/avatar_ai_pr_fox_1773474196288.png",
    mockupElement: <BookingMockup />,
    title: "総務・管理担当AI",
    desc: "社員の有給管理はもちろん、店舗予約サイトと連携して社内イベントの宴会会場を自動で予約まで完了させます。",
    badge: "社内環境改善"
  },
  {
    avatar: "/images/team/avatar_ai_finance_owl_1773474183385.png",
    mockupElement: <FinanceMockup />,
    title: "財務担当AI",
    desc: "銀行口座とシームレスに連携して日々の資金の流れを整理し、経営に必要な収支計画表を自動で出力します。",
    badge: "経営直結"
  },
  {
    avatar: "/images/team/avatar_ai_se_cat_1773474233158.png",
    mockupElement: <EmailMockup />,
    title: "技術・エンジニアAI",
    desc: "専門知識を活用し、メールで社外の依頼先に向けた最適な「問題解消のアドバイスメール」を自動で送信します。",
    badge: "ハイレベル知識"
  },
  {
    avatar: "/images/team/avatar_ai_designer_bunny_1773474261540.png",
    mockupElement: <DesignMockup />,
    title: "デザイン担当AI",
    desc: "ターゲット層に刺さる最新トレンドを分析し、即座に営業用の高品質なチラシやプレゼン資料をデザイン化します。",
    badge: "即日クリエイティブ"
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title keep-breaks-mobile" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
            例えば、こんな<br />
            <span className="text-gradient">AI社員</span> が雇えます
          </h2>
          <p className="section-subtitle text-center" style={{ lineHeight: '1.8' }}>
            ツールを導入するのではなく、<br className="mobile-break" />
            超優秀な新人アシスタントを雇う感覚。<br className="desktop-break" /><br className="mobile-break" />
            あなたの会社の課題に合わせて、<br className="mobile-break" />
            オーダーメイドで伴走構築します。
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-glass animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="service-badge">{service.badge}</div>
              <div className="service-icon-wrapper" style={{ background: 'transparent', border: 'none', width: '80px', height: '80px', padding: 0 }}>
                <img src={service.avatar} alt={service.title} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-primary)', boxShadow: '0 5px 15px rgba(255,107,107,0.3)' }} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              
              <div className="service-mockup" style={{ width: '100%', height: '240px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', border: '1px solid rgba(0,0,0,0.08)' }}>
                {service.mockupElement}
              </div>

              <p className="service-desc">{service.desc}</p>
              
              <div className="service-footer">
                <a href="https://lin.ee/kGD3hGa" target="_blank" rel="noopener noreferrer" className="service-link">
                  この社員について相談する <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta text-center" style={{ marginTop: '2rem' }}>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
            社員の「AI社員化」の波は<br className="mobile-break" />
            急速に加速しています。<br className="desktop-break" /><br className="mobile-break" />
            競合他社を圧倒するAI組織を、<br className="mobile-break" />
            今すぐ構築しましょう。
          </p>
          <a href="https://lin.ee/kGD3hGa" target="_blank" rel="noopener noreferrer" className="btn-primary">
            うちの会社に合うAI社員を無料相談
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
