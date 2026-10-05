export function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

export function verificarSituacao(media) {
  if (media >= 6) {
    return 'Aprovado';
  } else {
    return 'Recuperação';
  }
}