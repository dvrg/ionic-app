import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Menu from '../components/Menu';
import News from '../components/News';
import Slide from '../components/Slide';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>FIKOM UDB - 190101193</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">FIKOM UDB</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Slide />
        <Menu />
        <News />
      </IonContent>
    </IonPage>
  );
};

export default Home;
