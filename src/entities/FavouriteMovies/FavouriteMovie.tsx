import {useQuery} from '@tanstack/react-query'

import {MovieCardsList} from '@/entities'
import {getFavourites} from '@/api'
import {Loader, Error} from '@/shared'

const FavouriteMovie = () => {
  const {data, isPending, isError, error} = useQuery({
    queryFn: getFavourites,
    queryKey: ['favourites'],
  })

  if (isError) {
    return <Error message={error.message} />
  }

  if (isPending) {
    return <Loader />
  }

  if (data?.length > 0) {
    return <MovieCardsList data={data} />
  }
  return null
}

export default FavouriteMovie
