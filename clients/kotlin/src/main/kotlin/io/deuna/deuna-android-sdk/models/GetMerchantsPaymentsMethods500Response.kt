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

import io.deuna.deuna-android-sdk.models.OrderToken400ResponseError

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param `data` 
 * @param error 
 */


data class GetMerchantsPaymentsMethods500Response (

    @Json(name = "data")
    var `data`: kotlin.Any? = null,

    @Json(name = "error")
    var error: OrderToken400ResponseError? = null

)

