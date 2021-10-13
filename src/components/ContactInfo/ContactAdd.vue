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
                    <h4 class="card-title">ADD NEW EMPLOYEE CONTACT PERSON INFORMATION</h4>
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
                                                            <h3 class="fw-normal mb-5" style="color: #4835d4;">Contact Person Information</h3>
                                                            
                                                            <div class="mb-4 pb-2">
                                                                <div class="form-outline form-white">
                                                                    <label class="form-label">Employee Id Number</label>
                                                                    <input type="text" disabled="disabled == 1" required v-model="this.$route.params.id" class="form-control form-control" />
                                                                </div> 
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">First Name</label>
                                                                <input type="text" required v-model="employees.cfirstName" placeholder="First Name" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Middle Name</label>
                                                                <input type="text" required v-model="employees.cmiddleName" placeholder="Middle Name" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Last Name</label>
                                                                <input type="text" required v-model="employees.clastName" placeholder="Last Name" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Mobile</label>
                                                                <input type="text" required v-model="employees.ccellularPhone" placeholder="Mobile Number" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Home Phone</label>
                                                                <input type="text" required v-model="employees.chomePhone" placeholder="Home Phone Number" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">City</label>
                                                                <input type="text" required v-model="employees.ccity" placeholder="City" class="form-control form-control" />
                                                            </div>
                                                            <div class="mb-4 pb-2">
                                                                <label class="form-label">Address</label>
                                                                <textarea required v-model="employees.caddress" class="form-control form-control" />
                                                            </div>  
                                                             <button type="button" class="btn btn-warning btn-lg float-right mt-2 mb-2" v-on:click="saveContact()">SUBMIT</button>                                          
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
import ContactService from "@/services/ContactService";

export default {
  name: "contact-add",
  data() {
    return {
      employees: {
        employeeIdNumber:this.$route.params.id,
        cfirstName:"",
        cmiddleName:"",
        clastName:"",
        ccellularPhone:"",
        chomePhone:"",
        ccity:"",
        caddress:""
        },
    };
  },
  methods: {        
    saveContact() {
      var data = {
        employeeIdNumber:this.$route.params.id,
        cfirstName:this.employees.cfirstName,
        cmiddleName:this.employees.cmiddleName,
        clastName:this.employees.clastName,
        ccellularPhone:this.employees.ccellularPhone,
        chomePhone:this.employees.chomePhone,
        ccity:this.employees.ccity,
        caddress:this.employees.caddress
      };
      ContactService.createContact(data)
        .then(response => {
          console.log(response);
            alert("Emplployee Contact person data added successfully!!");
          this.$router.push("/employees/"+this.employees.employeeIdNumber); 
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>