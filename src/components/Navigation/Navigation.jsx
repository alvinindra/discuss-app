import Card from '../Base/Card/Card'

export default function Navigation() {
  return (
    <div className="flex flex-wrap">
      <Card className="mb-4 w-100">
        <div className="border-b-1 border-0 border-solid mb-3 border-black">
          <div className="flex mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Leonanta+Pramudya"
              className="rounded-full me-3 w-36px h-36px"
              alt=""
            />
            <div className="flex mx-auto">
              <div className="my-auto text-3.5 font-medium">Leonanta Pramudya</div>
            </div>
          </div>
        </div>
        <a href="/" className="decoration-none text-black">
          <div className="font-medium text-center py-3 hover:bg-black hover:text-white border-rounded-2 transition-all">
            Leaderboards
          </div>
        </a>
      </Card>
      <a
        href="#"
        className="decoration-none bg-brand-primary w-100 border-0 py-3 border-rounded-2 text-white font-semibold text-center mb-4"
      >
        New Thread
      </a>
    </div>
  )
}
