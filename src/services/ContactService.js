import http from "../http-common";

class EmployeeService {
  getAllContactInfo() {
    return http.get("/contacts/contact_info");
  }

  getContactByEmpId(id) {
    return http.get(`/contacts/contact_info/${id}`);
  }

  createContact(data) {
    return http.post("/contacts/contact_info", data);
  }

  updateContact(data) {
    return http.put("/contacts/contact_info", data);
  }

  deleteContact(id) {
    return http.delete(`/contacts/contact_info/${id}`);
  }
}

export default new EmployeeService();