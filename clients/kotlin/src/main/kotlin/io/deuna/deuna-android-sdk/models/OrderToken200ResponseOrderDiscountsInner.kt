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

import io.deuna.deuna-android-sdk.models.OrderToken200ResponseOrderDiscountsInnerFreeShipping

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param amount El monto total del descuento de la orden.
 * @param code El código del descuento que se aplicara en la orden
 * @param description La descripción del descuento
 * @param detailsUrl URL del descuento
 * @param discountCategory Categoría del descuento
 * @param freeShipping 
 * @param reference Referencia del descuento
 */


data class OrderToken200ResponseOrderDiscountsInner (

    /* El monto total del descuento de la orden. */
    @Json(name = "amount")
    var amount: java.math.BigDecimal? = null,

    /* El código del descuento que se aplicara en la orden */
    @Json(name = "code")
    var code: kotlin.String? = null,

    /* La descripción del descuento */
    @Json(name = "description")
    var description: kotlin.String? = null,

    /* URL del descuento */
    @Json(name = "details_url")
    var detailsUrl: kotlin.String? = null,

    /* Categoría del descuento */
    @Json(name = "discount_category")
    var discountCategory: kotlin.String? = null,

    @Json(name = "free_shipping")
    var freeShipping: OrderToken200ResponseOrderDiscountsInnerFreeShipping? = null,

    /* Referencia del descuento */
    @Json(name = "reference")
    var reference: kotlin.String? = null

)

