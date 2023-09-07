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

package io.deuna.deuna-android-sdk.models


import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param bank 
 * @param bin 
 * @param branch 
 * @param cardType 
 * @param country 
 * @param countryIso 
 * @param currency 
 */


data class CardsBinBinGet200Response (

    @Json(name = "bank")
    var bank: kotlin.String? = null,

    @Json(name = "bin")
    var bin: kotlin.String? = null,

    @Json(name = "branch")
    var branch: kotlin.String? = null,

    @Json(name = "card_type")
    var cardType: kotlin.String? = null,

    @Json(name = "country")
    var country: kotlin.String? = null,

    @Json(name = "country_iso")
    var countryIso: kotlin.Boolean? = null,

    @Json(name = "currency")
    var currency: kotlin.String? = null

)

