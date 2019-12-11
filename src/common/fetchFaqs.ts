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
    category: "놀러가기",
    description:
      '\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e놀러가고 싶은 클럽에 독후감을 남겨주시면 자동으로 신청됩니다✍\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e상단 메뉴에서 \'독서모임\'을 클릭하신 후 놀러 가고 싶은 클럽에 독후감을 올려주세요! \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e언제나 그렇듯, 기한과 분량을 어기시면 참가하실 수 없습니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e또한, 놀러가기 룰에 의해 독후감을 작성하셨더라도 놀러가기가 불가할 수 있습니다. \u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e하단의 ‘놀러가기 룰\'을 꼭 참고해주세요.\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style="background-color: transparent; color: rgb(0, 0, 0);"\u003e👉🏻 \u003c/span\u003e\u003ca href="https://trevari.co.kr/cs?tab=faq\u0026amp;category=%EB%86%80%EB%9F%AC%EA%B0%80%EA%B8%B0\u0026amp;id=30" target="_blank" style="background-color: transparent; color: rgb(0, 0, 0);"\u003e\u003cu\u003e놀러가기 룰 보러 가기\u003c/u\u003e\u003c/a\u003e\u003c/p\u003e',
    id: 1234,
    title: "놀러가기는 어떻게 신청하나요?"
  },
  {
    category: "놀러가기",
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
  }
];
