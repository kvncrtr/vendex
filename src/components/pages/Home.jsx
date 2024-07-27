import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeById } from "../../store/employee";

const Home = () => {
   const dispatch = useDispatch();
   const employeeId = useSelector(state => state.auth.current_employee.employee_id);
   const current_employee = useSelector(state => state.auth.current_employee);

   useEffect(() => {
      if (employeeId) { dispatch(fetchEmployeeById(employeeId)) }
   }, [])

   return (
      <div>
            <h1>HOME</h1>
      </div>
   );
};

export default Home;