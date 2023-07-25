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

import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenCouponsPost200ResponseOrderMetadata
import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderDiscountsInner
import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInner
import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderShippingAddress

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param currency 
 * @param discounts 
 * @param items 
 * @param itemsTotalAmount 
 * @param metadata 
 * @param orderId 
 * @param shippingAddress 
 * @param shippingAmount 
 * @param storeCode 
 * @param subTotal 
 * @param taxAmount 
 * @param totalAmount 
 * @param userInstructions 
 */


data class MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrder (

    @Json(name = "currency")
    var currency: kotlin.String,

    @Json(name = "discounts")
    var discounts: kotlin.collections.MutableSet<MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderDiscountsInner>,

    @Json(name = "items")
    var items: kotlin.collections.MutableSet<MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInner>,

    @Json(name = "items_total_amount")
    var itemsTotalAmount: java.math.BigDecimal,

    @Json(name = "metadata")
    var metadata: MerchantsExternalOrdersOrderTokenCouponsPost200ResponseOrderMetadata,

    @Json(name = "order_id")
    var orderId: kotlin.String,

    @Json(name = "shipping_address")
    var shippingAddress: MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderShippingAddress,

    @Json(name = "shipping_amount")
    var shippingAmount: java.math.BigDecimal,

    @Json(name = "store_code")
    var storeCode: kotlin.String,

    @Json(name = "sub_total")
    var subTotal: java.math.BigDecimal,

    @Json(name = "tax_amount")
    var taxAmount: java.math.BigDecimal,

    @Json(name = "total_amount")
    var totalAmount: java.math.BigDecimal,

    @Json(name = "user_instructions")
    var userInstructions: kotlin.String

)

