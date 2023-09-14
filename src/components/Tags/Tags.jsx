import { useSearchParams } from 'react-router-dom'
import Card from '../Base/Card/Card'
import TagsItem from './TagsItem'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

export default function Tags({ tags, selectedCategory, setSelectedCategory, className }) {
  const [tagsParams, setTagsParams] = useSearchParams()

  const handleSelectCategory = (tag) => {
    if (selectedCategory === tag) {
      setSelectedCategory('all')
      setTagsParams()
    } else {
      setSelectedCategory(tag)
      setTagsParams({ tags: tag }, { replace: true })
    }
  }

  useEffect(() => {
    if (tagsParams.get('tags')) {
      setSelectedCategory(tagsParams.get('tags'))
    }
  }, [setSelectedCategory, tagsParams])

  return (
    <div className={className}>
      <Card>
        <div className="mb-4 text-4 text-center font-semibold">Tags</div>
        <div className="flex lg:flex-wrap flex-nowrap overflow-hidden overflow-x-auto gap-y-4 gap-x-2">
          {tags?.map((tag) => (
            <TagsItem
              title={tag}
              key={tag}
              isActive={tag === selectedCategory}
              onClick={() => handleSelectCategory(tag)}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.array,
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
  className: PropTypes.string,
}
