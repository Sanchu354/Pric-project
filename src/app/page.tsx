import './home.css'
import UserDetails from "../components/UserDetails";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-300 px-4 py-4 font-bold">
        Dashboard
      </div>
      <div>
        <UserDetails />
      </div>
    </div>
  );
}
