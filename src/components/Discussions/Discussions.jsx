import Card from '@/components/Base/Card/Card'
import DiscussionsItem from './DiscussionsItem'

export default function Discussions() {
  return (
    <Card className="mt-6">
      <DiscussionsItem />
      <DiscussionsItem />
      <DiscussionsItem />
    </Card>
  )
}
