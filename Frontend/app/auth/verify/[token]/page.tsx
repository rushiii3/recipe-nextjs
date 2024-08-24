"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import React from "react";
const fetchTokenStatus = async (token: string) => {
  const response = await axios.get(
    `http://localhost:4000/api/v1/user/verify-token/${token}`
  );
  return response.data;
};
const Page = () => {
  const { token }:{token:string} = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["token", token],
    queryFn: () => fetchTokenStatus(token),
    enabled: !!token, // Ensures the query runs only if token is truthy
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
