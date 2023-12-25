
import { Form,Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
const [searchParam] =useSearchParams();
const isLogin=searchParam.get('mode')==='login'
const data=useActionData();
const navagation=useNavigation();
const isSubmitting=navagation.state==='submitting'
console.log(isSubmitting)

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>

        {

          data && data.errors && <ul>
            {Object.values(data.errors).map(er=><li key={er}>{er}</li>)}
          </ul>
        }


        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin? "signup":"login"}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting?'Submiting....':'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
