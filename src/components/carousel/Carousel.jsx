import { Carousel } from "@material-tailwind/react";
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
import c5 from '../../assets/c5.png'
 
export function CarouselDefault() {
  return (
    <Carousel  autoplay={true} autoplayDelay={3000} loop={true} style={{width:"100%",maxHeight:"90vh"}} id="home" >
      <img
        src={c1}
        alt="image 1"
        className=""
        style={{width:"100%",maxHeight:"90vh"}} 
      />
      <img
        src={c2}
        alt="image 2"
        className=""
        style={{width:"100%",maxHeight:"90vh"}} 
      />
      <img
        src={c3}
        alt="image 3"
        className=""
        style={{width:"100%",maxHeight:"90vh"}} 
      />

    <img
        src={c4}
        alt="image 4"
        className=""
        style={{width:"100%",maxHeight:"90vh"}} 
      />

    <img
        src={c5}
        alt="image 5"
        className=""
        style={{width:"100%",maxHeight:"90vh"}} 
      />
    </Carousel>
  );
}