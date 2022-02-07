import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList, useIonViewWillEnter } from "@ionic/react";
import { useState } from "react"

interface ContainerProps { }

const News: React.FC<ContainerProps> = () => {

    const [data, setData] = useState<any[]>([]);


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
        <IonList>
            {data.map(item => {
                return (
                    <IonItem key={item.id}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>{item.createdAt}</IonCardSubtitle>
                                <IonCardTitle>{item.title}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {item.body}
                            </IonCardContent>
                        </IonCard>
                    </IonItem>
                )
            })}
        </IonList>
    );
};

export default News;