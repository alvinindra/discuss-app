import Card from '../Base/Card/Card'
import TagsItem from './TagsItem'

export default function Tags() {
  return (
    <div>
      <Card>
        <div className="mb-4 text-4 text-center font-semibold">Tags</div>
        <div className="flex">
          <TagsItem title="technology" />
          <TagsItem title="react" />
        </div>
      </Card>
    </div>
  )
}
