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
 * @param pickupTime 
 * @param stockLocation 
 */


data class MerchantsExternalOrdersOrderTokenCouponsPost200ResponseOrderShippingOptionsDetailsAdditionalDetails (

    @Json(name = "pickup_time")
    var pickupTime: kotlin.String,

    @Json(name = "stock_location")
    var stockLocation: kotlin.String

)
