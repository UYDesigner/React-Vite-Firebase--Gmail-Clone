import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "./components/shared/NavBar";
// import { Silebar } from "./components/Silebar";
import Body from "./components/Body";
import Inbox from "./components/inbox";
import Mail from "./components/Mail";
import { SendMail } from "./components/SendMail";
import { Login } from "./components/Login";
import { useSelector } from "react-redux";
import store from "./Redux/Store";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      }
    ]

  }
])
 

function App() {

  const {user} = useSelector(store=>store.appSlice)
  console.log(user)
  return (
    <div>
      {
        user == null ?
          <>
            <Login />
          </>
          :
          <>
            <div className="bg-[#F5F7FB] h-screen w-screen">
              <NavBar />
              <RouterProvider router={router} />
              <div className="absolute w-[35%] bottom-0 right-20 z-10">

                <SendMail />
              </div>

            </div>
          </>
      }
    </div>


  )
}

export default App
