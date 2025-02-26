<template>
    <div class="panel">
       <div class="container w-25 pt-4 pb-5 px-4 shadow rounded rounded-2">
                <div class="content-login">
                    <div class="form">
                        <div class="titles text-center mt-3 mb-4">
                            <h6 class="m-0 text-secondary">We keep everything</h6>
                            <h3 class="headTitle">Ready to SignUp</h3>
                        </div>
                        
                        <div class="form-group position-relative mb-0">
                            <div class="input-icon position-absolute end-0 me-4 mt-1 text-body-tertiary">
                                <i class="fas fa-user mb-1 ms-1"></i>
                            </div>
                            <input v-model="userName" type="text" placeholder="UserName" class="form-input form-control rounded-0 shadow-none mb-0">
                            <p id="errorName"></p>
                        </div>
                        
                        <div class="form-group position-relative mb-0">
                            <div class="input-icon position-absolute end-0 me-4 mt-1 text-body-tertiary">
                                <i class="fa-solid fa-envelope mb-1 ms-1"></i>
                            </div>
                            <input  v-model="userEmail" type="email" placeholder="Email" class="form-input form-control rounded-0 shadow-none">
                            <p id="errorEmail"></p>
                        </div>
                        
                        <div class="form-group position-relative pb-1">
                            <div class="input-icon position-absolute end-0 me-4 mt-1 text-body-tertiary">
                                <i class="fa-solid fa-lock"></i>
                            </div>
                            <input  v-model="userPassword" type="password" name="password" placeholder="Password" class="form-control rounded-0 shadow-none">
                            <p id="errorPassword"></p>
                        </div>
                        
                        <p class="massage"></p>
                        <p class="existing d-none">This account already exists! Please try another one.</p>
                        
                        <div id="btnSignUp" class="btn w-100 m-auto border-0">
                            <a type="button" class="btnStyle" href="#">SignUp</a>
                        </div>

                        <div @click="addUser" class="btn-signIN d-flex justify-content-center border-0">
                            Don't have account? 
                            <router-link class="link" type="button" href="./login.html">
                                sign in
                            </router-link>
                        </div>

                    </div>
                </div>
           
            

           
       </div>  
    </div>
</template>


<script setup>
 const userName =ref('');
 const arrayOfUser=ref([]);
 const addUser =()=>{
    if(userName.value.trim ==! ''){
        arrayOfUser.value.push({
            text:userName.value 
        })

        userName.value= '';
    }
 }
</script>

<style scoped>
.panel{
    justify-content: center;
    margin-top: 40px;
}
.btnStyle{
    background-color:#ff8364;
    text-decoration: none;
    color: white;
    padding: 7px 20px;
    border-radius: 5px;
    margin-bottom: 5px;
}

.headTitle{
  font-weight: bold;
  margin-top: 10px;
  color: #6e3e33;;
}
.link{
color: #6e3e33;
}
</style>