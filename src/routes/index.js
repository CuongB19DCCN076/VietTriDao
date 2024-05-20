import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export const routes = [
	{
		path: "/",
		page: Home,
		isShowHeader: true
	}, {
		path: "/login",
		page: Login,
		isShowHeader: true
	},
	// {
	//     path: "/user",
	//     page: User,
	//     isShowHeader: true,
	//     outlet: [
	//         {
	//             path: "ordersuccess",
	//             page: OrderSuccess
	//         },
	//         {
	//             path: "orderfail",
	//             page: OrderFail
	//         },
	//     ]
	// }
	{
		path: "/*",
		page: NotFound,
		isShowHeader: true
	},
]
