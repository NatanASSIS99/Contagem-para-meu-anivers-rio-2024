   // Definindo a data-alvo para a contagem regressiva (dia, mês, ano, hora, minuto, segundo)
   const targetDate = new Date('jun 28, 2024 00:00:00').getTime();

   // Atualiza o cronômetro a cada segundo
   const timerInterval = setInterval(() => {
       // Obtém a data e hora atual
       const now = new Date().getTime();
       
       // Calcula a diferença entre a data-alvo e a data atual
       const difference = targetDate - now;

       // Calcula dias, horas, minutos e segundos restantes
       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

       // Atualiza os elementos HTML com os valores calculados
       document.getElementById('dia').innerText = formatTime(days);
       document.getElementById('horas').innerText = formatTime(hours);
       document.getElementById('minutos').innerText = formatTime(minutes);
       document.getElementById('segundos').innerText = formatTime(seconds);

       // Verifica se a contagem regressiva chegou a zero
       if (difference < 0) {
           clearInterval(timerInterval); // Para o cronômetro
           document.getElementById('timer').innerText = 'Expirado'; // Exibe uma mensagem quando a contagem regressiva expirar
       }
   }, 1000); // Atualiza a cada segundo

   // Função para formatar o tempo (adiciona um zero à esquerda, se necessário)
   function formatTime(time) {
       return time < 10 ? `0${time}` : time;
   }