<template>
  <div class="main-content">
	<div class="row ">
        <div class="col-lg-12 col-md-12">
            <div class="container mt-3" style="min-height: 485px; background-color:#fff">
                <button class="btn btn-primary mt-2" style="float:right" v-on:click="$router.go(-1)">
                    <span class="material-icons">arrow_back</span> 
                    <span class="p-3">Back</span>
                </button>
                <h3 class="pt-4 text-danger">EMPLOYEE PROFILE - {{employees.firstName}} {{employees.lastName}} ({{employees.personalIdNumber}})</h3>
                 <hr>
                 <div v-if="message" class="alert alert-danger mt-5">
                    {{message}}
                </div>
                <div class="card-content">
                    <div class="container">
                        <div class="main-body">
                            <div class="row">
                                <div class="col-md-5 mb-3">
                                    <div class="card">
                                        <div class="card-header bg-primary text-white">
                                            <h4 style="float:left">Basic Details</h4>
                                            <span class="material-icons" style="cursor:pointer;float:right;" v-on:click="deleteEmployee(employees.employeeIdNumber)">delete</span>
                                            <a v-bind:href="'/updateEmployee/'+employees.employeeIdNumber">
                                            <button type="button" class="btn mr-4 text-white" style="float:right;margin-top: -6px;">
                                                <span class="material-icons" style="cursor:pointer;">edit</span>
                                            </button></a>
                                        </div>
                                        <div class="card-body">
                                            <div v-if="empError">
                                                <button class="btn btn-success">Add Basic Details</button>
                                            </div>
                                            <ul class="list-group" v-else>
                                                <li class="list-group-item d-flex justify-content-between">
                                                <h6 class="mb-0">Personal ID</h6>
                                                <span class="text-secondary">{{employees.personalIdNumber}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                <h6 class="mb-0">Name</h6>
                                                <span class="text-secondary">{{employees.firstName}} {{employees.middleName}} {{employees.lastName}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                <h6 class="mb-0">DOB</h6>
                                                <span class="text-secondary">{{employees.dayOfBirth}} - {{employees.monthOfBirth}} - {{employees.yearOfBirth}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                <h6 class="mb-0">Gender</h6>
                                                <span class="text-secondary">{{employees.gender}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                <h6 class="mb-0">Marital Status</h6>
                                                <span class="text-secondary">{{employees.maritalStatus}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Mobile</h6>
                                                    <span class="text-secondary">{{employees.cellularPhone}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                <h6 class="mb-0">Home</h6>
                                                <span class="text-secondary">{{employees.homePhone}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Address</h6>
                                                    <span class="text-secondary">{{employees.address}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Qualification</h6>
                                                    <span class="text-secondary">{{employees.qualification}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Current Experience</h6>
                                                    <span class="text-secondary">{{employees.currentExperience}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Employee Type</h6>
                                                    <span class="text-secondary">{{employees.typeOfEmployee}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Start Date</h6>
                                                    <span class="text-secondary">{{employees.startDateDay}} - {{employees.startDateMonth}} - {{employees.startDateYear}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">End Date</h6>
                                                    <span class="text-secondary">{{employees.endDateDay}} - {{employees.endDateMonth}} - {{employees.endDateYear}}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card mt-3">
                                        <div class="card-header bg-primary text-white">
                                            <h4 style="float:left">Contact Information</h4>
                                            <span class="material-icons" style="cursor:pointer;float:right" v-on:click="deleteContact(contact.employeeIdNumber)">delete</span>
                                            <button type="button" class="btn mr-4 text-white" style="float:right;margin-top: -6px;" data-toggle="modal" data-target="#myModal">
                                                <span class="material-icons" style="cursor:pointer;">edit</span>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                             <div v-if="contactError">
                                                <button class="btn btn-success">Add Contact</button>
                                            </div>
                                            <ul class="list-group" v-else>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Contat Person Name</h6>
                                                    <span class="text-secondary">{{contact.cfirstName}} {{contact.cMiddleName}} {{contact.cLastName}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Mobile</h6>
                                                    <span class="text-secondary">{{contact.ccellularPhone}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Home Phone</h6>
                                                    <span class="text-secondary">{{contact.chomePhone}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Address</h6>
                                                    <span class="text-secondary">{{contact.caddress}}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card mt-3">
                                        <div class="card-header bg-primary text-white">
                                            <h4 style="float:left">Time Information</h4>
                                            <span class="material-icons" style="cursor:pointer;float:right" v-on:click="deleteTime(time.employeeIdNumber)">delete</span>
                                            <button type="button" class="btn mr-4 text-white" style="float:right;margin-top: -6px;" data-toggle="modal" data-target="#myModal">
                                                <span class="material-icons" style="cursor:pointer;">edit</span>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                             <div v-if="timeError">
                                                <button class="btn btn-success">Add Time Information</button>
                                            </div>
                                            <ul class="list-group" v-else>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Worked Hours</h6>
                                                    <span class="text-secondary">{{time.workred_Hours}} hrs</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Off Hours</h6>
                                                    <span class="text-secondary">{{time.off_Hours}} hrs</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Days Off</h6>
                                                    <span class="text-secondary">{{time.days_Off}} days</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Overtime</h6>
                                                    <span class="text-secondary">{{time.over_Time}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Extra Days</h6>
                                                    <span class="text-secondary">{{time.extra_Days}} days</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Work From Date</h6>
                                                    <span class="text-secondary">{{time.w_From_Date_Day}} - {{time.w_From_Date_Month}} - {{time.w_From_Date_Year}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Work To Date</h6>
                                                    <span class="text-secondary">{{time.w_To_Date_Day}} - {{time.w_To_Date_Month}} - {{time.w_To_Date_Year}}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="card mb-3">
                                        <div class="card-header bg-primary text-white">
                                            <h4 style="float:left">Work History</h4>
                                            <span class="material-icons" style="cursor:pointer;float:right" v-on:click="deleteWork(work.employeeIdNumber)">delete</span>
                                             <a v-bind:href="'/updateWorkHistory/'+work.employeeIdNumber">
                                            <button v-if="!workError" type="button" class="btn mr-4 text-white" style="float:right;margin-top: -6px;" data-toggle="modal" data-target="#myModal">
                                                <span class="material-icons" style="cursor:pointer;">edit</span>
                                            </button>
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <div v-if="workError">
                                               <a v-bind:href="'/addWorkHistory/'+employees.employeeIdNumber">
                                                <button class="btn btn-success">Add Work History</button>
                                               </a>
                                            </div>
                                            <ul class="list-group" v-else>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Company Name</h6>
                                                    <span class="text-secondary">{{work.companyName}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Employer Name</h6>
                                                    <span class="text-secondary">{{work.employerName}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Employer Address</h6>
                                                    <span class="text-secondary">{{work.employerAddress}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Mobile</h6>
                                                    <span class="text-secondary">{{work.employerCellularPhone}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Office Phone</h6>
                                                    <span class="text-secondary">{{work.employerOfficePhone}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Previous Qualification</h6>
                                                    <span class="text-secondary">{{work.previousQualification}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Previous Experience</h6>
                                                    <span class="text-secondary">{{work.previousExperience}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">Start Date</h6>
                                                    <span class="text-secondary">{{work.pstartDateDay}} - {{work.pstartDateMonth}} - {{work.pstartDateYear}}</span>
                                                </li>
                                                <li class="list-group-item d-flex justify-content-between">
                                                    <h6 class="mb-0">End Date</h6>
                                                    <span class="text-secondary">{{work.pendDateDay}} - {{work.pendDateMonth}} - {{work.pendDateYear}}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-3">
                                                <div class="card">
                                                    <div class="card-header bg-primary text-white">
                                                        <h4 style="float:left">Salary Information</h4>
                                                        <span class="material-icons" style="cursor:pointer;float:right" v-on:click="deleteSalary(salary.employeeIdNumber)">delete</span>
                                                        <button type="button" class="btn mr-4 text-white" style="float:right;margin-top: -6px;" data-toggle="modal" data-target="#myModal">
                                                            <span class="material-icons" style="cursor:pointer;">edit</span>
                                                        </button>
                                                    </div>
                                                    <div class="card-body">
                                                         <div v-if="salError">
                                                            <button class="btn btn-success">Add Salary Information</button>
                                                        </div>
                                                        <ul class="list-group" v-else>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Monthly Salary</h6>
                                                                <span class="text-secondary">{{salary.monthlySalary}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Monthly Money Currency</h6>
                                                                <span class="text-white badge badge-danger">{{salary.monthlyMoneyCurrency}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Monthly Taxes</h6>
                                                                <span class="text-secondary">{{salary.monthlyTaxes}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Monthly Deductions</h6>
                                                                <span class="text-secondary">{{salary.monthlyDeductions}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Monthly Insurances</h6>
                                                                <span class="text-secondary">{{salary.monthlyInsurances}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Monthly From Date</h6>
                                                                <span class="text-secondary">{{salary.msFromDateDay}} - {{salary.msFromDateMonth}} - {{salary.msFromDateYear}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Monthly To Date</h6>
                                                                <span class="text-secondary">{{salary.msToDateDay}} - {{salary.msToDateMonth}} - {{salary.msToDateYear}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Weekly Salary</h6>
                                                                <span class="text-secondary">{{salary.weeklySalary}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Weekly Money Currency</h6>
                                                                <span class="text-white badge badge-danger">{{salary.weeklyMoneyCurrency}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Weekly Taxes</h6>
                                                                    <span class="text-secondary">{{salary.weeklyTaxes}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Weekly Deductions</h6>
                                                                <span class="text-secondary">{{salary.weeklyDeduction}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Weekly Insurances</h6>
                                                                <span class="text-secondary">{{salary.weeklyInsurances}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Weekly From Date</h6>
                                                                <span class="text-secondary">{{salary.wsFromDateDay}} - {{salary.wsFromDateMonth}} - {{salary.wsfromDateYear}}</span>
                                                            </li>
                                                            <li class="list-group-item d-flex justify-content-between">
                                                                <h6 class="mb-0">Weekly To Date</h6>
                                                                <span class="text-secondary">{{salary.wsToDateDay}} - {{salary.wsToDateMonth}} - {{salary.wsToDateYear}}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import EmployeeService from "@/services/EmployeeService";
import ContactService from "@/services/ContactService";
import TimeInfoService from "@/services/TimeInfoService";
import SalaryInfoService from "@/services/SalaryInfoService";
import WorkHistoryService from "@/services/WorkHistoryService";

export default {
  name: "employees-profile",
  data() {
    return {
        id: '',
        employees:[],
        work:[],
        time:[],
        salary:[],
        contact:[],
        message:"",
        workError:"",salError:"",timeError:"",contactError:"",empError:"",
    };
  },
  methods: { 
    getEmployeeById(id){
            EmployeeService.getEmployeeById(id).then(response =>{
                this.employees = response.data;
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
                this.empError = e;
            });
        },
    getSalaryById(id){
            SalaryInfoService.getSalaryByEmpId(id).then(response =>{
                this.salary = response.data;
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
                this.salError = e;
            });
        },
    getWorkHistoryById(id){
            WorkHistoryService.getWorkHistoryByEmpId(id).then(response =>{
                this.work = response.data;
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
                this.workError = e;
            });
        },
    getTimeInfoById(id){
            TimeInfoService.getTimeByEmpId(id).then(response =>{
                this.time = response.data;
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
                this.timeError = e;
            });
        },
    getContactInfoById(id){
            ContactService.getContactByEmpId(id).then(response =>{
                this.contact = response.data;
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
                this.contactError = e;
            });
        },
        deleteEmployee(id) {
            if(confirm("Are you sure? Do you want to delete this whole employee details?")){
            EmployeeService.deleteEmployee(id).then(response => {
                console.log(response.data)
                this.message = "Deleted the employee successfully !!";
                this.deleteContact(id);
                this.deleteSalary(id);
                this.deleteTime(id);
                this.deleteWork(id);
                this.$router.push("/employees"); 
            });
            }
        },
    deleteContact(id) {
        if(confirm("Are you sure? Do you want to delete this contact?")){
        ContactService.deleteContact(id).then(response => {
        console.log(response.data)
        this.message = "Deleted the employee contact details successfully !!";
        this.getContactInfoById();
        window.scrollTo(0,0);
        });
        }
    },
    deleteSalary(id) {
        if(confirm("Are you sure? Do you want to delete this salary?")){
        ContactService.deleteSalary(id).then(response => {
        console.log(response.data)
        this.message = "Deleted the employee salary details successfully !!";
        this.getSalaryById();
        window.scrollTo(0,0);
        });
        }
    },
    deleteTime(id) {
        if(confirm("Are you sure? Do you want to delete this time?")){
        TimeInfoService.deleteTimeInfo(id).then(response => {
        console.log(response.data)
        this.message = "Deleted the employee time details successfully !!";
        this.getTimeInfoById();
        window.scrollTo(0,0);
        });
        }
    },
    deleteWork(id) {
        if(confirm("Are you sure? Do you want to delete this work history?")){
        WorkHistoryService.deleteWork(id).then(response => {
        console.log(response.data)
        this.message = "Deleted the employee work history successfully !!";
        this.getWorkHistoryById();
        window.scrollTo(0,0);
        });
        }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getEmployeeById(this.id);
    this.getContactInfoById(this.id);
    this.getSalaryById(this.id);
    this.getTimeInfoById(this.id);
    this.getWorkHistoryById(this.id);
  }
};
</script>
