
# OrderTokenRequestOrderItemsInnerTaxAmount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Es el monto de los impuestos aplicados al producto. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. | 
**currency** | [**inline**](#Currency) | Representa la moneda de uso del comercio en 3 caracteres bajo la ISO 3166-1 alpha-3 | 
**currencySymbol** | [**inline**](#CurrencySymbol) | Simbolo de la moneda de tu comercio | 


<a id="Currency"></a>
## Enum: currency
Name | Value
---- | -----
currency | USD, MXN, COP, CLP, BRL, ARS, PEN


<a id="CurrencySymbol"></a>
## Enum: currency_symbol
Name | Value
---- | -----
currencySymbol | $, S/., R$



