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

import org.openapitools.client.models.MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param details 
 * @param type 
 */


data class MerchantsExternalOrdersOrderTokenShippingMethodsCodePatch200ResponseOrderShippingOptions (

    @Json(name = "details")
    var details: MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails? = null,

    @Json(name = "type")
    var type: kotlin.String? = null

)
