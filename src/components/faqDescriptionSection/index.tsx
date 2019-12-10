import React, { FC } from "react";
import { FaqDescriptionSectionStyle } from "./style";
import { colors } from "../../common/color";

export const FaqDescriptionSection: FC = () => {
  return (
    <FaqDescriptionSectionStyle>
      <div style={{ marginBottom: "15px" }}>
        <div>
          더 궁금하신 사항은 트레바리 고객센터(
          <a style={{ color: "blue" }} href="mailto:contact@trevari.co.kr">
            contact@trevari.co.kr
          </a>
          )로 문의주세요 :)
        </div>
        <div style={{ color: colors.TREVARI_ORANGE, fontWeight: 700 }}>
          성함/휴대전화번호/클럽명을 함께 알려주시면 더 빠르게 확인 가능합니다!
        </div>
      </div>
      <div>
        <div style={{ fontWeight: 700, marginBottom: "10px" }}>
          고객센터 운영시간
        </div>
        <div> 월-금 11:00 - 18:00 (주말, 공휴일 제외)</div>
        <div style={{ fontSize: "80%" }}>*당일 18시 이후 접수 시 익일 확인</div>
        <div style={{ fontSize: "80%" }}>
          *독후감/대관 문의는 토요일 23시까지 확인
        </div>
      </div>
    </FaqDescriptionSectionStyle>
  );
};
