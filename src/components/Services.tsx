import { ArrowRight, Twitter, Globe, Bot, Building2, Store, Briefcase } from 'lucide-react';

const servicesData = [
  {
    icon: Twitter,
    title: "X（旧Twitter）AI自動投稿",
    desc: "HPのURLを登録するだけ。AIがホームページを読み取り、毎日2回自動でXに投稿。年730投稿を完全自動化。",
    price: "月額 ¥9,800",
    link: "https://tweet.bantex.jp/",
    badge: "人気"
  },
  {
    icon: Globe,
    title: "OnePage-Flash",
    desc: "10分でホームページが完成。テキストを打ち込むだけでAIが美しいHPを自動生成。個人・店舗向け。",
    price: "初期 ¥3,980 + 月額 ¥480/月",
    link: "https://oneflash.bantex.jp/",
    badge: "大人気"
  },
  {
    icon: Bot,
    title: "ココトモ カスタマー",
    desc: "AI×LINEで顧客対応を自動化。LINE友達登録だけでAIが24時間自動対応。管理画面ひとつで完結。",
    price: "初期・月額 お問い合わせ",
    link: "https://kokotomodashboard.bantex.jp/lp/",
    badge: "おすすめ"
  },
  {
    icon: Building2,
    title: "事業立ち上げパック",
    desc: "AI×エンタメで事業を爆速ローンチ。事業計画・HP・ロゴ・SNS戦略を一括サポート。最短1週間で納品。",
    price: "基本パック ¥300,000〜",
    link: "https://jigyo.bantex.jp/",
    badge: "フルサポート"
  },
  {
    icon: Store,
    title: "AI出店商圏/不動産レポート",
    desc: "エリア名を入れるだけで市場・商圏レポートを自動生成。政府統計データをもとに人口・競合・消費力をAI分析。",
    price: "無料〜 / ¥300/エリア",
    link: "https://ai-shoken.bantex.jp/",
    badge: "新サービス"
  },
  {
    icon: Briefcase,
    title: "公募ナビAI / 士業商圏分析",
    desc: "全国の行政案件から最適な入札案件を毎朝配信。また、政府統計から6士業の商圏・開業適性を瞬時にAI分析。",
    price: "月額 ¥3,980〜",
    link: "https://koubo-navi.bantex.jp/",
    badge: "BtoB特化"
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title keep-breaks-mobile" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
            圧倒的効率化を実現する<br />
            <span className="text-gradient">AIソリューション</span>
          </h2>
          <p className="section-subtitle keep-breaks-mobile" style={{ fontSize: 'clamp(0.9rem, 3.5vw, 1.25rem)' }}>
            業務効率化、自動投稿、事業立ち上げから商圏分析まで。<br />
            私たちが提供・駆使する強力なAIツール群。
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
              <div className="service-icon-wrapper">
                <service.icon size={28} className="text-accent" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              <div className="service-footer">
                <div className="service-price">{service.price}</div>
                <a href={service.link} target="_blank" rel="noopener noreferrer" className="service-link">
                  詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta text-center">
          <a href="https://bantex.jp/ai-services.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            すべてのAIサービスを見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
