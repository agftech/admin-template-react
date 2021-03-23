import Cards from './../components/inside/Cards';
import Forms from './../components/inside/Forms';
import Charts from './../components/inside/Charts';

const LoadingRoutes  = () => ([
    {
        path: "/cards",
        name: "Cards",
        template: Cards
    },
    {
        path: "/forms",
        name: "Forms",
        template: Forms
    },
        {
        path: "/charts",
        name: "Charts",
        template: Charts
    },    

]);

export default LoadingRoutes();