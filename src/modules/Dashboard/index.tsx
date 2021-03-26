import { IModule } from '../../interfaces/module';
import reducer from './reducer';
import saga from './saga';
import Dashboard from './view';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
const DashboardModule: IModule ={
  id: 'dashboard',
  path: '/dashboard',
  routeName: 'dashboard',
  showLink: true,
  logo: <DashboardRoundedIcon />,
  name: 'dashboard',
  view: Dashboard,
  reduer: reducer,
  saga: saga,
};

export default DashboardModule;