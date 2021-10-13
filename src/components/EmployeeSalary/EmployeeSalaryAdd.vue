<template>
  <div class="main-content">
	<div class="row ">
        <div class="col-lg-12 col-md-12">
            <div class="card" style="min-height: 485px">
                <div class="card-header card-header-text">
                    <button class="btn btn-primary" style="float:right" v-on:click="$router.go(-1)">
                        <span class="material-icons">
                            arrow_back
                        </span> 
                        <span class="p-3">Back</span>
                    </button>
                    <h4 class="card-title">ADD EMPLOYEE SALARY</h4>
                    </div>
                    <hr>
                    <div class="card-content">
                        <section class="h-100 h-custom gradient-custom-2">
                            <div class="container py-2 h-100">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    <div class="col-12">
                                        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                                            <div class="card-body p-0">
                                                <div class="row g-0">
                                                    <div class="col-lg-6">
                                                        <div class="p-5">
                                                            <h3 class="fw-normal mb-5" style="color: #4835d4;">SALARY DETAILS</h3>
                                                            <div class="mb-4 pb-2">
                                                                <div class="form-outline form-white">
                                                                    <label class="form-label">Employee ID</label>
                                                                    <input type="text" disabled="disabled == 1" required v-model="this.$route.params.id" class="form-control form-control" />
                                                                </div> 
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Monthly Salary</label>
                                                                <input type="text" required v-model="employees.monthlySalary" placeholder="Monthly Salary" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Monthly Money Currency</label>
                                                                <input type="text" required v-model="employees.monthlyMoneyCurrency" placeholder="Monthly Money Currency" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Monthly Taxes</label>
                                                                <input type="text" required v-model="employees.monthlyTaxes" placeholder="Monthly Taxes" class="form-control form-control" />
                                                            </div>     
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Monthly Deductions</label>
                                                                <input type="text" required v-model="employees.monthlyDeductions" placeholder="Monthly Deductions" class="form-control form-control" />
                                                            </div>     
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Monthly Insurances</label>
                                                                <input type="text" required v-model="employees.monthlyInsurances" placeholder="Monthly Insurances" class="form-control form-control" />
                                                            </div>      

                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Weekly Salary</label>
                                                                <input type="text" required v-model="employees.weeklySalary" placeholder="Weekly Salary" class="form-control form-control" />
                                                            </div> 

                                                             <div class="mb-4 pb-2">
                                                                <label class="form-label">Weekly Money Currency</label>
                                                                <input type="text" required v-model="employees.weeklyMoneyCurrency" placeholder="Weekly Money Currency" class="form-control form-control" />
                                                            </div>         

                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Weekly Taxes</label>
                                                                <input type="text" required v-model="employees.weeklyTaxes" placeholder="Weekly Taxes" class="form-control form-control" />
                                                            </div>                     

                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Weekly Deductions</label>
                                                                <input type="text" required v-model="employees.weeklyDeductions" placeholder="Weekly Deductions" class="form-control form-control" />
                                                            </div>    

                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Weekly Insurances</label>
                                                                <input type="text" required v-model="employees.weeklyInsurances" placeholder="Weekly Insurances" class="form-control form-control" />
                                                            </div>                                          
                                                            
                                                        </div> 
                                                    </div>
                                                    <div class="col-lg-6 bg-indigo text-white">
                                                        <div class="p-5">
                                                            
                                                            <div class="row">
                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label">Ms From Date Day</label>
                                                                        <select class="form-control form-control" required v-model="employees.msFromDateDay">
                                                                            <option value=null>--Select--</option>
                                                                            <option value="1">1</option><option value="2">2</option>
                                                                            <option value="3">3</option><option value="4">4</option>
                                                                            <option value="5">5</option><option value="6">6</option>
                                                                            <option value="7">7</option><option value="8">8</option>
                                                                            <option value="9">9</option><option value="10">10</option>
                                                                            <option value="11">11</option><option value="12">12</option>
                                                                            <option value="13">13</option><option value="14">14</option>
                                                                            <option value="15">15</option><option value="16">16</option>
                                                                            <option value="17">17</option><option value="18">18</option>
                                                                            <option value="19">19</option><option value="20">20</option>
                                                                            <option value="21">21</option><option value="22">22</option>
                                                                            <option value="23">23</option><option value="24">24</option>
                                                                            <option value="25">25</option><option value="26">26</option>
                                                                            <option value="27">27</option><option value="28">28</option>
                                                                            <option value="29">29</option><option value="30">30</option>
                                                                            <option value="31">31</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label" for="form3Examplev3">Ms From Date Month</label>
                                                                        <select class="form-control form-control" required v-model="employees.msFromDateMonth">
                                                                            <option value=null>--Select--</option>
                                                                            <option value="1">January</option><option value="2">February</option>
                                                                            <option value="3">March</option><option value="4">April</option>
                                                                            <option value="5">May</option><option value="6">June</option>
                                                                            <option value="7">July</option><option value="8">August</option>
                                                                            <option value="9">September</option><option value="10">October</option>
                                                                            <option value="11">November</option><option value="12">December</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label" for="form3Examplev3">Ms From Date Year</label>
                                                                        <input type="text" id="form3Examplev4" required v-model="employees.msFromDateYear" placeholder="Date Year" class="form-control form-control" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label">Ms To Date Day</label>
                                                                        <select class="form-control form-control" v-model="employees.msToDateDay">
                                                                            <option value=null>--Select--</option>
                                                                            <option value="1">1</option><option value="2">2</option>
                                                                            <option value="3">3</option><option value="4">4</option>
                                                                            <option value="5">5</option><option value="6">6</option>
                                                                            <option value="7">7</option><option value="8">8</option>
                                                                            <option value="9">9</option><option value="10">10</option>
                                                                            <option value="11">11</option><option value="12">12</option>
                                                                            <option value="13">13</option><option value="14">14</option>
                                                                            <option value="15">15</option><option value="16">16</option>
                                                                            <option value="17">17</option><option value="18">18</option>
                                                                            <option value="19">19</option><option value="20">20</option>
                                                                            <option value="21">21</option><option value="22">22</option>
                                                                            <option value="23">23</option><option value="24">24</option>
                                                                            <option value="25">25</option><option value="26">26</option>
                                                                            <option value="27">27</option><option value="28">28</option>
                                                                            <option value="29">29</option><option value="30">30</option>
                                                                            <option value="31">31</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label" for="form3Examplev3">Ms To Date Month</label>
                                                                        <select class="form-control form-control" v-model="employees.msToDateMonth">
                                                                            <option value=null>--Select--</option>
                                                                            <option value="1">January</option><option value="2">February</option>
                                                                            <option value="3">March</option><option value="4">April</option>
                                                                            <option value="5">May</option><option value="6">June</option>
                                                                            <option value="7">July</option><option value="8">August</option>
                                                                            <option value="9">September</option><option value="10">October</option>
                                                                            <option value="11">November</option><option value="12">December</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label" for="form3Examplev3">Ms to Date Year</label>
                                                                        <input type="text" id="form3Examplev4" v-model="employees.msToDateYear" placeholder="Date Year" class="form-control form-control" />
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label">Ws From Date Day</label>
                                                                        <select class="form-control form-control" required v-model="employees.wsFromDateDay">
                                                                            <option value=null>--Select--</option>
                                                                            <option value="1">1</option><option value="2">2</option>
                                                                            <option value="3">3</option><option value="4">4</option>
                                                                            <option value="5">5</option><option value="6">6</option>
                                                                            <option value="7">7</option><option value="8">8</option>
                                                                            <option value="9">9</option><option value="10">10</option>
                                                                            <option value="11">11</option><option value="12">12</option>
                                                                            <option value="13">13</option><option value="14">14</option>
                                                                            <option value="15">15</option><option value="16">16</option>
                                                                            <option value="17">17</option><option value="18">18</option>
                                                                            <option value="19">19</option><option value="20">20</option>
                                                                            <option value="21">21</option><option value="22">22</option>
                                                                            <option value="23">23</option><option value="24">24</option>
                                                                            <option value="25">25</option><option value="26">26</option>
                                                                            <option value="27">27</option><option value="28">28</option>
                                                                            <option value="29">29</option><option value="30">30</option>
                                                                            <option value="31">31</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label" for="form3Examplev3">Ws From Date Month</label>
                                                                        <select class="form-control form-control" required v-model="employees.wsFromDateMonth">
                                                                            <option value=null>--Select--</option>
                                                                            <option value="1">January</option><option value="2">February</option>
                                                                            <option value="3">March</option><option value="4">April</option>
                                                                            <option value="5">May</option><option value="6">June</option>
                                                                            <option value="7">July</option><option value="8">August</option>
                                                                            <option value="9">September</option><option value="10">October</option>
                                                                            <option value="11">November</option><option value="12">December</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label" for="form3Examplev3">Ws From Date Year</label>
                                                                        <input type="text" id="form3Examplev4" required v-model="employees.wsfromDateYear" placeholder="Date Year" class="form-control form-control" />
                                                                    </div>
                                                                </div>

                                                                <div class="row">
                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label">Ws To Date Day</label>
                                                                        <select class="form-control form-control" v-model="employees.wsToDateDay">
                                                                            <option value=null>--Select--</option>
                                                                            <option value="1">1</option><option value="2">2</option>
                                                                            <option value="3">3</option><option value="4">4</option>
                                                                            <option value="5">5</option><option value="6">6</option>
                                                                            <option value="7">7</option><option value="8">8</option>
                                                                            <option value="9">9</option><option value="10">10</option>
                                                                            <option value="11">11</option><option value="12">12</option>
                                                                            <option value="13">13</option><option value="14">14</option>
                                                                            <option value="15">15</option><option value="16">16</option>
                                                                            <option value="17">17</option><option value="18">18</option>
                                                                            <option value="19">19</option><option value="20">20</option>
                                                                            <option value="21">21</option><option value="22">22</option>
                                                                            <option value="23">23</option><option value="24">24</option>
                                                                            <option value="25">25</option><option value="26">26</option>
                                                                            <option value="27">27</option><option value="28">28</option>
                                                                            <option value="29">29</option><option value="30">30</option>
                                                                            <option value="31">31</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label" for="form3Examplev3">Ws To Date Month</label>
                                                                        <select class="form-control form-control" v-model="employees.wsToDateMonth">
                                                                            <option value=null>--Select--</option>
                                                                            <option value="1">January</option><option value="2">February</option>
                                                                            <option value="3">March</option><option value="4">April</option>
                                                                            <option value="5">May</option><option value="6">June</option>
                                                                            <option value="7">July</option><option value="8">August</option>
                                                                            <option value="9">September</option><option value="10">October</option>
                                                                            <option value="11">November</option><option value="12">December</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label" for="form3Examplev3">ws to Date Year</label>
                                                                        <input type="text" id="form3Examplev4" v-model="employees.wsToDateYear" placeholder="Date Year" class="form-control form-control" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" class="btn btn-warning btn-lg float-right mt-5" v-on:click="saveEmployeeSalary()">SUBMIT</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SalaryInfoService from "@/services/SalaryInfoService";

