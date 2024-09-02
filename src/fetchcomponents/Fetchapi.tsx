import axios, { AxiosError, AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import {
  useQuery,
  UseQueryResult,
  QueryFunctionContext,
} from "@tanstack/react-query";
import { toast } from "sonner";

// Define a type for the response data

// Define a type for the custom parameters
interface ParamsType {
  queryKey?: string | string[];
  headers?:
    | string
    | number
    | boolean
    | (() => void)
    | ((error: any) => void)
    | undefined;
  queryKeyId?: number | string | undefined;
  retry?: number;
  refetchOnWindowFocus?: boolean;
  onSuccess?: (data: Response) => void;
  onError?: (error: AxiosError) => void;
}

// Fetch data function
const fetchData = async ({
  endpoint,
  customheaders,
}: {
  endpoint: string;
  customheaders: <AxiosHeaders>() => void;
}): Promise<Response> => {
  let response;

  response = await axios.get<AxiosResponse>(endpoint);
  // console.log(response.data);

  return response.data;
};

// Custom hook to fetch data
const useFetchData = ({
  endpoint,
  params,
}: {
  endpoint: string;
  params: ParamsType;
}): UseQueryResult<Response, AxiosError> => {
  const [customParams, setCustomParams] = useState<ParamsType>({});

  useEffect(() => {
    let newCustomParams: ParamsType = {};

    if (params.queryKey) {
      newCustomParams.queryKey = `${params.queryKey}`;
    } else if (params.queryKeyId && params.queryKey) {
      newCustomParams.queryKey = [`${params.queryKey}`, params.queryKeyId];
    } else if (!params.queryKey || params.queryKeyId) {
      newCustomParams.queryKey = [`${endpoint}`, params.queryKeyId];
    } else {
      newCustomParams.queryKey = `${endpoint}`;
    }

    newCustomParams = {
      ...newCustomParams,
      retry: params.retry ?? 5,
      refetchOnWindowFocus: params.refetchOnWindowFocus ?? true,
      onSuccess:
        params.onSuccess ??
        (() => {
          toast.success("Successfully Fetched Data");
        }),
      onError:
        params.onError ??
        ((error: AxiosError) => {
          toast.error(error.message);
        }),
    };
    setCustomParams(newCustomParams);
  }, [
    endpoint,
    params.queryKey,
    params.queryKeyId,
    params.retry,
    params.refetchOnWindowFocus,
    // params.onSuccess,
    // params.onError,
  ]);

  const {
    data: data,
    isLoading,
    isFetching,
    isError,
  } = useQuery<Response, AxiosError>({
    queryKey: [customParams.queryKey],

    queryFn: () => fetchData({ endpoint }),
    retry: customParams.retry,
    refetchOnWindowFocus: customParams.refetchOnWindowFocus,
    onSuccess: customParams.onSuccess,
    onError: customParams.onError,
  });

  return { data, isLoading, isFetching, isError };
};

export { useFetchData };
// interface customParams {
//   querykey: string | string[];
//   queryKeyId?: string | number;
//   retry: number;
//   refetchOnWindowFocus: boolean;
//   onSuccess?: () => void;
//   onError?: (error: any) => void;
// }
