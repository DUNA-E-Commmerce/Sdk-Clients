
# OrderTokenRequestOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**inline**](#Currency) | Representa la moneda de uso del comercio en 3 caracteres bajo la ISO 3166-1 alpha-3 | 
**orderId** | **kotlin.String** | Representa al identificador de la orden dentro del comercio | 
**storeCode** | **kotlin.String** | El **store_code** corresponde al código de una tienda, es decir, el comercio podría tener múltiples tiendas (sucursales) para los cuales el **store_code** sirve como identificar de las mismas, en caso de ser un comercio sin tiendas *(sucursales)* el valor por defecto deberá ser ***all***. &lt;br&gt; **Nota:** Este valor es muy importante dado que las configuraciones del Admin serán aplicados según el código de las tiendas o **store_code** | 
**subTotal** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Es el monto del subtotal de la compra. Este monto es sin impuestos. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. | 
**totalAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Es el total de la orden esto comprende la suma del total de sub_total y total_tax_amount. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. | 
**totalTaxAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Es el total de los impuestos de la orden. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. | 
**billingAddress** | [**OrderTokenRequestOrderBillingAddress**](OrderTokenRequestOrderBillingAddress.md) |  |  [optional]
**cashChange** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Cambio solicitado por el cliente |  [optional]
**discounts** | [**kotlin.collections.Set&lt;OrderTokenRequestOrderDiscountsInner&gt;**](OrderTokenRequestOrderDiscountsInner.md) | Son los descuentos aplicados en la orden |  [optional]
**giftCard** | [**kotlin.collections.List&lt;OrderTokenRequestOrderGiftCardInner&gt;**](OrderTokenRequestOrderGiftCardInner.md) | Configuración de las tarjetas de regalo |  [optional]
**items** | [**kotlin.collections.Set&lt;OrderTokenRequestOrderItemsInner&gt;**](OrderTokenRequestOrderItemsInner.md) | Detalle de los productos que se encuentran en la orden |  [optional]
**metadata** | [**OrderTokenRequestOrderMetadata**](OrderTokenRequestOrderMetadata.md) |  |  [optional]
**payment** | [**OrderTokenRequestOrderPayment**](OrderTokenRequestOrderPayment.md) |  |  [optional]
**redirectUrl** | **kotlin.String** | URL de redirección cuando se completa la orden |  [optional]
**scheduledAt** | **kotlin.String** | Fecha de entrega |  [optional]
**shipping** | [**OrderTokenRequestOrderShipping**](OrderTokenRequestOrderShipping.md) |  |  [optional]
**shippingAddress** | [**OrderTokenRequestOrderShippingAddress**](OrderTokenRequestOrderShippingAddress.md) |  |  [optional]
**shippingMethod** | [**OrderTokenRequestOrderShippingMethod**](OrderTokenRequestOrderShippingMethod.md) |  |  [optional]
**shippingMethods** | [**kotlin.collections.List&lt;kotlin.Any&gt;**](kotlin.Any.md) | Métodos de envío |  [optional]
**shippingOptions** | [**OrderTokenRequestOrderShippingOptions**](OrderTokenRequestOrderShippingOptions.md) |  |  [optional]
**status** | [**inline**](#Status) | Estado de la orden  |  [optional]
**timezone** | [**inline**](#Timezone) | Representa la zona horario del comercio. |  [optional]
**totalDiscount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Es el total de los descuentos de la orden. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. |  [optional]
**userInstructions** | **kotlin.String** | Son las instrucciones especiales que da el cliente en su compra, este valor se sustituye por el comentario en caso que el cliente lo coloque dentro del *checkout* |  [optional]
**webhookUrls** | [**OrderTokenRequestOrderWebhookUrls**](OrderTokenRequestOrderWebhookUrls.md) |  |  [optional]


<a id="Currency"></a>
## Enum: currency
Name | Value
---- | -----
currency | USD, MXN, COP, CLP, BRL, ARS, PEN


<a id="Status"></a>
## Enum: status
Name | Value
---- | -----
status | pending, succeeded, cancelled, refund


<a id="Timezone"></a>
## Enum: timezone
Name | Value
---- | -----
timezone | America/Mexico_City



