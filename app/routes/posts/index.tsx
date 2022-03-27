import { json, Link, useLoaderData } from 'remix'

import { getPosts } from '~/post'
import type { Post } from '~/post'

export const loader = async () => {
  const result = await getPosts()
  return json(result)
}

export default function Posts() {
  const posts = useLoaderData<Post[]>()
  console.log(posts)

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
