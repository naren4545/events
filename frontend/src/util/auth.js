import { redirect } from "react-router-dom";

export default function GetTokenKey(){
const token=localStorage.getItem('token')
return token

}


export function tokenLoder(){

    return GetTokenKey()
}

export function checkAuth(){

const token=GetTokenKey();
if(!token){

    return redirect('/')
}
return null
}