// 添加一些交互效果
document.addEventListener('DOMContentLoaded', () => {
  // 例如：平滑滾動到目標部分
  document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
