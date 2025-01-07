import AudioPlayer from '@/components/Audio';
import MouseImageTrail from '@/components/MouseImageTrail';
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { HeartSpinner } from 'react-spinners-kit';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const BirthdayPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const imageUrls = [
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-0.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-1.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-2.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-3.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-4.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-5.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-6.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-7.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-8.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-9.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-10.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-11.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-12.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-13.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-14.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-15.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-16.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-17.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-18.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-19.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-20.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-21.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-22.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-23.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-24.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-25.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-26.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-27.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-28.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-29.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-30.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-31.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-32.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-33.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-34.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-35.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-36.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-37.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-38.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-39.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-40.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-41.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-42.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-43.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-44.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-45.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-46.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-47.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-48.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-49.jpg',
    // 'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-51.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-50.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-52.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-53.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-54.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-55.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-56.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-57.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-58.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-59.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-60.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-61.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-62.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-65.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-63.jpg',
    'https://lisa.maseja.my.id/fjaiopsd123adsaf/lisa-64.jpg',
  ];

  const preloadImages = (urls: any) => {
    return Promise.all(
      urls.map((url: any) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  };

  useEffect(() => {
    // if (now != "11/18/2024") { // must change to 11/18/2024 and change to date today
    //     navigate('/wait')
    // }
    // else {
    preloadImages(imageUrls)
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error('Error preloading images:', error));
    // }
  }, []);

  if (!imagesLoaded) {
    return (
      <div className='grid place-items-center h-screen w-full place-content-center bg-white'>
        <HeartSpinner color='#FF0000' />
        <p>Sebentar yaaw, Lagi Disiapin...</p>
      </div>
    );
  }

  return (
    <section className='grid grid-cols-12 divide-x-2 space-x-4'>
      <div className='col-span-9'>
        <MouseImageTrail
          renderImageBuffer={60}
          rotationRange={25}
          images={imageUrls}
        >
          <section className='grid h-screen w-full place-content-center bg-white'>
            <p className='flex flex-col items-center gap-2 text-3xl font-bold uppercase text-black'>
              <span className='grid place-items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='size-6'
                >
                  <path
                    fillRule='evenodd'
                    d='M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z'
                    clipRule='evenodd'
                  />
                </svg>
                Coba gerakin kursornya
              </span>
              <span className='text-sm font-normal text-center text-gray-600'>
                COBA DEH PAKE LAPTOP BIAR BAGUS TAMPILANNYA
              </span>
            </p>
          </section>
        </MouseImageTrail>
      </div>
      <div className='col-span-3 p-4 bg-rose-950'>
        <Card>
          <CardHeader className='text-center'>
            <CardTitle>Mean It</CardTitle>
            <CardDescription>Lauv & LENY</CardDescription>
          </CardHeader>
          <CardContent>
            <AudioPlayer src='https://lisa.maseja.my.id/fjaiopsd123adsaf/Lauv_%26_LANY_Mean-It.mp3'></AudioPlayer>
          </CardContent>
        </Card>
        <div className='text-pretty p-3 h-max flex justify-center items-center text-white'>
          <div className='grid place-items-center'>
            <h1 className='text-4xl mb-5 font-[Britney-Variable] text-center'>
              Happy Level Up Day's, Lisa Ardèliana!
            </h1>
            <p className='mb-4 font-body'>
              Harap demi harap dilangitkan kembali dan semoga demi semoga
              diucapkan dengan natang oleh manusia penduduk bumi yang
              menyayangimu.
            </p>
            <p className='mb-4 font-body'>
              Terlahir sebagai manusia yang ceritanya di rangkai dengan hebat
              oleh sang penulis semesta, aku bersyukur dengan dihadirkannya
              engkau di waktu yang tak terduga. Kau sungguh tertulis indah
              dihalaman paling menyenangkan dalam hidupku. Senang mengenal
              manusia penuh kejutan sepertimu, yang dibuat tertawa dengan
              tingkahnya yang tak terduga, yang dibuat kesal dengan seribu
              keusilannya.
              <br />
              <br />
              Apa kau dengar? Kata semoga kuucapkan lebih keras agar dunia juga
              dapat mendengarnya, sebab aku ingin semua penduduk bumi tahu bahwa
              manusia yang paling baik dan paling tabah ini adalah yang pernah
              kutemui sedang bertambah usia.
            </p>
            <p className='mb-4 font-body'>
              Alam bersenandung ria dipimpin oleh matahari yang menyorotkan
              cahaya yang paling indah dengan bentuk bulat sempurna menyambut
              yang sedang bertambah. Lihatlah bahkan alam pun ikut serta
              merayakan perayaan hari baikmu, dan tentu saja perayaan tak akan
              berhenti sampai disini. Karena bagiku, setiap hari kau selalu
              pantas kurayakan.
              <br />
              <br />
              Satu permohonan ku genggam, dipanjatkan paling akhir dalam hati.
              Beribu semoga akan bertarung, aku menitipkan "kita" tentang semoga
              kita bisa terus mengudara menciptakan benih-benih kebahagiaan
              dalam rangkulan kasih yang selalu mengusahakan"saling"
            </p>
            <p className='font-body'>
              Bertumbuhlah sebagaimana mestinya, perjalanan di bumi masih sangat
              panjang. Tolong temui aku dipijakan bumi mana pun yaa? Agar kau
              tak pernah mendekap lelah sendirian, sebab kau juga mempunyai aku
              untuk merangkul semua bentuk cerita yang kau lalui. Terimakasih
              telah memilih terlahir sebagai manusia yang mencintai aku,
              terimakasih telah menjadi sosok hebat tak terduga yang penuh
              kebahagiaan, terimakasih telah mengisi segala rumpang yang ada
              dalam diriku.
              <br />
              <br />
              Sekali lagi,
              <br />
              Selamat Bertambah Usia, Saa^^
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayPage;
