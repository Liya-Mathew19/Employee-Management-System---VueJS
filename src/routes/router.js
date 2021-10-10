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
      name: "addEmployee",
      component: () => import("@/components/EmployeeBasic/EmployeeAdd")
    }
  ]
});
