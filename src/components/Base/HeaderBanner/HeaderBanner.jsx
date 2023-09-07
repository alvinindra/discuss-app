export default function HeaderBanner() {
  return (
    <div className="header-banner flex flex-wrap lg:grid grid-cols-2 px-8">
      <div className="my-auto">
        <h1 className="text-white font-sans font-bold mb-0 text-[36px]">Discuss</h1>
        <p className="text-white font-mono mt-0 max-w-[344px]">
          Bringing minds together to explore new horizons, where conversations plant seeds of change
          and growth.
        </p>
      </div>
      <div className="ms-auto">
        <img src="/img/illustration-banner.svg" className="w-full"></img>
      </div>
    </div>
  )
}
