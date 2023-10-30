import React from "react";
import { Alert } from "react-native";

const AlertComp = async (): Promise < void > => 

  Alert.alert (

    "Error" ,
    "Une erreur a ete trouvee" ,
    [

      {

        text: "Cancel" ,
        onPress: () => console.log ( "Canceled" ) ,
        style: "cancel"
      
      } ,

      {

        text: "Ok" ,
        onPress: () => console.log ( "ok" ) ,
        style: "default"

      }

    ]

  )

export default AlertComp