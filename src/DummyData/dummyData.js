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

export {
  dummyPosts,
  dummyCompanyInfo,
  dummyCompanyInfo2,
  dummyCompanyHistory,
  executives,
  teamMembers
};