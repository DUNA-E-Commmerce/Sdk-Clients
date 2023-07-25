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

import org.openapitools.client.models.MerchantsTransactionsPurchasePostRequestBillingAddress
import org.openapitools.client.models.MerchantsTransactionsPurchasePostRequestBrowserDetails
import org.openapitools.client.models.MerchantsTransactionsPurchasePostRequestCreditCard
import org.openapitools.client.models.MerchantsTransactionsPurchasePostRequestShippingAddress
import org.openapitools.client.models.MerchantsTransactionsPurchasePostRequestSpecificFields

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param processorName 
 * @param token 
 * @param billingAddress 
 * @param browserDetails 
 * @param captchaToken 
 * @param creditCard 
 * @param deviceId 
 * @param email 
 * @param installments 
 * @param methodType 
 * @param shippingAddress 
 * @param specificFields 
 * @param storeCode 
 */


data class MerchantsTransactionsPurchasePostRequest (

    @Json(name = "processor_name")
    var processorName: kotlin.String,

    @Json(name = "token")
    var token: kotlin.String,

    @Json(name = "billing_address")
    var billingAddress: MerchantsTransactionsPurchasePostRequestBillingAddress? = null,

    @Json(name = "browser_details")
    var browserDetails: MerchantsTransactionsPurchasePostRequestBrowserDetails? = null,

    @Json(name = "captcha_token")
    var captchaToken: kotlin.String? = null,

    @Json(name = "credit_card")
    var creditCard: MerchantsTransactionsPurchasePostRequestCreditCard? = null,

    @Json(name = "device_id")
    var deviceId: kotlin.String? = null,

    @Json(name = "email")
    var email: kotlin.String? = null,

    @Json(name = "installments")
    var installments: kotlin.Int? = null,

    @Json(name = "method_type")
    var methodType: kotlin.String? = null,

    @Json(name = "shipping_address")
    var shippingAddress: MerchantsTransactionsPurchasePostRequestShippingAddress? = null,

    @Json(name = "specific_fields")
    var specificFields: MerchantsTransactionsPurchasePostRequestSpecificFields? = null,

    @Json(name = "store_code")
    var storeCode: kotlin.String? = null

)

