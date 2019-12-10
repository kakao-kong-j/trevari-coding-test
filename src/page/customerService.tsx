import React, { FC } from "react";
import { CustomerServiceNaviTab } from "../components/customerServiceNaviTab";
import { FaqDescriptionSection } from "../components/faqDescriptionSection";
import { FaqCategoryButtonGroup } from "../components/faqCategoryButtonGroup";
import { FaqDocumentSearchSection } from "../components/faqDocumentSearchSection";
import { FaqDocumentGroup } from "../components/faqDocumentGroup";
import { faqs } from "../components/faqDocumentGroup/types";
import { colors } from "../common/color";

export const CustomerServicePage: FC = () => {
  return (
    <div style={{ backgroundColor: colors.GRAY_LIGHT }}>
      <div style={{ height: "50px" }} />
      <div
        style={{
          backgroundColor: colors.WHITE,
          maxWidth: "1140px",
          margin: "auto",
          width: "100%"
        }}
      >
        <div style={{ padding: "40px 0", borderRadius: ".125rem" }}>
          <CustomerServiceNaviTab />
          <FaqDescriptionSection />
          <FaqCategoryButtonGroup />
          <FaqDocumentSearchSection />
          <FaqDocumentGroup faqs={faqs} />
        </div>
      </div>
    </div>
  );
};
