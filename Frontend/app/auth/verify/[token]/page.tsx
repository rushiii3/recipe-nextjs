"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useParams } from "next/navigation";
import React from "react";
const fetchTokenStatus = async (token: string) => {
  const response = await axios.get(
    `http://localhost:4000/api/v1/user/verify-token/${token}`
  );
  return response.data;
};
interface DataResponse {
  message: string;
  // other fields you expect in data
}

interface ErrorResponse {
  message: string;
  // other fields you expect in error response
}
const Page = () => {
  const { token }:{token:string} = useParams();

  const { data, error, isLoading } = useQuery<DataResponse, AxiosError<ErrorResponse>>({
    queryKey: ["token", token],
    queryFn: () => fetchTokenStatus(token),
    enabled: !!token,
    retry: false,
  });
  return (
    <div className="h-screen  flex items-center justify-center">
      <h1 className="text-2xl text-gray-800 text-center">
        {error ? error?.response?.data?.message : data?.message}
      </h1>
    </div>
  );
};

export default Page;
