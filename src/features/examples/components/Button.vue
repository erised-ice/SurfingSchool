<template>
  <button
    :style="{
      'background-color': backgroundColor,
      'color': color
    }"
    class="button"
    :class="[{'button--small': isSmall}, `button--${mode}`]"
  ><!-- Если нужно использовать JS внутри атрибутов, то ставим перед аттрибутом двоеточие backgroundColor, color - свойства из пропсов    isSmall - это булеан значение, которое будет true или false. Этот пример показывает что у компонента задается класс 'button--small', если ПРОПС isSmall будет true. В противном случае этот класс не появится. Здесь используются шаблонные строка нового JS  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/template_strings -->
    <slot /> <!-- Slot это специальные vue элемент. На этом месте будет весь HTML который будет лежать внутри компонента в месте где он вызывается! В твоем случае все, что внутри <example-button></example-button> попадет сюда ВМЕСТО slot. Например:  <example-button> <p>Anything</p>  </example-button> сюда ВМЕСТО slot попадет <p>Anything</p> -->
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: { // props - это объект свойств, которые будут переданы компоненту снаружи в момент вызова https://ru.vuejs.org/v2/api/#props
    backgroundColor: {
      type: String,
      default: 'deepskyblue'
    },
    color: {
      type: String,
      default: 'white'
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>//scoped означает, что стили, написанные в этом тэге будут доступны только внутри этого компонента. lang="scss" - означает, что мы будем использовать в качестве синтаксиса SCSS
  .button {
    @extend %opacity; // это плейсхолдер SCSS - их нужно использовать

    padding: 25px 40px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    &--small {
      padding: 10px 15px;
    }

    &--italic {
      font-style: italic;
      border: 5px solid yellow;
    }

    &--big-font {
      font-size: 50px;
    }
  }
</style>
