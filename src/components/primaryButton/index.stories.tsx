import React from "react";
import { PrimaryButton } from "./index";

export default {
  component: PrimaryButton,
  title: "PrimaryButton"
};

export const PrimaryButtonStoryBook = () => {
  return <PrimaryButton value="독서모임 캘린더 바로가기" />;
};

PrimaryButtonStoryBook.story = {
  name: "PrimaryButton Component"
};
