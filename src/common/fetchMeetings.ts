import { MeetingType, Meeting } from "../components/meetingCard/types";

export const fetchMeetings = async (): Promise<Meeting[]> => {
  console.log("Fetch start");
  await new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Fetch Data");
      res();
    }, 100);
  });
  return [
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/file.trevari.co.kr/efb0fc6b-d11c-458c-aadd-8b95598882cf.a6bcac4e-04d2-4b38-98ad-4fce2a1f8a74_club%20copy%204.jpg",
      leaders: [],
      name: "무경계-고래",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "39e6389e-9a8b-4b1e-8ea7-3423b0ff8ca3",
      contents: [
        {
          author: "한스 로슬링, 올라 로슬링",
          title: "팩트풀니스(양장본 HardCover)"
        }
      ],
      place: { name: "압구정 아지트" },
      startedAt: new Date("Wed Dec 11 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/4454777b-d827-491c-96fc-d0dfda2dce05_club.jpg",
      leaders: [{ name: "장영학" }],
      name: "조직의 쓴맛",
      type: MeetingType.MADE_BY_LEADER,
      clubID: "4454777b-d827-491c-96fc-d0dfda2dce05",
      contents: [{ author: "김성준", title: "조직문화 통찰" }],
      place: { name: "압구정 아지트" },
      startedAt: new Date("Wed Dec 11 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/8d3b2b66-ff78-41e1-ad6e-5a0c2d1d021f_club.jpg",
      leaders: [{ name: "정지훈" }],
      name: "책으로 알아보는 미래사회",
      type: MeetingType.MADE_BY_LEADER,
      clubID: "8d3b2b66-ff78-41e1-ad6e-5a0c2d1d021f",
      contents: [{ author: "홍성국", title: "수축사회" }],
      place: { name: "강남 아지트" },
      startedAt: new Date("Wed Dec 11 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/992a0429-cc5e-4ef7-94a8-5f817365995e_club.jpg",
      leaders: [],
      name: "씀에세이-23",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "992a0429-cc5e-4ef7-94a8-5f817365995e",
      contents: [
        { author: "아포스톨로스 독시아디스", title: "골드바흐의 추측" }
      ],
      place: { name: "압구정 아지트" },
      startedAt: new Date("Wed Dec 11 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/c2152cb9-adbc-41f0-9055-c87669a737f6_club.jpg",
      leaders: [],
      name: "문-블랙",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "c2152cb9-adbc-41f0-9055-c87669a737f6",
      contents: [{ author: "윤성희", title: "상냥한 사람(양장본 HardCover)" }],
      place: { name: "압구정 아지트" },
      startedAt: new Date("Wed Dec 11 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/file.trevari.co.kr/a7532614-85d8-4421-9d37-b85e7ec76f5d.a74ad33c-95b6-4aab-9261-a6b2ff78d363_club.jpg",
      leaders: [],
      name: "짧은 무경계-숲",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "d3792d8f-7d7e-4e68-a538-95873c3fcfed",
      contents: [{ author: "오후 지음", title: "우리는 마약을 모른다" }],
      place: { name: "강남 아지트" },
      startedAt: new Date("Wed Dec 11 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/36d39712-5a92-42af-aeb3-5dc8f3884879_club.jpg",
      leaders: [{ name: "황승식" }],
      name: "넘버스",
      type: MeetingType.MADE_BY_LEADER,
      clubID: "36d39712-5a92-42af-aeb3-5dc8f3884879",
      contents: [{ author: "제롬 캐시러", title: "더러운 손의 의사들" }],
      place: { name: "압구정 아지트" },
      startedAt: new Date("Thu Dec 12 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/524b2e15-1a11-4888-a1b6-7068894b92c3_club.jpg",
      leaders: [],
      name: "둘목",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "524b2e15-1a11-4888-a1b6-7068894b92c3",
      contents: [
        { author: "밀란 쿤데라", title: "참을 수 없는 존재의 가벼움" }
      ],
      place: { name: "안국 아지트" },
      startedAt: new Date("Thu Dec 12 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/6f7b8b80-36cf-4649-b664-2e23c0ae9921_club.jpg",
      leaders: [],
      name: "신화창조",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "6f7b8b80-36cf-4649-b664-2e23c0ae9921",
      contents: [{ author: "미르치아 엘리아데", title: "영원회귀의 신화" }],
      place: { name: "강남 아지트" },
      startedAt: new Date("Thu Dec 12 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/a86bea8a-37d1-432c-aa2a-1883ee3c252d_club.jpg",
      leaders: [{ name: "류재언" }],
      name: "협상은 어떻게 삶의 무기가 되는가",
      type: MeetingType.MADE_BY_LEADER,
      clubID: "a86bea8a-37d1-432c-aa2a-1883ee3c252d",
      contents: [
        {
          author: "박슬라 옮김 / 칩 히스 지음 / 댄 히스 지음",
          title: "순간의 힘"
        }
      ],
      place: { name: "성수 아지트" },
      startedAt: new Date("Thu Dec 12 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/d5a5a6b3-6a34-49fc-ad48-e3e98c6157bf_club.jpg",
      leaders: [],
      name: "무경계-바리",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "d5a5a6b3-6a34-49fc-ad48-e3e98c6157bf",
      contents: [{ author: "임홍택 지음", title: "90년생이 온다" }],
      place: { name: "강남 아지트" },
      startedAt: new Date("Thu Dec 12 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/d74acb3d-0742-4bda-8c0a-a02516d03e5e_club.jpg",
      leaders: [],
      name: "진진-바리",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "d74acb3d-0742-4bda-8c0a-a02516d03e5e",
      contents: [
        {
          author: "피에르 아도",
          title: "고대 철학이란 무엇인가(양장본 HardCover)"
        }
      ],
      place: { name: "압구정 아지트" },
      startedAt: new Date("Thu Dec 12 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/e2c30263-cf52-466f-8d9f-d5ccb90d7e8f_club.jpg",
      leaders: [],
      name: "GD-팝콘",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "e2c30263-cf52-466f-8d9f-d5ccb90d7e8f",
      contents: [
        { author: "권김현영", title: "다시는 그전으로 돌아가지 않을 것이다" }
      ],
      place: { name: "강남 아지트" },
      startedAt: new Date("Thu Dec 12 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/e5999bf2-1f18-48b6-8d39-42f3230e2af8_club.jpg",
      leaders: [],
      name: "스타텁-마피아",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "e5999bf2-1f18-48b6-8d39-42f3230e2af8",
      contents: [{ author: "존 캐리루", title: "배드 블러드" }],
      place: { name: "강남 아지트" },
      startedAt: new Date("Thu Dec 12 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/file.trevari.co.kr/53cdf01b-496e-47bc-894b-fec9b06c936f.0d492885-96ec-4d08-9d27-a307a5fef61d_club.jpg",
      leaders: [],
      name: "나알기-행복",
      type: MeetingType.MADE_BY_LEADER,
      clubID: "0d492885-96ec-4d08-9d27-a307a5fef61d",
      contents: [{ author: "김영하", title: "여행의 이유" }],
      place: { name: "안국 아지트" },
      startedAt: new Date("Fri Dec 13 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/205f9ae4-1949-488d-a3c0-e131ba9b6707_club.jpg",
      leaders: [],
      name: "야구야구-25",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "205f9ae4-1949-488d-a3c0-e131ba9b6707",
      contents: [
        {
          author: "잭 햄폴",
          title: "야구 교과서(지적 생활자를 위한 교과서 시리즈)"
        }
      ],
      place: { name: "압구정 아지트" },
      startedAt: new Date("Fri Dec 13 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/20d0cedf-a3d1-436b-9145-cea332ce6b32_club.jpg",
      leaders: [],
      name: "체험독서-둘금",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "20d0cedf-a3d1-436b-9145-cea332ce6b32",
      contents: [{ author: "한동일", title: "로마법 수업(양장본 HardCover)" }],
      place: { name: "안국 아지트" },
      startedAt: new Date("Fri Dec 13 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/59889e47-029e-45fc-acf5-b3c3999d846c_club.jpg",
      leaders: [],
      name: "보통의존재-해피",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "59889e47-029e-45fc-acf5-b3c3999d846c",
      contents: [
        {
          author: "베르나르 베르베르",
          title:
            "죽음. 1(인터넷 전용 할로윈 에디션)(바로드림 시 일반판 제공)(양장본..."
        },
        {
          author: "베르나르 베르베르",
          title:
            "죽음. 2(인터넷 전용 할로윈 에디션)(바로드림 시 일반판 제공)(양장본..."
        }
      ],
      place: { name: "강남 아지트" },
      startedAt: new Date("Fri Dec 13 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/6081981a-a5b4-4070-be98-5937f9335941_club.jpg",
      leaders: [],
      name: "럽럽-25",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "6081981a-a5b4-4070-be98-5937f9335941",
      contents: [{ author: "에리히 프롬", title: "사랑의 기술" }],
      place: { name: "압구정 아지트" },
      startedAt: new Date("Fri Dec 13 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/874a7a49-e7e9-44bc-9fab-7ec02616f2a0_club.jpg",
      leaders: [],
      name: "무경계-수박",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "874a7a49-e7e9-44bc-9fab-7ec02616f2a0",
      contents: [{ author: "칼 세이건", title: "코스모스" }],
      place: { name: "강남 아지트" },
      startedAt: new Date("Fri Dec 13 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/a65f15fa-e7e2-4892-adfa-fe8b4d077bcf_club.jpg",
      leaders: [],
      name: "SciFi-25",
      type: MeetingType.MADE_BY_TOGETHER,
      clubID: "a65f15fa-e7e2-4892-adfa-fe8b4d077bcf",
      contents: [{ author: "후이지 다이요", title: "진매퍼" }],
      place: { name: "압구정 아지트" },
      startedAt: new Date("Fri Dec 13 2019 10:40:00 GMT+0000 (UTC)")
    },
    {
      coverUrl:
        "https://s3.ap-northeast-2.amazonaws.com/image.trevari.co.kr/a65f15fa-e7e2-4892-adfa-fe8b4d077bcf_club.jpg",
      leaders: [],
      name: "트레바리-25",
      type: MeetingType.MADE_BY_TREVART,
      clubID: "a65f15fa-e7e2-4892-adfa-fe8b4d077bcf",
      contents: [{ author: "후이지 다이요", title: "진매퍼" }],
      place: { name: "압구정 아지트" },
      startedAt: new Date("Fri Dec 13 2019 10:40:00 GMT+0000 (UTC)")
    }
  ];
};
