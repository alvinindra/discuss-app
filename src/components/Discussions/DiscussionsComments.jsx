import Card from '@/components/Base/Card/Card'
import DiscussionsCommentsItem from './DiscussionsCommentsItem'

export default function DiscussionsComments() {
  return (
    <Card className="my-8">
      <h4>Comments (1)</h4>
      <DiscussionsCommentsItem />
      <DiscussionsCommentsItem />
    </Card>
  )
}
