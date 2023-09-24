function replaceSpacesPercentage(objeto) {
  if (objeto && objeto.citation && objeto.author) {
    const citationFormatada = objeto.citation.replace(/ /g, '%20');
    const authorFormatado = objeto.author.replace(/ /g, '%20');

    return `${citationFormatada}%20${authorFormatado}%20%23randomQuote`;
  } else {
    return '';
  }
}

export default replaceSpacesPercentage; 

