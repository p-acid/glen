import { PlaceItem } from "@/entities/place";

export function PlaceList() {
  return (
    <ul className="w-full max-w-md space-y-2 overflow-scroll max-sm:space-y-5">
      {PLACES.map((place) => (
        <PlaceItem key={place.name} {...place} />
      ))}
    </ul>
  );
}

const PLACES = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "카페 글렌",
    description: "분위기 좋은 커피 전문점",
    isOpen: true,
    reviewCount: 128,
    address: "서울시 강남구 테헤란로 123",
    badges: [{ label: "인기" }, { label: "24시간" }],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1288&auto=format&fit=crop",
    name: "글로벌 베이커리",
    description: "신선한 빵과 커피",
    isOpen: false,
    reviewCount: 54,
    address: "서울시 서초구 반포대로 45",
    badges: [{ label: "신규" }],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "넥스트 피자",
    description: "이탈리안 피자 전문점",
    isOpen: true,
    reviewCount: 210,
    address: "서울시 마포구 월드컵로 88",
    badges: [{ label: "배달" }, { label: "예약가능" }],
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683657860968-7474e7ea2d80?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "버설 치킨",
    description: "바삭한 치킨과 맥주",
    isOpen: true,
    reviewCount: 99,
    address: "서울시 송파구 올림픽로 300",
    badges: [{ label: "할인" }],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1288&auto=format&fit=crop",
    name: "윈도우 카페",
    description: "조용한 분위기, 공부하기 좋은 곳",
    isOpen: false,
    reviewCount: 33,
    address: "서울시 종로구 종로 1가",
    badges: [{ label: "조용함" }],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1288&auto=format&fit=crop",
    name: "오션 뷰 레스토랑",
    description: "바다 전망이 멋진 레스토랑",
    isOpen: true,
    reviewCount: 77,
    address: "부산시 해운대구 달맞이길 200",
    badges: [{ label: "뷰맛집" }, { label: "예약필수" }],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1288&auto=format&fit=crop",
    name: "산책 브런치",
    description: "산책길 옆 브런치 카페",
    isOpen: false,
    reviewCount: 41,
    address: "경기도 성남시 분당구 중앙공원로 15",
    badges: [{ label: "브런치" }],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1288&auto=format&fit=crop",
    name: "야경 포차",
    description: "야경이 멋진 포장마차",
    isOpen: true,
    reviewCount: 63,
    address: "대구시 수성구 야경로 88",
    badges: [{ label: "야경" }, { label: "술집" }],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1288&auto=format&fit=crop",
    name: "숲속 도서관",
    description: "자연 속에서 책 읽는 공간",
    isOpen: false,
    reviewCount: 22,
    address: "강원도 평창군 숲길 1",
    badges: [{ label: "힐링" }, { label: "조용함" }],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1682685796766-0fddd3e480de?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "도심 속 캠핑",
    description: "도심에서 즐기는 캠핑장",
    isOpen: true,
    reviewCount: 58,
    address: "서울시 영등포구 캠핑로 10",
    badges: [{ label: "캠핑" }, { label: "가족" }],
  },
];
