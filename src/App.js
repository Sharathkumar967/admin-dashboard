import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Home from "./Pages/Home/Home";
// import UserList from "./Pages/userList/UserList";
import UserDup from "./Pages/userList/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/newUser";
import ProductList from "./Pages/productList/productList";
import Product from "./Pages/product/product";
import NewProduct from "./Pages/newProduct/newProduct";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />

        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/users" element={<UserDup />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import Sidebar from "./components/Sidebar/Sidebar";
// import Topbar from "./components/Topbar/Topbar";
// import "./App.css";
// import Home from "./Pages/Home/Home";
// import { BrowserRouter, BrowserRouter as Routes, Route } from "react-router-dom";
// import UserList from "./Pages/userList/UserList";
// // import User from "./pages/user/User";
// // import NewUser from "./pages/newUser/NewUser";
// // import ProductList from "./pages/productList/ProductList";
// // import Product from "./pages/product/Product";
// // import NewProduct from "./pages/newProduct/NewProduct";

// function App() {
//   return (
//     <BrowserRouter>

//     <Routes>
//       <Topbar />
//       <div className="container">
//         <Sidebar />

//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/users">
//             <UserList />
//           </Route>
//           {/* <Route path="/user/:userId">
//             <User />
//           </Route>
//           <Route path="/newUser">
//             <NewUser />
//           </Route>
//           <Route path="/products">
//             <ProductList />
//           </Route>
//           <Route path="/product/:productId">
//             <Product />
//           </Route>
//           <Route path="/newproduct">
//             <NewProduct />
//           </Route> */}
//       </div>
//     </Routes>
//     </BrowserRouter>

//   );
// }

// export default App;
