export interface ResponseI{

    //Aquí exportaremos unos campos, estos son los que nos devuelve el API rest.
    status:string; //Nos devuelve ok si la consulta fue correcta o un error si fue incorrecta.
    result:any;//Aquí vienen todos los datos.

    // idPersona:string; //Aquí viene el ID (Lo utilizo para poder hacer el edit en el perfil de usuario).

}