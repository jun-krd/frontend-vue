<template>

  <div class="form-signin w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="Jihoon" v-model="state.form.username">
      <label for="floatingInput">UserName</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="state.form.password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingEmail" placeholder="abcd@naver.com" v-model="state.form.email">
      <label for="floatingPassword">Email</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" @click="save()">Sign up</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
  </div>

</template>

<script>

import {reactive} from "vue";
import axios from "axios";
import router from "@/script/router";

export default {
  setup() {
    const state = reactive({
      form : {
        username : "",
        password : "",
        email : ""
      }
    });

    const save = () => {
      axios.post("/api/auth/signup", state.form).then((res)=>{
        console.log("data : " + res.data);
        router.push({path:"/"});
        window.alert("회원가입 성공!");
      }).catch(()=>{
        window.alert("회원가입 실패!");
      })
    }

    return {state, save};
  },
}
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>