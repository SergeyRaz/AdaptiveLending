<template>
  <div class="settings-popup-form" v-show="flag">
    <div class="overley" @click.self="onClose">
      <div class="popup" :class="{ scale:  flag}">
        <div class="btn-close" @click="onClose">
          <i class="far fa-times-circle"></i>
        </div>
        <form action="">
          <label for="">
            <div class="form-title">Открывающий тег</div>
            <input class="" type="text" placeholder="Введите открывающий тег ...">
          </label>
          <label for="">
            <div class="form-title">Текстовая область</div>
            <textarea class="" placeholder="Введите текст ..." name="" id="" cols="20" rows="10"></textarea>
          </label>
          <label for="">
            <div class="form-title">Закрывающий тег</div>
            <input class="" type="text" placeholder="Введите закрывающий тег ...">
          </label>
          <submit class="form-submit-button">Apply</submit>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['flag'],
  data () {
    return {
      
    }
  },
  propertise: {
    
  },
  methods: {
    onClose(){
      this.$emit('onSettingsPopup');
    }
  }
}
</script>

<style lang="scss">
.settings-popup-form{
  position: relative;
  .overley{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(000, 000, 000, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .popup{
      cursor: default;
      position: relative;
      width: 600px;
      height: 360px;
      background-color: #fff;
      border-radius: 3px;
      border-bottom-right-radius: 0;
      padding: 20px 20px;
      &.scale{
        animation: FormPopupScale 0.3s ease-out;
      }
      .btn-close{
        position: absolute;
        top: -20px;
        right: -20px;
        cursor: pointer;
        i{
          color: #fff;
          font-size: 20px;
          animation: CloseIconScale 1s linear infinite;
          animation-delay: 10s;
          transition: 0.1s ease-out;
          &:hover{
            color: #FF8500;
          }
        }
      }
      form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        height: 100%;
        .form-title{
          padding: 3px 0px;
        }
        input,textarea{
          padding: 10px;
          display: block;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 3px;
          resize: none;
          font-size: 12px;
          &::-webkit-input-placeholder{
            color: #ccc;
            font-weight: 300;
            letter-spacing: 1px;
          }
        }
        .form-submit-button{
          padding: 5px 50px;
          position: absolute;
          bottom: -50px;
          right: -20px;
          background-color: #fff;
          border: none;
          border-radius: 3px;
          border-top-right-radius: 0;
          border-top-left-radius: 0;
          cursor: pointer;
          transition: 0.1s ease-out;
          &:hover{
            background-color: #FF8500;
            color: #fff;
            text-shadow: 0 0 2px #000;
          }
        }
      }
    }
  }
}
</style>