export interface Faq {
  category: string;
  description: string;
  id: number;
  title: string;
}

export const faqs = [
  {
    category: "독서모임",
    description:
      '<p class="ql-indent-1">🌟 <a href="http://blog.naver.com/trevarivari/221082752817" target="_blank" style="background-color: rgb(255, 255, 255);"><strong>\'트레바리를 한다는 것은\' 전문 보러가기(click!)</strong></a></p><p><br></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">﻿</strong><strong style="background-color: transparent; color: rgb(0, 0, 0);">책을 재료로 펼치는 지적 대화</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">, 트레바리 </span><strong style="background-color: transparent; color: rgb(255, 153, 0);">독서모임 📚</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">트레바리 독서모임은 책을 재료로 지적인 대화를 나누는 토론의 장입니다. 책을 읽고, 독후감을 쓰며 그 감상을 나눕니다. 그리고는 한 달에 한 번 만나서 서로의 의견을 발전시키고 때로는 서로의 의견에 반대하면서 친해지기도 하고요. 금융위기에 대해, 인공지능에 대해, 연애와 사랑의 기술에 대해, 성 평등 의식에 대해, 또 지구 환경 성장의 한계에 대해! 여러 시간 이야기를 나누고도 모자라, 밤새도록 남아 술잔을 기울이기도 합니다. 어디 요즘 세상에, 최소 한 달에 한 번은 꼬박꼬박 모여 이런 이야기를 나누는 친구들이 흔한가요?</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">각종 강연과 체험을 즐기다</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">, 트레바리 </span><strong style="background-color: transparent; color: rgb(255, 153, 0);">이벤트 🎉</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">트레바리에서는 독서모임뿐만 아니라 다양한 이벤트들이 열리고 있습니다!</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">강연부터 체험까지 지적이고 사랑스러운 이벤트, 함께해요!</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">새로운 관점과 취향을 소개해드립니다.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">👉🏻 </span><a href="https://trevari.co.kr/events" target="_blank" style="background-color: transparent; color: rgb(17, 85, 204);">이벤트 보러 가기(click!)</a></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">대화와 술이 함께하는 공간</strong><span style="background-color: transparent; color: rgb(0, 0, 0);">, 트레바리 </span><strong style="background-color: transparent; color: rgb(255, 153, 0);">아지트 🏠</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">트레바리 아지트는 트레바리 멤버들끼리 모여, 음악을 틀고 담소를 나누고 술을 마시고 때로는 재미난 작당을 꿈꾸기도 하는 그런 공간이에요. 가끔은, 일이나 공부와 같은 무거운 주제로부터 도피할 수 있는 그런 도피처 하나쯤은 있어도 좋지 않을까요?</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">👉🏻 </span><a href="https://trevari.co.kr/spaceRental" target="_blank" style="background-color: transparent; color: rgb(17, 85, 204);">아지트 대관(click!)</a></p>',
    id: 1,
    title: "트레바리 멤버가 된다는 건?"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">정말 다양한 직업과 연령대의 멤버분들이 활동하고 계세요! </span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">나와 다른 배경을 가진 멤버들의 다양한 이야기를 듣는 즐거움이 있을 거예요 🤩</span></p>',
    id: 34,
    title: "멤버 구성은 어떻게 되나요?"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">클럽마다 차이가 있지만, 모집 정원은 최대 20명이며 평균 16명 정도 입니다.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">클럽의 특성에 따라 8명에서 20명까지 다양하게 구성되고 있어요 😁</span></p><p><br></p><p><br></p>',
    id: 33,
    title: "한 클럽당 인원은 몇 명 정도인가요?"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">아지트에서 열리는 정규 독서모임은 월 1회입니다.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">하지만 매달 정기적으로 번개 모임이 열리기 때문에 멤버분들과 함께 할 수 있는 시간은 월 2회라고 생각해주셔도 무방할 것 같아요 😆</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">이외에도 강연, 체험 등 다양한 형태의 ‘이벤트’, 편하게 놀러 올 수 있는 ‘강남/성수/안국/압구정 아지트 공간’ 등 다양한 혜택이 준비되어 있습니다!</span></p><p><br></p><p><br></p>',
    id: 35,
    title: "한 달에 한 번만 모이나요?"
  },
  {
    category: "독서모임",
    description:
      '<p>평일과 주말, 클럽의 특징에 따라 모임 시간이 조금씩 다릅니다 😁</p><p><br></p><p><strong style="color: rgb(0, 0, 0); background-color: transparent;">평일</strong><span style="color: rgb(0, 0, 0); background-color: transparent;">에 열리는 클럽은 19:40~23:20,</span></p><p><strong style="color: rgb(0, 0, 0); background-color: transparent;">평일</strong><span style="color: rgb(0, 0, 0); background-color: transparent;">에 열리는 ‘</span><strong style="color: rgb(0, 0, 0); background-color: transparent;">일찍 끝나는 클럽</strong><span style="color: rgb(0, 0, 0); background-color: transparent;">\'의 경우 19:40~22:40</span></p><p><br></p><p><strong style="color: rgb(0, 0, 0); background-color: transparent;">주말 낮</strong><span style="color: rgb(0, 0, 0); background-color: transparent;">☀️에&nbsp;열리는 클럽은 14:20~18:00,</span></p><p><strong style="color: rgb(0, 0, 0); background-color: transparent;">주말</strong><span style="color: rgb(0, 0, 0); background-color: transparent;"> </span><strong style="color: rgb(0, 0, 0); background-color: transparent;">낮</strong><span style="color: rgb(0, 0, 0);">☀️</span><strong style="color: rgb(0, 0, 0); background-color: transparent;"> \'일찍 끝나는 클럽\'</strong><span style="color: rgb(0, 0, 0); background-color: transparent;">의 경우 </span>14:20~17:20,</p><p><strong style="color: rgb(0, 0, 0); background-color: transparent;">주말 저녁</strong><span style="color: rgb(0, 0, 0); background-color: transparent;">🌜에 열리는 클럽은 19:40~23:20 에 진행됩니다.</span></p>',
    id: 7,
    title: "독서모임은 몇 시부터 몇 시까지 하나요?"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="color: rgb(0, 0, 0); background-color: transparent;">쉽게 모임일 세는 법을 알려드려요 👋🏻</span></p><p><br></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">첫 번째 목요일 = ♥월에 있는 목요일들 중 첫 번째!</span></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">두 번째 목요일 = ♥월에 있는 목요일들 중 두 번째!</span></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">세 번째 목요일 = ♥월에 있는 목요일들 중 세 번째!</span></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">네 번째 목요일 = ♥월에 있는 목요일들 중 네 번째!</span></p><p><br></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">트레바리에서 진행되는 독서모임과 대관 현황을 트레바리 캘린더에서 확인할 수 있습니다.</span></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">일자 별/아지트 별로 진행되고 있는 모임을 하단 캘린더에서 확인해주세요 😊</span></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">대관 신청 전에 가용 공간이 있는지 확인하실 수 있어요 🧡</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">🗓 </strong><a href="https://trevari.co.kr/calendar" target="_blank" style="color: rgb(0, 0, 0);"><strong>캘린더 바로 가기</strong></a></p>',
    id: 16,
    title: "독서모임일이 언제인지 헷갈려요. (모임일 세는 법!)"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">트레바리에서 진행되는 독서모임과 대관 현황을 트레바리 캘린더에서 확인할 수 있습니다.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">일자 별/아지트 별로 진행되고 있는 모임을 하단 캘린더에서 확인해주세요 😊</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">대관 신청 전에 가용 공간이 있는지 확인하실 수 있어요 🧡</span></p><p><br></p><p><strong style="color: rgb(0, 0, 0); background-color: transparent;">🗓 </strong><a href="https://trevari.co.kr/calendar" target="_blank" style="color: rgb(0, 0, 0);"><strong>캘린더 바로 가기</strong></a></p>',
    id: 2,
    title: "트레바리 전체 일정을 보고 싶어요!"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">첫 책은 트레바리에서 정해드립니다! 📙</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">첫 모임 이후로는 매달 대화와 투표를 통해 읽고 싶은 책과 주제를 정합니다. 그리고 책을 추천한 사람이 발제자가 되어 토론을 이끌어 나갑니다.</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">읽을 책이 이미 정해진 클럽도 있어요! 📚</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">특정 클럽은 한 시즌 동안 읽을 4권의 책이 모두 정해져 있으며, 해당 내용은 클럽 상세페이지 ‘커리큘럼\'에서 확인하실 수 있습니다.</span></p><p><br></p>',
    id: 38,
    title: "책은 어떻게 선정되나요?"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">네, 그렇습니다 😄 </span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">한 달에 한 권의 단행본을 읽는 것이 기본이지만, 두 권 이상의 단행본을 읽거나 아티클을 읽는 클럽도 있어요.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">이처럼 클럽마다 운영 방식이 달라, 읽을거리는 멤버들이 각자 구매하는 것을 원칙으로 하고 있습니다.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">클럽에 신청하시기 전, 해당 클럽은 읽을거리를 어떻게 선정하는지 다시 한번 확인해주세요!</span></p><p><br></p><p><br></p>',
    id: 65,
    title: "책은 개인이 구매하나요?"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">전문적으로 이끌어주시는 분이 계시면 더 좋을 클럽에는 \'클럽장\'을 모시고 있어요. 주로 특정 기업 대표님, 교수님, 작가님&nbsp; 등 해당 분야 전문가분들을 모십니다.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">이렇게 모신 ‘클럽장’님들은 해당 클럽의 커리큘럼을 직접 짜주십니다. </span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">같이 읽으면 좋은 책, 아티클, 영상/이미지 자료를 추천해주실 뿐만 아니라, 클럽이 어떤 식으로 운영되면 좋을지까지 같이 고민해주신답니다.&nbsp;</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">나아가 모임 당일 양질의 대화가 이뤄질 수 있도록 토론 주제를 준비하고, 대화를 이끌어가주시고 계세요 😊</span></p><p><br></p><p><br></p>',
    id: 37,
    title: "클럽장은 어떤 역할을 하나요?"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">트레바리의 모든 북클럽에는 \'파트너\'가 한 분씩 계십니다. 트레바리의 \'크루\'(직원)와는 달리 생계(?)는 다른 곳에서 해결하시지만, 트레바리와 같은 곳을 바라봐 주시는 든든한 분들이랍니다! </span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">한 시즌 동안 아래의 업무를 담당해주시며 멤버분들이 트레바리를 더욱 잘 즐길 수 있도록 도와주실 거예요.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">1. 원활한 토론 관리</strong></p><p><span style="background-color: transparent;">최대한 많은 멤버분들이 고루고루 자기 생각을 나눌 수 있도록, 토론 중 발언권을 분배하고 타임라인을 관리합니다. 발언권이 지나치게 편중될 경우, 파트너님이 stop을 외칠 수도 있습니다. 원활한 토론을 하기 위함이니 우리 모두 상처받지 말아요!</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">2. 모임 전후 각종 행정업무</strong></p><p><span style="background-color: transparent;">모임이 원활하게 진행될 수 있도록 클럽 단톡방 내에서 각종 투표를 실시하고, 중요한 공지, 변동 사항, 가이드 자료 등을 전달합니다. 궁금한 점은 파트너님께 문의하시면 답변해주실 거예요.</span></p><p><span style="background-color: transparent;">* 크루에게 직접 문의하시고 싶은 내용은 </span><a href="mailto:contact@trevari.co.kr" target="_blank" style="background-color: transparent;">contact@trevari.co.kr</a><span style="background-color: transparent;">로 보내주세요.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">3. 멤버로서의 파트너</strong></p><p><span style="background-color: transparent;">파트너가 모임 관리자의 역할만을 하는 것은 아니에요. 멤버와 동일하게 토론에 적극적으로 참여하고, 번개에도 함께할 수 있습니다. 파트너도 결국 한 명의 멤버라는 사실! 한 시즌 동안 예쁜 추억을 같이 쌓아 보아요.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">4. 클럽 유형별 추가 역할</strong></p><p><span style="background-color: transparent;">[클럽장이 있는 클럽] </span></p><p><span style="background-color: transparent;">클럽장과 멤버를 이어주는 다리 역할을 수행합니다. 클럽장의 사정으로 모임 진행이 어렵게 되는 등의 각종 특수 상황에 대응합니다.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">5. 저도 파트너가 되고 싶어요!</strong></p><p><span style="color: rgb(0, 0, 0);">트레바리 멤버 경험이 1시즌 이상 있는 분이라면 누구나 파트너로 지원하실 수 있습니다. 시즌 중에 다음 시즌 파트너 모집에 대한 공지를 받아보실 수 있습니다. 해당 공지를 통해서 파트너 모집과정에 대한 자세한 내용을 확인하실 수 있습니다.</span></p>',
    id: 90,
    title: "파트너는 어떤 역할을 하나요?"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">네, 안타깝지만 그렇습니다🥺</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">트레바리는 양질의 대화를 위해서는 구성원들이 어느 정도 각자의 생각을 정리해 와야 한다고 믿습니다. 그리고 생각을 정리하는 데에는 글쓰기만 한 것이 없을 거에요.</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">저희는 많은 독서모임이 서로 친해지면서 \'좋은 게 좋은 거지!\'식으로 운영을 하다가 콘텐츠를 잃어가는 모습을 지켜봐 왔습니다. 그래서 독서모임들의 평균 수명은 채 2년이 넘지 못하죠.</span></p><p><br></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">저희를 믿고 등록을 해주신 멤버 여러분들에게 \'지속 가능한 독서모임 서비스\'를 제공하기 위해서라도, 저희는 최선을 다해 원칙을 지켜나가려고 합니다. 예쁘게 봐주세요! 🥰</span></p><p><br></p><p><br></p>',
    id: 6,
    title: "독후감을 안 내면 정말로 독서모임에 참가할 수 없나요? (필독)"
  },
  {
    category: "독서모임",
    description:
      '<p><span style="color: rgb(0, 0, 0); background-color: transparent;">설 연휴와 추석 연휴를 제외한 법정공휴일에도 독서모임은 진행됩니다!</span></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">단, 멤버분들의 합의에 따라 모임 일시 및 시간을 변경할 수 있습니다.</span></p><p><br></p><p><em style="color: rgb(0, 0, 0); background-color: transparent;">&lt;트레바리 이용약관&gt; 제 12조 5항</em></p><p><em style="color: rgb(0, 0, 0); background-color: transparent;">(5) “회사"는 “독서모임 서비스" 를 제공함에 있어 설, 추석을 제외한 법정공휴일에도 “독서모임 서비스”를 제공합니다. 다만 법정공휴일 등 일정 변경에 상당한 사유가 발생할 경우 “회사”는 해당 서비스 제공 일정을 변경할 수 있으며, 이 경우에 “회사" 는 “회원" 에게 이 내용을 사전 통보 후 “독서모임 서비스”를 제공합니다.</em></p><p><br></p>',
    id: 55,
    title: "공휴일에도 독서모임 하나요?"
  },
  {
    category: "독서모임",
    description:
      "<p><span style=\"color: rgb(0, 0, 0);\">나이의 많고 적음과 무관하게 '더 좋은 사람이 되고 싶고 다양한 생각에 열려 있다'면 누구나 오셔도 됩니다 😘</span></p>",
    id: 99,
    title: "트레바리는 젊은 사람들만 가는 곳이라고 하던데 맞나요?"
  }
];
