import Card from '../Base/Card/Card'
import TagsItem from './TagsItem'
import PropTypes from 'prop-types'

export default function Tags({ tags, selectedCategory, setSelectedCategory }) {
  const handleSelectCategory = (tag) => {
    if (selectedCategory === tag) {
      setSelectedCategory('all')
    } else {
      setSelectedCategory(tag)
    }
  }

  return (
    <div>
      <Card>
        <div className="mb-4 text-4 text-center font-semibold">Tags</div>
        <div className="flex flex-wrap gap-y-4 gap-x-2">
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
}
