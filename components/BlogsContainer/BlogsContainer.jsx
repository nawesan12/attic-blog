import Link from 'next/link'

export default function BlogsContainer({ posts }) {
    return (
        <>
            {
                posts.map((post, index) => (
                    <Link href={`/blog/${post.slug}`} key={index} passHref><a>
                        <article className="blog-card">
                                <p>{post.frontMatter.title}</p>
                        </article>
                    </a></Link>
                ))
            }
        </>
    )
}