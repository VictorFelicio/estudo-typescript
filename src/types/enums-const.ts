const VendaStatus = {
  INICIADA: 'iniciada',
  CONCLUIDA: 'concluída',
  CANCELADA: 'cancelada',
} as const;

let statusCompra = VendaStatus.CONCLUIDA;

console.log(statusCompra);
