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

import org.openapitools.client.models.OrderTokenRequestOrderPaymentDataAmount
import org.openapitools.client.models.OrderTokenRequestOrderPaymentDataCustomer
import org.openapitools.client.models.OrderTokenRequestOrderPaymentDataFromCard
import org.openapitools.client.models.OrderTokenRequestOrderPaymentDataMerchant

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
    val amount: OrderTokenRequestOrderPaymentDataAmount? = null,

    /* Fecha de creación */
    @Json(name = "created_at")
    val createdAt: kotlin.String? = null,

    @Json(name = "customer")
    val customer: OrderTokenRequestOrderPaymentDataCustomer? = null,

    @Json(name = "from_card")
    val fromCard: OrderTokenRequestOrderPaymentDataFromCard? = null,

    @Json(name = "id")
    val id: kotlin.String? = null,

    @Json(name = "merchant")
    val merchant: OrderTokenRequestOrderPaymentDataMerchant? = null,

    @Json(name = "metadata")
    val metadata: kotlin.Any? = null,

    /* Método de pago */
    @Json(name = "method_type")
    val methodType: kotlin.String? = null,

    /* Procesador de pago */
    @Json(name = "processor")
    val processor: kotlin.String? = null,

    @Json(name = "reason")
    val reason: kotlin.String? = null,

    /* Estado del pago */
    @Json(name = "status")
    val status: OrderTokenRequestOrderPaymentData.Status? = null,

    @Json(name = "updated_at")
    val updatedAt: kotlin.String? = null

) {

    /**
     * Estado del pago
     *
     * Values: PROCESSED,PROCESSING,PENDING,DENIED,CANCELLED,VOID,REFUNDED
     */
    @JsonClass(generateAdapter = false)
    enum class Status(val value: kotlin.String) {
        @Json(name = "processed") PROCESSED("processed"),
        @Json(name = "processing") PROCESSING("processing"),
        @Json(name = "pending") PENDING("pending"),
        @Json(name = "denied") DENIED("denied"),
        @Json(name = "cancelled") CANCELLED("cancelled"),
        @Json(name = "void") VOID("void"),
        @Json(name = "refunded") REFUNDED("refunded");
    }
}

