
# Purchase200ResponseOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billingAddress** | [**PurchaseRequestBillingAddress**](PurchaseRequestBillingAddress.md) |  |  [optional]
**cashChange** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Cambio solicitado por el cliente |  [optional]
**currency** | **kotlin.String** | Representa la moneda de uso del comercio en 3 caracteres bajo la ISO 3166-1 alpha-3 |  [optional]
**discounts** | [**kotlin.collections.MutableSet&lt;kotlin.Any&gt;**](kotlin.Any.md) | Son los descuentos aplicados en la orden |  [optional]
**displayItemsTotalAmount** | **kotlin.String** | Es el costo total de todos los items de la orden que se mostrara en el checkout |  [optional]
**displayShippingAmount** | **kotlin.String** | Es el costo total del envío de la orden que se mostrara en el checkout. |  [optional]
**displaySubTotal** | **kotlin.String** | Es el subtotal de la compra, que comprende la suma de items_total_amount y shipping_amount que se mostrara en el checkout. |  [optional]
**displayTaxAmount** | **kotlin.String** | Es el monto total de los **impuestos** aplicados en la orden que aparece en el checkout. |  [optional]
**displayTotalAmount** | **kotlin.String** | Es el total de la orden esto comprende la suma del total de *items_total_amount*, *shipping_amount* y *tax_amount* que se mostrara en el checkout. |  [optional]
**displayTotalDiscount** | **kotlin.String** | Monto de descuento total de la orden que se mostrara en el checkout |  [optional]
**giftCard** | [**kotlin.collections.MutableList&lt;kotlin.Any&gt;**](kotlin.Any.md) | tarjeta de regalo |  [optional]
**items** | [**kotlin.collections.MutableList&lt;Purchase200ResponseOrderItemsInner&gt;**](Purchase200ResponseOrderItemsInner.md) | Detalle de los productos que se encuentran en la orden |  [optional]
**itemsTotalAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Es el costo total de todos los items de la orden. |  [optional]
**metadata** | [**OrderToken200ResponseOrderMetadata**](OrderToken200ResponseOrderMetadata.md) |  |  [optional]
**orderId** | **kotlin.String** | Representa al identificador de la orden dentro del comercio |  [optional]
**payment** | [**Purchase200ResponseOrderPayment**](Purchase200ResponseOrderPayment.md) |  |  [optional]
**paymentLink** | **kotlin.String** | Es el link de pago generado al tokenizar la orden para efectuar el pago |  [optional]
**redirectUrl** | **kotlin.String** | Url donde se redireccionara al terminar la compra |  [optional]
**scheduledAt** | **kotlin.String** | Fecha de entrega |  [optional]
**shippingAddress** | [**OrderTokenRequestOrderShippingAddress**](OrderTokenRequestOrderShippingAddress.md) |  |  [optional]
**shippingAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Es el costo total del envío de la orden. |  [optional]
**shippingMethods** | [**kotlin.collections.MutableList&lt;kotlin.Any&gt;**](kotlin.Any.md) | Métodos de envío |  [optional]
**shippingOptions** | [**kotlin.Any**](.md) | Son los métodos de envío disponibles de la orden, actualmente tenemos delivery, pickup y dinein |  [optional]
**status** | [**inline**](#Status) | Estado de la orden  |  [optional]
**storeCode** | **kotlin.String** | Es el código de la tienda, por defecto el código de la tienda es all |  [optional]
**subTotal** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Es el subtotal de la compra, que comprende la suma de items_total_amount y shipping_amount. |  [optional]
**taxAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Es el monto total de los **impuestos** aplicados en la orden. |  [optional]
**timezone** | **kotlin.String** | Representa la zona horario de tu comercio |  [optional]
**totalAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Es el total de la orden esto comprende la suma del total de *items_total_amount*, *shipping_amount* y *tax_amount*. |  [optional]
**totalDiscount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Monto de descuento total de la orden |  [optional]
**userInstructions** | **kotlin.String** | Son las instrucciones especiales que da el cliente en su compra, este valor se sustituye por el comentario en caso que el cliente lo coloque dentro del *checkout* |  [optional]


<a id="Status"></a>
## Enum: status
Name | Value
---- | -----
status | pending, succeeded, cancelled, refund, processed, authorized



