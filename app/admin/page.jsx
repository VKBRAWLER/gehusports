import AdminWelcome from "@components/AdminWelcome";
import Auth from "@pages/Auth";
const AdminPage = () => {
  return (
    <Auth>
      <AdminWelcome />
    </Auth>
  )
}

export default AdminPage;