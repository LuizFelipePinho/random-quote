

const getRandomQuote =  () => {
  const citacoesMotivacionais = [
    {
      citation: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      author: "Robert Collier",
    },
    {
      citation: "Acredite que você pode e você já está no meio do caminho.",
      author: "Theodore Roosevelt",
    },
    {
      citation:
        "O único caminho para fazer um excelente trabalho é amar o que você faz.",
        author: "Steve Jobs",
    },
    {
      citation: "A persistência é o caminho do êxito.",
      author: "Charles Chaplin",
    },
    {
      citation:
        "O sucesso é a consequência do trabalho duro, aprendizado dos fracassos, lealdade e persistência.",
        author: "Colin Powell",
    },
    {
      citation:
        "O maior risco é não correr nenhum risco. Em um mundo em constante mudança, não fazer nada também é arriscado.",
        author: "Mark Zuckerberg",
    },
    {
      citation:
        "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso. Se você ama o que está fazendo, você será bem-sucedido.",
        author: "Albert Schweitzer",
    },
    {
      citation:
        "A oportunidade muitas vezes se apresenta disfarçada de trabalho árduo e é por isso que a maioria das pessoas não a reconhece.",
        author: "Ann Landers",
    },
    {
      citation: "Não importa o quão devagar você vá, desde que você não pare.",
      author: "Confúcio",
    },
    {
      citation:
        "O otimismo é a fé em ação. Nada se pode fazer sem esperança e confiança.",
        author: "Helen Keller",
    },
    {
      citation: "Você é capaz de mais do que imagina, mas é preciso acreditar nisso.",
      author: "Autor Desconhecido",
    },
    {
      citation: "A motivação é o que te faz começar. O hábito é o que te faz continuar.",
      author: "Jim Ryun",
    },
    {
      citation: "Não se preocupe com o fracasso, preocupe-se com as chances que você perde quando nem tenta.",
      author: "Jack Canfield",
    },
    {
      citation: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      author: "Robert Collier",
    },
    {
      citation: "Quanto maior a dificuldade, maior é a glória.",
      author: "Pierre Corneille",
    },
    {
      citation: "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho.",
      author: "C.S. Lewis",
    },
    {
      citation: "Toda realização começa com a decisão de tentar.",
      author: "John F. Kennedy",
    },
    {
      citation: "Seja a mudança que você deseja ver no mundo.",
      author: "Mahatma Gandhi",
    },
    {
      citation: "O sucesso é caminhar de fracasso em fracasso sem perder o entusiasmo.",
      author: "Winston Churchill",
    },
    {
      citation: "O mundo pertence aos otimistas.",
      author: "J. Robert Oppenheimer",
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

