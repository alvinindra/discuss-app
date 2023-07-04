import Card from '../Base/Card/Card'

export default function DiscussionsItem() {
  return (
    <Card className="border border-solid border-color-[#DADADA80] mb-5 last:mb-0">
      <div className="font-bold mb-3">Bagaimana cara menginstall NextJS versi 13?</div>
      <div className="flex mb-4">
        <img src="https://placehold.co/36x36" className="rounded-full me-3" alt="" />
        <div className="flex">
          <div className="my-auto text-3.5 font-medium">Leonanta Pramudya</div>
        </div>
        <div className="ms-auto my-auto text-3.5 text-gray-500">2 hari yang lalu</div>
      </div>
      <div className="mb-3 text-gray-600 text-3.5">
        Halo teman-teman semuanya. Saya punya pertanyaan, tentang cara untuk menginstall NextJS
        versi 13, yang dimana NextJS 13 adalah versi terbaru. Saya mempunyai masalah dengan
        instalasi yang terbaru, saya menda.....
      </div>
      <div className="flex">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99998 9.57442H9.33331V8.24109H3.99998V9.57442ZM3.99998 7.57442H12V6.24109H3.99998V7.57442ZM3.99998 5.57442H12V4.24109H3.99998V5.57442ZM1.33331 14.9078V2.90776C1.33331 2.54109 1.46398 2.22709 1.72531 1.96576C1.9862 1.70487 2.29998 1.57442 2.66665 1.57442H13.3333C13.7 1.57442 14.014 1.70487 14.2753 1.96576C14.5362 2.22709 14.6666 2.54109 14.6666 2.90776V10.9078C14.6666 11.2744 14.5362 11.5884 14.2753 11.8498C14.014 12.1106 13.7 12.2411 13.3333 12.2411H3.99998L1.33331 14.9078Z"
            fill="#34364A"
          />
        </svg>
        <span className="ms-2 text-3">10 Jawaban</span>
      </div>
    </Card>
  )
}
