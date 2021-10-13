<!--
Working History Add From element

@author Abirami K P
@since 11.10.2021
-->
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
                    <h4 class="card-title">ADD EMPLOYEE WORKING HISTORY</h4>
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
                                                            <h3 class="fw-normal mb-5" style="color: #4835d4;">Company Information</h3>
                                                            <div class="mb-4 pb-2">
                                                                <div class="form-outline form-white">
                                                                    <label class="form-label">Employee ID</label>
                                                                    <input type="text" disabled="disabled == 1" required v-model="this.$route.params.id" class="form-control form-control" />
                                                                </div> 
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Employer Name</label>
                                                                <input type="text" required v-model="employees.employerName" placeholder="Employer Name" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Company Name</label>
                                                                <input type="text" required v-model="employees.companyName" placeholder="Company Name" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Employee Address</label>
                                                                <textarea required v-model="employees.employerAddress" class="form-control form-control" />
                                                            </div>                                            
                                                            <div class="row">
                                                                <div class="col-md-6 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label">Mobile</label>
                                                                        <input type="text" required v-model="employees.employerCellularPhone" placeholder="Mobile Number" class="form-control form-control" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label" for="form3Examplev3">Office Phone</label>
                                                                        <input type="text" required id="form3Examplev3" v-model="employees.employerOfficePhone" placeholder="Office Phone Number" class="form-control form-control" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="col-lg-6 bg-indigo text-white">
                                                        <div class="p-5">
                                                            <h3 class="fw-normal mb-5">Previous Work Details</h3>
                                                            <div class="mb-4 pb-2">
                                                                <div class="form-outline form-white">
                                                                    <label class="form-label">Qualification</label>
                                                                    <input type="text" required v-model="employees.previousQualification" placeholder="Qualification" class="form-control form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="mb-4 pb-2">
                                                                <div class="form-outline form-white">
                                                                    <label class="form-label" for="form3Examplea3">Previous Experience</label>
                                                                    <input type="text" required id="form3Examplea3" v-model="employees.previousExperience" placeholder="Experience" class="form-control form-control" />
                                                                </div>
                                                            </div>
                                        
                                                            <div class="row">
                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label">Start Day</label>
                                                                        <select class="form-control form-control" required v-model="employees.pstartDateDay">
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
                                                                        <label class="form-label" for="form3Examplev3">Start Month</label>
                                                                        <select class="form-control form-control" required v-model="employees.pstartDateMonth">
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
                                                                        <label class="form-label" for="form3Examplev3">Start Year</label>
                                                                        <input type="text" id="form3Examplev4" required v-model="employees.pstartDateYear" placeholder="Start Year" class="form-control form-control" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label">End Day</label>
                                                                        <select class="form-control form-control" v-model="employees.pendDateDay">
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
                                                                        <label class="form-label" for="form3Examplev3">End Month</label>
                                                                        <select class="form-control form-control" v-model="employees.pendDateMonth">
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
                                                                        <label class="form-label" for="form3Examplev3">End Year</label>
                                                                        <input type="text" id="form3Examplev4" v-model="employees.pendDateYear" placeholder="End Year" class="form-control form-control" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" class="btn btn-warning btn-lg float-right mt-5" v-on:click="saveEmployee()">SUBMIT</button>
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
import WorkHistoryServices from "@/services/WorkHistoryService";

export default {
  name: "workhistory-add",
  data() {
    return {
      employees: {
        employeeIdNumber:this.$route.params.id,
        employerName:"",
        companyName:"",
        employerAddress:"",
        employerCellularPhone:null,
        employerOfficePhone:null,
        previousQualification:"",
        previousExperience:"",
        pstartDateDay:null,
        pstartDateMonth:null,
        pstartDateYear:null,
        pendDateDay:null,
        pendDateMonth:null,
        pendDateYear:null,
        },
    };
  },
  methods: {        
    saveEmployee() {
      var data = {
        employeeIdNumber:this.$route.params.id,
        employerName:this.employees.employerName,
        companyName:this.employees.companyName,
        employerAddress:this.employees.employerAddress,
        employerCellularPhone:this.employees.employerCellularPhone,
        employerOfficePhone:this.employees.employerOfficePhone,
        previousQualification:this.employees.previousQualification,
        previousExperience:this.employees.previousExperience,
        pstartDateDay:this.employees.pstartDateDay,
        pstartDateMonth:this.employees.pstartDateMonth,
        pstartDateYear:this.employees.pstartDateYear,
        pendDateDay:this.employees.pendDateDay,
        pendDateMonth:this.employees.pendDateMonth,
        pendDateYear:this.employees.pendDateYear,
      };
      WorkHistoryServices.createWork(data)
        .then(response => {
          console.log(response);
            alert("Employee work data added successfully!!");
          this.$router.push("/employees/"+this.employees.employeeIdNumber); 
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>
