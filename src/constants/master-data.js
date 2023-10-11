import { eMoneyMovement, eTransactionPeriod, eTransactionType } from ".";

export const transactionTypeOptions = [
    { label: 'Thực tế', value: eTransactionType.ACTUAL },
    { label: 'Dự kiến', value: eTransactionType.ESTIMATE },
]

export const transactionPeriodOptions = [
    { label: 'Ngày', value: eTransactionPeriod.DAY },
    { label: 'Tháng', value: eTransactionPeriod.MONTH },
    { label: 'Năm', value: eTransactionPeriod.YEAR },
]

export const moneyMovementOptions = [
    { label: 'Thu', value: eMoneyMovement.IN },
    { label: 'Chi', value: eMoneyMovement.OUT },
]