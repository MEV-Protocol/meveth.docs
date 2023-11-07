import { getPage, getPageUrl, pages, tree } from '@/app/source'
import type { Metadata } from 'next'
import { MDXContent } from 'next-docs-ui/mdx'
import { DocsPage } from 'next-docs-ui/page'
import { findNeighbour } from 'next-docs-zeta/server'
import { notFound } from 'next/navigation'
//import { InlineTOC } from 'next-docs-ui/components/inline-toc'
import { RollButton } from 'next-docs-ui/components/roll-button'

export default async function Page({
  params
}: {
  params: { slug?: string[] }
}) {
  const page = getPage(params.slug)

  if (page == null) {
    notFound()
  }

  const MDX = page.data.default
  const neighbour = findNeighbour(tree, getPageUrl(params.slug))

  return (
    <DocsPage toc={page.data.toc} footer={neighbour}>

 {/**  {@see {@link https://next-docs-zeta.vercel.app/docs/ui/components/roll-button}} */}
      <RollButton />
      <MDXContent>
        <h1>{page.matter.title}</h1>
{/**        <InlineTOC items={toc} /> */}
        <MDX />
      </MDXContent>
    </DocsPage>
  )
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return pages.map(page => ({
    slug: page.slugs
  }))
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug)

  if (page == null) notFound()

  return {
    title: page.matter.title,
    description: page.matter.description
  } satisfies Metadata
}
