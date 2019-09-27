<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>scroll</title>
  <style rel="stylesheet" type="text/css">
.container {

}
.header {
  height: 100px;
  background: red;
  display: flex;
  overflow: hidden;
}
.body {
  height: 200px;
  background: blue;
  display: flex;
  overflow: scroll;
}
.header__item, .body__item {
  min-width: 400px;
}
.header__item:nth-of-type(2n) {
  background: lightblue;
}
.header__item:nth-of-type(2n+1) {
  background: purple;
}

.body__item:nth-of-type(2n) {
  background: orange;
}
.body__item:nth-of-type(2n+1) {
  background: lime;
}

  </style>
</head>
<body>
 <div class="container">
   <div class="header">
     <div class="header__item"></div>
     <div class="header__item"></div>
     <div class="header__item"></div>
     <div class="header__item"></div>
   </div>
   <div class="body">
     <div class="body__item"></div>
     <div class="body__item"></div>
     <div class="body__item"></div>
     <div class="body__item"></div>
   </div>
 </div>
 <script type="text/javascript">
   const header = document.querySelector('.header')
   header.addEventListener('click', function head() {console.log('click header')}, { capture: true, once: true, passive: true } )
   const headerItem = document.querySelector('.header__item')
   headerItem.addEventListener('click', () => console.log('click header item'))
 </script>
</body>
</html>
