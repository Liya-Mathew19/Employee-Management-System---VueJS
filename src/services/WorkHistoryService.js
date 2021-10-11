import http from "../http-common";

class EmployeeService {
  getAllWorkHistory() {
    return http.get("/work/workhistory");
  }

  getWorkHistoryByEmpId(id) {
    return http.get(`/work/workhistory/${id}`);
  }

  createWork(data) {
    return http.post("/work/workhistory", data);
  }

  updateWork(id, data) {
    return http.put(`/work/workhistory/${id}`, data);
  }

  deleteWork(id) {
    return http.delete(`/work/workhistory/${id}`);
  }
}

export default new EmployeeService();