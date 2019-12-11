import { Faq } from "../components/faqDocumentGroup/types";

export const fetchFaqs = async () => {
  console.log("Fetch start");
  await new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Fetch Data");
      res();
    }, 100);
  });
  return data;
};

const data: Faq[] = [
  {
    category: "놀러가기",
    description:
      '\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e트레바리 멤버라면 누구나, 다른 독서모임으로 놀러 가실 수 있습니다! 🥳\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e첫 번째 모임의 경우 다른 모임과 다르게 예외적으로 적용되는 룰이 있는 점 참고 부탁드립니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0);"\u003e※\u003c/span\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e 독후감 제출 인원에 ‘파트너’는 포함하지 않습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e[놀러가기 룰]\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e🌟 첫 번째 모임\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e: 해당 클럽 멤버 중 15인 미만이 독후감을 제출하면 \u0026gt; 총 참석 인원이 15명이 될 때 까지 놀러가기 성공!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e: \u003c/span\u003e\u003cu style="color: rgb(0, 0, 0); background-color: transparent;"\u003e해당 클럽 멤버 중 15인 이상이 독후감을 제출하면 \u0026gt; 놀러가기 하실 수 없어요\u003c/u\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e 😭\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e※ 첫 번째 모임은 ‘자기소개\' 시간이 있어 북 토크 시간이 상대적으로 짧습니다. 총 참석인원이 15명 이상이 된 경우, 기존 멤버분들의 첫 모임을 존중해드리기 위해 부득이하게 다른 룰을 적용하는 점 양해 부탁드립니다.\u0026nbsp;\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0);"\u003e🌟 \u003c/span\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e두 번째 ~ 네 번째 모임\u0026nbsp;\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e: 해당 클럽 멤버 중 15인 미만이 독후감을 제출하면 \u0026gt; 총 참석 인원이 15명이 될 때까지 놀러가기 성공!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e: \u003c/span\u003e\u003cu style="color: rgb(0, 0, 0); background-color: transparent;"\u003e해당 클럽 멤버 중 15인 이상이 독후감을 제출하면 \u0026gt; 선착순 한 명 놀러가기 성공!\u003c/u\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e 😁\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong\u003e[놀러가기 가능 인원 예시]\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cimg src="https://s3.ap-northeast-2.amazonaws.com/file.trevari.co.kr/c44b13f6-4611-4703-8849-70034c742642.%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202019-10-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.58.01.png"\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e[비용]\u003c/strong\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e놀러가기 비용은 모임 당일 정산합니다!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e- 함께 만드는 클럽 놀러가기: 20,000원\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e- 트레바리가 디자인한 클럽 놀러가기: 25,000원\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e- 클럽장이 있는 클럽 놀러가기: 30,000원\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e[참석 확인] \u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e참석 확인 및 정산을 완료한 후 모임에 참석해주세요!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e- 압구정 아지트 : 지하 카운터\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e- 안국 아지트 : 2층 크루룸\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e- 성수 아지트 : 2층 크루룸\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e- 강남 아지트 : 11층 크루룸\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 123,
    title: "다른 클럽은 어떤 분위기일까 궁금하시다면? (놀러가기 룰)"
  },
  {
    category: "이벤트",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e놀러가고 싶은 클럽에 독후감을 남겨주시면 자동으로 신청됩니다✍\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e상단 메뉴에서 \'독서모임\'을 클릭하신 후 놀러 가고 싶은 클럽에 독후감을 올려주세요! \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e언제나 그렇듯, 기한과 분량을 어기시면 참가하실 수 없습니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e또한, 놀러가기 룰에 의해 독후감을 작성하셨더라도 놀러가기가 불가할 수 있습니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e하단의 ‘놀러가기 룰\'을 꼭 참고해주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e👉🏻 \u003c/span\u003e\u003ca href="https://trevari.co.kr/cs?tab=faq\u0026amp;category=%EB%86%80%EB%9F%AC%EA%B0%80%EA%B8%B0\u0026amp;id=30" target="_blank" style="background-color: transparent; color: rgb(0, 0, 0);"\u003e\u003cu\u003e놀러가기 룰 보러 가기\u003c/u\u003e\u003c/a\u003e\u003c/p\u003e',
    id: 1234,
    title: "놀러가기는 어떻게 신청하나요?"
  },
  {
    category: "아지트",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e독후감 마감 다음 날(=모임 전날) 오전 11시, 놀러가기 성공 여부가 문자로 전송됩니다! 💌\u003c/span\u003e\u003c/p\u003e',
    id: 1235,
    title: "놀러가기 성공 여부는 언제 알 수 있나요?"
  },
  {
    category: "놀러가기",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e멤버십 권한이 있는 동안에는 열려있는 모든 트레바리 클럽에 놀러가기 할 수 있어요 😊\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e다만 멤버십이 종료된 후에는 놀러가기 하실 수 없는 점 참고 부탁드려요!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 1236,
    title: "나와 다른 시즌 클럽에도 놀러가기 할 수 있나요?"
  },
  {
    category: "놀러가기",
    description:
      '\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e특정 시즌에 환불을 진행하셨을 경우, 멤버십은 환불 신청을 한 달의 말일까지 유지됩니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e따라서 환불 신청을 하셨더라도 멤버십이 유지되는 해당 달까지는 놀러가기 서비스를 이용하실 수 있습니다 😌\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e(ex ★월 12일 환불 신청 시, \u003c/span\u003e\u003cspan style="color: rgb(0, 0, 0);"\u003e★\u003c/span\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e월 31일까지 놀러가기 가능,\u0026nbsp;[\u003c/span\u003e\u003cspan style="color: rgb(0, 0, 0);"\u003e★+1]\u003c/span\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e월 1일부터 놀러가기 불가)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 1237,
    title: "환불 신청을 했는데, 다른 클럽 놀러가기를 할 수 있나요?"
  },
  {
    category: "놀러가기",
    description:
      '\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e아니요😌! 그냥 일반 놀러가기와 똑같이 독후감만 쓰시고 참석 여부 문자를 기다려주세요!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 1238,
    title: "퀴즈클럽에 놀러가려면 퀴즈를 풀어야 하나요?"
  },
  {
    category: "독서모임",
    description:
      '\u003cp class="ql-indent-1"\u003e🌟 \u003ca href="http://blog.naver.com/trevarivari/221082752817" target="_blank" style="background-color: rgb(255, 255, 255);"\u003e\u003cstrong\u003e\'트레바리를 한다는 것은\' 전문 보러가기(click!)\u003c/strong\u003e\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);"\u003e﻿\u003c/strong\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e책을 재료로 펼치는 지적 대화\u003c/strong\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e, 트레바리 \u003c/span\u003e\u003cstrong style="background-color: transparent; color: rgb(255, 153, 0);"\u003e독서모임 📚\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e트레바리 독서모임은 책을 재료로 지적인 대화를 나누는 토론의 장입니다. 책을 읽고, 독후감을 쓰며 그 감상을 나눕니다. 그리고는 한 달에 한 번 만나서 서로의 의견을 발전시키고 때로는 서로의 의견에 반대하면서 친해지기도 하고요. 금융위기에 대해, 인공지능에 대해, 연애와 사랑의 기술에 대해, 성 평등 의식에 대해, 또 지구 환경 성장의 한계에 대해! 여러 시간 이야기를 나누고도 모자라, 밤새도록 남아 술잔을 기울이기도 합니다. 어디 요즘 세상에, 최소 한 달에 한 번은 꼬박꼬박 모여 이런 이야기를 나누는 친구들이 흔한가요?\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e각종 강연과 체험을 즐기다\u003c/strong\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e, 트레바리 \u003c/span\u003e\u003cstrong style="background-color: transparent; color: rgb(255, 153, 0);"\u003e이벤트 🎉\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e트레바리에서는 독서모임뿐만 아니라 다양한 이벤트들이 열리고 있습니다!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e강연부터 체험까지 지적이고 사랑스러운 이벤트, 함께해요!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e새로운 관점과 취향을 소개해드립니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e👉🏻 \u003c/span\u003e\u003ca href="https://trevari.co.kr/events" target="_blank" style="background-color: transparent; color: rgb(17, 85, 204);"\u003e이벤트 보러 가기(click!)\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e대화와 술이 함께하는 공간\u003c/strong\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e, 트레바리 \u003c/span\u003e\u003cstrong style="background-color: transparent; color: rgb(255, 153, 0);"\u003e아지트 🏠\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e트레바리 아지트는 트레바리 멤버들끼리 모여, 음악을 틀고 담소를 나누고 술을 마시고 때로는 재미난 작당을 꿈꾸기도 하는 그런 공간이에요. 가끔은, 일이나 공부와 같은 무거운 주제로부터 도피할 수 있는 그런 도피처 하나쯤은 있어도 좋지 않을까요?\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e👉🏻 \u003c/span\u003e\u003ca href="https://trevari.co.kr/spaceRental" target="_blank" style="background-color: transparent; color: rgb(17, 85, 204);"\u003e아지트 대관(click!)\u003c/a\u003e\u003c/p\u003e',
    id: 1,
    title: "트레바리 멤버가 된다는 건?"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e정말 다양한 직업과 연령대의 멤버분들이 활동하고 계세요! \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e나와 다른 배경을 가진 멤버들의 다양한 이야기를 듣는 즐거움이 있을 거예요 🤩\u003c/span\u003e\u003c/p\u003e',
    id: 34,
    title: "멤버 구성은 어떻게 되나요?"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e클럽마다 차이가 있지만, 모집 정원은 최대 20명이며 평균 16명 정도 입니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e클럽의 특성에 따라 8명에서 20명까지 다양하게 구성되고 있어요 😁\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 33,
    title: "한 클럽당 인원은 몇 명 정도인가요?"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e아지트에서 열리는 정규 독서모임은 월 1회입니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e하지만 매달 정기적으로 번개 모임이 열리기 때문에 멤버분들과 함께 할 수 있는 시간은 월 2회라고 생각해주셔도 무방할 것 같아요 😆\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e이외에도 강연, 체험 등 다양한 형태의 ‘이벤트’, 편하게 놀러 올 수 있는 ‘강남/성수/안국/압구정 아지트 공간’ 등 다양한 혜택이 준비되어 있습니다!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 35,
    title: "한 달에 한 번만 모이나요?"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e평일과 주말, 클럽의 특징에 따라 모임 시간이 조금씩 다릅니다 😁\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e평일\u003c/strong\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e에 열리는 클럽은 19:40~23:20,\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e평일\u003c/strong\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e에 열리는 ‘\u003c/span\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e일찍 끝나는 클럽\u003c/strong\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e\'의 경우 19:40~22:40\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e주말 낮\u003c/strong\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e☀️에\u0026nbsp;열리는 클럽은 14:20~18:00,\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e주말\u003c/strong\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e \u003c/span\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e낮\u003c/strong\u003e\u003cspan style="color: rgb(0, 0, 0);"\u003e☀️\u003c/span\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e \'일찍 끝나는 클럽\'\u003c/strong\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e의 경우 \u003c/span\u003e14:20~17:20,\u003c/p\u003e\u003cp\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e주말 저녁\u003c/strong\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e🌜에 열리는 클럽은 19:40~23:20 에 진행됩니다.\u003c/span\u003e\u003c/p\u003e',
    id: 7,
    title: "독서모임은 몇 시부터 몇 시까지 하나요?"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e쉽게 모임일 세는 법을 알려드려요 👋🏻\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e첫 번째 목요일 = ♥월에 있는 목요일들 중 첫 번째!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e두 번째 목요일 = ♥월에 있는 목요일들 중 두 번째!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e세 번째 목요일 = ♥월에 있는 목요일들 중 세 번째!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e네 번째 목요일 = ♥월에 있는 목요일들 중 네 번째!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e트레바리에서 진행되는 독서모임과 대관 현황을 트레바리 캘린더에서 확인할 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e일자 별/아지트 별로 진행되고 있는 모임을 하단 캘린더에서 확인해주세요 😊\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e대관 신청 전에 가용 공간이 있는지 확인하실 수 있어요 🧡\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e🗓 \u003c/strong\u003e\u003ca href="https://trevari.co.kr/calendar" target="_blank" style="color: rgb(0, 0, 0);"\u003e\u003cstrong\u003e캘린더 바로 가기\u003c/strong\u003e\u003c/a\u003e\u003c/p\u003e',
    id: 16,
    title: "독서모임일이 언제인지 헷갈려요. (모임일 세는 법!)"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e트레바리에서 진행되는 독서모임과 대관 현황을 트레바리 캘린더에서 확인할 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e일자 별/아지트 별로 진행되고 있는 모임을 하단 캘린더에서 확인해주세요 😊\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e대관 신청 전에 가용 공간이 있는지 확인하실 수 있어요 🧡\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="color: rgb(0, 0, 0); background-color: transparent;"\u003e🗓 \u003c/strong\u003e\u003ca href="https://trevari.co.kr/calendar" target="_blank" style="color: rgb(0, 0, 0);"\u003e\u003cstrong\u003e캘린더 바로 가기\u003c/strong\u003e\u003c/a\u003e\u003c/p\u003e',
    id: 2,
    title: "트레바리 전체 일정을 보고 싶어요!"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e첫 책은 트레바리에서 정해드립니다! 📙\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e첫 모임 이후로는 매달 대화와 투표를 통해 읽고 싶은 책과 주제를 정합니다. 그리고 책을 추천한 사람이 발제자가 되어 토론을 이끌어 나갑니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e읽을 책이 이미 정해진 클럽도 있어요! 📚\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e특정 클럽은 한 시즌 동안 읽을 4권의 책이 모두 정해져 있으며, 해당 내용은 클럽 상세페이지 ‘커리큘럼\'에서 확인하실 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 38,
    title: "책은 어떻게 선정되나요?"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e네, 그렇습니다 😄 \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e한 달에 한 권의 단행본을 읽는 것이 기본이지만, 두 권 이상의 단행본을 읽거나 아티클을 읽는 클럽도 있어요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e이처럼 클럽마다 운영 방식이 달라, 읽을거리는 멤버들이 각자 구매하는 것을 원칙으로 하고 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e클럽에 신청하시기 전, 해당 클럽은 읽을거리를 어떻게 선정하는지 다시 한번 확인해주세요!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 65,
    title: "책은 개인이 구매하나요?"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e전문적으로 이끌어주시는 분이 계시면 더 좋을 클럽에는 \'클럽장\'을 모시고 있어요. 주로 특정 기업 대표님, 교수님, 작가님\u0026nbsp; 등 해당 분야 전문가분들을 모십니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e이렇게 모신 ‘클럽장’님들은 해당 클럽의 커리큘럼을 직접 짜주십니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e같이 읽으면 좋은 책, 아티클, 영상/이미지 자료를 추천해주실 뿐만 아니라, 클럽이 어떤 식으로 운영되면 좋을지까지 같이 고민해주신답니다.\u0026nbsp;\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e나아가 모임 당일 양질의 대화가 이뤄질 수 있도록 토론 주제를 준비하고, 대화를 이끌어가주시고 계세요 😊\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 37,
    title: "클럽장은 어떤 역할을 하나요?"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e트레바리의 모든 북클럽에는 \'파트너\'가 한 분씩 계십니다. 트레바리의 \'크루\'(직원)와는 달리 생계(?)는 다른 곳에서 해결하시지만, 트레바리와 같은 곳을 바라봐 주시는 든든한 분들이랍니다! \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e한 시즌 동안 아래의 업무를 담당해주시며 멤버분들이 트레바리를 더욱 잘 즐길 수 있도록 도와주실 거예요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e1. 원활한 토론 관리\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent;"\u003e최대한 많은 멤버분들이 고루고루 자기 생각을 나눌 수 있도록, 토론 중 발언권을 분배하고 타임라인을 관리합니다. 발언권이 지나치게 편중될 경우, 파트너님이 stop을 외칠 수도 있습니다. 원활한 토론을 하기 위함이니 우리 모두 상처받지 말아요!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e2. 모임 전후 각종 행정업무\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent;"\u003e모임이 원활하게 진행될 수 있도록 클럽 단톡방 내에서 각종 투표를 실시하고, 중요한 공지, 변동 사항, 가이드 자료 등을 전달합니다. 궁금한 점은 파트너님께 문의하시면 답변해주실 거예요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent;"\u003e* 크루에게 직접 문의하시고 싶은 내용은 \u003c/span\u003e\u003ca href="mailto:contact@trevari.co.kr" target="_blank" style="background-color: transparent;"\u003econtact@trevari.co.kr\u003c/a\u003e\u003cspan style="background-color: transparent;"\u003e로 보내주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e3. 멤버로서의 파트너\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent;"\u003e파트너가 모임 관리자의 역할만을 하는 것은 아니에요. 멤버와 동일하게 토론에 적극적으로 참여하고, 번개에도 함께할 수 있습니다. 파트너도 결국 한 명의 멤버라는 사실! 한 시즌 동안 예쁜 추억을 같이 쌓아 보아요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e4. 클럽 유형별 추가 역할\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent;"\u003e[클럽장이 있는 클럽] \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent;"\u003e클럽장과 멤버를 이어주는 다리 역할을 수행합니다. 클럽장의 사정으로 모임 진행이 어렵게 되는 등의 각종 특수 상황에 대응합니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e5. 저도 파트너가 되고 싶어요!\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0);"\u003e트레바리 멤버 경험이 1시즌 이상 있는 분이라면 누구나 파트너로 지원하실 수 있습니다. 시즌 중에 다음 시즌 파트너 모집에 대한 공지를 받아보실 수 있습니다. 해당 공지를 통해서 파트너 모집과정에 대한 자세한 내용을 확인하실 수 있습니다.\u003c/span\u003e\u003c/p\u003e',
    id: 90,
    title: "파트너는 어떤 역할을 하나요?"
  },
  {
    category: "환불/이동",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e네, 안타깝지만 그렇습니다🥺\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e트레바리는 양질의 대화를 위해서는 구성원들이 어느 정도 각자의 생각을 정리해 와야 한다고 믿습니다. 그리고 생각을 정리하는 데에는 글쓰기만 한 것이 없을 거에요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e저희는 많은 독서모임이 서로 친해지면서 \'좋은 게 좋은 거지!\'식으로 운영을 하다가 콘텐츠를 잃어가는 모습을 지켜봐 왔습니다. 그래서 독서모임들의 평균 수명은 채 2년이 넘지 못하죠.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e저희를 믿고 등록을 해주신 멤버 여러분들에게 \'지속 가능한 독서모임 서비스\'를 제공하기 위해서라도, 저희는 최선을 다해 원칙을 지켜나가려고 합니다. 예쁘게 봐주세요! 🥰\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 6,
    title: "독후감을 안 내면 정말로 독서모임에 참가할 수 없나요? (필독)"
  },
  {
    category: "독서모임",
    description:
      '\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e설 연휴와 추석 연휴를 제외한 법정공휴일에도 독서모임은 진행됩니다!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e단, 멤버분들의 합의에 따라 모임 일시 및 시간을 변경할 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cem style="color: rgb(0, 0, 0); background-color: transparent;"\u003e\u0026lt;트레바리 이용약관\u0026gt; 제 12조 5항\u003c/em\u003e\u003c/p\u003e\u003cp\u003e\u003cem style="color: rgb(0, 0, 0); background-color: transparent;"\u003e(5) “회사"는 “독서모임 서비스" 를 제공함에 있어 설, 추석을 제외한 법정공휴일에도 “독서모임 서비스”를 제공합니다. 다만 법정공휴일 등 일정 변경에 상당한 사유가 발생할 경우 “회사”는 해당 서비스 제공 일정을 변경할 수 있으며, 이 경우에 “회사" 는 “회원" 에게 이 내용을 사전 통보 후 “독서모임 서비스”를 제공합니다.\u003c/em\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 55,
    title: "공휴일에도 독서모임 하나요?"
  },
  {
    category: "독서모임",
    description:
      "\u003cp\u003e\u003cspan style=\"color: rgb(0, 0, 0);\"\u003e나이의 많고 적음과 무관하게 '더 좋은 사람이 되고 싶고 다양한 생각에 열려 있다'면 누구나 오셔도 됩니다 😘\u003c/span\u003e\u003c/p\u003e",
    id: 432423,
    title: "트레바리는 젊은 사람들만 가는 곳이라고 하던데 맞나요?"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e트레바리 멤버십은 \u003c/span\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e4개월\u003c/strong\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e(한 시즌) 단위로 운영됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e현재 1-4월, 5-8월, 7-10월, 9-12월, 11-2월 시즌이 운영 중이며 앞으로 점차 확대해나갈 예정입니다 😁\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e멤버십은 소속 클럽의 첫 모임 일과 관계없이 첫 달 1일에 일괄적으로 발효되며, 별도로 연장하지 않으면 넷째 달 말일에 자동 해지됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 56,
    title: "트레바리 멤버십 기간이 어떻게 되나요?"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e트레바리 멤버들을 위해 준비된 특별한 혜택, 놓치지 마세요 :)\u003c/p\u003e\u003cp\u003e멤버십 혜택은 매 시즌 업데이트 됩니다!\u003c/p\u003e\u003cp\u003e \u003ca href="http://trevari.co.kr/boards/free/246?" target="_blank"\u003e\u003cstrong\u003e*멤버십 혜택 확인하러 가기(click!)\u003c/strong\u003e\u003c/a\u003e\u003c/p\u003e',
    id: 58,
    title: "트레바리 멤버십 혜택이 있나요?"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e네, 클럽 등록에는 개수 제한이 없습니다 😆 \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e다만, 세 개 이상의 클럽을 하실 땐 이런 점을 참고해주세요!\u0026nbsp;\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e세 개 이상의 클럽에서 활동하시면, 책을 깊이 소화하고, 독후감에 생각을 잘 담아내고, 멤버들과 끈끈한 관계를 맺는 것이 조금 버거울 수 있어요 😥\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e저희는 트레바리에서의 시간이 더 깊고 끈끈하길 바란답니다🧡\u003c/span\u003e\u003c/p\u003e',
    id: 66,
    title: "클럽을 여러 개 등록해도 되나요?"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e모든 북클럽은 결제(카드, Toss)/입금확인(가상계좌) 시점을 기준으로 선착순 모집됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e[카드 결제]\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 결제 완료 즉시 실시간 결제 확인 및 신청 완료!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e*\u003c/strong\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e 결제 중간에 취소할 경우, 결제가 정상적으로 이루어지지 않습니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e카드 결제가 완료되었다는 문자/안내를 꼭 확인하시고, 결제는 되었으나 멤버십 가입 안내 문자를 받아보지 못하신 경우 카드사 또는 \u003c/span\u003e\u003ca href="mailto:contact@trevari.co.kr" target="_blank" style="background-color: transparent; color: rgb(0, 0, 0);"\u003econtact@trevari.co.kr\u003c/a\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e로 문의 주시기 바랍니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e[Toss 결제]\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 결제 완료 즉시 실시간 결제 확인 및 신청 완료!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- Toss 앱을 통해서 결제하실 수 있으며, 앱이 없더라도 본인 명의의 계좌와 휴대전화만으로 손쉽게 결제할 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 반드시 신청 단계에서 \'Toss 결제\'를 선택하신 후 화면 상의 안내를 따라 결제를 진행하세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e (\u003c/span\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e*\u003c/strong\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e Toss 결제가 아닌 Toss \'송금하기\'는 계좌이체와 동일하게 처리됩니다)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 개인소득공제용 현금영수증은 인증받은 휴대전화 번호로 자동 발행 처리됩니다.\u0026nbsp;\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e[가상계좌]\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 이체 시각과 입금 확인 시점 사이에 시차가 있을 수 있습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 신청 단계에서 \'가상계좌\'를 선택하신 후 안내 사항을 꼭 확인해주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 계좌이체 입금확인 시점 이전에 클럽이 마감되는 경우, 이미 이체하신 금액은 최대 3영업일 이내로 환불해드립니다.\u003c/span\u003e\u003c/p\u003e',
    id: 93,
    title: "어떤 결제수단이 있나요? (결제수단 유의사항)"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e안타깝게도 마감 상태인 클럽은 신청하실 수 없습니다😢\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e신청 기간 중 환불 혹은 정원 증원으로 인해 빈자리가 생기는 경우, 멤버십 신청 페이지를 통해 마감 상태가 해제된 것을 확인하시고 신청하실 수 있어요!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e별도 대기 시스템은 운영하고 있지 않습니다.\u003c/span\u003e\u003c/p\u003e',
    id: 15,
    title: "마감된 클럽은 신청할 수 없나요?"
  },
  {
    category: "신청",
    description:
      "\u003cp\u003e모집 기간이 끝나고 시즌이 시작되고 나면 신청이 불가능합니다 😭\u003c/p\u003e\u003cp\u003e다음 시즌 모집이 시작할 때까지는 신청이 불가능하니 신청 기간을 놓치지 마세요!\u003c/p\u003e",
    id: 40,
    title: "모집 기간 마감 후 신청 가능한가요?"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e바로 전 시즌에 참여하고 계셨던 멤버는 다음 시즌 우선 신청권을 갖습니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e기간에 따라 우선 신청할 수 있는 클럽이 달라집니다.\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e멤버십 신청은 ‘기존 클럽 신청\' - ‘기존 멤버 신청\' - ‘신규 멤버 신청\' 순으로 오픈됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e예시) 1905, 1907시즌 멤버 1909시즌 우선 신청 기회 부여\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e    \u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;1901시즌 멤버는 1909시즌 우선 신청 기회 부여되지 않음\u003c/span\u003e\u003c/p\u003e',
    id: 432424234324,
    title: "기존 시즌 참여자에게 신청 시 혜택이 있나요?"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e트레바리의 시즌은 4개월 단위로 진행되고 있어요. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e현재 1-4월 / 3-6월 / 5-8월 / 7-10월/ 9-12월 / 11-2월로 나뉘어 시즌이 운영되고 있으며 각 시즌의 신규 멤버십 신청은 시즌 시작 약 한 달 전에 오픈됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e트레바리 SNS를 팔로우하시면 일정 안내를 확인하실 수 있습니다 😁\u003c/span\u003e\u003c/p\u003e\u003cp\u003e👉🏻 \u003ca href="https://www.instagram.com/trevari_official/" target="_blank"\u003e트레바리 인스타그램(click!)\u003c/a\u003e\u003c/p\u003e\u003cp\u003e👉🏻 \u003ca href="https://www.facebook.com/trevari" target="_blank"\u003e트레바리 페이스북 페이지(click!)\u003c/a\u003e\u003c/p\u003e',
    id: 41,
    title: "다음 멤버십 신청은 언제인가요? (다음 시즌은 언제인가요?)"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e모집 기간이 아닐 때 홈페이지 \'멤버십 신청\' 페이지를 통해 연락처를 남겨주시면 모집 시작 안내를 받아보실 수 있습니다.\u003c/p\u003e\u003cp\u003e트레바리 페이스북 페이지를 좋아요👍🏻\u0026amp;팔로우하시면 모집 일정을 비롯해 다양한 트레바리 소식을 받아보실 수 있습니다.\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong\u003e👉🏻\u003c/strong\u003e \u003ca href="https://trevari.co.kr/about" target="_blank"\u003e모집 시작 안내받기 (click!)\u003c/a\u003e\u003c/p\u003e\u003cp\u003e👉🏻 \u003ca href="https://www.facebook.com/trevari" target="_blank"\u003e트레바리 페이스북 페이지(click!)\u003c/a\u003e\u003c/p\u003e',
    id: 42,
    title: "모집 시작할 때 따로 연락 받을 수 있나요?"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e일반 이메일로도 회원가입이 가능합니다! \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e(아래 이미지를 참고해주세요)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cimg src="https://s3.ap-northeast-2.amazonaws.com/file.trevari.co.kr/f24de309-a5a7-4993-9cf2-7c2dd6c563f0.%EC%9D%B4%EB%A9%94%EC%9D%BC%20%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85.png"\u003e\u003c/p\u003e',
    id: 45,
    title: "페이스북 계정으로만 가입되나요?"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e로그인 화면에서 \'\u003cstrong\u003e페이스북 계정 로그인에 어려움을 겪고 계신가요?\u003c/strong\u003e\'를 클릭해주세요.\u003c/p\u003e\u003cp\u003e입력하신 전화번호로 임시 비밀번호가 발급됩니다. 추후 페이스북 이메일과 임시비밀번호로 로그인하실 수 있습니다. \u003c/p\u003e\u003cp\u003e(아래 이미지를 참고해주세요)\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cimg src="https://s3.ap-northeast-2.amazonaws.com/file.trevari.co.kr/532a475a-df86-46b4-b182-941a6331f40e.%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B2%20%E1%84%89%E1%85%B51.png"\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e \u003cimg src="https://s3.ap-northeast-2.amazonaws.com/file.trevari.co.kr/d4c46ac6-8b56-4ab8-af70-43f564283842.%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8%20%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B2%20%E1%84%89%E1%85%B5%202.png"\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 71,
    title:
      "페이스북의 문제로 로그인이 안 될 때는 어떡하나요? (해킹, 비활성화 등)"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e결제영수증 발행을 원하시는 경우 하단의 내용을 \u003ca href="mailto:contact@trevari.co.kr" target="_blank"\u003econtact@trevari.co.kr\u003c/a\u003e로 보내주세요.\u003c/p\u003e\u003cp\u003e3영업일 내로 발행해드립니다! 😊\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e- 성함 / 휴대전화 번호\u003c/p\u003e\u003cp\u003e- 참여한 시즌, 클럽 명\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 49320849302890,
    title: "결제영수증은 어떻게 발급받을 수 있나요?"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e현금 영수증 발행은 멤버십 신청 시 사용하셨던 결제 수단에 따라 다르게 발행됩니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong\u003e[Toss 결제] \u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003eToss 결제로 진행하신 경우 자동으로 현금영수증이 발행됩니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e※ 본인 인증이 완료된 휴대전화 번호로 개인 소득공제용 현금영수증이 발행됩니다\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong\u003e[가상 계좌]\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e가상계좌로 결제하신 경우 결제 페이지(KG이니시스) 내에서 현금영수증 발급이 가능합니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e현금영수증과 관련된 \u003c/span\u003e\u003cstrong style="background-color: transparent; color: rgb(0, 0, 0);"\u003e각종 문의\u003c/strong\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e는 \u003c/span\u003e\u003ca href="mailto:contact@trevari.co.kr" target="_blank" style="background-color: transparent; color: rgb(0, 0, 0);"\u003econtact@trevari.co.kr\u003c/a\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e로 부탁드립니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e메일 주실 때 하단의 내용을 꼭 포함해주세요 😁\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 성함\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 트레바리 홈페이지에 가입된 휴대폰 번호\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 종류(소득공제용 혹은 지출 증빙용)\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e- 현금영수증을 발행할 휴대폰 번호 혹은 사업자 번호\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 53,
    title: "현금영수증 발행 요청은 어떻게 하나요?"
  },
  {
    category: "독후감",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e현금영수증이 아닌, \'세금계산서\' 발행을 원하시는 경우 하단의 내용을 \u003c/span\u003e\u003ca href="mailto:contact@trevari.co.kr" target="_blank" style="background-color: transparent; color: rgb(0, 0, 0);"\u003econtact@trevari.co.kr\u003c/a\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e로 보내주세요. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0);"\u003e3영업일 내로 발행해드립니다!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0);"\u003e- 사업자 등록증 파일\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0);"\u003e- 세금계산서를 수령할 이메일 주소\u003c/span\u003e\u003c/p\u003e\u003cp\u003e- 발행내용 (성함 / 시즌 / 클럽 명)\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e※ 현금영수증과 세금계산서는 중복 발행이 불가합니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e이미 현금영수증 발행을 신청하셨거나, Toss 결제로 신청하셨다면 세금계산서 발행 요청 시 꼭 알려주세요 😊\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e',
    id: 54,
    title: "세금계산서 발행 요청은 어떻게 하나요?"
  },
  {
    category: "신청",
    description:
      '\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e성함 / 시즌 / 클럽 명을 \u003c/span\u003e\u003ca href="mailto:contact@trevari.co.kr" target="_blank" style="color: rgb(0, 0, 0); background-color: transparent;"\u003econtact@trevari.co.kr\u003c/a\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e로 보내주시면 등록확인증을 3영업일 이내로 전달 드립니다.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="color: rgb(0, 0, 0); background-color: transparent;"\u003e회사 지원금 등으로 증빙이 필요한 경우에는 사업자등록증 등 서류도 전송해드리고 있어요. 필요하신 서류의 종류를 알려주세요!\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cstrong\u003e👉🏻 \u003c/strong\u003e\u003ca href="https://drive.google.com/open?id=1oDIzsH__Wt11AIYF5iYDmjobwgSipE52" target="_blank"\u003e\u003cstrong\u003e등록확인증 예시 보기(click!)\u003c/strong\u003e\u003c/a\u003e\u003c/pu003e',
    id: 57,
    title: "등록확인증은 어떻게 발급받을 수 있나요?"
  }
];