export default {
  name: "employeesalary-add",
  data() {
    return {
      employees: {
        employeeIdNumber:this.$route.params.id,
        monthlySalary:null,
        monthlyMoneyCurrency:"",
        monthlyTaxes:null,
        monthlyDeductions:null,
        monthlyInsurances:null,
        msFromDateDay:null,
        msFromDateMonth:null,
        msFromDateYear:null,
        msToDateDay:null,
        msToDateMonth:null,
        msToDateYear:null,
        weeklySalary:null,
        weeklyMoneyCurrency:"",
        weeklyTaxes:null,
        weeklyDeductions:null,
        weeklyInsurances:null,
        wsFromDateDay:null,
        wsFromDateMonth:null,
        wsfromDateYear:null,
        wsToDateDay:null,
        wsToDateMonth:null,
        wsToDateYear:null,
        
        },
    };
  },
  methods: {        
    saveEmployeeSalary() {
      var data = {
        employeeIdNumber:this.$route.params.id,
        monthlySalary:this.employees.monthlySalary,
        monthlyMoneyCurrency:this.employees.monthlyMoneyCurrency,
        monthlyTaxes:this.employees.monthlyTaxes,
        monthlyDeductions:this.employees.monthlyDeductions,
        monthlyInsurances:this.employees.monthlyInsurances,
        msFromDateDay:this.employees.msFromDateDay,
        msFromDateMonth:this.employees.msFromDateMonth,
        msFromDateYear:this.employees.msFromDateYear,
        msToDateDay:this.employees.msToDateDay,
        msToDateMonth:this.employees.msToDateMonth,
        msToDateYear:this.employees.msToDateYear,
        weeklySalary:this.employees.weeklySalary,
        weeklyMoneyCurrency:this.employees.weeklyMoneyCurrency,
        weeklyTaxes:this.employees.weeklyTaxes,
        weeklyDeduction:this.employees.weeklyDeductions,
        weeklyInsurances:this.employees.weeklyInsurances,
        wsFromDateDay:this.employees.wsFromDateDay,
        wsFromDateMonth:this.employees.wsFromDateMonth,
        wsfromDateYear:this.employees.wsfromDateYear,
        wsToDateDay:this.employees.wsToDateDay,
        wsToDateMonth:this.employees.wsToDateMonth,
        wsToDateYear:this.employees.wsToDateYear,
        
      };
      SalaryInfoService.createSalary(data)
        .then(response => {
          console.log(response);
            alert("Employee salary data added successfully!!");
          this.$router.push("/employees/"+this.employees.employeeIdNumber); 
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>