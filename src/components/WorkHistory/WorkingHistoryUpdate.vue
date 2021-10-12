<!--
Working History Update From element

@author Abirami K P
@since 11.10.2021
-->
<template>
  <div class="main-content">
	<div class="row ">
        <div class="col-lg-12 col-md-12">
            <div class="card mb-5" style="min-height: 485px">
                <div class="card-header card-header-text">
                    <button class="btn btn-primary" style="float:right" v-on:click="$router.go(-1)">
                        <span class="material-icons">
                        arrow_back
                        </span> 
                        <span class="p-3">Back</span>
                    </button>
                    <h4 class="card-title">UPDATE WORKING HISTORY</h4>
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
                                            <h3 class="fw-normal mb-5" style="color: #4835d4;">Basic Information</h3>
                                            <div class="mb-4 pb-2">
                                                <label class="form-label">Employee ID Number</label>
                                                <input type="text" disabled="disabled == 1" v-model="employees.employeeIdNumber" id="form3Examplev2" class="form-control form-control" />
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Employer Name</label>
                                                    <input type="text" required v-model="employees.employerName" id="form3Examplev2" class="form-control form-control" />
                                                </div>
                                                </div>
                                                <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Company Name</label>
                                                    <input type="text" v-model="employees.companyName" class="form-control form-control" />
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Employer Address</label>
                                                    <textarea required v-model="employees.employerAddress" class="form-control form-control" />
                                                </div>
                                            </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Employer Cellular Phone</label>
                                                    <input type="text" required id="form3Examplev2" v-model="employees.employerCellularPhone" class="form-control form-control" />
                                                </div>
                                                </div>
                                                <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Employer Office Phone</label>
                                                    <input type="text" required v-model="employees.employerOfficePhone" class="form-control form-control" />
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 bg-secondary text-white">
                                    <div class="p-5">
                                    <h3 class="fw-normal mb-5">Previous Qualification</h3>

                                    <div class="mb-4 pb-2">
                                        <div class="form-outline form-white">
                                            <label class="form-label" for="form3Examplea2">Previous Qualification</label>
                                            <input type="text" required id="form3Examplea2" v-model="employees.previousQualification" class="form-control form-control" />
                                        </div>
                                    </div>

                                    <div class="mb-4 pb-2">
                                        <div class="form-outline form-white">
                                            <label class="form-label" for="form3Examplea3">Previous Experience</label>
                                            <input type="text" required id="form3Examplea3" v-model="employees.previousExperience" class="form-control form-control" />
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
                                                    <label class="form-label">Start Month</label>
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
                                                    <label class="form-label">Start Year</label>
                                                    <input type="text" id="form3Examplev4" required v-model="employees.pstartDateYear" class="form-control form-control" />
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
                                                    <label class="form-label">End Month</label>
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
                                                    <label class="form-label">End Year</label>
                                                    <input type="text" id="form3Examplev4" v-model="employees.pendDateYear" class="form-control form-control" />
                                                </div>
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-warning btn-lg float-right mt-5" v-on:click="updateEmployee()">UPDATE</button>
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
  name: "employees-add",
  data() {
    return {
      employees: {
        employeeIdNumber:null,
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
    getEmployeeById(id){
        WorkHistoryServices.getWorkHistoryByEmpId(id).then(response =>{
        this.employees.employeeIdNumber=response.data.employeeIdNumber     
        this.employees.employerName=response.data.employerName,
        this.employees.companyName=response.data.companyName,
        this.employees.employerAddress=response.data.employerAddress,
        this.employees.employerCellularPhone=response.data.employerCellularPhone,
        this.employees.employerOfficePhone=response.data.employerOfficePhone,
        this.employees.previousQualification=response.data.previousQualification,
        this.employees.previousExperience=response.data.previousExperience,
        this.employees.pStartDateDay=response.data.pStartDateDay,
        this.employees.pStartDateMonth=response.data.pStartDateMonth,
        this.employees.pStartDateYear=response.data.pStartDateYear,
        this.employees.pEndDateDay=response.data.pEndDateDay,
        this.employees.pEndDateMonth=response.data.pEndDateMonth,
        this.employees.pEndDateYear=response.data.pEndDateYear,
        console.log(response)
        });
    },     
    updateEmployee() {
      var data = {
        employeeIdNumber:this.employees.employeeIdNumber,
        employerName:this.employees.employerName,
        companyName:this.employees.companyName,
        employerAddress:this.employees.employerAddress,
        employerCellularPhone:this.employees.employerCellularPhone,
        employerOfficePhone:this.employees.employerOfficePhone,
        previousQualification:this.employees.previousQualification,
        previousExperience:this.employees.previousExperience,
        pStartDateDay:this.employees.pStartDateDay,
        pStartDateMonth:this.employees.pStartDateMonth,
        pStartDateYear:this.employees.pStartDateYear,
        pEndDateDay:this.employees.pEndDateDay,
        pEndDateMonth:this.employees.pEndDateMonth,
        pEndDateYear:this.employees.pEndDateYear,
        
      };
      WorkHistoryServices.updateWork(data)
        .then(response => {
          console.log(response.data);
          alert("Employee data updated successfully!!");
          this.$router.push("/employees/"+this.employees.employeeIdNumber); 
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
   mounted() {
    this.getEmployeeById(this.$route.params.id);
  }
};
</script>
