
# OrderTokenRequestOrderItemsInnerTotalAmount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | El precio total de los productos. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. |  [optional]
**currency** | [**inline**](#Currency) | Representa la moneda de uso del comercio en 3 caracteres bajo la ISO 3166-1 alpha-3 |  [optional]
**currencySymbol** | [**inline**](#CurrencySymbol) | Simbolo de la moneda de tu comercio |  [optional]
**originalAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | El precio original de los productos, esto representa el precio sin ningun descuento. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. |  [optional]
**totalDiscount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | El total de los descuentos aplicados sobre los items |  [optional]


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



