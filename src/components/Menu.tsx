import { IonGrid, IonRow, IonCol, IonButton, IonImg, IonText } from "@ionic/react";

import "./Menu.css"

interface ContainerProps { }

const Menu: React.FC<ContainerProps> = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonButton routerLink="/profile" fill="outline" className="menu">
            <div className="labelMenu">
              <IonImg src="assets/icon/icon-tentang.png" className="iconMenu" />
              <IonText>Profile</IonText>
            </div>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton fill="outline" className="menu">
            <div className="labelMenu">
              <IonImg src="assets/icon/icon-info.png" className="iconMenu" />
              <IonText>Info</IonText>
            </div>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton routerLink="/news" fill="outline" className="menu">
            <div className="labelMenu">
              <IonImg src="assets/icon/icon-berita.png" className="iconMenu" />
              <IonText>Berita</IonText>
            </div>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton fill="outline" className="menu">
            <div className="labelMenu">
              <IonImg src="assets/icon/icon-jadwal.png" className="iconMenu" />
              <IonText>Jadwal</IonText>
            </div>
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton fill="outline" className="menu">
            <div className="labelMenu">
              <IonImg src="assets/icon/icon-video.png" className="iconMenu" />
              <IonText>Video</IonText>
            </div>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton fill="outline" className="menu">
            <div className="labelMenu">
              <IonImg src="assets/icon/icon-tiket.png" className="iconMenu" />
              <IonText>Tiket</IonText>
            </div>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton fill="outline" className="menu">
            <div className="labelMenu">
              <IonImg src="assets/icon/icon-peta.png" className="iconMenu" />
              <IonText>Peta</IonText>
            </div>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton fill="outline" className="menu">
            <div className="labelMenu">
              <IonImg src="assets/icon/icon-web.png" className="iconMenu" />
              <IonText>Website</IonText>
            </div>
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Menu;
