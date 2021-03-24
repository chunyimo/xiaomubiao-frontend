import { IModule } from './../../interfaces/module';
import reducer from './reducer';
import saga from './saga';
import Dashboard from './view';
const DashboardModule: IModule ={
  id: 'dashboard',
  path: '/dashboard',
  routeName: 'dashboard',
  name: 'dashboard',
  view: Dashboard,
  reduer: reducer,
  saga: saga,
};

export default DashboardModule;