import http from "../http-common";

class EmployeeService {
  getAllTimeInfo() {
    return http.get("/time/timeInfo");
  }

  getTimeByEmpId(id) {
    return http.get(`/time/timeInfo/${id}`);
  }

  createTimeInfo(data) {
    return http.post("/time/timeInfo", data);
  }

  updateTimeInfo(data) {
    return http.put(`/time/timeInfo`, data);
  }

  deleteTimeInfo(id) {
    return http.delete(`/time/timeInfo/${id}`);
  }
}

export default new EmployeeService();