import AdminWelcome from "@components/AdminWelcome";
import Auth from "@components/Auth";
const AdminPage = () => {
  return (
    <Auth>
      <AdminWelcome />
    </Auth>
  )
}

export default AdminPage;