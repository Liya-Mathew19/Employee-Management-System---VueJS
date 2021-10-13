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
                    <h4 class="card-title">ADD NEW EMPLOYEE TIME INFORMATION</h4>
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
                                                            <h3 class="fw-normal mb-5" style="color: #4835d4;">Time Information</h3>
                                                            
                                                            <div class="mb-4 pb-2">
                                                                <div class="form-outline form-white">
                                                                    <label class="form-label">New Employee Id Nmber</label>
                                                                    <input type="text" disabled="disabled == 1" required v-model="this.$route.params.id" class="form-control form-control" />
                                                                </div> 
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Worked Hours</label>
                                                                <input type="text" required v-model="employees.workred_Hours" placeholder="Worked Hours" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Office Hours</label>
                                                                <input type="text" required v-model="employees.off_Hours" placeholder="Office Hours" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Days Off</label>
                                                                <input type="text" required v-model="employees.days_Off" placeholder="Number of Days off" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Over Time</label>
                                                                <input type="text" required v-model="employees.over_Time" class="form-control form-control" placeholder="Over time" />
                                                            </div>     
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Extra Days</label>
                                                                <input type="text" required v-model="employees.extra_Days" placeholder="Extra Day Worked" class="form-control form-control" />
                                                            </div>
                                                        </div> 
                                                    </div>
                                                    <div class="col-lg-6 bg-indigo text-white">
                                                        <div class="p-5">
                                                            <div class="row">
                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label">Start Day</label>
                                                                        <select class="form-control form-control" required v-model="employees.w_From_Date_Day">
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
                                                                        <select class="form-control form-control" required v-model="employees.w_From_Date_Month">
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
                                                                        <input type="text" id="form3Examplev4" required v-model="employees.w_From_Date_Year" placeholder="Start Year" class="form-control form-control" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-md-4 mb-4 pb-2">
                                                                    <div class="form-outline">
                                                                        <label class="form-label">End Day</label>
                                                                        <select class="form-control form-control" v-model="employees.w_To_Date_Day">
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
                                                                        <select class="form-control form-control" v-model="employees.w_To_Date_Month">
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
                                                                        <input type="text" id="form3Examplev4" v-model="employees.w_To_Date_Year" placeholder="End Year" class="form-control form-control" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" class="btn btn-warning btn-lg float-right mt-5" v-on:click="updateTime()">SUBMIT</button>
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
import TimeInformationService from "@/services/TimeInfoService";

export default {
  name: "time-update",
  data() {
    return {
      employees: {
        employeeIdNumber:null,
        workred_Hours:"",
        off_Hours:"",
        days_Off:"",
        over_Time:null,
        extra_Days:null,
        w_From_Date_Day:null,
        w_From_Date_Month:null,
        w_From_Date_Year:null,
        w_To_Date_Day:null,
        w_To_Date_Month:null,
        w_To_Date_Year:null,
      },
    };
  },
  methods: {   
    getEmployeeById(id){
        TimeInformationService.getTimeByEmpId(id).then(response =>{
        this.employees.employeeIdNumber=response.data.employeeIdNumber     
        this.employees.workred_Hours=response.data.workred_Hours,
        this.employees.off_Hours=response.data.off_Hours,
        this.employees.days_Off=response.data.days_Off,
        this.employees.over_Time=response.data.over_Time,
        this.employees.extra_Days=response.data.extra_Days,
        this.employees.w_From_Date_Day=response.data.w_From_Date_Day,
        this.employees.w_From_Date_Month=response.data.w_From_Date_Month,
        this.employees.w_From_Date_Year=response.data.w_From_Date_Year,
        this.employees.w_To_Date_Day=response.data.w_To_Date_Day,
        this.employees.w_To_Date_Month=response.data.w_To_Date_Month,
        this.employees.w_To_Date_Year=response.data.w_To_Date_Year,
        console.log(response)
        });
    },     
    updateTime() {
      var data = {
        employeeIdNumber:this.employees.employeeIdNumber,
        workred_Hours:this.employees.workred_Hours,
        off_Hours:this.employees.off_Hours,
        days_Off:this.employees.days_Off,
        over_Time:this.employees.over_Time,
        extra_Days:this.employees.extra_Days,
        w_From_Date_Day:this.employees.w_From_Date_Day,
        w_From_Date_Month:this.employees.w_From_Date_Month,
        w_From_Date_Year:this.employees.w_From_Date_Year,
        w_To_Date_Day:this.employees.w_To_Date_Day,
        w_To_Date_Month:this.employees.w_To_Date_Day,
        w_To_Date_Year:this.employees.w_To_Date_Year,
        
      };
      TimeInformationService.updateTimeInfo(data)
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