
import { redirect } from 'react-router-dom'

function Logout() {
  localStorage.removeItem('token')
 return redirect('/')
}

export default Logout
