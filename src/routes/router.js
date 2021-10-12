import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/employees",
      name: "employees",
      component: () => import("@/components/EmployeeBasic/EmployeeList")
    },
    {
      path: "/employees/:id",
      name: "employee-details",
      component: () => import("@/components/EmployeeBasic/EmployeeProfile")
    },
    {
      path: "/addEmployee",
      name: "employee-add",
      component: () => import("@/components/EmployeeBasic/EmployeeAdd")
    },
    {
        path: "/updateEmployee/:id",
        name: "employee-update",
        component: () => import("@/components/EmployeeBasic/EmployeeUpdate")
    },
    {
      path: "/addWorkHistory/:id",
      name: "addWorkHistory",
      component: () => import("@/components/WorkHistory/WorkingHistoryAdd"),
    },
    {
      path: "/updateWorkHistory/:id",
      name: "updateWorkHistory",
      component: () => import("@/components/WorkHistory/WorkingHistoryUpdate"),
    },
  ]
});
