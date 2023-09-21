
# Purchase200ResponseOrderPaymentData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**OrderTokenRequestOrderPaymentDataAmount**](OrderTokenRequestOrderPaymentDataAmount.md) |  |  [optional]
**createdAt** | **kotlin.String** | Fecha de creación |  [optional]
**customer** | [**OrderTokenRequestOrderPaymentDataCustomer**](OrderTokenRequestOrderPaymentDataCustomer.md) |  |  [optional]
**fromCard** | [**OrderToken200ResponseOrderPaymentDataFromCard**](OrderToken200ResponseOrderPaymentDataFromCard.md) |  |  [optional]
**id** | **kotlin.String** |  |  [optional]
**merchant** | [**OrderTokenRequestOrderPaymentDataMerchant**](OrderTokenRequestOrderPaymentDataMerchant.md) |  |  [optional]
**metadata** | [**kotlin.Any**](.md) |  |  [optional]
**methodType** | **kotlin.String** | Método de pago |  [optional]
**processor** | **kotlin.String** | Procesador de pago |  [optional]
**reason** | **kotlin.String** |  |  [optional]
**status** | [**inline**](#Status) | Estado del pago |  [optional]
**updatedAt** | **kotlin.String** |  |  [optional]


<a id="Status"></a>
## Enum: status
Name | Value
---- | -----
status | processing, pending, denied, cancelled, void, refunded, processed



