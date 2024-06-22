import { useLocation } from 'react-router-dom'

export const usePaginationValues = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const pageParam = searchParams.get('page')
  return {
    limit: 20,
    page: pageParam ? Number(pageParam) : 1,
    offset: (Number(pageParam) - 1) * 20,
  }
}
