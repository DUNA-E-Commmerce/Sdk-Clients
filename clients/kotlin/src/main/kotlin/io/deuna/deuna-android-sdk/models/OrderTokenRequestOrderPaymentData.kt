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

import io.deuna.deuna-android-sdk.models.OrderTokenRequestOrderPaymentDataAmount
import io.deuna.deuna-android-sdk.models.OrderTokenRequestOrderPaymentDataCustomer
import io.deuna.deuna-android-sdk.models.OrderTokenRequestOrderPaymentDataFromCard
import io.deuna.deuna-android-sdk.models.OrderTokenRequestOrderPaymentDataMerchant

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * Datos del pago
 *
 * @param amount 
 * @param createdAt Fecha de creación
 * @param customer 
 * @param fromCard 
 * @param id 
 * @param merchant 
 * @param metadata 
 * @param methodType Método de pago
 * @param processor Procesador de pago
 * @param reason 
 * @param status Estado del pago
 * @param updatedAt 
 */


data class OrderTokenRequestOrderPaymentData (

    @Json(name = "amount")
    var amount: OrderTokenRequestOrderPaymentDataAmount? = null,

    /* Fecha de creación */
    @Json(name = "created_at")
    var createdAt: kotlin.String? = null,

    @Json(name = "customer")
    var customer: OrderTokenRequestOrderPaymentDataCustomer? = null,

    @Json(name = "from_card")
    var fromCard: OrderTokenRequestOrderPaymentDataFromCard? = null,

    @Json(name = "id")
    var id: kotlin.String? = null,

    @Json(name = "merchant")
    var merchant: OrderTokenRequestOrderPaymentDataMerchant? = null,

    @Json(name = "metadata")
    var metadata: kotlin.Any? = null,

    /* Método de pago */
    @Json(name = "method_type")
    var methodType: kotlin.String? = null,

    /* Procesador de pago */
    @Json(name = "processor")
    var processor: kotlin.String? = null,

    @Json(name = "reason")
    var reason: kotlin.String? = null,

    /* Estado del pago */
    @Json(name = "status")
    var status: OrderTokenRequestOrderPaymentData.Status? = null,

    @Json(name = "updated_at")
    var updatedAt: kotlin.String? = null

) {

    /**
     * Estado del pago
     *
     * Values: processing,pending,denied,cancelled,void,refunded
     */
    @JsonClass(generateAdapter = false)
    enum class Status(val value: kotlin.String) {
        @Json(name = "processing") processing("processing"),
        @Json(name = "pending") pending("pending"),
        @Json(name = "denied") denied("denied"),
        @Json(name = "cancelled") cancelled("cancelled"),
        @Json(name = "void") void("void"),
        @Json(name = "refunded") refunded("refunded");
    }
}

