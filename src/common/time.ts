import { format } from "date-fns";
import { ko } from "date-fns/locale";

export function convertLocalTime(startedAt: Date): string {
  return format(startedAt, "yyyy년 M월 d일 cccc a h시 m분", {
    locale: ko
  });
}
