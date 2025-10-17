import { notFound } from 'next/navigation'
import { promises as fs } from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PageProps {
  params: Promise<{
    page: string
  }>
}

// Get all available MDX files for static generation
export async function generateStaticParams() {
  const pagesDirectory = path.join(process.cwd(), 'content/pages')
  
  try {
    const files = await fs.readdir(pagesDirectory)
    const mdxFiles = files.filter(file => file.endsWith('.mdx'))
    
    return mdxFiles.map(file => ({
      page: file.replace('.mdx', '')
    }))
  } catch {
    // If pages directory doesn't exist, return empty array
    return []
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { page } = await params
  
  try {
    // Read the MDX file
    const filePath = path.join(process.cwd(), 'content/pages', `${page}.mdx`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    
    return (
      <main className="relative z-1 min-h-screen">
        <div className="max-w-5xl mx-auto pt-[124px] px-6">
          <MDXRemote source={fileContent} />
        </div>
      </main>
    )
  } catch {
    // If file doesn't exist or can't be read, return 404
    notFound()
  }
}
