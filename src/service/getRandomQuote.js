

const getRandomQuote =  () => {
  const citacoesMotivacionais = [
    {
      citacao: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      autor: "Robert Collier",
    },
    {
      citacao: "Acredite que você pode e você já está no meio do caminho.",
      autor: "Theodore Roosevelt",
    },
    {
      citacao:
        "O único caminho para fazer um excelente trabalho é amar o que você faz.",
      autor: "Steve Jobs",
    },
    {
      citacao: "A persistência é o caminho do êxito.",
      autor: "Charles Chaplin",
    },
    {
      citacao:
        "O sucesso é a consequência do trabalho duro, aprendizado dos fracassos, lealdade e persistência.",
      autor: "Colin Powell",
    },
    {
      citacao:
        "O maior risco é não correr nenhum risco. Em um mundo em constante mudança, não fazer nada também é arriscado.",
      autor: "Mark Zuckerberg",
    },
    {
      citacao:
        "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o que está fazendo, você será bem-sucedido.",
      autor: "Albert Schweitzer",
    },
    {
      citacao:
        "A oportunidade muitas vezes se apresenta disfarçada de trabalho árduo e é por isso que a maioria das pessoas não a reconhece.",
      autor: "Ann Landers",
    },
    {
      citacao: "Não importa o quão devagar você vá, desde que você não pare.",
      autor: "Confúcio",
    },
    {
      citacao:
        "O otimismo é a fé em ação. Nada se pode fazer sem esperança e confiança.",
      autor: "Helen Keller",
    },
    {
      citacao: "Você é capaz de mais do que imagina, mas é preciso acreditar nisso.",
      autor: "Autor Desconhecido",
    },
    {
      citacao: "A motivação é o que te faz começar. O hábito é o que te faz continuar.",
      autor: "Jim Ryun",
    },
    {
      citacao: "Não se preocupe com o fracasso, preocupe-se com as chances que você perde quando nem tenta.",
      autor: "Jack Canfield",
    },
    {
      citacao: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      autor: "Robert Collier",
    },
    {
      citacao: "Quanto maior a dificuldade, maior é a glória.",
      autor: "Pierre Corneille",
    },
    {
      citacao: "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho.",
      autor: "C.S. Lewis",
    },
    {
      citacao: "Toda realização começa com a decisão de tentar.",
      autor: "John F. Kennedy",
    },
    {
      citacao: "Seja a mudança que você deseja ver no mundo.",
      autor: "Mahatma Gandhi",
    },
    {
      citacao: "O sucesso é caminhar de fracasso em fracasso sem perder o entusiasmo.",
      autor: "Winston Churchill",
    },
    {
      citacao: "O mundo pertence aos otimistas.",
      autor: "J. Robert Oppenheimer",
    },
  ];

  const quote = new Promise((resolve, reject) => {
    setTimeout(() => {
      const indiceAleatorio = Math.floor(Math.random() * citacoesMotivacionais.length);
      const citacaoAleatoria = citacoesMotivacionais[indiceAleatorio]; 
      resolve(citacaoAleatoria); 
    }, 1000);
  });

  return quote
};

export default getRandomQuote; 

