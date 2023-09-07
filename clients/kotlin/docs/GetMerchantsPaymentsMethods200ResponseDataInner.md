
# GetMerchantsPaymentsMethods200ResponseDataInner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternativePaymentMethodName** | **kotlin.String** | Nombre alternativo del método de pago |  [optional]
**enabled** | **kotlin.Boolean** | Si el método de pago se encuentra disponible dentro de la tienda |  [optional]
**excludeCvv** | **kotlin.Boolean** | Si no es necesario enviar el CVV |  [optional]
**excludedFranchises** | **kotlin.collections.MutableList&lt;kotlin.String&gt;** | Franquicias exclúidos |  [optional]
**inputSchema** | [**kotlin.collections.MutableList&lt;GetMerchantsPaymentsMethods200ResponseDataInnerInputSchemaInner&gt;**](GetMerchantsPaymentsMethods200ResponseDataInnerInputSchemaInner.md) | Lista de los campos necesarios para realizar un pago con ese método de pago. |  [optional]
**labels** | [**GetMerchantsPaymentsMethods200ResponseDataInnerLabels**](GetMerchantsPaymentsMethods200ResponseDataInnerLabels.md) |  |  [optional]
**methodType** | **kotlin.String** | Método de pago |  [optional]
**processorName** | **kotlin.String** | Nombre del procesador de pago |  [optional]
**specificFields** | [**GetMerchantsPaymentsMethods200ResponseDataInnerSpecificFields**](GetMerchantsPaymentsMethods200ResponseDataInnerSpecificFields.md) |  |  [optional]



