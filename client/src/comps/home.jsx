import Img from '../assets/tezos.jpg';


export default function Home() {

    return (
      <>
        <div className="h-screen w-screen flex align-center justify-center static mt-15">
            <div className= "h-full w-screen bg-center bg-cover bg-no-repeat static top-0" style={{ backgroundImage: `url(${Img})`}}></div>
        </div>
      </>
    )
  }