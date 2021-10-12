<!--
Employee Add form element

@author Liya Mathew
@since 10.10.2021
-->
<template>
<div class="main-content">
	<div class="row ">
        <div class="col-lg-12 col-md-12">
            <div class="card" style="min-height: 485px">
                <div class="card-header card-header-text">
                    <button class="btn btn-primary" style="float:right" v-on:click="$router.go(-1)">
                        <span class="material-icons">arrow_back</span> 
                        <span class="p-3">Back</span>
                    </button>
                    <h4 class="card-title">ADD NEW EMPLOYEE</h4>
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
                                                <label class="form-label">Employee Personal ID <span class="text-danger">*</span></label>
                                                <input type="text" v-model="employees.personalIdNumber" class="form-control form-control" placeholder="Personal ID" />
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">First name <span class="text-danger">*</span></label>
                                                    <input type="text"  v-model="employees.firstName" class="form-control form-control" placeholder="First Name"/>
                                                </div>
                                                </div>
                                                <div class="col-md-4 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Middle name</label>
                                                    <input type="text" v-model="employees.middleName" class="form-control form-control" placeholder="Middle Name" />
                                                </div>
                                                </div>
                                                <div class="col-md-4 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Last name <span class="text-danger">*</span></label>
                                                    <input type="text"  v-model="employees.lastName" class="form-control form-control" placeholder="Last Name" />
                                                </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Day of Birth <span class="text-danger">*</span></label>
                                                    <select class="form-control form-control"  v-model="employees.dayOfBirth">
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
                                                    <label class="form-label">Month of Birth <span class="text-danger">*</span></label>
                                                    <select  class="form-control form-control" v-model="employees.monthOfBirth">
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
                                                    <label class="form-label">Year of Birth <span class="text-danger">*</span></label>
                                                    <input type="text"  v-model="employees.yearOfBirth" class="form-control form-control" placeholder="Year of Birth" />
                                                </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Mobile <span class="text-danger">*</span></label>
                                                    <input type="text"  v-model="employees.cellularPhone" class="form-control form-control" placeholder="Cellular Phone"/>
                                                </div>
                                                </div>
                                                <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Home Phone</label>
                                                    <input type="text"  v-model="employees.homePhone" class="form-control form-control" placeholder="Home Phone" />
                                                </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Address</label>
                                                    <textarea  v-model="employees.address" class="form-control form-control" />
                                                </div>
                                                </div>
                                                <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">City</label>
                                                    <input type="text"  v-model="employees.city" placeholder="City" class="form-control form-control" />
                                                </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Postal Code</label>
                                                    <input type="text"  v-model="employees.postalCode" placeholder="Postal Code" class="form-control form-control" />
                                                </div>
                                                </div>
                                                <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Marital Status</label>
                                                     <select class="form-control form-control"  v-model="employees.maritalStatus">
                                                        <option value="">--Select--</option>
                                                        <option value="Married">Married</option>
                                                        <option value="Un-married">Un-married</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <label class="form-label">Gender <span class="text-danger">*</span></label><br>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input"  v-model="employees.gender" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male">
                                                <label class="form-check-label" for="inlineRadio1">Male</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" v-model="employees.gender" name="inlineRadioOptions" id="inlineRadio2" value="Female">
                                                <label class="form-check-label" for="inlineRadio2">Female</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" v-model="employees.gender" name="inlineRadioOptions" id="inlineRadio3" value="Others">
                                                <label class="form-check-label" for="inlineRadio3">Others</label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-lg-6 bg-indigo text-white">
                                    <div class="p-5">
                                    <h3 class="fw-normal mb-5">Current Work Details</h3>

                                    <div class="mb-4 pb-2">
                                        <div class="form-outline form-white">
                                            <label class="form-label">Qualification</label>
                                            <input type="text"   placeholder="Qualification" v-model="employees.qualification" class="form-control form-control" />
                                        </div>
                                    </div>

                                    <div class="mb-4 pb-2">
                                        <div class="form-outline form-white">
                                            <label class="form-label">Current Experience</label>
                                            <input type="text"  placeholder="Current Experience" v-model="employees.currentExperience" class="form-control form-control" />
                                        </div>
                                    </div>
                                    <div class="mb-4 pb-2">
                                        <div class="form-outline form-white">
                                            <label class="form-label">Employement Type</label>
                                                <select class="form-control form-control"  v-model="employees.typeOfEmployee">
                                                    <option value="">--Select--</option>
                                                    <option value="Permanant">Permanant</option>
                                                    <option value="Contract">Contract</option>
                                                </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                            <div class="col-md-4 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">Start Day <span class="text-danger">*</span></label>
                                                    <select class="form-control form-control"  v-model="employees.startDateDay">
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
                                                    <label class="form-label">Start Month <span class="text-danger">*</span></label>
                                                    <select class="form-control form-control"  v-model="employees.startDateMonth">
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
                                                    <label class="form-label">Start Year <span class="text-danger">*</span></label>
                                                    <input type="text"  v-model="employees.startDateYear" placeholder="Start Year" class="form-control form-control" />
                                                </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label">End Day</label>
                                                    <select class="form-control form-control" v-model="employees.endDateDay">
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
                                                    <select class="form-control form-control" v-model="employees.endDateMonth">
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
                                                    <input type="text" v-model="employees.endDateYear" placeholder="End Year" class="form-control form-control" />
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
import EmployeeService from "@/services/EmployeeService";

