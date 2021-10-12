import http from "../http-common";

class EmployeeService {
  getAllSalaryInfo() {
    return http.get("/salary/employee_salary");
  }

  getSalaryByEmpId(id) {
    return http.get(`/salary/employee_salary/${id}`);
  }

  createSalary(data) {
    return http.post("/salary/employee_salary/", data);
  }

  updateSalary(data) {
    return http.put(`/salary/employee_salary`, data);
  }

  deleteSalaryData(id) {
    return http.delete(`/salary/employee_salary/${id}`);
  }
}

export default new EmployeeService();