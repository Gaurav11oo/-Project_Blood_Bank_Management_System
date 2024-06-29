import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container-admin">
        <div className="container-admin">
          <h1>
            Welcome Admin <b className="text-success">{user?.name}</b>
          </h1>
          <h3>To Blood Bank App</h3>
          <hr />
          <>
            Human birth is the most valuable gift that life can provide us.
            However one might face an emergency situation at times including
            some serious accident which calls for immediate blood requirement.
            In such critical times, it is the blood bank which comes to rescue
            of those in need.
            <h4 className="mt-4">List of Blood Banks in Kanpur</h4>
            <p className="mt-6">
              Like any cities in the region, Kanpur too has some blood banks
              which can cater to any emergency requirement of a patient. While
              some of these operate on voluntary basis and depend upon blood
              donations from volunteers, others are quite active in organizing
              blood donation camps on certain days in the year.
            </p>
            <p className="mt-4">
              This helps these blood banks to collect some valuable blood units
              which can be used by the needy in case of any emergency like
              accident and certain surgeries which require a supply of blood
              units
            </p>
            <p className="mt-4">
              While the blood banks in Kanpur can provide blood on a voluntary
              basis, if one needs blood units beyond a prescribed limit, blood
              has to be donated in order to replenish the stock at the blood
              bank. Blood banks in Kanpur usually do not charge in cash for
              giving blood to the needy as this is considered a noble donation.
            </p>
            <h4 className="mt-4">
             # Below is the list of Blood Banks in Kanpur which can be contacted
              in case of any emergency.
            </h4>
            <h5 className="mt-4">
              {" "}
              <b>● Mayanjali Charitable Blood Bank</b>
            </h5>
            <p className="mt-3">
              Address: 14/113 Padam tower, Green Park Road, Civil Lines, stock
              exchange building, Kanpur, Uttar Pradesh 208001
            </p>
            <h5 className="mt-4">
              {" "}
              <b>● Mangala Authentic Charitable Blood Bank</b>
            </h5>
            <p className="mt-3">
              Address: 147 a, Safirpur-II, Ramadevi, Kanpur, Uttar Pradesh
              208007<p> Phone:097858 22279</p>
            </p>
            <h5 className="mt-4">
              {" "}
              <b>● IMA Charitable Blood Bank</b>
            </h5>
            <p className="mt-3">
              Address: Tempel of Service, 37/7, Mahatma Gandhi Rd, Parade,
              Kanpur, Uttar Pradesh 208001 <p> Phone: 088876 33960</p>
            </p>
            <h5 className="mt-4">
              {" "}
              <b>● Hallet Blood Bank</b>
            </h5>
            <p className="mt-3">
              Address: F8H6+6F5, Hallet, Kidwai Nagar Cir, Kanpur, Uttar Pradesh
              208011
            </p>
            <h5 className="mt-4">
              {" "}
              <b>● Mariampur Hospital And Blood Bank</b>
            </h5>
            <p className="mt-3">
              Address: Ranjeet Nagar, Shastri Nagar, Kanpur, Uttar Pradesh
              208005  <p> Phone: 0512 250 5903</p>
            </p>
            <h5 className="mt-4">
              {" "}
              <b>● Blood Bank UHM distt. Hospital Kanpur Nagar</b>
            </h5>
            <p className="mt-3">
              Address: F8FX+3G6, Patkapur, Kanpur, Uttar Pradesh 208001
            </p>
            <h5 className="mt-4">
              {" "}
              <b>● Pushpanjali charitable blood bank</b>
            </h5>
            <p className="mt-3">
              Address: 14/113 Padam tower, Green Park Road, Civil Lines, stock
              exchange building, Kanpur, Uttar Pradesh 208001
            </p>
            <h5 className="mt-4">
              {" "}
              <b>● Mayanjali Charitable Blood Bank</b>
            </h5>
            <p className="mt-3">
              Address: 14/113 Padam tower, Green Park Road, Civil Lines, stock
              exchange building, Kanpur, Uttar Pradesh 208001
            </p>
          </>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
