import { IonBackButton, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Profile: React.FC = () => {
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
        <h2>Catur Harum Ambarwati</h2>
        <small>NIM 190101193</small>
        <p>Tugas mata kuliah pemrogramman perangkat bergerak</p>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
