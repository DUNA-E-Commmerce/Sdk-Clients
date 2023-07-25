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


import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param amount 
 * @param currency 
 * @param currencySymbol 
 * @param displayAmount 
 * @param displayOriginalAmount 
 * @param originalAmount 
 */


data class MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTotalAmount (

    @Json(name = "amount")
    var amount: java.math.BigDecimal,

    @Json(name = "currency")
    var currency: kotlin.String,

    @Json(name = "currency_symbol")
    var currencySymbol: kotlin.String,

    @Json(name = "display_amount")
    var displayAmount: kotlin.String? = null,

    @Json(name = "display_original_amount")
    var displayOriginalAmount: kotlin.String? = null,

    @Json(name = "original_amount")
    var originalAmount: java.math.BigDecimal? = null

)