export default {
  name: "employees-add",
  data() {
    return {
      employees: {
        personalIdNumber:null,
        firstName:"",
        middleName:"",
        lastName:"",
        dayOfBirth:null,
        monthOfBirth:null,
        yearOfBirth:null,
        cellularPhone:null,
        homePhone:null,
        city:"",
        address:"",
        postalCode:"",
        qualification:"",
        currentExperience:"",
        startDateDay:null,
        startDateMonth:null,
        startDateYear:null,
        endDateDay:null,
        endDateMonth:null,
        endDateYear:null,
        typeOfEmployee:"",
        gender:"",
        maritalStatus:""
      },
    };
  },
  methods: {        
    saveEmployee() {
        if(!this.employees.personalIdNumber || !this.employees.firstName 
        || !this.employees.lastName || !this.employees.dayOfBirth || !this.employees.monthOfBirth
        || !this.employees.yearOfBirth || !this.employees.cellularPhone || !this.employees.gender
        || !this.employees.startDateDay || !this.employees.startDateMonth|| !this.employees.startDateYear)
        {
            alert("Please Fill the mandatory(*) fields !!");
        }
        else{
      var data = {
        personalIdNumber:this.employees.personalIdNumber,
        firstName:this.employees.firstName,
        middleName:this.employees.middleName,
        lastName:this.employees.lastName,
        dayOfBirth:this.employees.dayOfBirth,
        monthOfBirth:this.employees.monthOfBirth,
        yearOfBirth:this.employees.yearOfBirth,
        cellularPhone:this.employees.cellularPhone,
        homePhone:this.employees.homePhone,
        city:this.employees.city,
        address:this.employees.address,
        postalCode:this.employees.postalCode,
        qualification:this.employees.qualification,
        currentExperience:this.employees.currentExperience,
        startDateDay:this.employees.startDateDay,
        startDateMonth:this.employees.startDateMonth,
        startDateYear:this.employees.startDateYear,
        endDateDay:this.employees.endDateDay,
        endDateMonth:this.employees.endDateMonth,
        endDateYear:this.employees.endDateYear,
        typeOfEmployee:this.employees.typeOfEmployee,
        gender:this.employees.gender,
        maritalStatus:this.employees.maritalStatus
      };
      EmployeeService.createEmployee(data)
        .then(response => {
          console.log(response.data);
          alert("Employee added successfully!!");
          this.$router.push("/employees"); 
        })
        .catch(e => {
          console.log(e);
        });
    }
    },
  }
};
</script>
