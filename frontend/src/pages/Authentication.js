import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParam = new URL(request.url).searchParams;
  let mode = searchParam.get("mode") || "login";
  console.log(mode)
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };
if (!mode=="login" || !mode == "signup") {
    mode='login'
  }
console.log(mode,authData)
  const response = await fetch("http://localhost:8080/"+mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
console.log(response)
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "could not authenticate user" }, { status: 500 });
  }

const resData= await response.json();
const token= resData.token

localStorage.setItem('token',token)

  return redirect("/");
}
