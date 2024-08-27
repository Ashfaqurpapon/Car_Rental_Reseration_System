import { TResponseRedux } from "../../../types";
import { CarTypes } from "../../../types/CarTypes";
import { baseApi } from "../baseApi";

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<CarTypes[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    // addAcademicSemester: builder.mutation({
    //   query: (data) => ({
    //     url: "/academic-semesters/create-academic-semester",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    // getAcademicDepartments: builder.query({
    //   query: () => {
    //     return { url: "/academic-departments", method: "GET" };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
    // addAcademicDepartment: builder.mutation({
    //   query: (data) => ({
    //     url: "/academic-departments/create-academic-department",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const { useGetAllCarsQuery } = carManagementApi;
