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
 * @param code 
 * @param message 
 */


data class OrderToken401Response (

    @Json(name = "code")
    var code: kotlin.String? = null,

    @Json(name = "message")
    var message: kotlin.String? = null

)

