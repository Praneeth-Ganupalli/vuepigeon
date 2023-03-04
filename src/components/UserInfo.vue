<template>
  <div class="p-2 text-white user-header-section">
    <img src="../assets/my-image.jpeg" class="user-image" />
    <section class="user-info">
      <div>John Doe</div>
      <div>johndoe45@gmail.com</div>
    </section>
  </div>
</template>
<style>
.user-header-section
{
    display: flex;
    align-items: center;
    gap:10px;
    background-color: teal;
}
img.user-image
{
    height: 65px;
    width: 65px;
    border-radius: 50%;

}
</style>