const Workflow = () => {
  const steps = [
    {
      number: '01',
      title: 'お客様から人がヒアリング',
      desc: 'お悩みや「新商材を作りたい」といったご要望を、担当プロデューサー（R.O または M.B）が直接丁寧にヒアリングします。',
      image: '/images/workflow/workflow_step1_meeting_1773476929519.png'
    },
    {
      number: '02',
      title: 'team koalaが企画を提出',
      desc: 'ヒアリング内容をもとに、team koalaがプロデュースし、最適な企画をご提案します。（※ここまでの工程はすべて【完全無料】です）',
      image: '/images/workflow/workflow_step2_planning_1773476948831.png'
    },
    {
      number: '03',
      title: 'AI社員による24時間制作',
      desc: 'お客様からOKをいただき次第、それぞれの専門分野を持つ優秀なAI社員たちが、24時間体制で制作を開始します。',
      image: '/images/workflow/workflow_step3_ai_coding_1773476965265.png'
    },
    {
      number: '04',
      title: 'スピード開発',
      desc: 'AIによる超高速・高精度の作業により、人海戦術では不可能なクオリティとスピードで短期間でのシステム構築・サイト制作などを実現します。',
      image: '/images/workflow/workflow_step4_speed_development_1773477477101.png'
    }
  ];

  return (
    <section className="workflow-section" id="workflow">
      <div className="container">
        <div className="section-header text-center animate-fade-in">
          <h2 className="section-title">
            <span className="text-gradient">お仕事の流れ</span>
          </h2>
          <p className="section-subtitle">
            完全無料で伴走し、圧倒的スピードで形にするまでの4ステップ
          </p>
        </div>

        <div className="workflow-timeline">
          {steps.map((step, index) => (
            <div key={index} className={`workflow-step animate-fade-in delay-${(index + 1) * 100}`}>
              <div className="workflow-number">{step.number}</div>
              <div className="workflow-image-container">
                <img src={step.image} alt={step.title} className="workflow-image" />
              </div>
              <div className="workflow-content">
                <h3 className="workflow-title">{step.title}</h3>
                <p className="workflow-desc">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="workflow-connector">
                  <div className="workflow-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
