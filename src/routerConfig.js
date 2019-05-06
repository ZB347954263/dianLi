// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import Home from './pages/Home';
import Guests from './pages/Guests';
import Partner from './pages/Partner';
import Product from './pages/Product';
import ProductInfo from './pages/ProductInfo';

const routerConfig = [
  {
    path: '/guests',
    component: Guests,
  },
  {
    path: '/product',
    component: Product,
  },
   {
    path: '/productInfo',
    component: ProductInfo,
  },
  {
    path: '/partner',
    component: Partner,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
