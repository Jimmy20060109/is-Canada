export type ServiceOutcome = {
  title: string;
  desc: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  href: string;
  summary: string;
  points: string[];
};

export const outcomes: ServiceOutcome[] = [
  {
    title: "路径清晰",
    desc: "从“想出国”到“怎么做”，每一步可执行、可追踪。",
  },
  {
    title: "成本可控",
    desc: "更早规划，减少试错，让时间和预算花在关键节点。",
  },
  {
    title: "成长有证据",
    desc: "学术能力与履历能力同步沉淀，不只看一次考试表现。",
  },
  {
    title: "家庭更安心",
    desc: "家长在国内也能了解进度、风险与解决方案。",
  },
];

export const services: ServiceItem[] = [
  {
    id: "3.1",
    title: "低龄留学",
    href: "/services/junior-high-study",
    summary: "从教育体系、英语过渡到择校申请，打造孩子的留学起跑优势。",
    points: ["困扰诊断", "四步落地路径", "常见问题与案例"],
  },
  {
    id: "3.2",
    title: "升学规划",
    href: "/services/academic-planning",
    summary: "不止拿到 Offer，更要找到长期适配的人生与专业方向。",
    points: ["幸福树双主干", "OSSD/课程策略", "大学申请路径"],
  },
  {
    id: "3.3",
    title: "人生规划第一课",
    href: "/services/life-planning-first-class",
    summary: "以生涯规划开启天赋和热爱，帮助孩子建立内驱力与方向感。",
    points: ["痛点拆解", "误区澄清", "行动化成长方案"],
  },
  {
    id: "3.4",
    title: "海外 8 大守护",
    href: "/services/overseas-8-support",
    summary: "孩子在海外有人托底、有人沟通、有人守护，家长放心。",
    points: ["合规与安全", "生活与住宿", "学校与成长支持"],
  },
  {
    id: "3.5",
    title: "夏令营",
    href: "/services/summer-camp",
    summary: "用短期沉浸体验，验证方向、激发动力、建立国际化适应力。",
    points: ["能力导向营程", "安全闭环", "可延展成长成果"],
  },
];
