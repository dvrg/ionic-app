import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonList, IonModal, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useState } from 'react';

const News: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [detail, setDetail] = useState<any>({});
  const [showModals, setShowModals] = useState(false);

  useIonViewWillEnter(async () => {
    await fetch('http://localhost:3000/news')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.data);
        setData(responseJson.data)
      })
      .catch(error => {
        console.log(error);
      });
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot='start'>
            <IonBackButton></IonBackButton>
          </IonButton>
          <IonTitle>Profile - 190101193</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {data.map(item => {
            return (
              <IonItem key={item.id} onClick={() => { setDetail(item); setShowModals(true) }}>
                <IonCard>
                  <IonCardContent>
                    <IonImg src='https://udb.ac.id/themes/udb/assets/images/cover-udb.jpg'></IonImg>
                  </IonCardContent>
                  <IonCardHeader>
                    <IonCardSubtitle>{item.createdAt}</IonCardSubtitle>
                    <IonCardTitle>{item.title}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonItem>
            );
          })}
        </IonList>
        <IonModal isOpen={showModals}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                {detail.title}
              </IonTitle>
              <IonButtons slot='end'>
                <IonButton onClick={() => setShowModals(false)}>Tutup</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent class="ion-padding">
            <h2>{detail.title}</h2>
            <p>{detail.body}</p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default News;
