export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

export type ChangeCurrencyFieldType = {
    type: string,
    amountOfBYN: string,
    amountOfCurrency: string,
    isBuying: boolean,
    currentCurrency: string
};

export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        amountOfBYN, amountOfCurrency,
        isBuying: true,
        currentCurrency: 'USD'
    } as const
};

export type ChangeAction = {
    type: string,
    isBuying: boolean,
    amountOfBYN: string,
    amountOfCurrency: string,
    currentCurrency: string
};

export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return {type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        isBuying,
        amountOfBYN: '',
        amountOfCurrency: '',
        currentCurrency: 'USD'
    } as const
};

export type ChangeCurrentCurrencyType = {
    type: string,
    currentCurrency: string,
    amountOfBYN: string,
    amountOfCurrency: string,
    isBuying: boolean
};

export const СhangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return {type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        currentCurrency,
        amountOfBYN: '',
        amountOfCurrency: '',
        isBuying: true
    } as const
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;