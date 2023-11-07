import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
import { tree } from '../source'


// @dev This is the layout for the root docs page.
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={tree} nav={{ title: 'mevETH Liquid Staking' }}>
      {children}
    </DocsLayout>
  )
}
