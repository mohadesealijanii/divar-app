import { useQuery } from '@tanstack/react-query'
import Loader from 'src/components/modules/Loader'
import Main from 'src/components/templates/Main'
import Sidebar from 'src/components/templates/Sidebar'
import { getCategory } from 'src/services/admin'
import { getPosts } from 'src/services/user'

const style = { display: 'flex' }

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery(
    ['get-posts'],
    getPosts
  )
  const { data: categories, isLoading: categoriesLoading } = useQuery(
    ['get-categories'],
    getCategory
  )

  return (
    <>
      {postLoading || categoriesLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  )
}

export default HomePage
