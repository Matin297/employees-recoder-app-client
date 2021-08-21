import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ROUTES from 'configs/routes';
import MainLayout from 'layouts/index';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {
                    ROUTES.map(({ component: Component, layout, ...route }) => (
                        <Route 
                            key={route.path}
                            {...route} 
                            render={props => {
                                if (layout === "DASHBOARD")
                                    return (
                                        <MainLayout {...route}>
                                            <Component {...props} />
                                        </MainLayout>
                                    )

                                return <Component {...props} />
                            }} 
                        />
                    ))
                }
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
