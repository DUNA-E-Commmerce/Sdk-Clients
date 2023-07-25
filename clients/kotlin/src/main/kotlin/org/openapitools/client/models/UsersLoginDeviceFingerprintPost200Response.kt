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
 * @param refreshToken 
 * @param token 
 * @param userDeuna 
 */


data class UsersLoginDeviceFingerprintPost200Response (

    @Json(name = "refresh_token")
    var refreshToken: kotlin.String? = null,

    @Json(name = "token")
    var token: kotlin.String? = null,

    @Json(name = "user-deuna")
    var userDeuna: kotlin.Boolean? = null

)

