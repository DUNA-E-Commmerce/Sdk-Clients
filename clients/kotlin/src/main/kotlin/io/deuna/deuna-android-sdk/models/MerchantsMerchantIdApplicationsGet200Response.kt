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

import io.deuna.deuna-android-sdk.models.MerchantsMerchantIdApplicationsGet200ResponseDataInner

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param `data` 
 */


data class MerchantsMerchantIdApplicationsGet200Response (

    @Json(name = "data")
    var `data`: kotlin.collections.MutableSet<MerchantsMerchantIdApplicationsGet200ResponseDataInner>? = null

)

