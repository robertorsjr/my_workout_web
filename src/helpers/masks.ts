function formatCpf(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

function formatCnpj(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export function formatCpfCnpj(value: string): string {
  const cleanValue = String(value).replace(/\D/g, '')

  if (cleanValue.length <= 11) {
    return formatCpf(value)
  }
  return formatCnpj(value)
}

export function formatPhone(phone: string): string {
  if (phone) {
    const value = phone.replace(/\D/g, '')
    const { length } = value

    if (length <= 8) {
      return value
        .replace(/(\d{4})(\d{1,4})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }
    if (length === 9) {
      return value
        .replace(/(\d{5})(\d{1,5})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }
    if (length === 10) {
      return value
        .replace(/(\d{0})(\d{1,2})/, '$1($2')
        .replace(/(\d{2})(\d)/, '$1) $2')
        .replace(/(\d{4})(\d{1,4})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }
    if (length === 11) {
      return value
        .replace(/(\d{0})(\d{1,2})/, '$1($2')
        .replace(/(\d{2})(\d)/, '$1) $2')
        .replace(/(\d{5})(\d{1,4})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }
    return value
      .replace(/(\d{0})(\d{1,2})/, '$1($2')
      .replace(/(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{5})(\d{1,4})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }
  return ''
}

export function formatCep(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

export function formatCreditCard(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .replace(/\.$/, '')
    .substring(0, 19)
}

export function formatExpiryDate(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{0})(\d{1,2})/, value.length >= 3 ? '$1$2/' : '$1$2')
    .replace(/(\/\d{2})\d+?$/, '$1')
}

export function formatNumber(value: string | number): string {
  return String(value).replace(/\D/g, '')
}

export function hideCardNumber(value: string): string {
  const regExp = /([0-9]{4})[\s]([0-9]{4})[\s]([0-9]{4})[\s]([0-9]{4})/g
  const format = '●●●● $4'
  return value.replace(regExp, format)
}

export const formatMoney = (value: number | string): string => {
  const formattedValue = typeof value === 'number' ? value.toFixed(2) : value
  return String(formattedValue)
    .replace(/\./g, '')
    .replace(/,/g, '.')
    .replace(/\D/g, '')
    .replace(/(\d)/, `${String(value).length === 0 ? '' : 'R$'} $1`)
    .replace(/(\d{20})\d$/, '$1')
    .replace(/(\d)(\d{17}$)/, '$1.$2')
    .replace(/(\d)(\d{14}$)/, '$1.$2')
    .replace(/(\d)(\d{11}$)/, '$1.$2')
    .replace(/(\d)(\d{8}$)/, '$1.$2')
    .replace(/(\d)(\d{5}$)/, '$1.$2')
    .replace(/(\d)(\d{2}?$)/, '$1,$2')
}

export const formatRg = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1')
}

export const formatKilogram = (value: string | number): string => {
  const formattedValue = typeof value === 'number' ? value.toFixed(2) : value
  return String(formattedValue)
    .replace(/\./g, '')
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2}?$)/, '$1.$2')
}

export const masks = {
  cpf: formatCpf,
  cnpj: formatCnpj,
  cpfCnpj: formatCpfCnpj,
  phone: formatPhone,
  cep: formatCep,
  price: formatMoney,
  creditCard: formatCreditCard,
  expiryDate: formatExpiryDate,
  number: formatNumber,
  hideCardNumber,
  rg: formatRg,
  kilogram: formatKilogram,
}
