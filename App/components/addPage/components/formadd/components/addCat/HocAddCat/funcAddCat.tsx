import { documentDirectory, readAsStringAsync, writeAsStringAsync } from "expo-file-system"
import AlertComp from "../../../../../../../ownerComp/alert/alertComp"
import { CatFuncProps , CatType } from "./interfaceAddCat"

let Path: string = documentDirectory + '/DataFolder/Category.txt'

export const GetAllCat = async ( { setAllCat }: CatFuncProps | any ): Promise<void> =>

  {

    // await writeAsStringAsync ( Path , JSON.stringify ( [] ) , { encoding: "utf8" } )
    // .then ( _ => alert ( "Done" ) )

    try {

      let rs: string = await readAsStringAsync (

        Path ,
        {
          encoding: "utf8"
        }

      )

      let parsed_cat: CatType [] = JSON.parse ( rs )

      await setAllCat ( parsed_cat ) 

    } catch ( error ) {

      AlertComp ()

    }

  }

export const AddNewCat = async ( props: CatFuncProps | any ): Promise<void> =>

  {
    
    try {

      let newCatProp: CatType = {

        Id: new Date ().getTime () ,
        Name: props.newCat

      }

      let allnewCat: CatType [] = [ ...props.allCat , newCatProp ]

      await props.setAllCat ( allnewCat )
      await editCatFile ( props , allnewCat )  

    } catch ( error ) {
      
      console.log ( error )

    }

  }

  export const RemvCat = async ( props: CatFuncProps | any ): Promise<void> =>

  {

    try {

      let allnewCat = props.allCat.filter ( ( ele: CatType ) => ele.Id !== props.category.Id )

      await props.setAllCat ( allnewCat )
      await editCatFile ( props , allnewCat )  

    } catch ( error ) {
      
      console.log ( error )

    }

  }



let editCatFile = async ( props: CatFuncProps | any , newArray: CatType [] ): Promise<void>  => 

  {

    await writeAsStringAsync ( 

      Path ,  
      JSON.stringify ( newArray ) ,
      {
        encoding: "utf8"
      }

    )
    .then ( async _ => await props.FirstShow () )

  }