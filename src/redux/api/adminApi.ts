import { IAdmin, IDepartment, IMeta } from "@/types"
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


const   ADMIN_URL = '/admins'

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    admins: build.query({
      query: (arg:Record<string , any> ) => ({
        url: ADMIN_URL ,
        method: 'GET',
        params: arg
      }),
      transformResponse: (response:IAdmin[], meta:IMeta) =>{
        return {
          admins: response,
          meta
        }
      },
      providesTags:[tagTypes.admin]
    }),
    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: 'POST',
        data,
        contentType: "multipart/form-data"
      }),
      invalidatesTags:[tagTypes.admin]
    }),
    updateAdminWithFormData: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.admin],
    }),
    removeAdmin: build.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:[tagTypes.department]
    }),
  
 
  }),
})

export const { useAddAdminWithFormDataMutation, useAdminsQuery } = adminApi