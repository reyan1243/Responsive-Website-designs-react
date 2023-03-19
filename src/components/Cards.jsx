import React from 'react'
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"
import Card from './Card'

function Cards() {

  return (
    <div className='w-full py-[8rem] px-4 bg-white '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-32'>

        <Card
          img={single}
          head={"Single User"}
          price={"$14"}
          desc={[
            "500 GB Storage",
            "1 Granted User",
            "Send up to 2 GB"]} />

        <Card img={double}
          head={"Two Users"}
          price={"$21"}
          desc={[
            "750 GB Storage",
            "2 Granted User",
            "Send up to 4 GB"]} />

        <Card img={triple}
          head={"Multi Users"}
          price={"$48"}
          desc={[
            "1000 GB Storage",
            "20 Granted User",
            "Send up to 40 GB"]} />
      </div>

    </div>
  )
}

export default Cards