import { IDepartment, IMeta } from "@/types"
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


const MANAGEMENT_DEPARTMENT_URL = '/management-departments'

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: (arg:Record<string , any> ) => ({
        url: MANAGEMENT_DEPARTMENT_URL ,
        method: 'GET',
        params: arg
      }),
      transformResponse: (response:IDepartment, meta:IMeta) =>{
        return {
          departments: response,
          meta
        }
      },
      providesTags:[tagTypes.department]
    }),
    addDepartment: build.mutation({
      query: (data) => ({
        url: MANAGEMENT_DEPARTMENT_URL ,
        method: 'POST',
        data
      }),
      invalidatesTags:[tagTypes.department]
    }),
    department: build.query({
      query: (id) => ({
        url: `${MANAGEMENT_DEPARTMENT_URL}/${id}`,
        method: 'GET',
      }),
      providesTags:[tagTypes.department]
    }),
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${MANAGEMENT_DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    removeDepartment: build.mutation({
      query: (id) => ({
        url: `${MANAGEMENT_DEPARTMENT_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:[tagTypes.department]
    }),
  }),
})

export const { useGetDepartmentsQuery,useDepartmentQuery, useUpdateDepartmentMutation, useAddDepartmentMutation , useRemoveDepartmentMutation} = departmentApi