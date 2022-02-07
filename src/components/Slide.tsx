import { IonSlide, IonSlides, IonImg } from "@ionic/react";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  autoPlay: true
};

const items = [
  "https://www.sopingi.com/udb/slider1.jpg",
  "https://www.sopingi.com/udb/slider2.jpg",
  "https://www.sopingi.com/udb/slider3.jpg",
  "https://www.sopingi.com/udb/slider4.jpg",
  "https://www.sopingi.com/udb/slider5.jpg",
];

interface ContainerProps { }

const Slide: React.FC<ContainerProps> = () => {
  return (
    <IonSlides pager={true} options={slideOpts}>
      {items.map((img, i) => (
        <IonSlide key={i}>
          <IonImg src={img} />
        </IonSlide>
      ))}
    </IonSlides>
  );
};

export default Slide;
