import { baseApi } from "@/shared/config/api";
import { GetSkillsResponse, GetSkillsParams,  } from "../model/types";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<GetSkillsResponse, GetSkillsParams>({
      query: (params) => ({
        url: "/skills",
        params,
      }),
      providesTags: ["Skills"],
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
