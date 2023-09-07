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
 * @param createdAt 
 * @param id 
 * @param isSandbox 
 * @param name 
 * @param privateKey 
 * @param publicKey 
 * @param signingSecret 
 * @param status 
 * @param updatedAt 
 */


data class MerchantsMerchantIdApplicationsPost200Response (

    @Json(name = "created_at")
    var createdAt: kotlin.String? = null,

    @Json(name = "id")
    var id: kotlin.String? = null,

    @Json(name = "is_sandbox")
    var isSandbox: kotlin.Boolean? = null,

    @Json(name = "name")
    var name: kotlin.String? = null,

    @Json(name = "private_key")
    var privateKey: kotlin.String? = null,

    @Json(name = "public_key")
    var publicKey: kotlin.String? = null,

    @Json(name = "signing_secret")
    var signingSecret: kotlin.String? = null,

    @Json(name = "status")
    var status: kotlin.String? = null,

    @Json(name = "updated_at")
    var updatedAt: kotlin.String? = null

)

