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
 * @param expire 
 * @param token 
 */


data class Login200Response (

    @Json(name = "code")
    var code: kotlin.Int? = null,

    @Json(name = "expire")
    var expire: kotlin.String? = null,

    @Json(name = "token")
    var token: kotlin.String? = null

)

