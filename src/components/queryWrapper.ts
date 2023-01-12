import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { apiInstance } from './apiInstance'

interface QueryStringSearch {
  [key: string]: string | number | boolean | null
}

export function QueryWrapper(url: string, token?: string) {
  function useQueryGet<K>(
    queryKey: string,
    payload?: Readonly<QueryStringSearch>
  ) {
    const fetchData = async () => {
      try {
        const res = await apiInstance(token).get(url, {
          params: {
            page: 1,
            size: 10,
            status: 'active',
          },
        })
        return res.data
      } catch (error) {
        throw new Error('Terjadi Kesalahan')
      }
    }

    const { data, isLoading, refetch } = useQuery<K>([queryKey], fetchData)

    return {
      data: data ?? [],
      isLoading,
      refetch,
    }
  }

  // function useQueryData<K>(
  //   queryKey: string,
  //   payload?: Readonly<QueryStringSearch>
  // ) {
  //   const [pageCount, setPageCount] = useState<number>(0);
  //   const [total, setTotal] = useState<number>(0);
  //   const { keyword, page } = useSearch();
  //   const queryClient = useQueryClient();
  //   const params = {
  //     page,
  //     size: 25,
  //     search_query: keyword,
  //     ...payload,
  //   };

  //   const fetchData = async () => {
  //     try {
  //       const res = await apiInstance(token).get(url, {
  //         params: cleanDeep(params),
  //       });
  //       setPageCount(Number(res.data.pagination.pages));
  //       setTotal(Number(res.data.pagination.rows));
  //       return res.data.data;
  //     } catch (error) {
  //       throw new Error('Terjadi Kesalahan');
  //     }
  //   };

  //   const { data, isLoading, isPreviousData, refetch } = useQuery<K[]>(
  //     [queryKey, page, keyword, payload],
  //     fetchData,
  //     {
  //       keepPreviousData: true,
  //     }
  //   );

  //   useEffect(() => {
  //     queryClient.prefetchQuery([queryKey, page + 1, keyword], fetchData);
  //   }, [page, queryClient]);

  //   return {
  //     data: data ?? [],
  //     pageCount,
  //     total,
  //     isLoading,
  //     isPreviousData,
  //     refetch,
  //   };
  // }

  return { useQueryGet }
}
