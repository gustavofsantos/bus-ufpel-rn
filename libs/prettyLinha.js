export default function prettyLinha(linha) {
  switch(linha) {
    case 'anglo-ru':
      return 'Anglo - RU';
    case 'anglo-med':
      return 'Anglo - Medicina';
    case 'anglo-esef':
      return 'Anglo - ESEF';
    case 'anglo-capao':
      return 'Anglo - Capão';
    case 'capao-anglo':
      return 'Capão - Anglo';
    default:
      return '';
  }
}