import { Pagination } from "@/types";
import { State } from "@/context/pagination/types";

export const getLimitAndOffset = (
  currentPage: number,
  pageSize: number
): Pagination => {
  const offset = currentPage * pageSize;
  const limit = pageSize + offset;
  return { limit, offset };
};

export const getImageUrlOrRdm = (images: string[]): string => {
  if (images && images.length > 0) return `url('${images[0]}')`;
  return "url('/launches/no_image.jpg')";
};
