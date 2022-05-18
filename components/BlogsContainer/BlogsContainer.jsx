import Image from 'next/image'
import Link from 'next/link'

export default function BlogsContainer({ posts }) {
    return (
        <>
            <section className="blog-cards-container">
            {
                posts.map((post, index) => (
                    <Link href={`/blog/${post.slug}`} key={index} passHref><a>
                        <article className="blog-card">
                            <section className="blog-description">
                                <header>
                                    <h3>{post.frontMatter.title}</h3>
                                    <p>{post.frontMatter.description}</p>
                                </header>
                                <p className='date'>{post.frontMatter.date}</p>
                            </section>
                            <section className="image-container">
                                <Image src={post.frontMatter.thumbnailUrl} alt={post.frontMatter.title} objectFit='cover' layout='fill'/>
                            </section>
                        </article>
                    </a></Link>
                ))
            }
            </section>

            <style jsx>{`
                .blog-cards-container {
                    display:flex;
                    flex-direction:column;
                    flex-wrap:wrap;
                    align-items:center;
                    margin-block:2vh;
                    gap: 2rem;
                }

                .blog-card {
                    display:grid;
                    grid-template-columns: minmax(20rem, 25rem) 7.5rem;
                    grid-template-rows: minmax(7.5rem, 5rem);
                    border-radius:.25rem;
                    border: 1px solid var(--secondary-color );
                }    

                .blog-description {
                    display:grid;
                    grid-template-rows: 1fr 2rem;
                    padding:.5rem;
                }

                .blog-description p {
                    padding-block: .75rem;
                    opacity:.8;
                }

                .blog-description .date {
                    grid-row: 2 / 3;
                    font-size: .75rem;
                    opacity: .7;
                }

                .image-container {
                    grid-column: 2 / 3;
                    grid-row: 1 / 2;
                    width:100%;
                    height:100%;
                    position:relative;
                    overflow:hidden;
                    border-radius: 0 .25rem .25rem 0;
                }
            `}</style>
        </>
    )
}