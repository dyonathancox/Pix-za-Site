document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth",
      });
    });
  });
});
// Exemplo de chamada API usando Axios para buscar planos
import axios from 'axios';

const getPlans = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/plans');
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao carregar planos:', error);
  }
};
