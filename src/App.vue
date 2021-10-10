<template>
  <div id="app">
    <div class="wrapper">
      <div class="body-overlay"></div>
        <!-- Sidebar  -->
        <nav id="sidebar">
          <div class="sidebar-header">
            <h3><img src="/src/assets/img/logo.png" class="img-fluid"/><span>{{title}}</span></h3>
          </div>
          <ul class="list-unstyled components">
            <li  class="active">
              <a href="/employees" class="dashboard"><i class="material-icons">dashboard</i><span>Dashboard</span></a>
            </li>
          </ul>
        </nav>

        <!-- Top Bar  -->
        <div id="content">
          <div class="top-navbar">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="d-xl-block d-lg-block d-md-mone d-none">
                  <span class="material-icons">arrow_back_ios</span>
                </button>
                <a class="navbar-brand" href="#"> Dashboard </a>
                <button class="d-inline-block d-lg-none ml-auto more-button" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="material-icons">more_vert</span>
                </button>
                <div class="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none" id="navbarSupportedContent">
                  <ul class="nav navbar-nav ml-auto">   
                    <li>
                      <div class="icon icon-rose float-left">
                        <span class="material-icons" style="font-size: 48px;padding-right: 20px; ">date_range</span>
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
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Dashboard</a>
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
