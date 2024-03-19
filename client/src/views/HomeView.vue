<script>
export default {
  data() {
    return {
      showComponent: false,
      rightImage: `https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      leftImage: `https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
    }
  }
}
</script>
<template>
  <!--split page start -->
  <div
    id="split-container"
    class="flex bg-second w-full h-[95%] shadow-[0 0 10px rgba(0, 0, 0, 0.1)]"
  >
    <RouterLink to="/furniture" id="split-left">
      <div class="bg-center text-second">
        <h1 class="text-2xl font-extrabold text-second">Mebellərin Hazırlanması</h1>
        <br />
      </div>
    </RouterLink>

    <RouterLink id="split-right" to="/ironwork">
      <div class="text-primary bg-center">
        <h1 class="text-2xl font-extrabold text-second">Dəmir Konstruksitaların Hazırlanması</h1>
        <br />
      </div>
    </RouterLink>
  </div>
  <!--split page end -->
</template>
<style lang="less">
#split-left,
#split-right {
  flex: 1;
  overflow: hidden;
  text-align: center;
  transition: all 0.3s;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#split-right:hover,
#split-left:hover {
  transform: scale(0.8);
}
#splitBtn:hover {
  transform: scale(1.05);
}
#split-left {
  background-image: url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}
#split-right {
  background-image: url('https://images.unsplash.com/photo-1499815022134-5a333f5a299c?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}

p {
  line-height: 30px;
}
#split-left:hover {
  background-color: #313532;
}

#split-right:hover {
  background-color: #cbeaeb;
}

@media (max-width: 768px) {
  #split-container {
    flex-direction: column;
    height: 100vh;
  }

  #split-left,
  #split-right {
    width: 95%;
    height: 100vh;
  }
}
</style>
