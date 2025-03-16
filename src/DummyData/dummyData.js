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

export {
  dummyPosts,
  dummyCompanyInfo,
  dummyCompanyInfo2,
  dummyCompanyHistory
};