import { eMoneyMovement, eTimeRangeDefault, eTransactionPeriod, eTransactionType } from ".";

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

export const timeRangeOptions = [
    { label: 'Hôm nay', value: eTimeRangeDefault.TODAY },
    { label: '7 ngày trước', value: eTimeRangeDefault.LAST_WEEK },
    { label: '1 tháng trước', value: eTimeRangeDefault.LAST_MONTH },
    { label: '3 tháng trước', value: eTimeRangeDefault.LAST_3_MONTH },
]