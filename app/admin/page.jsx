import AdminWelcome from "@components/AdminWelcome";
import Auth from "@components/Auth";
import Provider from "@components/Provider";
const AdminPage = () => {
  return (
    <Provider>
      <Auth>
      <AdminWelcome />
    </Auth>
    </Provider>
  )
}

export default AdminPage;