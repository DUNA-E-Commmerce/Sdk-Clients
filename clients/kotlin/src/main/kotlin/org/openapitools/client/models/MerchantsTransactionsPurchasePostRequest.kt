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

import org.openapitools.client.models.MerchantsTransactionsPurchasePostRequestCreditCard
import org.openapitools.client.models.MerchantsTransactionsPurchasePostRequestSpecificFields

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param billingAddress 
 * @param callbackUrl 
 * @param creditCard 
 * @param deviceId 
 * @param email 
 * @param methodType 
 * @param shippingAddress 
 * @param specificFields 
 * @param storeCode 
 * @param token 
 */


data class MerchantsTransactionsPurchasePostRequest (

    @Json(name = "billing_address")
    var billingAddress: kotlin.Any? = null,

    @Json(name = "callback_url")
    var callbackUrl: kotlin.String? = null,

    @Json(name = "credit_card")
    var creditCard: MerchantsTransactionsPurchasePostRequestCreditCard? = null,

    @Json(name = "device_id")
    var deviceId: kotlin.String? = null,

    @Json(name = "email")
    var email: kotlin.String? = null,

    @Json(name = "method_type")
    var methodType: kotlin.String? = null,

    @Json(name = "shipping_address")
    var shippingAddress: kotlin.Any? = null,

    @Json(name = "specific_fields")
    var specificFields: MerchantsTransactionsPurchasePostRequestSpecificFields? = null,

    @Json(name = "store_code")
    var storeCode: kotlin.String? = null,

    @Json(name = "token")
    var token: kotlin.String? = null

)
