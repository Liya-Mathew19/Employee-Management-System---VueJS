<template>
  <div class="main-content">
	<div class="row ">
        <div class="col-lg-12 col-md-12">
            <div class="card" style="min-height: 485px">
                <div class="card-header card-header-text">
                    <h4 class="card-title">EMPLOYEE PROFILE</h4>
                    </div>
                    <hr>
                    <div class="card-content">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card">
                                <img src="" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">Basic Information</h5>
                                    <p class="card-text">personalIdNumber : {{employees.personalIdNumber}}</p>
                                    <p class="card-text">Name : {{employees.firstName}} {{employees.middleName}} {{employees.lastName}}</p>
                                    <p class="card-text">DOB : {{employees.dayOfBirth}}/{{employees.monthOfBirth}}/{{employees.yearOfBirth}}</p>
                                    <p class="card-text">Mobile : {{employees.cellularPhone}}</p>
                                    <p class="card-text">Home Phone : {{employees.homePhone}}</p>
                                    <p class="card-text">Address : {{employees.address}},<br>{{employees.city}},<br>{{employees.postalCode}}</p>
                                    <p class="card-text">Gender : {{employees.gender}}</p>
                                    <p class="card-text">Marital Status : {{employees.maritalStatus}}</p>
                                    <p class="card-text">Qualification : {{employees.qualification}}</p>
                                    <p class="card-text">Current Experience : {{employees.currentExperience}}</p>
                                    <p class="card-text">Employee Type : {{employees.typeOfEmployee}}</p>
                                    <p class="card-text">Start Date : {{employees.startDateDay}}/{{employees.startDateMonth}}/{{employees.startDateYear}}</p>
                                    <p class="card-text">End Date : {{employees.endDateDay}}/{{employees.endDateMonth}}/{{employees.endDateYear}}</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                <img src="" class="card-img-top" alt="">
                                <div class="card-body" v-if="employees.workHistory.length > 0">
                                    <h5 class="card-title">Work History</h5>
                                    <p class="card-text">Company Name : {{employees.workHistory[0].companyName}}</p>
                                    <p class="card-text">Employer Name : {{employees.workHistory[0].employerName}}</p>
                                    <p class="card-text">Address : {{employees.workHistory[0].employerAddress}}</p>
                                    <p class="card-text">Mobile : {{employees.workHistory[0].employerCellularPhone}}</p>
                                    <p class="card-text">Home Phone : {{employees.workHistory[0].employerOfficePhone}}</p>
                                    <p class="card-text">Previous Qualification : {{employees.workHistory[0].previousQualification}}</p>
                                    <p class="card-text">Previous Experience : {{employees.workHistory[0].previousExperience}}</p>
                                    <p class="card-text">Start Date : {{employees.workHistory[0].pstartDateDay}}/{{employees.workHistory[0].pstartDateMonth}}/{{employees.workHistory[0].pstartDateYear}}</p>
                                    <p class="card-text">End Date : {{employees.workHistory[0].pendDateDay}}/{{employees.workHistory[0].pendDateMonth}}/{{employees.workHistory[0].pendDateYear}}</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                <img src="" class="card-img-top" alt="">
                                <div class="card-body" v-if="employees.salary.length > 0">
                                    <h5 class="card-title">Salary Information</h5>
                                    <p class="card-text">Monthly Salary : {{employees.salary[0].monthlySalary}}</p>
                                    <p class="card-text">Monthly Money Currency : {{employees.salary[0].monthlyMoneyCurrency}}</p>
                                    <p class="card-text">Monthly Taxes : {{employees.salary[0].monthlyTaxes}}</p>
                                    <p class="card-text">Monthly Deductions : {{employees.salary[0].monthlyDeductions}}</p>
                                    <p class="card-text">Monthly Insurances : {{employees.salary[0].monthlyInsurances}}</p>
                                    <p class="card-text">Monthly From Date : {{employees.salary[0].msFromDateDay}}/{{employees.salary[0].msFromDateMonth}}/{{employees.salary[0].msFromDateYear}}</p>
                                    <p class="card-text">Monthly To Date : {{employees.salary[0].msToDateDay}}/{{employees.salary[0].monthOfBirth}}/{{employees.salary[0].msToDateYear}}</p>
                                     <p class="card-text">Weekly Salary : {{employees.salary[0].weeklySalary}}</p>
                                    <p class="card-text">Weekly Money Currency : {{employees.salary[0].weeklyMoneyCurrency}}</p>
                                    <p class="card-text">Weekly Taxes : {{employees.salary[0].weeklyTaxes}}</p>
                                    <p class="card-text">Weekly Deductions : {{employees.salary[0].weeklyDeduction}}</p>
                                    <p class="card-text">Weekly Insurances : {{employees.salary[0].weeklyInsurances}}</p>
                                    <p class="card-text">Weekly From Date : {{employees.salary[0].wsFromDateDay}}/{{employees.salary[0].wsFromdateMonth}}/{{employees.salary[0].wsFromDateYear}}</p>
                                    <p class="card-text">Weekly To Date : {{employees.salary[0].wsToDateDay}}/{{employees.salary[0].wsToDateMonth}}/{{employees.salary[0].wsToDateYear}}</p>
                                    
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                <img src="" class="card-img-top" alt="">
                                <div class="card-body" v-if="employees.time.length > 0">
                                    <h5 class="card-title">Time Information</h5>
                                    <p class="card-text">Worked Hours : {{employees.time[0].workred_Hours}}</p>
                                    <p class="card-text">Off Hours : {{employees.time[0].off_Hours}}</p>
                                    <p class="card-text">Days Off : {{employees.time[0].days_Off}}</p>
                                    <p class="card-text">Overtime : {{employees.time[0].over_Time}}</p>
                                    <p class="card-text">Extra Days : {{employees.time[0].extra_Days}}</p>
                                     <p class="card-text">Work From Date : {{employees.time[0].w_From_Date_Day}}/{{employees.time[0].w_From_Date_Month}}/{{employees.time[0].w_From_Date_Year}}</p>
                                    <p class="card-text">Work To Date : {{employees.time[0].w_To_Date_Day}}/{{employees.time[0].w_To_Date_Month}}/{{employees.time[0].w_To_Date_Year}}</p>
                                </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                <img src="" class="card-img-top" alt="">
                                <div class="card-body" v-if="employees.contacts.length > 0">
                                    <h5 class="card-title">Contact Information</h5>
                                    <p class="card-text">Name : {{employees.contacts[0].cFirstName}} {{employees.contacts[0].cMiddleName}} {{employees.contacts[0].cLastName}}</p>
                                    <p class="card-text">Mobile : {{employees.contacts[0].cCellularPhone}}</p>
                                    <p class="card-text">Home Phone : {{employees.contacts[0].cHomePhone}}</p>
                                    <p class="card-text">City : {{employees.contacts[0].cCity}}</p>
                                    <p class="card-text">Address : {{employees.contacts[0].cAddress}}</p>
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

export default {
  name: "employees-add",
  data() {
    return {
        id: '',
        employees:[]
    };
  },
  methods: {        
    getEmployeeById(id){
            EmployeeService.getEmployeeById(id).then(response =>{
                this.employees = response.data;
                console.log(response.data)
            });
        },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getEmployeeById(this.id);
  }
};
</script>
