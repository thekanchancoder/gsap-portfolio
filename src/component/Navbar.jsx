import TextReveal from "./TextReveal"


const Navbar = () => {
  return (
    <div className="flex px-[3rem]  items-center justify-between fixed top-0 left-0 h-[8vh] w-full text-white z-[30]">
      <div className="leftNameSide ">
<TextReveal>
    <h3 className="text-[1.3rem] ">Kanchan Rathore</h3>
</TextReveal>

      </div>
        <div className="rightLinkSide flex gap-[2rem]">

<TextReveal>
    <h3 className="text-[1.02rem] ">Home</h3>
</TextReveal>

<TextReveal>
    <h3 className="text-[1.02rem] ">About</h3>
</TextReveal>

<TextReveal>
    <h3 className="text-[1.02rem] ">Contact</h3>
</TextReveal>

        </div>
    </div>
  )
}

export default Navbar
