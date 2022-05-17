import Head from 'next/head'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export default function PostPage({ frontMatter, mdxSource }) {
    return (
        <>
        <Head>
            <title>{frontMatter.title} - Attic Blog</title>
        </Head>
            
        <h1>{frontMatter.title}</h1>

        <MDXRemote {...mdxSource} />
        </>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(file => ({
        params: {
            slug: file.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: {slug} }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}