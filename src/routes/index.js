import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                Home
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>

        </Switch>
    )
}
