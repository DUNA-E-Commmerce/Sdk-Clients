/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models

import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderDiscountsInner
import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderGiftCardInner
import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInner
import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata
import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingAddress
import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptions

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param currency 
 * @param discounts 
 * @param displayItemsTotalAmount 
 * @param displayShippingAmount 
 * @param displaySubTotal 
 * @param displayTaxAmount 
 * @param displayTotalAmount 
 * @param giftCard 
 * @param items 
 * @param itemsTotalAmount 
 * @param metadata 
 * @param orderId 
 * @param payment 
 * @param shippingAddress 
 * @param shippingAmount 
 * @param shippingOptions 
 * @param status 
 * @param storeCode 
 * @param subTotal 
 * @param taxAmount 
 * @param totalAmount 
 * @param userInstructions 
 */


data class MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrder (

    @Json(name = "currency")
    var currency: kotlin.String? = null,

    @Json(name = "discounts")
    var discounts: kotlin.collections.MutableSet<MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderDiscountsInner>? = null,

    @Json(name = "display_items_total_amount")
    var displayItemsTotalAmount: kotlin.String? = null,

    @Json(name = "display_shipping_amount")
    var displayShippingAmount: kotlin.String? = null,

    @Json(name = "display_sub_total")
    var displaySubTotal: kotlin.String? = null,

    @Json(name = "display_tax_amount")
    var displayTaxAmount: kotlin.String? = null,

    @Json(name = "display_total_amount")
    var displayTotalAmount: kotlin.String? = null,

    @Json(name = "gift_card")
    var giftCard: kotlin.collections.MutableSet<MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderGiftCardInner>? = null,

    @Json(name = "items")
    var items: kotlin.collections.MutableSet<MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInner>? = null,

    @Json(name = "items_total_amount")
    var itemsTotalAmount: java.math.BigDecimal? = null,

    @Json(name = "metadata")
    var metadata: MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata? = null,

    @Json(name = "order_id")
    var orderId: kotlin.String? = null,

    @Json(name = "payment")
    var payment: kotlin.Any? = null,

    @Json(name = "shipping_address")
    var shippingAddress: MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingAddress? = null,

    @Json(name = "shipping_amount")
    var shippingAmount: java.math.BigDecimal? = null,

    @Json(name = "shipping_options")
    var shippingOptions: MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptions? = null,

    @Json(name = "status")
    var status: kotlin.String? = null,

    @Json(name = "store_code")
    var storeCode: kotlin.String? = null,

    @Json(name = "sub_total")
    var subTotal: java.math.BigDecimal? = null,

    @Json(name = "tax_amount")
    var taxAmount: java.math.BigDecimal? = null,

    @Json(name = "total_amount")
    var totalAmount: java.math.BigDecimal? = null,

    @Json(name = "user_instructions")
    var userInstructions: kotlin.String? = null

)
