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
 * @param cardBrand 
 * @param firstSix 
 * @param lastFour 
 */


data class MerchantsTransactionsPurchasePost200ResponseOrderPaymentDataFromCard (

    @Json(name = "card_brand")
    var cardBrand: kotlin.String,

    @Json(name = "first_six")
    var firstSix: kotlin.String,

    @Json(name = "last_four")
    var lastFour: kotlin.String

)

