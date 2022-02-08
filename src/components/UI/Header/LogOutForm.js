import classes from './LogOutForm.module.css'
import Button from '../Button/Button'

const LoggOutForm = (props)=>{
return(
      <div className={classes.header}>
            <form onSubmit={props.onSubmit}>
            <p>Welcome dear User!</p>
            <Button type="submit" title='LogOut'/>
            </form>
      </div>
)
}

export default LoggOutForm