<template>
  <div class="container mt-5">
    <div class="row g-0">
      <div class="col-md-3">
        <MailSideBar />
      </div>
      <div class="col-md-7">
        <MailMainContent  />
      </div>
    </div>
  </div>
</template>
<script>
import MailMainContent from './components/MailMainContent.vue';
import MailSideBar from './components/MailSideBar.vue';
export default {
  name: "App",
  components: {
    MailMainContent,
    MailSideBar
  }
}
</script>