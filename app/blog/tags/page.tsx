import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>

        <div className="flex flex-wrap">
          {tagKeys.length === 0 && 'No tags found.'}
          {sortedTags.map((tag) => {
            return (
              <div key={tag} className="mb-2 mr-5 mt-2">
                <Tag text={tag} fontSize="text-lg" />
                <Link
                  href={`/blog/tags/${slug(tag)}`}
                  className="-ml-2 text-lg font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts tagged ${tag}`}
                >
                  {` (${tagCounts[tag]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
