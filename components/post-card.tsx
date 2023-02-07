import React from "react"
import Link from "next/link"

import { Post } from ".contentlayer/generated/types"
import { formatDate } from "@/lib/utils"

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="flex gap-4">
      <div className="w-20 text-right">
        <span className="text-sm font-semibold leading-7 text-gray-500">
          {formatDate(post.date)}
        </span>
      </div>
      <div>
        <Link href={post.slug} className="no-underline">
          <h2 className="text-lg font-semibold no-underline">{post.title}</h2>
        </Link>
        <small className="text-sm text-gray-500">{post.description}</small>
      </div>
    </article>
  )
}

export default PostCard
