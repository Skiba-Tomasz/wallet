import { PostDto } from "./PostDto";

export interface InvestmentGroupDto {
  id: number;
  name: string;
  posts: PostDto[];
}
