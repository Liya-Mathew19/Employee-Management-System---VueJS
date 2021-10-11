<template>
  <div id="app">
    <div class="wrapper">
      <div class="body-overlay"></div>
        <!-- Sidebar  -->
        <nav id="sidebar">
          <div class="sidebar-header">
            <img src="./assets/img/logo1.png" class="img-fluid"/>
          </div>
          <ul class="list-unstyled components">
            <li class="bg-light mt-2">
              <a href="/employees" class="text-dark"><i class="material-icons">dashboard</i><span><b>Dashboard</b></span></a>
            </li>
          </ul>
        </nav>

        <!-- Top Bar  -->
        <div id="content">
          <div class="top-navbar">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <span class="material-icons pr-3">home</span>
                <a class="navbar-brand" href="#"> Dashboard </a>
                <div class="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none" id="navbarSupportedContent">
                  <ul class="nav navbar-nav ml-auto">   
                    <li>
                      <div class="icon icon-rose float-left">
                        <span class="material-icons" style="font-size: 48px;padding-right: 20px; ">alarm</span>
                      </div>
                      <b><p class="card-text" id="time"></p></b>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <router-view></router-view>
          <footer class="footer">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <nav class="d-flex">
                    <ul class="m-0 p-0">
                      <li>
                        <a href="#">Employee Management System</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="col-md-6">
                  <p class="copyright d-flex justify-content-end"> @copy 2021 Designed by Liya Mathew</p>
                </div>
              </div>
            </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  props: {
    title: {
      type: String,
      default: "Employee Management System"
    }
  }
};
</script>
