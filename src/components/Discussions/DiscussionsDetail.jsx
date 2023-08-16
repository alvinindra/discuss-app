import Card from '@/components/Base/Card/Card'

export default function DiscussionsDetail() {
  return (
    <Card>
      <h1>Kenapa Zanuar sering mengantuk?</h1>
      <div className="flex flex-row">
        <div className="flex flex-row">
          <div className="my-auto">Created by</div>
          <img
            src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
            className="rounded-full mx-2 w-20px my-auto h-20px"
            alt="Alex"
          />
          <strong className="text-gray-600 my-auto mt-0.30">Alexander Purwoko</strong>
        </div>
        <div className="my-auto">
          <span className="mx-2">•</span>
          <span>1 month ago</span>
        </div>
      </div>
      <hr />
      <div>
        <p className="text-4.5">
          Zanuar, sepertinya sering mengalami masalah mengantuk yang mengganggu kesehariannya. Ada
          beberapa faktor yang mungkin berkontribusi pada kecenderungan Zanuar untuk merasa
          mengantuk secara berlebihan. Pertama-tama, pola tidur yang tidak teratur atau kurang tidur
          dapat menjadi salah satu penyebab utama. Jika Zanuar sering begadang atau tidur larut
          malam, tubuhnya mungkin tidak mendapatkan waktu tidur yang cukup, sehingga mengakibatkan
          rasa kantuk di siang hari.
        </p>
        <p className="text-4.5">
          Selain itu, gaya hidup yang kurang sehat juga bisa mempengaruhi tingkat energi dan
          kewaspadaan Zanuar. Konsumsi makanan yang tidak seimbang atau terlalu banyak mengandung
          gula dan karbohidrat sederhana dapat menyebabkan fluktuasi kadar gula darah, yang pada
          gilirannya bisa membuat Zanuar merasa lebih mudah mengantuk. Kurangnya aktivitas fisik
          juga dapat berperan dalam membuat tubuhnya kurang bertenaga dan mudah merasa lelah.
        </p>
        <p className="text-4.5">
          Selain faktor-faktor internal, lingkungan tempat Zanuar beraktivitas juga dapat
          berpengaruh. Ruangan yang kurang terang atau kurang ventilasi bisa membuat suasana menjadi
          lebih mengantuk. Suhu yang terlalu nyaman atau udara yang kurang segar bisa memicu
          perasaan ingin tidur. Selain itu, jika Zanuar terpapar dengan rutinitas yang monoton atau
          aktivitas yang membosankan, hal ini juga bisa membuatnya lebih cenderung merasa mengantuk.
        </p>
        <p className="text-4.5">
          Stres dan kelelahan mental juga mungkin menjadi faktor lain yang membuat Zanuar sering
          merasa mengantuk. Jika ia memiliki banyak tanggung jawab atau masalah pribadi yang
          membebani pikirannya, ini bisa mengganggu kualitas tidur malamnya dan akhirnya memicu
          kelelahan berlebih di siang hari. Untuk mengatasi masalah mengantuk ini, Zanuar perlu
          memperhatikan pola tidurnya, menjaga gaya hidup sehat dengan makan bergizi dan
          berolahraga, menciptakan lingkungan kerja atau belajar yang nyaman, serta mencari cara
          untuk mengelola stres secara efektif. Jika masalah ini terus berlanjut, berkonsultasilah
          dengan profesional medis untuk mendapatkan nasihat lebih lanjut dan mungkin pemeriksaan
          kesehatan lebih mendalam.
        </p>
      </div>
      <hr />
      <div className="flex flex-row">
        <div className="flex cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"
            ></path>
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" fill="#66bd73"></path></svg> */}
          <span className="ms-1 my-auto text-4 fw-500 mt-0.5">10</span>
        </div>
        <div className="flex ms-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z"
            ></path>
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path d="M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649l-.063.293V14a2 2 0 0 0 2 2z" fill="#66bd73"></path></svg> */}
          <span className="ms-1 my-auto text-4 fw-500 mt-0.5">3</span>
        </div>
      </div>
    </Card>
  )
}
