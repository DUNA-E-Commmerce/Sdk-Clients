
# OrderTokenRequestOrderDiscountsInner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | El monto total del descuento de la orden. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. | 
**code** | **kotlin.String** | El código del descuento que se aplicara en la orden | 
**description** | **kotlin.String** | La descripción del descuento |  [optional]
**detailsUrl** | **kotlin.String** | URL del descuento |  [optional]
**discountCategory** | **kotlin.String** | Categoría del descuento |  [optional]
**freeShipping** | [**OrderTokenRequestOrderDiscountsInnerFreeShipping**](OrderTokenRequestOrderDiscountsInnerFreeShipping.md) |  |  [optional]
**reference** | **kotlin.String** | Referencia del descuento |  [optional]
**targetType** | [**inline**](#TargetType) | Componente donde se aplicó el descuento |  [optional]
**type** | [**inline**](#Type) | Tipo del descuento aplicado |  [optional]


<a id="TargetType"></a>
## Enum: target_type
Name | Value
---- | -----
targetType | shipping, item


<a id="Type"></a>
## Enum: type
Name | Value
---- | -----
type | free_shipping, order_value, product



