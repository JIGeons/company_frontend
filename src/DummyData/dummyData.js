const dummyPosts = [
  {
    _id: 1,
    number: 1,
    title: "첫 번째 게시물",
    views: 120,
    fileUrl: ["file1"],
    createdAt: "2023-01-01",
  },
  {
    _id: 2,
    number: 2,
    title: "두 번째 게시물",
    views: 95,
    fileUrl: [],
    createdAt: "2023-01-05",
  },
  {
    _id: 3,
    number: 3,
    title: "세 번째 게시물",
    views: 70,
    fileUrl: ["file2", "file3"],
    createdAt: "2023-01-10",
  },
  {
    _id: 4,
    number: 4,
    title: "네 번째 게시물",
    views: 50,
    fileUrl: [],
    createdAt: "2023-01-15",
  },
  {
    _id: 5,
    number: 5,
    title: "다섯 번째 게시물",
    views: 30,
    fileUrl: ["file4"],
    createdAt: "2023-01-20",
  },
];

const dummyCompanyInfo = [
  {
    title: "전화 문의",
    info: "02-1234-5678",
    subInfo: "평일 09:00 - 18:00",
  },
  {
    title: "이메일 문의",
    info: "support@example.com",
    subInfo: "24시간 접수 가능",
  },
  {              title: "위치",
    info: "서울특별시 강남구",
    subInfo: "삼성동 123번지",
  },
];

const dummyCompanyInfo2 = [
  { title: "혁신", desc: "끊임없는 도전과 혁신으로 미래를 선도합니다" },
  { title: "신뢰", desc: "고객과의 신뢰를 최우선 가치로 삼습니다" },
  { title: "성장", desc: "구성원들의 지속적인 성장을 지원합니다" },
];

const dummyCompanyHistory = [
  { year: "2023", event: "글로벌 시장 진출" },
  { year: "2022", event: "시리즈 B 투자 유치" },
  { year: "2021", event: "주요 기술 특허 획득" },
  { year: "2020", event: "회사 설립" },
];

import Human1 from "../assets/images/Human1.jpg";
const executives = [
  {
    name: '이부사장',
    position: 'COO',
    description: '운영 총괄 책임자로서 효율적인 기업 운영과 프로세스 혁신을 주도하고 있습니다.',
    imageUrl: Human1
  },
  {
    name: '박이사',
    position: 'CTO',
    description: '최신 기술 트렌드를 선도하며 R&D 부문을 총괄하고 있습니다.',
    imageUrl: Human1
  },
  {
    name: '김이사',
    position: 'CFO',
    description: '재무 전략 수립 및 기업 가치 향상을 위한 재무관리를 담당하고 있습니다.',
    imageUrl: Human1
  },
  {
    name: '최이사',
    position: 'CMO',
    description: '글로벌 마케팅 전략 수립 및 브랜드 가치 향상을 주도하고 있습니다.',
    imageUrl: Human1
  }
];

const teamMembers = [
  {
    name: '정과장',
    position: '개발팀장',
    description: '신제품 개발 및 기술 혁신을 담당하고 있습니다.',
    imageUrl: Human1
  },
  {
    name: '최과장',
    position: '영업팀장',
    description: '글로벌 시장 개척 및 고객 관리를 담당하고 있습니다.',
    imageUrl: Human1
  },
  {
    name: '한과장',
    position: '품질관리팀장',
    description: '제품 품질 향상 및 품질 시스템 관리를 담당하고 있습니다.',
    imageUrl: Human1
  },
  {
    name: '김과장',
    position: '인사팀장',
    description: '인사 정책 수립 및 인사 관리를 담당하고 있습니다.',
    imageUrl: Human1
  }
];

const dummyBoardPosts = [
  { _id: 1, number: 1, title: "첫 번째 게시물", createdAt: "2023-11-01T10:00:00", views: 10 },
  { _id: 2, number: 2, title: "두 번째 게시물", createdAt: "2023-11-02T11:30:00", views: 20 },
  { _id: 3, number: 3, title: "세 번째 게시물", createdAt: "2023-11-03T14:00:00", views: 30 },
  { _id: 4, number: 4, title: "네 번째 게시물", createdAt: "2023-11-04T16:45:00", views: 40 },
  { _id: 5, number: 5, title: "다섯 번째 게시물", createdAt: "2023-11-05T09:15:00", views: 50 },
];

const servicesList = [
  {
    id: 1,
    title: '맞춤형 소프트웨어 개발',
    description: '고객의 요구사항에 맞는 최적화된 솔루션을 제공합니다.',
    icon: '💻'
  },
  {
    id: 2,
    title: '클라우드 서비스',
    description: '안정적이고 확장 가능한 클라우드 인프라 구축 및 관리',
    icon: '☁️'
  },
  {
    id: 3,
    title: '보안 솔루션',
    description: '최신 보안 기술을 적용한 안전한 시스템 구축',
    icon: '🔒'
  },
  {
    id: 4,
    title: '기술 컨설팅',
    description: '전문가의 분석을 통한 최적의 기술 전략 수립',
    icon: '📊'
  }
];

const dummyProccess = [
  { step: '01', title: '요구사항 분석', desc: '고객의 니즈와 목표를 정확히 파악' },
  { step: '02', title: '설계 및 기획', desc: '최적의 솔루션 설계와 개발 계획 수립' },
  { step: '03', title: '개발 및 테스트', desc: '체계적인 개발과 품질 검증 진행' },
  { step: '04', title: '배포 및 유지보수', desc: '안정적인 서비스 운영과 지속적인 개선' },
];

const dummyContactData = [
  { icon: "phone", title: "전화", info: "02-1234-5678", desc: "평일 09:00 - 18:00" },
  { icon: "envelope", title: "이메일", info: "support@example.com", desc: "24시간 접수 가능" },
  { icon: "map-marker-alt", title: "주소", info: "서울특별시 강남구 삼성동 123번지", desc: "본사" }
];

const contacts = ([
  {
    id: 1,
    name: "홍길동",
    email: "hong@example.com",
    phone: "010-1234-5678",
    message: "상품에 대한 문의입니다.",
    status: "대기중",
  },
  {
    id: 2,
    name: "이영희",
    email: "lee@example.com",
    phone: "010-8765-4321",
    message: "환불 요청합니다.",
    status: "진행중",
  },
  {
    id: 3,
    name: "박철수",
    email: "park@example.com",
    phone: "010-0000-1111",
    message: "연락이 지연되고 있습니다.",
    status: "완료",
  },
]);

export {
  dummyPosts,
  dummyCompanyInfo,
  dummyCompanyInfo2,
  dummyCompanyHistory,
  executives,
  teamMembers,
  dummyBoardPosts,
  servicesList,
  dummyProccess,
  dummyContactData,
  contacts
};